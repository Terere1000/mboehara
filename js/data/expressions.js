/* 200 common Guaraní expressions for the standalone "Expresiones Comunes" section.
   Plain global JS (no modules). Each entry is { guarani, spanish, category }.
   Educational draft — regenerate from guarani-expressions.ts when provided.

   Authored compactly as [guaraní, español] rows per category, then flattened to the
   required { guarani, spanish, category } shape. */
const _EXPRESSIONS_BY_CATEGORY = {
  "Saludos": [
    ["Mba'éichapa", "Hola / ¿Cómo estás?"],
    ["Mba'éichapa nde ko'ẽ", "Buenos días"],
    ["Mba'éichapa nde asaje", "Buenas tardes"],
    ["Mba'éichapa nde pyhare", "Buenas noches"],
    ["Iporãpa nde", "¿Estás bien?"],
    ["Iporãiterei", "Muy bien"],
    ["Ha nde", "¿Y vos?"],
    ["Mba'éichapa reikóva", "¿Cómo te va?"],
    ["Rovy'a rohechávo", "Me alegra verte"],
    ["Eguahẽporã", "Bienvenido"]
  ],
  "Despedidas": [
    ["Jajotopáta", "Nos vemos / Hasta luego"],
    ["Jajohecháta", "Nos veremos"],
    ["Aháta", "Me voy"],
    ["Che aha", "Ya me voy"],
    ["Ko'ẽrõ meve", "Hasta mañana"],
    ["Tereho porã", "Que te vaya bien"],
    ["Eho porãke", "Andá con cuidado"],
    ["Roñañuã", "Un abrazo"],
    ["Aguyje ha jajotopáta", "Gracias y hasta luego"],
    ["Pytu'u porãke", "Que descanses"]
  ],
  "Cortesía": [
    ["Aguyje", "Gracias"],
    ["Aguyje ndéve", "Gracias a vos"],
    ["Aguyjevete", "Muchas gracias"],
    ["Ani rembyasy", "No te preocupes / de nada"],
    ["Eñyrõ chéve", "Perdoname"],
    ["Ikatúpa", "¿Se puede?"],
    ["Ndaipóri mba'e", "No hay de qué"],
    ["Eiképy", "Pasá / adelante"],
    ["Ikatúpa aike", "¿Puedo pasar?"],
    ["Nde py'aporã", "Sos amable"]
  ],
  "Presentaciones": [
    ["Che réra niko", "Mi nombre es"],
    ["Mba'éichapa nde réra", "¿Cómo te llamás?"],
    ["Mávapa nde", "¿Quién sos?"],
    ["Avy'a roikuaávo", "Un gusto conocerte"],
    ["Moõguápa nde", "¿De dónde sos?"],
    ["Che paraguáyo", "Soy paraguayo"],
    ["Mboýpa nde ary", "¿Cuántos años tenés?"],
    ["Che areko ary", "Tengo años"],
    ["Kóva che irũ", "Este es mi amigo"],
    ["Amomarandu ndéve che rogaygua", "Te presento a mi familia"]
  ],
  "Familia": [
    ["Che sy", "Mi mamá"],
    ["Che ru", "Mi papá"],
    ["Che joyke'y", "Mi hermano"],
    ["Che reindy", "Mi hermana"],
    ["Che ñemoñare", "Mis hijos"],
    ["Che jarýi", "Mi abuela"],
    ["Che taita", "Mi abuelo"],
    ["Che rogagua", "Mi familia"],
    ["Roiko oñondive", "Vivimos juntos"],
    ["Ahayhu che rogayguápe", "Amo a mi familia"]
  ],
  "Preguntas": [
    ["Mba'épa", "¿Qué?"],
    ["Mávapa", "¿Quién?"],
    ["Moõpa", "¿Dónde?"],
    ["Araka'épa", "¿Cuándo?"],
    ["Mba'érepa", "¿Por qué?"],
    ["Mba'éichapa", "¿Cómo?"],
    ["Mboýpa", "¿Cuánto?"],
    ["Moõpa reho", "¿A dónde vas?"],
    ["Mba'épa rejapo", "¿Qué hacés?"],
    ["Mba'épa he'ise", "¿Qué significa?"]
  ],
  "Sentimientos": [
    ["Che vy'a", "Estoy feliz"],
    ["Avy'aiterei", "Estoy muy feliz"],
    ["Che ñembyasy", "Estoy triste"],
    ["Che py'aro", "Estoy enojado"],
    ["Akyhyje", "Tengo miedo"],
    ["Ahayhu", "Amo / quiero"],
    ["Che kane'õ", "Estoy cansado"],
    ["Ndavy'ái", "No estoy feliz"],
    ["Che py'apy", "Estoy preocupado"],
    ["Roguerohory", "Te aprecio"]
  ],
  "Comida y bebida": [
    ["Añembyahýi", "Tengo hambre"],
    ["Che yuhéi", "Tengo sed"],
    ["Ha'úta", "Voy a comer"],
    ["Aipota y", "Quiero agua"],
    ["Iporã tembi'u", "La comida está rica"],
    ["Ay'u", "Bebo / tomo"],
    ["Ere'úta tereré", "¿Vas a tomar tereré?"],
    ["Ndaipotái", "No quiero"],
    ["Aipota hetave", "Quiero más"],
    ["Heẽ, aguyje", "Sí, gracias"]
  ],
  "Tiempo y clima": [
    ["Okypa", "¿Llueve?"],
    ["Oky", "Llueve"],
    ["Haku", "Hace calor"],
    ["Ro'y", "Hace frío"],
    ["Kuarahy porã", "Día soleado"],
    ["Yvytu oipeju", "Sopla el viento"],
    ["Iñypytũ", "Está nublado"],
    ["Mba'éichapa ára ko'ágã", "¿Cómo está el clima?"],
    ["Ára porã", "Buen tiempo"],
    ["Ama guasu", "Tormenta"]
  ],
  "Compras": [
    ["Mboýpa ovale", "¿Cuánto cuesta?"],
    ["Hepýeterei", "Es muy caro"],
    ["Hepy'i", "Es barato"],
    ["Aipota kóva", "Quiero esto"],
    ["Aha amba'ejogua", "Voy de compras"],
    ["Ereme'ẽmi chéve", "Dame, por favor"],
    ["Mokõi kilo", "Dos kilos"],
    ["Ndarekói viru", "No tengo dinero"],
    ["Ikatúpa amba'ejogua", "¿Puedo comprar?"],
    ["Aguyje, upéichante", "Gracias, así está bien"]
  ],
  "Salud": [
    ["Cherasy", "Estoy enfermo"],
    ["Che akãrasy", "Me duele la cabeza"],
    ["Che ryerasy", "Me duele la panza"],
    ["Aipota pohã", "Necesito remedio"],
    ["Ahasa pohãnohárape", "Voy al médico"],
    ["Tesãi", "Salud"],
    ["Eñeñangareko", "Cuidate"],
    ["Iporãma che", "Ya estoy bien"],
    ["Che ropehýi", "Tengo sueño"],
    ["Aikotevẽ pytu'u", "Necesito descansar"]
  ],
  "Escuela": [
    ["Ambo'e", "Enseño"],
    ["Añembo'e", "Estudio"],
    ["Mbo'ehára", "Maestro"],
    ["Temimbo'e", "Alumno"],
    ["Aha mbo'ehaópe", "Voy a la escuela"],
    ["Ahai", "Escribo"],
    ["Amoñe'ẽ", "Leo"],
    ["Aikuaase", "Quiero aprender"],
    ["Kuatiahaipyre", "Cuaderno / libro"],
    ["Ambohovái", "Respondo"]
  ],
  "Trabajo": [
    ["Amba'apo", "Trabajo"],
    ["Mba'apohára", "Trabajador"],
    ["Mba'épa nde rembiapo", "¿Cuál es tu trabajo?"],
    ["Amba'apo ñúme", "Trabajo en el campo"],
    ["Añotỹ", "Siembro / cultivo"],
    ["Che kane'õ mba'apógui", "Estoy cansado del trabajo"],
    ["Amba'apo ko'ẽ guive ka'aru peve", "Trabajo de la mañana a la tarde"],
    ["Aporeka tembiapóre", "Busco trabajo"],
    ["Che rembiapo iporã", "Mi trabajo es bueno"],
    ["Jaha jamba'apo", "Vamos a trabajar"]
  ],
  "Naturaleza": [
    ["Yvyra", "Árbol"],
    ["Yvoty", "Flor"],
    ["Ka'aguy", "Bosque"],
    ["Ysyry", "Arroyo"],
    ["Yvytu", "Viento"],
    ["Kuarahy", "Sol"],
    ["Jasy", "Luna"],
    ["Mbyja", "Estrella"],
    ["Ýva", "Fruta"],
    ["Ñu", "Campo"]
  ],
  "Direcciones": [
    ["Akatúa gotyo", "A la derecha"],
    ["Asu gotyo", "A la izquierda"],
    ["Tenonde", "Adelante"],
    ["Tapykue", "Atrás"],
    ["Ko'ápe", "Aquí"],
    ["Upépe", "Allí"],
    ["Moõpa oĩ", "¿Dónde está?"],
    ["Mombyry", "Lejos"],
    ["Aguĩ", "Cerca"],
    ["Ehasa tenonde", "Seguí derecho"]
  ],
  "Viajes": [
    ["Aháta aguata", "Voy a viajar"],
    ["Moõpa reho", "¿A dónde vas?"],
    ["Aha távape", "Voy a la ciudad"],
    ["Mbohapy ára aiméta", "Estaré tres días"],
    ["Aipota apyta", "Quiero quedarme"],
    ["Moõpa opyta", "¿Dónde queda?"],
    ["Che rape puku", "Mi viaje es largo"],
    ["Aju ko'águi", "Vengo de acá"],
    ["Jaha oñondive", "Vamos juntos"],
    ["Tereho porã nde rapére", "Buen viaje"]
  ],
  "Casa": [
    ["Che róga", "Mi casa"],
    ["Okẽ", "Puerta"],
    ["Ovetã", "Ventana"],
    ["Tupa", "Cama"],
    ["Tembiporu", "Mueble / utensilio"],
    ["Aike che rógape", "Entro a mi casa"],
    ["Amopotĩ che róga", "Limpio mi casa"],
    ["Aju che rógagui", "Vengo de mi casa"],
    ["Eguahẽ che rógape", "Vení a mi casa"],
    ["Che róga michĩ", "Mi casa es pequeña"]
  ],
  "Vida cotidiana": [
    ["Apáy", "Me despierto"],
    ["Ajahu", "Me baño"],
    ["Akaru", "Como"],
    ["Ake", "Duermo"],
    ["Aguata", "Camino"],
    ["Aha amba'apo", "Voy a trabajar"],
    ["Añembo'e", "Estudio"],
    ["Apytu'u", "Descanso"],
    ["Ajapo che rembiapo", "Hago mis tareas"],
    ["Ára ha ára", "Todos los días"]
  ],
  "Amor y amistad": [
    ["Rohayhu", "Te amo"],
    ["Che irũ", "Mi amigo/a"],
    ["Nde porã", "Sos lindo/a"],
    ["Rohayhu che py'aite guive", "Te amo con todo mi corazón"],
    ["Nde che py'a", "Sos mi corazón"],
    ["Ñande mborayhu tuicha", "Nuestro amor es grande"],
    ["Aipota aiko ne ndive", "Quiero estar contigo"],
    ["Nde che rembiayhu", "Sos mi amor"],
    ["Reñemboja che rehe", "Acercate a mí"],
    ["Ndache mba'evéi nde'ỹre", "No soy nada sin vos"]
  ],
  "Expresiones populares": [
    ["Néike", "¡Dale! / ¡Ánimo!"],
    ["Anína", "Por favor"],
    ["Ejapo katu", "Hacelo nomás"],
    ["Upéicha", "Así es"],
    ["Nahániri", "No / para nada"],
    ["Heẽ katu", "Claro que sí"],
    ["Ha upéi", "¿Y después?"],
    ["Py'aguapy", "Calma / tranquilidad"],
    ["Iporãite", "Está buenísimo"],
    ["Tovéna", "Dejá que sea"]
  ]
};

// Flatten to the required flat array of { guarani, spanish, category }.
const EXPRESSIONS = Object.keys(_EXPRESSIONS_BY_CATEGORY).reduce((acc, category) => {
  _EXPRESSIONS_BY_CATEGORY[category].forEach(function (row) {
    acc.push({ guarani: row[0], spanish: row[1], category: category });
  });
  return acc;
}, []);

// Ordered list of categories (for the filter bar).
const EXPRESSION_CATEGORIES = Object.keys(_EXPRESSIONS_BY_CATEGORY);
