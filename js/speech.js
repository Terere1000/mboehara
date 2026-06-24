/* Approximate pronunciation via the browser's built-in SpeechSynthesis.
   IMPORTANT: browsers ship no Guaraní voice, so we fall back to a Spanish voice.
   That gets many words roughly right but mispronounces Guaraní-specific sounds
   (nasal vowels ã/ẽ/ĩ/õ/ũ/ỹ, the glottal stop '). Hence everything here is
   clearly labelled "approximate". A native-speaker recording is the real fix. */
const Speech = {
  supported: typeof window !== "undefined" && "speechSynthesis" in window,
  _voice: null,

  _pickVoice() {
    if (!this.supported) return null;
    const voices = speechSynthesis.getVoices();
    // Prefer a Spanish voice (closest phonetics to Guaraní), else default.
    this._voice = voices.find(v => /^es(-|_)/i.test(v.lang)) ||
                  voices.find(v => /^es/i.test(v.lang)) || voices[0] || null;
    return this._voice;
  },

  speak(text) {
    if (!this.supported || !text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = this._voice || this._pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "es-ES"; }
    u.rate = 0.85; // a touch slower aids learners
    speechSynthesis.speak(u);
  },

  // Returns HTML for a small speaker button that reads `gn` when clicked.
  // Wired globally via event delegation in init().
  btn(gn) {
    if (!this.supported || !gn) return "";
    const label = i18n.t("audio.approx");
    return `<button type="button" class="speak-btn" data-say="${gn.replace(/"/g, "&quot;")}"
              title="${label}" aria-label="${label}">🔊</button>`;
  },

  init() {
    if (!this.supported) return;
    // Voice list can load async.
    this._pickVoice();
    speechSynthesis.onvoiceschanged = () => this._pickVoice();
    // Delegate clicks on any speaker button.
    document.addEventListener("click", e => {
      const b = e.target.closest(".speak-btn");
      if (b) { e.stopPropagation(); this.speak(b.getAttribute("data-say")); }
    });
  }
};
