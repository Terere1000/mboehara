/* 200 common Guaraní expressions for the standalone "Expresiones Comunes" section.
   Plain global JS (no modules). Each entry is { guarani, spanish, english, category }.
   Educational draft — regenerate from guarani-expressions.ts when provided.

   Authored compactly as [guaraní, español, english] rows per category, then flattened
   to the required { guarani, spanish, english, category } shape. */
const _EXPRESSIONS_BY_CATEGORY = {
  "Saludos": [
    ["Mba'éichapa", "Hola / ¿Cómo estás?", "Hello / How are you?"],
    ["Mba'éichapa nde ko'ẽ", "Buenos días", "Good morning"],
    ["Mba'éichapa nde asaje", "Buenas tardes", "Good afternoon"],
    ["Mba'éichapa nde pyhare", "Buenas noches", "Good evening"],
    ["Iporãpa nde", "¿Estás bien?", "Are you well?"],
    ["Iporãiterei", "Muy bien", "Very well"],
    ["Ha nde", "¿Y vos?", "And you?"],
    ["Mba'éichapa reikóva", "¿Cómo te va?", "How's it going?"],
    ["Rovy'a rohechávo", "Me alegra verte", "Glad to see you"],
    ["Eguahẽporã", "Bienvenido", "Welcome"]
  ],
  "Despedidas": [
    ["Jajotopáta", "Nos vemos / Hasta luego", "See you later"],
    ["Jajohecháta", "Nos veremos", "We'll see each other"],
    ["Aháta", "Me voy", "I'm leaving"],
    ["Che aha", "Ya me voy", "I'm going now"],
    ["Ko'ẽrõ meve", "Hasta mañana", "Until tomorrow"],
    ["Tereho porã", "Que te vaya bien", "Take care"],
    ["Eho porãke", "Andá con cuidado", "Go safely"],
    ["Roñañuã", "Un abrazo", "A hug"],
    ["Aguyje ha jajotopáta", "Gracias y hasta luego", "Thanks and see you"],
    ["Pytu'u porãke", "Que descanses", "Rest well"]
  ],
  "Cortesía": [
    ["Aguyje", "Gracias", "Thank you"],
    ["Aguyje ndéve", "Gracias a vos", "Thanks to you"],
    ["Aguyjevete", "Muchas gracias", "Thank you very much"],
    ["Ani rembyasy", "No te preocupes / de nada", "Don't worry / you're welcome"],
    ["Eñyrõ chéve", "Perdoname", "Forgive me"],
    ["Ikatúpa", "¿Se puede?", "May I?"],
    ["Ndaipóri mba'e", "No hay de qué", "No problem"],
    ["Eiképy", "Pasá / adelante", "Come in"],
    ["Ikatúpa aike", "¿Puedo pasar?", "May I come in?"],
    ["Nde py'aporã", "Sos amable", "You're kind"]
  ],
  "Presentaciones": [
    ["Che réra niko", "Mi nombre es", "My name is"],
    ["Mba'éichapa nde réra", "¿Cómo te llamás?", "What's your name?"],
    ["Mávapa nde", "¿Quién sos?", "Who are you?"],
    ["Avy'a roikuaávo", "Un gusto conocerte", "Nice to meet you"],
    ["Moõguápa nde", "¿De dónde sos?", "Where are you from?"],
    ["Che paraguáyo", "Soy paraguayo", "I'm Paraguayan"],
    ["Mboýpa nde ary", "¿Cuántos años tenés?", "How old are you?"],
    ["Che areko ary", "Tengo años", "I am ... years old"],
    ["Kóva che irũ", "Este es mi amigo", "This is my friend"],
    ["Amomarandu ndéve che rogaygua", "Te presento a mi familia", "I introduce my family to you"]
  ],
  "Familia": [
    ["Che sy", "Mi mamá", "My mother"],
    ["Che ru", "Mi papá", "My father"],
    ["Che joyke'y", "Mi hermano", "My brother"],
    ["Che reindy", "Mi hermana", "My sister"],
    ["Che ñemoñare", "Mis hijos", "My children"],
    ["Che jarýi", "Mi abuela", "My grandmother"],
    ["Che taita", "Mi abuelo", "My grandfather"],
    ["Che rogagua", "Mi familia", "My family"],
    ["Roiko oñondive", "Vivimos juntos", "We live together"],
    ["Ahayhu che rogayguápe", "Amo a mi familia", "I love my family"]
  ],
  "Preguntas": [
    ["Mba'épa", "¿Qué?", "What?"],
    ["Mávapa", "¿Quién?", "Who?"],
    ["Moõpa", "¿Dónde?", "Where?"],
    ["Araka'épa", "¿Cuándo?", "When?"],
    ["Mba'érepa", "¿Por qué?", "Why?"],
    ["Mba'éichapa", "¿Cómo?", "How?"],
    ["Mboýpa", "¿Cuánto?", "How much/many?"],
    ["Moõpa reho", "¿A dónde vas?", "Where are you going?"],
    ["Mba'épa rejapo", "¿Qué hacés?", "What are you doing?"],
    ["Mba'épa he'ise", "¿Qué significa?", "What does it mean?"]
  ],
  "Sentimientos": [
    ["Che vy'a", "Estoy feliz", "I'm happy"],
    ["Avy'aiterei", "Estoy muy feliz", "I'm very happy"],
    ["Che ñembyasy", "Estoy triste", "I'm sad"],
    ["Che py'aro", "Estoy enojado", "I'm angry"],
    ["Akyhyje", "Tengo miedo", "I'm afraid"],
    ["Ahayhu", "Amo / quiero", "I love"],
    ["Che kane'õ", "Estoy cansado", "I'm tired"],
    ["Ndavy'ái", "No estoy feliz", "I'm not happy"],
    ["Che py'apy", "Estoy preocupado", "I'm worried"],
    ["Roguerohory", "Te aprecio", "I appreciate you"]
  ],
  "Comida y bebida": [
    ["Añembyahýi", "Tengo hambre", "I'm hungry"],
    ["Che yuhéi", "Tengo sed", "I'm thirsty"],
    ["Ha'úta", "Voy a comer", "I'm going to eat"],
    ["Aipota y", "Quiero agua", "I want water"],
    ["Iporã tembi'u", "La comida está rica", "The food is delicious"],
    ["Ay'u", "Bebo / tomo", "I drink"],
    ["Ere'úta tereré", "¿Vas a tomar tereré?", "Will you have tereré?"],
    ["Ndaipotái", "No quiero", "I don't want"],
    ["Aipota hetave", "Quiero más", "I want more"],
    ["Heẽ, aguyje", "Sí, gracias", "Yes, thank you"]
  ],
  "Tiempo y clima": [
    ["Okypa", "¿Llueve?", "Is it raining?"],
    ["Oky", "Llueve", "It's raining"],
    ["Haku", "Hace calor", "It's hot"],
    ["Ro'y", "Hace frío", "It's cold"],
    ["Kuarahy porã", "Día soleado", "Sunny day"],
    ["Yvytu oipeju", "Sopla el viento", "The wind blows"],
    ["Iñypytũ", "Está nublado", "It's cloudy"],
    ["Mba'éichapa ára ko'ágã", "¿Cómo está el clima?", "How's the weather?"],
    ["Ára porã", "Buen tiempo", "Good weather"],
    ["Ama guasu", "Tormenta", "Storm"]
  ],
  "Compras": [
    ["Mboýpa ovale", "¿Cuánto cuesta?", "How much is it?"],
    ["Hepýeterei", "Es muy caro", "It's very expensive"],
    ["Hepy'i", "Es barato", "It's cheap"],
    ["Aipota kóva", "Quiero esto", "I want this"],
    ["Aha amba'ejogua", "Voy de compras", "I'm going shopping"],
    ["Ereme'ẽmi chéve", "Dame, por favor", "Give me, please"],
    ["Mokõi kilo", "Dos kilos", "Two kilos"],
    ["Ndarekói viru", "No tengo dinero", "I have no money"],
    ["Ikatúpa amba'ejogua", "¿Puedo comprar?", "May I buy?"],
    ["Aguyje, upéichante", "Gracias, así está bien", "Thanks, that's fine"]
  ],
  "Salud": [
    ["Cherasy", "Estoy enfermo", "I'm sick"],
    ["Che akãrasy", "Me duele la cabeza", "I have a headache"],
    ["Che ryerasy", "Me duele la panza", "I have a stomachache"],
    ["Aipota pohã", "Necesito remedio", "I need medicine"],
    ["Ahasa pohãnohárape", "Voy al médico", "I'm going to the doctor"],
    ["Tesãi", "Salud", "Health"],
    ["Eñeñangareko", "Cuidate", "Take care of yourself"],
    ["Iporãma che", "Ya estoy bien", "I'm better now"],
    ["Che ropehýi", "Tengo sueño", "I'm sleepy"],
    ["Aikotevẽ pytu'u", "Necesito descansar", "I need to rest"]
  ],
  "Escuela": [
    ["Ambo'e", "Enseño", "I teach"],
    ["Añembo'e", "Estudio", "I study"],
    ["Mbo'ehára", "Maestro", "Teacher"],
    ["Temimbo'e", "Alumno", "Student"],
    ["Aha mbo'ehaópe", "Voy a la escuela", "I go to school"],
    ["Ahai", "Escribo", "I write"],
    ["Amoñe'ẽ", "Leo", "I read"],
    ["Aikuaase", "Quiero aprender", "I want to learn"],
    ["Kuatiahaipyre", "Cuaderno / libro", "Notebook / book"],
    ["Ambohovái", "Respondo", "I answer"]
  ],
  "Trabajo": [
    ["Amba'apo", "Trabajo", "I work"],
    ["Mba'apohára", "Trabajador", "Worker"],
    ["Mba'épa nde rembiapo", "¿Cuál es tu trabajo?", "What's your job?"],
    ["Amba'apo ñúme", "Trabajo en el campo", "I work in the field"],
    ["Añotỹ", "Siembro / cultivo", "I plant / farm"],
    ["Che kane'õ mba'apógui", "Estoy cansado del trabajo", "I'm tired from work"],
    ["Amba'apo ko'ẽ guive ka'aru peve", "Trabajo de la mañana a la tarde", "I work from morning to afternoon"],
    ["Aporeka tembiapóre", "Busco trabajo", "I'm looking for work"],
    ["Che rembiapo iporã", "Mi trabajo es bueno", "My job is good"],
    ["Jaha jamba'apo", "Vamos a trabajar", "Let's go to work"]
  ],
  "Naturaleza": [
    ["Yvyra", "Árbol", "Tree"],
    ["Yvoty", "Flor", "Flower"],
    ["Ka'aguy", "Bosque", "Forest"],
    ["Ysyry", "Arroyo", "Stream"],
    ["Yvytu", "Viento", "Wind"],
    ["Kuarahy", "Sol", "Sun"],
    ["Jasy", "Luna", "Moon"],
    ["Mbyja", "Estrella", "Star"],
    ["Ýva", "Fruta", "Fruit"],
    ["Ñu", "Campo", "Field"]
  ],
  "Direcciones": [
    ["Akatúa gotyo", "A la derecha", "To the right"],
    ["Asu gotyo", "A la izquierda", "To the left"],
    ["Tenonde", "Adelante", "Ahead"],
    ["Tapykue", "Atrás", "Behind"],
    ["Ko'ápe", "Aquí", "Here"],
    ["Upépe", "Allí", "There"],
    ["Moõpa oĩ", "¿Dónde está?", "Where is it?"],
    ["Mombyry", "Lejos", "Far"],
    ["Aguĩ", "Cerca", "Near"],
    ["Ehasa tenonde", "Seguí derecho", "Go straight"]
  ],
  "Viajes": [
    ["Aháta aguata", "Voy a viajar", "I'm going to travel"],
    ["Moõpa reho", "¿A dónde vas?", "Where are you going?"],
    ["Aha távape", "Voy a la ciudad", "I'm going to the city"],
    ["Mbohapy ára aiméta", "Estaré tres días", "I'll stay three days"],
    ["Aipota apyta", "Quiero quedarme", "I want to stay"],
    ["Moõpa opyta", "¿Dónde queda?", "Where is it located?"],
    ["Che rape puku", "Mi viaje es largo", "My trip is long"],
    ["Aju ko'águi", "Vengo de acá", "I come from here"],
    ["Jaha oñondive", "Vamos juntos", "Let's go together"],
    ["Tereho porã nde rapére", "Buen viaje", "Have a good trip"]
  ],
  "Casa": [
    ["Che róga", "Mi casa", "My house"],
    ["Okẽ", "Puerta", "Door"],
    ["Ovetã", "Ventana", "Window"],
    ["Tupa", "Cama", "Bed"],
    ["Tembiporu", "Mueble / utensilio", "Furniture / utensil"],
    ["Aike che rógape", "Entro a mi casa", "I enter my house"],
    ["Amopotĩ che róga", "Limpio mi casa", "I clean my house"],
    ["Aju che rógagui", "Vengo de mi casa", "I come from my house"],
    ["Eguahẽ che rógape", "Vení a mi casa", "Come to my house"],
    ["Che róga michĩ", "Mi casa es pequeña", "My house is small"]
  ],
  "Vida cotidiana": [
    ["Apáy", "Me despierto", "I wake up"],
    ["Ajahu", "Me baño", "I bathe"],
    ["Akaru", "Como", "I eat"],
    ["Ake", "Duermo", "I sleep"],
    ["Aguata", "Camino", "I walk"],
    ["Aha amba'apo", "Voy a trabajar", "I go to work"],
    ["Añembo'e", "Estudio", "I study"],
    ["Apytu'u", "Descanso", "I rest"],
    ["Ajapo che rembiapo", "Hago mis tareas", "I do my chores"],
    ["Ára ha ára", "Todos los días", "Every day"]
  ],
  "Amor y amistad": [
    ["Rohayhu", "Te amo", "I love you"],
    ["Che irũ", "Mi amigo/a", "My friend"],
    ["Nde porã", "Sos lindo/a", "You're beautiful"],
    ["Rohayhu che py'aite guive", "Te amo con todo mi corazón", "I love you with all my heart"],
    ["Nde che py'a", "Sos mi corazón", "You're my heart"],
    ["Ñande mborayhu tuicha", "Nuestro amor es grande", "Our love is great"],
    ["Aipota aiko ne ndive", "Quiero estar contigo", "I want to be with you"],
    ["Nde che rembiayhu", "Sos mi amor", "You're my love"],
    ["Reñemboja che rehe", "Acercate a mí", "Come close to me"],
    ["Ndache mba'evéi nde'ỹre", "No soy nada sin vos", "I'm nothing without you"]
  ],
  "Expresiones populares": [
    ["Néike", "¡Dale! / ¡Ánimo!", "Come on! / Cheer up!"],
    ["Anína", "Por favor", "Please"],
    ["Ejapo katu", "Hacelo nomás", "Just do it"],
    ["Upéicha", "Así es", "That's right"],
    ["Nahániri", "No / para nada", "No / not at all"],
    ["Heẽ katu", "Claro que sí", "Of course"],
    ["Ha upéi", "¿Y después?", "And then?"],
    ["Py'aguapy", "Calma / tranquilidad", "Calm"],
    ["Iporãite", "Está buenísimo", "It's great"],
    ["Tovéna", "Dejá que sea", "Let it be"]
  ]
};

