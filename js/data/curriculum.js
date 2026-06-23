/* Mbo'ehára curriculum — 12 grades (like Paraguayan school), mirroring the MEC Ñe'ẽ
   program progression. Each grade is a "World" with several lessons; each lesson holds a
   vocab list (gn = Guaraní, es = Spanish, en = English) and the game engine generates
   varied exercises from it. Educational draft — refinable by a native speaker. */
const CURRICULUM = [
  {
    id: "g1", num: 1, color: "#e63946", icon: "✏️",
    title: { es: "Achegety y saludos", en: "Alphabet & greetings" },
    lessons: [
      { title: { es: "Vocales (orales)", en: "Vowels (oral)" }, vocab: [
        { gn: "a", es: "a", en: "a" }, { gn: "e", es: "e", en: "e" },
        { gn: "i", es: "i", en: "i" }, { gn: "o", es: "o", en: "o" },
        { gn: "u", es: "u", en: "u" }, { gn: "y", es: "i gutural", en: "guttural i" } ] },
      { title: { es: "Saludos", en: "Greetings" }, vocab: [
        { gn: "Mba'éichapa", es: "¿Cómo estás?", en: "How are you?" },
        { gn: "Iporã", es: "Bien", en: "Good" },
        { gn: "Aguyje", es: "Gracias", en: "Thank you" },
        { gn: "Jajotopáta", es: "Hasta luego", en: "See you later" },
        { gn: "Mba'éichapa neko'ẽ", es: "Buenos días", en: "Good morning" },
        { gn: "Néi", es: "Bueno / está bien", en: "Okay" } ] },
      { title: { es: "La familia", en: "Family" }, vocab: [
        { gn: "Sy", es: "Mamá", en: "Mother" }, { gn: "Túva", es: "Papá", en: "Father" },
        { gn: "Memby", es: "Hijo/a (de la madre)", en: "Child (of mother)" },
        { gn: "Joyke'y", es: "Hermano", en: "Brother" },
        { gn: "Reindy", es: "Hermana", en: "Sister" },
        { gn: "Jarýi", es: "Abuela", en: "Grandmother" },
        { gn: "Taita guasu", es: "Abuelo", en: "Grandfather" } ] },
      { title: { es: "Palabras básicas", en: "Basic words" }, vocab: [
        { gn: "Heẽ", es: "Sí", en: "Yes" }, { gn: "Nahániri", es: "No", en: "No" },
        { gn: "Óga", es: "Casa", en: "House" }, { gn: "Y", es: "Agua", en: "Water" },
        { gn: "Kuarahy", es: "Sol", en: "Sun" }, { gn: "Jasy", es: "Luna", en: "Moon" } ] }
    ]
  },
  {
    id: "g2", num: 2, color: "#f4a261", icon: "🔢",
    title: { es: "Vocales nasales, números y colores", en: "Nasal vowels, numbers & colors" },
    lessons: [
      { title: { es: "Vocales nasales", en: "Nasal vowels" }, vocab: [
        { gn: "ã", es: "a nasal", en: "nasal a" }, { gn: "ẽ", es: "e nasal", en: "nasal e" },
        { gn: "ĩ", es: "i nasal", en: "nasal i" }, { gn: "õ", es: "o nasal", en: "nasal o" },
        { gn: "ũ", es: "u nasal", en: "nasal u" }, { gn: "ỹ", es: "y nasal", en: "nasal y" } ] },
      { title: { es: "Números 1–10", en: "Numbers 1–10" }, vocab: [
        { gn: "Peteĩ", es: "Uno", en: "One" }, { gn: "Mokõi", es: "Dos", en: "Two" },
        { gn: "Mbohapy", es: "Tres", en: "Three" }, { gn: "Irundy", es: "Cuatro", en: "Four" },
        { gn: "Po", es: "Cinco", en: "Five" }, { gn: "Poteĩ", es: "Seis", en: "Six" },
        { gn: "Pokõi", es: "Siete", en: "Seven" }, { gn: "Poapy", es: "Ocho", en: "Eight" },
        { gn: "Porundy", es: "Nueve", en: "Nine" }, { gn: "Pa", es: "Diez", en: "Ten" } ] },
      { title: { es: "Colores", en: "Colors" }, vocab: [
        { gn: "Pytã", es: "Rojo", en: "Red" }, { gn: "Hovy", es: "Azul", en: "Blue" },
        { gn: "Sa'yju", es: "Amarillo", en: "Yellow" }, { gn: "Hovyũ", es: "Verde", en: "Green" },
        { gn: "Morotĩ", es: "Blanco", en: "White" }, { gn: "Hũ", es: "Negro", en: "Black" } ] },
      { title: { es: "Animales", en: "Animals" }, vocab: [
        { gn: "Jagua", es: "Perro", en: "Dog" }, { gn: "Mbarakaja", es: "Gato", en: "Cat" },
        { gn: "Ryguasu", es: "Gallina", en: "Hen" }, { gn: "Vaka", es: "Vaca", en: "Cow" },
        { gn: "Kavaju", es: "Caballo", en: "Horse" }, { gn: "Guyra", es: "Pájaro", en: "Bird" },
        { gn: "Pira", es: "Pez", en: "Fish" } ] }
    ]
  },
  {
    id: "g3", num: 3, color: "#e9c46a", icon: "🧍",
    title: { es: "Cuerpo, tiempo y frases", en: "Body, time & phrases" },
    lessons: [
      { title: { es: "El cuerpo", en: "The body" }, vocab: [
        { gn: "Akã", es: "Cabeza", en: "Head" }, { gn: "Tesa", es: "Ojo", en: "Eye" },
        { gn: "Apysa", es: "Oreja", en: "Ear" }, { gn: "Juru", es: "Boca", en: "Mouth" },
        { gn: "Po", es: "Mano", en: "Hand" }, { gn: "Py", es: "Pie", en: "Foot" },
        { gn: "Tĩ", es: "Nariz", en: "Nose" } ] },
      { title: { es: "Números 11–100", en: "Numbers 11–100" }, vocab: [
        { gn: "Papeteĩ", es: "Once", en: "Eleven" }, { gn: "Pakõi", es: "Doce", en: "Twelve" },
        { gn: "Mokõipa", es: "Veinte", en: "Twenty" }, { gn: "Mbohapypa", es: "Treinta", en: "Thirty" },
        { gn: "Popa", es: "Cincuenta", en: "Fifty" }, { gn: "Sa", es: "Cien", en: "Hundred" } ] },
      { title: { es: "Días y meses", en: "Days & months" }, vocab: [
        { gn: "Arateĩ", es: "Domingo", en: "Sunday" }, { gn: "Arakõi", es: "Lunes", en: "Monday" },
        { gn: "Araapy", es: "Martes", en: "Tuesday" }, { gn: "Ára", es: "Día", en: "Day" },
        { gn: "Jasy", es: "Mes", en: "Month" }, { gn: "Áry", es: "Año", en: "Year" } ] },
      { title: { es: "Frases cotidianas", en: "Everyday phrases" }, vocab: [
        { gn: "Cherénera", es: "Mi nombre es", en: "My name is" },
        { gn: "Mávapa nde réra", es: "¿Cómo te llamás?", en: "What's your name?" },
        { gn: "Aha", es: "Me voy", en: "I go" }, { gn: "Aju", es: "Vengo", en: "I come" },
        { gn: "Eju ko'ápe", es: "Vení aquí", en: "Come here" },
        { gn: "Ndaikuaái", es: "No sé", en: "I don't know" } ] }
    ]
  },
  {
    id: "g4", num: 4, color: "#2a9d8f", icon: "🍲",
    title: { es: "Verbos, comida y casa", en: "Verbs, food & home" },
    lessons: [
      { title: { es: "Verbos areales", en: "Areal verbs" }, vocab: [
        { gn: "Akaru", es: "Como", en: "I eat" }, { gn: "Ake", es: "Duermo", en: "I sleep" },
        { gn: "Aguata", es: "Camino", en: "I walk" }, { gn: "Añe'ẽ", es: "Hablo", en: "I speak" },
        { gn: "Apurahéi", es: "Canto", en: "I sing" }, { gn: "Amba'apo", es: "Trabajo", en: "I work" } ] },
      { title: { es: "Comida", en: "Food" }, vocab: [
        { gn: "Tembi'u", es: "Comida", en: "Food" }, { gn: "Mandi'o", es: "Mandioca", en: "Cassava" },
        { gn: "Avati", es: "Maíz", en: "Corn" }, { gn: "So'o", es: "Carne", en: "Meat" },
        { gn: "Kesu", es: "Queso", en: "Cheese" }, { gn: "Kamby", es: "Leche", en: "Milk" },
        { gn: "Mboka", es: "Pan / chipa", en: "Bread" } ] },
      { title: { es: "La casa", en: "The home" }, vocab: [
        { gn: "Óga", es: "Casa", en: "House" }, { gn: "Okẽ", es: "Puerta", en: "Door" },
        { gn: "Ovetã", es: "Ventana", en: "Window" }, { gn: "Apyka", es: "Silla", en: "Chair" },
        { gn: "Mesa", es: "Mesa", en: "Table" }, { gn: "Tupa", es: "Cama", en: "Bed" } ] },
      { title: { es: "Objetos", en: "Objects" }, vocab: [
        { gn: "Kuatia", es: "Papel / libro", en: "Paper / book" },
        { gn: "Haihá", es: "Lápiz", en: "Pencil" }, { gn: "Ao", es: "Ropa", en: "Clothes" },
        { gn: "Sapatu", es: "Zapato", en: "Shoe" }, { gn: "Akãngao", es: "Sombrero", en: "Hat" } ] }
    ]
  },
  {
    id: "g5", num: 5, color: "#264653", icon: "🙋",
    title: { es: "Pronombres y preguntas", en: "Pronouns & questions" },
    lessons: [
      { title: { es: "Pronombres", en: "Pronouns" }, vocab: [
        { gn: "Che", es: "Yo", en: "I" }, { gn: "Nde", es: "Tú / vos", en: "You" },
        { gn: "Ha'e", es: "Él / ella", en: "He / she" }, { gn: "Ñande", es: "Nosotros (incl.)", en: "We (incl.)" },
        { gn: "Ore", es: "Nosotros (excl.)", en: "We (excl.)" }, { gn: "Peẽ", es: "Ustedes", en: "You (pl.)" },
        { gn: "Ha'ekuéra", es: "Ellos", en: "They" } ] },
      { title: { es: "Posesivos", en: "Possessives" }, vocab: [
        { gn: "Che róga", es: "Mi casa", en: "My house" }, { gn: "Nde róga", es: "Tu casa", en: "Your house" },
        { gn: "Hóga", es: "Su casa", en: "His/her house" }, { gn: "Che sy", es: "Mi mamá", en: "My mother" },
        { gn: "Nde sy", es: "Tu mamá", en: "Your mother" }, { gn: "Che mba'e", es: "Es mío", en: "It's mine" } ] },
      { title: { es: "Palabras de pregunta", en: "Question words" }, vocab: [
        { gn: "Mávapa", es: "¿Quién?", en: "Who?" }, { gn: "Mba'épa", es: "¿Qué?", en: "What?" },
        { gn: "Moõpa", es: "¿Dónde?", en: "Where?" }, { gn: "Araka'épa", es: "¿Cuándo?", en: "When?" },
        { gn: "Mba'érepa", es: "¿Por qué?", en: "Why?" }, { gn: "Mboýpa", es: "¿Cuántos?", en: "How many?" } ] },
      { title: { es: "Verbos chendales", en: "Chendal verbs" }, vocab: [
        { gn: "Cheróga", es: "Tengo casa", en: "I have a house" },
        { gn: "Chembyaju", es: "Estoy cansado", en: "I'm tired" },
        { gn: "Cherasy", es: "Estoy enfermo", en: "I'm sick" },
        { gn: "Chevy'a", es: "Estoy feliz", en: "I'm happy" },
        { gn: "Cheñembyahýi", es: "Tengo hambre", en: "I'm hungry" } ] }
    ]
  },
  {
    id: "g6", num: 6, color: "#457b9d", icon: "🌳",
    title: { es: "Adjetivos y naturaleza", en: "Adjectives & nature" },
    lessons: [
      { title: { es: "Adjetivos", en: "Adjectives" }, vocab: [
        { gn: "Guasu", es: "Grande", en: "Big" }, { gn: "Michĩ", es: "Pequeño", en: "Small" },
        { gn: "Porã", es: "Lindo / bueno", en: "Nice / good" }, { gn: "Vai", es: "Feo / malo", en: "Ugly / bad" },
        { gn: "Pyahu", es: "Nuevo", en: "New" }, { gn: "Tuja", es: "Viejo", en: "Old" } ] },
      { title: { es: "El tiempo (clima)", en: "Weather" }, vocab: [
        { gn: "Ama", es: "Lluvia", en: "Rain" }, { gn: "Yvytu", es: "Viento", en: "Wind" },
        { gn: "Roy", es: "Frío", en: "Cold" }, { gn: "Aku", es: "Calor", en: "Heat" },
        { gn: "Arai", es: "Nube", en: "Cloud" }, { gn: "Ára porã", es: "Buen tiempo", en: "Good weather" } ] },
      { title: { es: "Naturaleza", en: "Nature" }, vocab: [
        { gn: "Yvyra", es: "Árbol", en: "Tree" }, { gn: "Yvoty", es: "Flor", en: "Flower" },
        { gn: "Ka'aguy", es: "Bosque / monte", en: "Forest" }, { gn: "Ysyry", es: "Arroyo / río", en: "Stream" },
        { gn: "Yvy", es: "Tierra", en: "Earth / land" }, { gn: "Yvága", es: "Cielo", en: "Sky" } ] },
      { title: { es: "Armar oraciones", en: "Building sentences" }, vocab: [
        { gn: "Pe yvyra guasu", es: "El árbol grande", en: "The big tree" },
        { gn: "Yvoty porã", es: "Flor linda", en: "Pretty flower" },
        { gn: "Jagua michĩ", es: "Perro pequeño", en: "Small dog" },
        { gn: "Óga pyahu", es: "Casa nueva", en: "New house" },
        { gn: "Ára roy", es: "Día frío", en: "Cold day" } ] }
    ]
  },
  {
    id: "g7", num: 7, color: "#3a86ff", icon: "⏳",
    title: { es: "Tiempos verbales", en: "Verb tenses" },
    lessons: [
      { title: { es: "Pasado (-kuri)", en: "Past (-kuri)" }, vocab: [
        { gn: "Akaru kuri", es: "Comí", en: "I ate" }, { gn: "Aha kuri", es: "Fui", en: "I went" },
        { gn: "Añe'ẽ kuri", es: "Hablé", en: "I spoke" }, { gn: "Ake kuri", es: "Dormí", en: "I slept" },
        { gn: "Amba'apo kuri", es: "Trabajé", en: "I worked" } ] },
      { title: { es: "Futuro (-ta)", en: "Future (-ta)" }, vocab: [
        { gn: "Akaruta", es: "Comeré", en: "I will eat" }, { gn: "Ahata", es: "Iré", en: "I will go" },
        { gn: "Añe'ẽta", es: "Hablaré", en: "I will speak" }, { gn: "Aketa", es: "Dormiré", en: "I will sleep" },
        { gn: "Amba'apóta", es: "Trabajaré", en: "I will work" } ] },
      { title: { es: "Verbos nasales", en: "Nasal verbs" }, vocab: [
        { gn: "Añemongeta", es: "Converso", en: "I converse" },
        { gn: "Añembo'e", es: "Estudio / rezo", en: "I study / pray" },
        { gn: "Añeñandu", es: "Me siento", en: "I feel" },
        { gn: "Amaña", es: "Miro", en: "I look" }, { gn: "Añeha'ã", es: "Me esfuerzo", en: "I try hard" } ] },
      { title: { es: "Adverbios de tiempo", en: "Time adverbs" }, vocab: [
        { gn: "Ko'ẽro", es: "Mañana", en: "Tomorrow" }, { gn: "Kuehe", es: "Ayer", en: "Yesterday" },
        { gn: "Ko'ágã", es: "Ahora", en: "Now" }, { gn: "Ára ha ára", es: "Cada día", en: "Every day" },
        { gn: "Voi", es: "Temprano", en: "Early" } ] }
    ]
  },
  {
    id: "g8", num: 8, color: "#8338ec", icon: "🧭",
    title: { es: "Posposiciones y rutina", en: "Postpositions & routine" },
    lessons: [
      { title: { es: "Posposiciones", en: "Postpositions" }, vocab: [
        { gn: "-pe", es: "en / a", en: "in / to" }, { gn: "-gui", es: "desde / de", en: "from" },
        { gn: "-ndive", es: "con", en: "with" }, { gn: "-rehe", es: "sobre / por", en: "about / for" },
        { gn: "-peve", es: "hasta", en: "until" }, { gn: "ári", es: "encima de", en: "on top of" } ] },
      { title: { es: "Comparativos", en: "Comparatives" }, vocab: [
        { gn: "-ve", es: "más", en: "more" }, { gn: "Tuichave", es: "Más grande", en: "Bigger" },
        { gn: "Iporãve", es: "Mejor", en: "Better" }, { gn: "Ivaive", es: "Peor", en: "Worse" },
        { gn: "Hetave", es: "Más (cantidad)", en: "More (amount)" } ] },
      { title: { es: "Rutina diaria", en: "Daily routine" }, vocab: [
        { gn: "Apáy", es: "Me despierto", en: "I wake up" }, { gn: "Ajahu", es: "Me baño", en: "I bathe" },
        { gn: "Aha mbo'ehaópe", es: "Voy a la escuela", en: "I go to school" },
        { gn: "Añembo'e", es: "Estudio", en: "I study" }, { gn: "Aguapy", es: "Me siento", en: "I sit down" } ] },
      { title: { es: "Lugares", en: "Places" }, vocab: [
        { gn: "Mbo'ehao", es: "Escuela", en: "School" }, { gn: "Tava", es: "Pueblo / ciudad", en: "Town" },
        { gn: "Ñemuha", es: "Mercado / tienda", en: "Market / shop" },
        { gn: "Tupão", es: "Iglesia", en: "Church" }, { gn: "Tape", es: "Camino", en: "Road" } ] }
    ]
  },
  {
    id: "g9", num: 9, color: "#ff006e", icon: "📖",
    title: { es: "Oraciones y narración", en: "Sentences & narration" },
    lessons: [
      { title: { es: "Conjunciones", en: "Conjunctions" }, vocab: [
        { gn: "ha", es: "y", en: "and" }, { gn: "térã", es: "o", en: "or" },
        { gn: "ha katu", es: "pero", en: "but" }, { gn: "upéicharõ", es: "entonces", en: "then" },
        { gn: "mba'ére", es: "porque", en: "because" } ] },
      { title: { es: "Conectores de relato", en: "Story connectors" }, vocab: [
        { gn: "Peteĩ jey", es: "Una vez", en: "Once" }, { gn: "Upérõ", es: "En ese momento", en: "At that time" },
        { gn: "Ipahápe", es: "Al final", en: "In the end" }, { gn: "Riré", es: "Después de", en: "After" },
        { gn: "Mboyve", es: "Antes de", en: "Before" } ] },
      { title: { es: "Verbos de relato", en: "Narration verbs" }, vocab: [
        { gn: "Omombe'u", es: "Cuenta", en: "He/she tells" }, { gn: "Ohecha", es: "Ve", en: "He/she sees" },
        { gn: "Ohendu", es: "Escucha", en: "He/she hears" }, { gn: "Oĩ", es: "Hay / está", en: "There is" },
        { gn: "Oiko", es: "Sucede / vive", en: "Happens / lives" } ] },
      { title: { es: "Sentimientos", en: "Feelings" }, vocab: [
        { gn: "Vy'a", es: "Alegría", en: "Joy" }, { gn: "Py'aro", es: "Enojo", en: "Anger" },
        { gn: "Kyhyje", es: "Miedo", en: "Fear" }, { gn: "Mborayhu", es: "Amor", en: "Love" },
        { gn: "Py'apy", es: "Tristeza", en: "Sadness" } ] }
    ]
  },
  {
    id: "g10", num: 10, color: "#fb5607", icon: "🪶",
    title: { es: "Ñe'ẽpoty y ñe'ẽnga", en: "Poetry & proverbs" },
    lessons: [
      { title: { es: "Poesía (ñe'ẽpoty)", en: "Poetry (ñe'ẽpoty)" }, vocab: [
        { gn: "Ñe'ẽpoty", es: "Poesía", en: "Poetry" }, { gn: "Purahéi", es: "Canción", en: "Song" },
        { gn: "Ñe'ẽ", es: "Palabra / lengua", en: "Word / language" },
        { gn: "Mborayhu rape", es: "Camino del amor", en: "Path of love" },
        { gn: "Yvága resa", es: "Estrella (lit. ojo del cielo)", en: "Star (lit. eye of sky)" } ] },
      { title: { es: "Refranes (ñe'ẽnga)", en: "Proverbs (ñe'ẽnga)" }, vocab: [
        { gn: "Tetã", es: "Patria / país", en: "Homeland" },
        { gn: "Arandu", es: "Sabiduría", en: "Wisdom" }, { gn: "Py'aguasu", es: "Valentía", en: "Courage" },
        { gn: "Teko porã", es: "Buen vivir", en: "Good living" },
        { gn: "Joaju", es: "Unión", en: "Unity" } ] },
      { title: { es: "Cultura guaraní", en: "Guaraní culture" }, vocab: [
        { gn: "Tereré", es: "Tereré", en: "Tereré (cold mate)" }, { gn: "Ka'a", es: "Yerba mate", en: "Yerba mate" },
        { gn: "Mba'e mbarakaja", es: "Folclore", en: "Folklore" },
        { gn: "Pohã ñana", es: "Hierbas medicinales", en: "Medicinal herbs" },
        { gn: "Jeroky", es: "Danza", en: "Dance" } ] }
    ]
  },
  {
    id: "g11", num: 11, color: "#06d6a0", icon: "✍️",
    title: { es: "Escritura y variantes", en: "Writing & variants" },
    lessons: [
      { title: { es: "Guaraniete vs jopara", en: "Guaraniete vs jopara" }, vocab: [
        { gn: "Guaraniete", es: "Guaraní puro", en: "Pure Guaraní" },
        { gn: "Jopara", es: "Mezcla guaraní-español", en: "Guaraní-Spanish mix" },
        { gn: "Ñe'ẽtekuaa", es: "Gramática", en: "Grammar" },
        { gn: "Ñe'ẽndy", es: "Vocabulario", en: "Vocabulary" },
        { gn: "Haipy", es: "Escrito / texto", en: "Text" } ] },
      { title: { es: "Escritura formal", en: "Formal writing" }, vocab: [
        { gn: "Kuatiañe'ẽ", es: "Carta / documento", en: "Letter / document" },
        { gn: "Marandu", es: "Noticia / información", en: "News / information" },
        { gn: "Jehaipy", es: "Redacción", en: "Composition" },
        { gn: "Téra", es: "Sustantivo / nombre", en: "Noun" },
        { gn: "Ñe'ẽtéva", es: "Verbo", en: "Verb" } ] },
      { title: { es: "Variantes regionales", en: "Regional variants" }, vocab: [
        { gn: "Ñe'ẽ joja", es: "Lengua estándar", en: "Standard language" },
        { gn: "Tetãgua ñe'ẽ", es: "Habla local", en: "Local speech" },
        { gn: "Mbya", es: "Guaraní mbya", en: "Mbya Guaraní" },
        { gn: "Ava ñe'ẽ", es: "Lengua del pueblo", en: "People's language" } ] }
    ]
  },
  {
    id: "g12", num: 12, color: "#7209b7", icon: "🎓",
    title: { es: "Comprensión y cultura", en: "Comprehension & culture" },
    lessons: [
      { title: { es: "Vocabulario avanzado", en: "Advanced vocabulary" }, vocab: [
        { gn: "Tekoha", es: "Comunidad / hábitat", en: "Community / habitat" },
        { gn: "Tekove", es: "Vida / ser", en: "Life / being" },
        { gn: "Mba'apohára", es: "Trabajador", en: "Worker" },
        { gn: "Tembikuaa", es: "Conocimiento", en: "Knowledge" },
        { gn: "Tekombo'e", es: "Educación", en: "Education" } ] },
      { title: { es: "Sociedad", en: "Society" }, vocab: [
        { gn: "Tekojoja", es: "Justicia / igualdad", en: "Justice / equality" },
        { gn: "Sãso", es: "Libertad", en: "Freedom" }, { gn: "Mbojoaju", es: "Integración", en: "Integration" },
        { gn: "Tetãygua", es: "Ciudadano", en: "Citizen" },
        { gn: "Aty guasu", es: "Asamblea", en: "Assembly" } ] },
      { title: { es: "Identidad", en: "Identity" }, vocab: [
        { gn: "Ñane retã", es: "Nuestra patria", en: "Our homeland" },
        { gn: "Ñane ñe'ẽ", es: "Nuestra lengua", en: "Our language" },
        { gn: "Teko teete", es: "Identidad", en: "Identity" },
        { gn: "Jeroviapy", es: "Esperanza / fe", en: "Hope / faith" },
        { gn: "Tesãi", es: "Salud", en: "Health" } ] }
    ]
  }
];
