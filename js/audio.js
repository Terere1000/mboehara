/* Pronunciation support for the Expresiones Comunes section:
   - Pron: generates an approximate written phonetic guide from Guaraní spelling.
   - ExprAudio: plays audio for an expression — a user's own recording when one exists
     (stored in IndexedDB), otherwise browser speech synthesis (Spanish voice, approximate).
     Also records the user's voice via MediaRecorder. */

// ---------------- Written phonetic guide ----------------
const Pron = {
  V: "aeiouyáéíóúãẽĩõũỹÿ",
  ACUTE: "áéíóúÿ",
  isV(c) { return this.V.indexOf(c.toLowerCase()) >= 0; },

  // Split a word into (roughly CV) syllables. Guaraní is highly phonetic and mostly
  // open-syllable, so grouping each vowel with its preceding consonants works well.
  syllabify(word) {
    word = word.toLowerCase();
    const s = [];
    let onset = "";
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (this.isV(c)) { s.push(onset + c); onset = ""; }
      else { onset += c; }
    }
    if (onset) { if (s.length) s[s.length - 1] += onset; else s.push(onset); }
    return s.length ? s : [word];
  },

  respell(sy) { return sy.replace(/y/g, "ɨ"); }, // letter y = high central vowel

  guideWord(word) {
    if (!word) return "";
    const syl = this.syllabify(word);
    // Stress: the acute-accented syllable if present, else the last (Guaraní default).
    let stress = -1;
    for (let k = 0; k < syl.length && stress < 0; k++) {
      for (let j = 0; j < syl[k].length; j++) {
        if (this.ACUTE.indexOf(syl[k][j]) >= 0) { stress = k; break; }
      }
    }
    if (stress < 0) stress = syl.length - 1;
    return syl.map((sy, k) => { const r = this.respell(sy); return k === stress ? r.toUpperCase() : r; }).join("-");
  },

  guide(text) {
    return "[" + text.split(/\s+/).map(w => this.guideWord(w)).join(" ") + "]";
  }
};

// ---------------- Audio playback + recording ----------------
const ExprAudio = {
  ttsSupported: typeof window !== "undefined" && "speechSynthesis" in window,
  canRecord: typeof navigator !== "undefined" && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder),
  _voice: null,
  recording: null, // { mr, id } while recording

  // ----- TTS fallback -----
  _pickVoice() {
    if (!this.ttsSupported) return null;
    const voices = speechSynthesis.getVoices();
    this._voice = voices.find(v => /^es(-|_)/i.test(v.lang)) ||
                  voices.find(v => /^es/i.test(v.lang)) || voices[0] || null;
    return this._voice;
  },
  speakTTS(text) {
    if (!this.ttsSupported || !text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = this._voice || this._pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "es-ES"; }
    u.rate = 0.85;
    speechSynthesis.speak(u);
  },

  // ----- IndexedDB store for recordings (key = expression id) -----
  _dbp: null,
  _db() {
    if (this._dbp) return this._dbp;
    this._dbp = new Promise((res, rej) => {
      if (!("indexedDB" in window)) return rej(new Error("no-idb"));
      const r = indexedDB.open("mboehara-audio", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("rec");
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    return this._dbp;
  },
  async get(id) {
    try {
      const db = await this._db();
      return await new Promise(res => {
        const req = db.transaction("rec", "readonly").objectStore("rec").get(id);
        req.onsuccess = () => res(req.result || null);
        req.onerror = () => res(null);
      });
    } catch (e) { return null; }
  },
  async save(id, blob) {
    const db = await this._db();
    return new Promise((res, rej) => {
      const tx = db.transaction("rec", "readwrite");
      tx.objectStore("rec").put(blob, id);
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
  },
  async del(id) {
    try {
      const db = await this._db();
      return await new Promise(res => {
        const tx = db.transaction("rec", "readwrite");
        tx.objectStore("rec").delete(id);
        tx.oncomplete = () => res();
        tx.onerror = () => res();
      });
    } catch (e) { /* ignore */ }
  },
  async allIds() {
    try {
      const db = await this._db();
      return await new Promise(res => {
        const req = db.transaction("rec", "readonly").objectStore("rec").getAllKeys();
        req.onsuccess = () => res(req.result || []);
        req.onerror = () => res([]);
      });
    } catch (e) { return []; }
  },

  // ----- play: recording if present, else TTS -----
  async play(id, text) {
    const blob = await this.get(id);
    if (blob) {
      const url = URL.createObjectURL(blob);
      const a = new Audio(url);
      a.onended = () => URL.revokeObjectURL(url);
      try { await a.play(); return; } catch (e) { URL.revokeObjectURL(url); }
    }
    this.speakTTS(text);
  },

  // ----- record -----
  isRecording(id) { return !!this.recording && this.recording.id === id; },
  async startRecord(id, onSaved) {
    if (this.recording) this.stopRecord(); // stop any in-flight recording first
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream);
    const chunks = [];
    mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    mr.onstop = async () => {
      stream.getTracks().forEach(t => t.stop());
      const blob = new Blob(chunks, { type: mr.mimeType || "audio/webm" });
      try { await this.save(id, blob); } catch (e) { /* ignore */ }
      if (onSaved) onSaved();
    };
    mr.start();
    this.recording = { mr, id };
  },
  stopRecord() {
    if (!this.recording) return;
    try { this.recording.mr.stop(); } catch (e) { /* ignore */ }
    this.recording = null;
  },

  init() { if (this.ttsSupported) { this._pickVoice(); speechSynthesis.onvoiceschanged = () => this._pickVoice(); } }
};