// Flatten to the required flat array of { guarani, spanish, english, category }.
const EXPRESSIONS = Object.keys(_EXPRESSIONS_BY_CATEGORY).reduce((acc, category) => {
  _EXPRESSIONS_BY_CATEGORY[category].forEach(function (row) {
    acc.push({ guarani: row[0], spanish: row[1], english: row[2], category: category });
  });
  return acc;
}, []);

// Ordered list of categories (for the filter bar). The Spanish name is the canonical
// key used in each expression's `category` field and in filter state.
const EXPRESSION_CATEGORIES = Object.keys(_EXPRESSIONS_BY_CATEGORY);

// Bilingual display labels for categories (keyed by the canonical Spanish name).
// Used only for display; filtering/data still keys off the Spanish name.
const EXPRESSION_CATEGORY_LABELS = {
  "Saludos": { es: "Saludos", en: "Greetings" },
  "Despedidas": { es: "Despedidas", en: "Farewells" },
  "Cortesía": { es: "Cortesía", en: "Courtesy" },
  "Presentaciones": { es: "Presentaciones", en: "Introductions" },
  "Familia": { es: "Familia", en: "Family" },
  "Preguntas": { es: "Preguntas", en: "Questions" },
  "Sentimientos": { es: "Sentimientos", en: "Feelings" },
  "Comida y bebida": { es: "Comida y bebida", en: "Food & drink" },
  "Tiempo y clima": { es: "Tiempo y clima", en: "Weather" },
  "Compras": { es: "Compras", en: "Shopping" },
  "Salud": { es: "Salud", en: "Health" },
  "Escuela": { es: "Escuela", en: "School" },
  "Trabajo": { es: "Trabajo", en: "Work" },
  "Naturaleza": { es: "Naturaleza", en: "Nature" },
  "Direcciones": { es: "Direcciones", en: "Directions" },
  "Viajes": { es: "Viajes", en: "Travel" },
  "Casa": { es: "Casa", en: "Home" },
  "Vida cotidiana": { es: "Vida cotidiana", en: "Daily life" },
  "Amor y amistad": { es: "Amor y amistad", en: "Love & friendship" },
  "Expresiones populares": { es: "Expresiones populares", en: "Popular expressions" }
};
