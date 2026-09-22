/* Mbo'ehára lesson notes — the *teaching* half of each lesson, shown before the quiz.
   Written for students with zero previous Guaraní: every explanation assumes nothing.

   Keyed by "<gradeId>:<lessonIndex>" — the same identity Progress uses. A lesson with
   no entry here simply skips the Learn step and goes straight to practice, so grades
   can be filled in gradually.

   Shape:
     focus:    { es, en }            one line — what this lesson is really about
     intro:    [ { es, en }, ... ]   1–3 short paragraphs of plain-language explanation
     points:   [ { es, en }, ... ]   2–4 key takeaways (rendered as a checklist)
     examples: [ { gn, es, en }, ... ]  sentences using the lesson's words in context
     culture:  { title:{es,en}, body:{es,en} }   a "did you know" note

   The vocab cards are generated from the lesson's own `vocab` list — don't repeat words here. */

const TEACH = {

  /* ==================== GRADE 1 — Achegety y saludos ==================== */

  "g1:0": {
    focus: { es: "Las 6 vocales orales del guaraní y cómo suenan.",
             en: "The 6 oral vowels of Guaraní and how they sound." },
    intro: [
      { es: "El guaraní se escribe casi exactamente como se pronuncia: cada letra tiene un solo sonido y ese sonido no cambia nunca. Si aprendés las vocales, ya podés leer en voz alta cualquier palabra guaraní, aunque no sepas qué significa.",
        en: "Guaraní is written almost exactly as it sounds: each letter has one sound and that sound never changes. Once you learn the vowels you can already read any Guaraní word aloud, even without knowing what it means." },
      { es: "Cinco de las vocales — a, e, i, o, u — suenan igual que en español. La sexta, la y, es nueva: no existe en español ni en inglés. Se pronuncia con la lengua en la posición de la u pero con los labios estirados como para decir i. Suena como una i «apretada», hecha en el fondo de la boca.",
        en: "Five of the vowels — a, e, i, o, u — sound just like Spanish. The sixth one, y, is new: it exists in neither Spanish nor English. Say it with your tongue where it would be for u, but with your lips spread as if saying ee. It comes out as a tight, swallowed ee made at the back of the mouth." },
      { es: "Ojo: la y guaraní es siempre vocal, nunca suena como la «y» de «yo». Y es una palabra completa por sí sola: y significa agua.",
        en: "Careful: Guaraní y is always a vowel — it never sounds like the y in \"yes\". And it is a whole word on its own: y means water." }
    ],
    points: [
      { es: "El alfabeto guaraní se llama achegety y tiene 33 letras.", en: "The Guaraní alphabet is called achegety and has 33 letters." },
      { es: "Una letra = un sonido. No hay letras mudas ni excepciones.", en: "One letter = one sound. No silent letters, no exceptions." },
      { es: "Por defecto la sílaba fuerte es la última: aguyjé, kuarahý.", en: "By default the stressed syllable is the last one: aguyjé, kuarahý." },
      { es: "Si el acento cae en otra sílaba, se escribe con tilde: Áva, Óga.", en: "If the stress falls elsewhere, it is written with an accent: Áva, Óga." }
    ],
    examples: [
      { gn: "y", es: "agua", en: "water" },
      { gn: "yvy", es: "tierra — tres letras, dos vocales guturales", en: "earth / land — three letters, two guttural vowels" },
      { gn: "Kuarahy ha jasy", es: "El sol y la luna", en: "The sun and the moon" }
    ],
    culture: {
      title: { es: "Un idioma de todo un país", en: "A whole country's language" },
      body: { es: "El guaraní es la única lengua indígena de América que hablan mayoritariamente personas no indígenas: cerca del 90 % de la población paraguaya lo entiende y es idioma oficial junto con el español desde la Constitución de 1992. Aprenderlo no es aprender una lengua muerta — es aprender el idioma de la casa, del chiste y del cariño en Paraguay.",
              en: "Guaraní is the only Indigenous language of the Americas spoken mostly by non-Indigenous people: around 90% of Paraguayans understand it, and it has been co-official with Spanish since the 1992 Constitution. Learning it isn't learning a dead language — it's learning the language of home, of jokes, and of affection in Paraguay." }
    }
  },

  "g1:1": {
    focus: { es: "Saludar, agradecer y despedirte — y la partícula -pa que crea preguntas.",
             en: "Greeting, thanking and saying goodbye — plus the -pa particle that makes questions." },
    intro: [
      { es: "En guaraní no se pregunta cambiando la entonación como en español. Se pega la partícula -pa al final de la palabra que hace la pregunta. Mba'éicha significa «cómo»; Mba'éichapa significa «¿cómo?». Esa -pa aparece en casi todas las preguntas que vas a aprender.",
        en: "Guaraní doesn't turn a statement into a question by changing your tone of voice. It glues the particle -pa onto the end of the question word. Mba'éicha means \"how\"; Mba'éichapa means \"how?\". That -pa shows up in almost every question you'll learn." },
      { es: "Mba'éichapa es el «¿qué tal?» paraguayo y sirve a cualquier hora y con cualquier persona. La respuesta estándar es Iporã (bien), y se contesta con Aguyje (gracias). Un intercambio completo dura tres palabras.",
        en: "Mba'éichapa is the Paraguayan \"how's it going?\" — good at any hour, with anyone. The standard answer is Iporã (good), followed by Aguyje (thank you). A complete exchange takes three words." },
      { es: "Jajotopáta no significa literalmente «hasta luego» sino «nos vamos a encontrar» — la despedida guaraní da por hecho que volverán a verse.",
        en: "Jajotopáta doesn't literally mean \"see you later\" — it means \"we will meet again\". The Guaraní goodbye assumes you'll see each other." }
    ],
    points: [
      { es: "-pa al final de la palabra = signo de pregunta.", en: "-pa at the end of a word = question mark." },
      { es: "Iporã sirve para «bien», «lindo» y «está bueno».", en: "Iporã covers \"fine\", \"pretty\" and \"that's good\"." },
      { es: "Ha nde? = ¿Y vos? — devolvé siempre la pregunta.", en: "Ha nde? = And you? — always hand the question back." },
      { es: "Néi es el «dale» paraguayo: acuerdo, permiso o cierre de conversación.", en: "Néi is the Paraguayan \"okay then\": agreement, permission, or the end of a chat." }
    ],
    examples: [
      { gn: "— Mba'éichapa? — Iporã, aguyje. Ha nde?", es: "— ¿Cómo estás? — Bien, gracias. ¿Y vos?", en: "— How are you? — Good, thanks. And you?" },
      { gn: "Mba'éichapa neko'ẽ", es: "Buenos días (literalmente: ¿cómo amaneciste?)", en: "Good morning (literally: how did you dawn?)" },
      { gn: "Néi, jajotopáta", es: "Bueno, hasta luego", en: "Okay, see you later" }
    ],
    culture: {
      title: { es: "Aguyje es más que «gracias»", en: "Aguyje is more than \"thanks\"" },
      body: { es: "Aguyje viene de una raíz que significa «llegar a la madurez, alcanzar la plenitud». En el pensamiento guaraní agradecer es reconocer que algo llegó a su punto justo. Por eso también se escucha aguyjevete, una versión más solemne, en discursos y ceremonias.",
              en: "Aguyje comes from a root meaning \"to ripen, to reach fullness\". In Guaraní thought, thanking someone is recognising that something has come to its proper point. That's why you'll also hear aguyjevete, a more solemn version, in speeches and ceremonies." }
    }
  },

  "g1:2": {
    focus: { es: "La familia — y por qué en guaraní depende de quién habla.",
             en: "Family — and why in Guaraní it depends on who is speaking." },
    intro: [
      { es: "Acá viene la primera sorpresa grande del guaraní. En español «hermano» es hermano para todos. En guaraní el nombre del pariente cambia según el sexo de quien habla: una mujer y un varón usan palabras distintas para referirse a la misma persona.",
        en: "Here comes Guaraní's first big surprise. In Spanish or English a brother is a brother, whoever is talking. In Guaraní the kinship word changes with the speaker's sex: a woman and a man use different words for the very same person." },
      { es: "Memby es el hijo o la hija de una mujer. Un varón, en cambio, dice ta'ýra (hijo) y tajýra (hija). De la misma forma, kyvy es el hermano de una mujer y teindy (o reindy) es la hermana de un varón.",
        en: "Memby is a woman's son or daughter. A man instead says ta'ýra (son) and tajýra (daughter). In the same way, kyvy is a woman's brother and teindy (or reindy) is a man's sister." },
      { es: "Para decir «mi» o «tu» se pone che o nde delante: che sy = mi mamá, nde sy = tu mamá. No hay que cambiar nada más.",
        en: "To say \"my\" or \"your\", put che or nde in front: che sy = my mother, nde sy = your mother. Nothing else changes." }
    ],
    points: [
      { es: "che = mi, nde = tu. Van siempre antes del sustantivo.", en: "che = my, nde = your. They always go before the noun." },
      { es: "El parentesco depende del sexo del que habla, no del pariente.", en: "Kinship words depend on the speaker's sex, not the relative's." },
      { es: "Sy (mamá) y túva (papá) valen para todos.", en: "Sy (mother) and túva (father) work for everyone." },
      { es: "Al abuelo, tamói, también se le dice taita guasu («padre grande»).", en: "A grandfather, tamói, is also called taita guasu (\"big father\")." }
    ],
    examples: [
      { gn: "Che sy ha che túva", es: "Mi mamá y mi papá", en: "My mother and my father" },
      { gn: "Kóva che jarýi", es: "Esta es mi abuela", en: "This is my grandmother" },
      { gn: "Nde memby iporã", es: "Tu hijo/a es lindo/a", en: "Your child is lovely" }
    ],
    culture: {
      title: { es: "La familia grande", en: "The big family" },
      body: { es: "En guaraní la palabra para «familia» más usada es ogaygua — literalmente «los de la casa». No se limita a padres e hijos: incluye a quien vive y come bajo el mismo techo. Y tekoha, que vas a ver en los últimos grados, nombra al lugar donde una comunidad puede ser lo que es.",
              en: "The most common Guaraní word for family is ogaygua — literally \"those of the house\". It isn't limited to parents and children: it takes in whoever lives and eats under the same roof. And tekoha, which you'll meet in the last grades, names the place where a community can be what it is." }
    }
  },

  "g1:3": {
    focus: { es: "Palabras cortísimas de todos los días — sí, no, casa, agua, sol, luna.",
             en: "Everyday one-breath words — yes, no, house, water, sun, moon." },
    intro: [
      { es: "El guaraní arma muchísimo con muy pocas letras. Y, una sola vocal, es una palabra completa: agua. Esa misma y aparece dentro de kuarahy (sol) y de yvy (tierra); no es casualidad, es una lengua que construye palabras juntando piezas chiquitas.",
        en: "Guaraní builds an enormous amount out of very few letters. Y, a single vowel, is a complete word: water. That same y turns up inside kuarahy (sun) and yvy (earth) — not a coincidence, but a language that builds words by joining tiny pieces." },
      { es: "Para decir «no» tenés dos herramientas distintas: nahániri es la palabra suelta que contesta una pregunta, mientras que negar un verbo se hace envolviéndolo (eso lo vas a ver en el grado 3). Por ahora, nahániri alcanza y sobra.",
        en: "There are two different tools for \"no\": nahániri is the standalone word that answers a question, while negating a verb is done by wrapping it (you'll see that in grade 3). For now, nahániri is all you need." },
      { es: "Heẽ («sí») se pronuncia con las dos vocales nasales, saliendo el aire por la nariz. Es el mismo sonido que vas a estudiar en el grado 2.",
        en: "Heẽ (\"yes\") is pronounced with both vowels nasal, air coming out through the nose. It's the very sound you'll study in grade 2." }
    ],
    points: [
      { es: "Y = agua, y también el nombre de la vocal gutural.", en: "Y = water, and also the name of the guttural vowel." },
      { es: "Heẽ / Nahániri son el sí y el no de la conversación.", en: "Heẽ / Nahániri are conversational yes and no." },
      { es: "Óga lleva tilde: el acento va en la Ó, no en la última sílaba.", en: "Óga carries an accent: the stress is on Ó, not the last syllable." },
      { es: "Jasy significa luna — y también mes. Un mes es una luna.", en: "Jasy means moon — and also month. A month is a moon." }
    ],
    examples: [
      { gn: "— Reipotápa y? — Heẽ, aguyje.", es: "— ¿Querés agua? — Sí, gracias.", en: "— Do you want water? — Yes, thanks." },
      { gn: "Che róga", es: "Mi casa (óga cambia a róga después de che)", en: "My house (óga becomes róga after che)" },
      { gn: "Osẽma kuarahy", es: "Ya salió el sol", en: "The sun has come out" }
    ],
    culture: {
      title: { es: "Jasy Jateré, el duende de la siesta", en: "Jasy Jateré, the noon spirit" },
      body: { es: "La palabra jasy vive dentro del nombre de uno de los duendes más conocidos del Paraguay: Jasy Jateré, uno de los siete hijos míticos de Tau y Keraná. La leyenda dice que se aparece a la hora de la siesta y se lleva a los chicos que no duermen — por eso en Paraguay la siesta se respeta.",
              en: "The word jasy lives inside the name of one of Paraguay's best-known forest spirits: Jasy Jateré, one of the seven mythical children of Tau and Keraná. Legend says he appears at siesta time and carries off children who won't nap — which is why in Paraguay the siesta is taken seriously." }
    }
  },

  /* ==================== GRADE 2 — Vocales nasales, números y colores ==================== */

  "g2:0": {
    focus: { es: "Las 6 vocales nasales: el rasgo que puede cambiar el significado de una palabra.",
             en: "The 6 nasal vowels: the feature that can change what a word means." },
    intro: [
      { es: "El guaraní tiene 12 vocales: las 6 orales que ya conocés y sus 6 gemelas nasales, marcadas con tilde ondulada (~). Para producirlas, dejá salir el aire por la nariz mientras decís la vocal, como el final de «pan» o «uno» pero sostenido.",
        en: "Guaraní has 12 vowels: the 6 oral ones you know and their 6 nasal twins, marked with a wavy tilde (~). To make them, let air out through your nose while saying the vowel — like the end of \"song\", but held." },
      { es: "Esto no es un detalle decorativo. La nasalidad distingue palabras completamente distintas: pyta es «talón» y pytã es «rojo»; tai es «picante» y tãi es «diente». Escribir sin la tilde es escribir otra palabra.",
        en: "This is not decoration. Nasality tells apart completely different words: pyta is \"heel\" and pytã is \"red\"; tai is \"spicy\" and tãi is \"tooth\". Dropping the tilde writes a different word." },
      { es: "Además, la nasalidad se contagia. Una palabra nasal «nasaliza» lo que se le pega: por eso más adelante vas a ver iñakã («su cabeza») y no *iakã. Escuchar la nasalidad ahora te ahorra confusiones en los grados siguientes.",
        en: "Nasality is also contagious. A nasal word nasalises whatever attaches to it: that's why later you'll see iñakã (\"his/her head\") and not *iakã. Training your ear now saves confusion in the grades ahead." }
    ],
    points: [
      { es: "6 vocales orales + 6 nasales = 12 vocales en total.", en: "6 oral vowels + 6 nasal = 12 vowels in all." },
      { es: "La tilde ~ suele marcar además la sílaba tónica.", en: "The ~ tilde usually marks the stressed syllable as well." },
      { es: "pyta ≠ pytã · tai ≠ tãi — la nariz cambia el significado.", en: "pyta ≠ pytã · tai ≠ tãi — the nose changes the meaning." },
      { es: "Una palabra nasal contagia a sus prefijos y sufijos.", en: "A nasal word makes its prefixes and suffixes nasal too." }
    ],
    examples: [
      { gn: "pyta / pytã", es: "talón / rojo", en: "heel / red" },
      { gn: "tai / tãi", es: "picante / diente", en: "spicy / tooth" },
      { gn: "Ñe'ẽ", es: "Palabra, lengua — una palabra nasal de punta a punta", en: "Word, language — nasal from end to end" }
    ],
    culture: {
      title: { es: "El sonido del país", en: "The sound of the country" },
      body: { es: "Esa musicalidad nasal es lo que hace que el español paraguayo suene distinto al de cualquier otro país: siglos de bilingüismo dejaron la nariz guaraní dentro del castellano. Cuando un paraguayo dice «¿y luego?» o alarga una vocal, está hablando español con la boca del guaraní.",
              en: "That nasal music is what makes Paraguayan Spanish sound unlike Spanish anywhere else: centuries of bilingualism left the Guaraní nose inside Castilian. When a Paraguayan stretches a vowel, they're speaking Spanish with a Guaraní mouth." }
    }
  },

  "g2:1": {
    focus: { es: "Contar del 1 al 10 — y descubrir que el guaraní cuenta con las manos.",
             en: "Counting 1 to 10 — and discovering that Guaraní counts on its hands." },
    intro: [
      { es: "Los números guaraníes tienen una lógica preciosa. Solo hay cuatro números «propios»: peteĩ (1), mokõi (2), mbohapy (3), irundy (4). El cinco es po — que es exactamente la misma palabra que «mano».",
        en: "Guaraní numbers have a beautiful logic. There are only four \"own\" numbers: peteĩ (1), mokõi (2), mbohapy (3), irundy (4). Five is po — the very same word as \"hand\"." },
      { es: "Del 6 al 9 no hay palabras nuevas: se suma sobre la mano. Poteĩ = po + peteĩ (mano y uno = 6). Pokõi = mano y dos (7). Poapy = mano y tres (8, de mbohapy). Porundy = mano y cuatro (9, de irundy). Y diez, las dos manos, es pa.",
        en: "From 6 to 9 there are no new words at all — you add onto the hand. Poteĩ = po + peteĩ (hand and one = 6). Pokõi = hand and two (7). Poapy = hand and three (8, from mbohapy). Porundy = hand and four (9, from irundy). And ten, both hands, is pa." },
      { es: "Si entendés esto, ya tenés medio grado 3 aprendido: pa (10) es la pieza con la que se arman el 11, el 20 y el 30.",
        en: "Grasp this and you've already got half of grade 3: pa (10) is the piece that builds 11, 20 and 30." }
    ],
    points: [
      { es: "po = 5 y también = mano. El sistema es de base cinco.", en: "po = 5 and also = hand. The system is base five." },
      { es: "6–9 se forman como «mano + n».", en: "6–9 are formed as \"hand + n\"." },
      { es: "peteĩ significa también «un/una» y «alguien».", en: "peteĩ also means \"a/an\" and \"someone\"." },
      { es: "Escuchá las nasales: peteĩ, mokõi, poteĩ.", en: "Listen for the nasals: peteĩ, mokõi, poteĩ." }
    ],
    examples: [
      { gn: "Mokõi jagua", es: "Dos perros", en: "Two dogs" },
      { gn: "Peteĩ, mokõi, mbohapy…", es: "Uno, dos, tres… (para contar en juegos)", en: "One, two, three… (for counting in games)" },
      { gn: "Mboýpa oĩ? Poteĩ.", es: "¿Cuántos hay? Seis.", en: "How many are there? Six." }
    ],
    culture: {
      title: { es: "En la calle se cuenta en español", en: "On the street, people count in Spanish" },
      body: { es: "Seamos honestos: en la conversación cotidiana la mayoría de los paraguayos dice los números en español, sobre todo los grandes y los precios. Los numerales guaraníes se conservan sobre todo en la escuela, en textos formales y en el conteo tradicional. Saberlos igual vale la pena: te muestran cómo piensa la lengua.",
              en: "Let's be honest: in everyday conversation most Paraguayans say numbers in Spanish, especially big ones and prices. The Guaraní numerals live mainly in school, in formal texts, and in traditional counting. They're still worth knowing: they show you how the language thinks." }
    }
  },

  "g2:2": {
    focus: { es: "Los colores — que en guaraní se comportan como verbos.",
             en: "Colours — which in Guaraní behave like verbs." },
    intro: [
      { es: "Fijate que varios colores empiezan con h-: hovy, hũ, hovyũ. No es casualidad. En guaraní los adjetivos funcionan como verbos, y esa h- es la marca de tercera persona: hovy no significa «azul» sino «(él/ella/eso) es azul».",
        en: "Notice that several colours start with h-: hovy, hũ, hovyũ. That's no accident. In Guaraní adjectives work like verbs, and that h- is the third-person marker: hovy doesn't mean \"blue\", it means \"(it) is blue\"." },
      { es: "Por eso no hace falta un verbo «ser»: Yvoty pytã ya es una oración completa, «la flor es roja». Cuando el color acompaña a un sustantivo, va siempre detrás: óga morotĩ = casa blanca.",
        en: "That's why there's no need for a verb \"to be\": Yvoty pytã is already a complete sentence, \"the flower is red\". When a colour accompanies a noun it always follows it: óga morotĩ = white house." },
      { es: "Y mirá cómo se arma el verde: hovy es azul y ũ significa oscuro o negro; hovyũ es literalmente «azul oscuro». Para el guaraní tradicional, el azul y el verde son familia — una división del espectro distinta de la del español.",
        en: "And look how green is built: hovy is blue and ũ means dark or black; hovyũ is literally \"dark blue\". For traditional Guaraní, blue and green are relatives — a different way of slicing the spectrum than Spanish or English." }
    ],
    points: [
      { es: "El adjetivo va después del sustantivo: jagua hũ (perro negro).", en: "The adjective follows the noun: jagua hũ (black dog)." },
      { es: "No existe un verbo «ser»: el adjetivo ya lo lleva adentro.", en: "There's no verb \"to be\": the adjective already contains it." },
      { es: "sa'y = color. Sa'yju = color amarillo.", en: "sa'y = colour. Sa'yju = the colour yellow." },
      { es: "hovy (azul) + ũ (oscuro) = hovyũ (verde).", en: "hovy (blue) + ũ (dark) = hovyũ (green)." }
    ],
    examples: [
      { gn: "Yvoty pytã", es: "La flor es roja / flor roja", en: "The flower is red / red flower" },
      { gn: "Che jagua hũ", es: "Mi perro es negro", en: "My dog is black" },
      { gn: "Ka'aguy hovyũ", es: "El monte verde", en: "The green forest" }
    ],
    culture: {
      title: { es: "Los colores de la bandera", en: "The colours of the flag" },
      body: { es: "La bandera paraguaya es pytã, morotĩ ha hovy — rojo, blanco y azul. Es una de las poquísimas banderas del mundo con dibujos distintos en cada cara: el escudo nacional de un lado y el sello del Tesoro con el león y el lema Paz y Justicia del otro.",
              en: "The Paraguayan flag is pytã, morotĩ ha hovy — red, white and blue. It's one of the very few flags in the world with a different design on each side: the national coat of arms on one face and the Treasury seal, with its lion and the motto Peace and Justice, on the other." }
    }
  },

  "g2:3": {
    focus: { es: "Animales — y las palabras guaraníes que viajaron al resto del mundo.",
             en: "Animals — and the Guaraní words that travelled the world." },
    intro: [
      { es: "Mirá bien esta lista y vas a ver dos grupos. Jagua, guyra, pira y mbarakaja son palabras guaraníes de siempre: nombran animales que ya vivían acá. Vaka y kavaju, en cambio, son préstamos del español («vaca», «caballo») adaptados a la escritura guaraní, porque esos animales llegaron con los europeos.",
        en: "Look closely at this list and you'll see two groups. Jagua, guyra, pira and mbarakaja are old Guaraní words: they name animals that already lived here. Vaka and kavaju, on the other hand, are Spanish loans (\"vaca\", \"caballo\") respelled in Guaraní, because those animals arrived with the Europeans." },
      { es: "El caso de jagua es el más curioso. Antes de la llegada de los perros, jagua nombraba a la fiera grande. Cuando llegó el perro se quedó con esa palabra, y al felino hubo que rebautizarlo jaguarete: «el jagua verdadero». De ahí viene «jaguar» en inglés y en tantos idiomas.",
        en: "Jagua is the curious one. Before dogs arrived, jagua named the big beast. When the dog turned up it took over the word, and the big cat had to be renamed jaguarete: \"the true jagua\". That's where English jaguar comes from." },
      { es: "El truco para recordar el vocabulario: los animales «de la casa» suelen sonar a español, los del monte suenan a guaraní.",
        en: "A trick for remembering the vocabulary: farmyard animals tend to sound Spanish, wild ones sound Guaraní." }
    ],
    points: [
      { es: "Vaka y kavaju son préstamos del español escritos en guaraní.", en: "Vaka and kavaju are Spanish loans written in Guaraní." },
      { es: "Guaraní no marca el plural con -s: mokõi jagua = dos perros.", en: "Guaraní doesn't mark plural with -s: mokõi jagua = two dogs." },
      { es: "guyra = pájaro, y aparece en decenas de nombres de aves.", en: "guyra = bird, and turns up in dozens of bird names." },
      { es: "Para pluralizar de verdad existe -kuéra: jaguakuéra.", en: "When you do need a plural there's -kuéra: jaguakuéra." }
    ],
    examples: [
      { gn: "Che jagua michĩ", es: "Mi perro es chiquito", en: "My dog is small" },
      { gn: "Guyra opurahéi", es: "El pájaro canta", en: "The bird sings" },
      { gn: "Mbohapy pira", es: "Tres peces", en: "Three fish" }
    ],
    culture: {
      title: { es: "Palabras guaraníes que ya usás", en: "Guaraní words you already use" },
      body: { es: "Jaguar, piraña (pira añá, «pez diablo»), tapioca, tucán, ananá, carpincho (kapi'yva), jacarandá, tapir y hasta el nombre del país, Paraguay, vienen del guaraní o de lenguas tupí-guaraníes hermanas. Ya sabías guaraní antes de empezar esta lección.",
              en: "Jaguar, piranha (pira añá, \"devil fish\"), tapioca, toucan, capybara (kapi'yva), jacaranda, tapir — and the country's own name, Paraguay — all come from Guaraní or its sister Tupí-Guaraní languages. You knew some Guaraní before this lesson started." }
    }
  },

  /* ==================== GRADE 3 — Cuerpo, tiempo y frases ==================== */

  "g3:0": {
    focus: { es: "El cuerpo — y los sustantivos que cambian de forma según el poseedor.",
             en: "The body — and nouns that change shape depending on the owner." },
    intro: [
      { es: "Con las partes del cuerpo aparece una de las reglas más características del guaraní. Muchos de estos sustantivos son «triformes»: tienen tres formas según quién los posea. Tesa (ojo) se convierte en che resa (mi ojo), nde resa (tu ojo) y hesa (su ojo). La t- inicial se vuelve r- con che/nde y h- en tercera persona.",
        en: "Body parts bring one of Guaraní's most characteristic rules. Many of these nouns are \"triform\": they have three shapes depending on who owns them. Tesa (eye) becomes che resa (my eye), nde resa (your eye) and hesa (his/her eye). The initial t- turns into r- with che/nde and h- in the third person." },
      { es: "Otros sustantivos son más simples y solo llevan el prefijo delante: che po (mi mano), che juru (mi boca). Para la tercera persona se usa i-: ipo, ijuru.",
        en: "Other nouns are simpler and just take the prefix in front: che po (my hand), che juru (my mouth). For the third person you use i-: ipo, ijuru." },
      { es: "Y acá vuelve la nasalidad del grado 2: akã (cabeza) es nasal, así que su tercera persona no es *iakã sino iñakã. La nariz manda.",
        en: "And here grade 2's nasality returns: akã (head) is nasal, so its third person isn't *iakã but iñakã. The nose rules." }
    ],
    points: [
      { es: "che / nde delante del sustantivo = mi / tu.", en: "che / nde before the noun = my / your." },
      { es: "Triformes: tesa → che resa → hesa.", en: "Triform: tesa → che resa → hesa." },
      { es: "Tercera persona: i- normal, iñ- si la palabra es nasal.", en: "Third person: i- normally, iñ- if the word is nasal." },
      { es: "Po significa mano — y también cinco. Ya lo viste contando.", en: "Po means hand — and also five. You met it while counting." }
    ],
    examples: [
      { gn: "Che akã rasy", es: "Me duele la cabeza (lit. mi cabeza duele)", en: "My head hurts (lit. my head aches)" },
      { gn: "Hesa hovy", es: "Sus ojos son azules", en: "Her/his eyes are blue" },
      { gn: "Nde po tuicha", es: "Tu mano es grande", en: "Your hand is big" }
    ],
    culture: {
      title: { es: "Los sentimientos viven en el py'a", en: "Feelings live in the py'a" },
      body: { es: "Para el guaraní las emociones no están en el corazón sino en el py'a, la zona del estómago y el hígado. Por eso py'aguasu («py'a grande») es valentía, py'aro es enojo y py'apy es tristeza — palabras que vas a ver en el grado 9. Y akãhatã, «cabeza dura», es exactamente lo que parece.",
              en: "In Guaraní, emotions don't sit in the heart but in the py'a, the belly-and-liver area. That's why py'aguasu (\"big py'a\") is courage, py'aro is anger and py'apy is sadness — words you'll meet in grade 9. And akãhatã, \"hard head\", means exactly what you'd guess." }
    }
  },

  "g3:1": {
    focus: { es: "Del 11 al 100 — el mismo pa, adelante o atrás, cambia todo.",
             en: "11 to 100 — the same pa, in front or behind, changes everything." },
    intro: [
      { es: "Ya sabés que pa es diez. Ahora solo hay que aprender dónde ponerlo. Si pa va adelante, suma: pa + peteĩ = papeteĩ (11), pa + mokõi = pakõi (12). Si pa va atrás, multiplica: mokõi + pa = mokõipa (20), mbohapy + pa = mbohapypa (30), po + pa = popa (50).",
        en: "You already know pa is ten. Now you only need to learn where to put it. Pa in front adds: pa + peteĩ = papeteĩ (11), pa + mokõi = pakõi (12). Pa behind multiplies: mokõi + pa = mokõipa (20), mbohapy + pa = mbohapypa (30), po + pa = popa (50)." },
      { es: "Con esas dos posiciones podés construir cualquier número hasta 99 sin memorizar nada nuevo: 21 es mokõipa peteĩ, 45 es irundypa po, 99 es porundypa porundy.",
        en: "With those two positions you can build any number up to 99 without memorising anything new: 21 is mokõipa peteĩ, 45 is irundypa po, 99 is porundypa porundy." },
      { es: "Arriba de eso hay dos piezas más: sa es cien y su es mil. Sa mokõipa peteĩ = 121.",
        en: "Above that there are two more pieces: sa is a hundred and su is a thousand. Sa mokõipa peteĩ = 121." }
    ],
    points: [
      { es: "pa adelante = suma (11–19). pa atrás = decenas (20, 30…).", en: "pa in front = adding (11–19). pa behind = tens (20, 30…)." },
      { es: "sa = 100, su = 1000.", en: "sa = 100, su = 1000." },
      { es: "Todo se construye con los números del 1 al 5.", en: "Everything is built out of the numbers 1 to 5." },
      { es: "El número va antes del sustantivo: mokõipa ára.", en: "The number goes before the noun: mokõipa ára." }
    ],
    examples: [
      { gn: "Papeteĩ", es: "Once (diez y uno)", en: "Eleven (ten and one)" },
      { gn: "Mokõipa peteĩ", es: "Veintiuno (dos-dieces uno)", en: "Twenty-one (two-tens one)" },
      { gn: "Sa ary", es: "Cien años", en: "A hundred years" }
    ],
    culture: {
      title: { es: "Números nuevos para una lengua antigua", en: "New numbers for an old language" },
      body: { es: "El sistema de decenas y centenas que estás viendo fue sistematizado por lingüistas y maestros en el siglo XX para que el guaraní pudiera enseñarse en la escuela y usarse en matemática. Es un ejemplo de lengua viva: un idioma que sigue creando las palabras que necesita.",
              en: "The tens-and-hundreds system you're seeing was systematised by linguists and teachers in the 20th century so that Guaraní could be taught in school and used for maths. It's a living-language story: a tongue still coining the words it needs." }
    }
  },

  "g3:2": {
    focus: { es: "Los días y los meses — se cuentan, no se nombran.",
             en: "Days and months — they're counted, not named." },
    intro: [
      { es: "En español los días llevan nombres de dioses y planetas. En guaraní se numeran, y con los números que ya sabés. Ára significa día; arateĩ es «día uno» (domingo), arakõi «día dos» (lunes), araapy «día tres» (martes), y así hasta arapokõi, «día siete», el sábado.",
        en: "In English and Spanish the days are named after gods and planets. In Guaraní they're numbered — with the numbers you already know. Ára means day; arateĩ is \"day one\" (Sunday), arakõi \"day two\" (Monday), araapy \"day three\" (Tuesday), and so on to arapokõi, \"day seven\", Saturday." },
      { es: "Con los meses pasa lo mismo, pero la base es jasy (luna): jasyteĩ es enero, jasykõi febrero, jasyapy marzo… hasta jasypakõi, diciembre. Un mes es, literalmente, una luna contada.",
        en: "Months work the same way, but the base is jasy (moon): jasyteĩ is January, jasykõi February, jasyapy March… all the way to jasypakõi, December. A month is, literally, a counted moon." },
      { es: "Aprender esto es casi gratis: si sabés contar hasta doce, ya sabés el calendario entero.",
        en: "Learning this is almost free: if you can count to twelve, you already know the whole calendar." }
    ],
    points: [
      { es: "ára = día · jasy = luna y mes · áry = año.", en: "ára = day · jasy = moon and month · áry = year." },
      { es: "La semana empieza en domingo: arateĩ.", en: "The week starts on Sunday: arateĩ." },
      { es: "Los meses son jasy + número: jasypo = mayo (mes cinco).", en: "Months are jasy + number: jasypo = May (month five)." },
      { es: "Ára también significa tiempo, clima y espacio-tiempo.", en: "Ára also means time, weather, and time-space." }
    ],
    examples: [
      { gn: "Ko ára arakõi", es: "Hoy es lunes", en: "Today is Monday" },
      { gn: "Jasypoteĩ", es: "Junio (mes seis)", en: "June (month six)" },
      { gn: "Mbohapy ára", es: "Tres días", en: "Three days" }
    ],
    culture: {
      title: { es: "Ára es más que «día»", en: "Ára is more than \"day\"" },
      body: { es: "Ára es una de las palabras más grandes del guaraní: significa día, tiempo, clima, cielo y también el momento propio de cada cosa. Ára porã es «buen tiempo» pero también «buen momento». Cuando alguien dice ohasa ára, «pasó el tiempo», está usando la misma palabra que para el cielo sobre su cabeza.",
              en: "Ára is one of Guaraní's biggest words: it means day, time, weather, sky, and also the right moment for a thing. Ára porã is \"good weather\" but also \"a good time\". When someone says ohasa ára, \"time passed\", they're using the same word as for the sky above them." }
    }
  },

  "g3:3": {
    focus: { es: "Tus primeras oraciones con verbos: yo, vos, y cómo negar.",
             en: "Your first sentences with verbs: I, you, and how to say no." },
    intro: [
      { es: "En guaraní el verbo ya te dice quién hace la acción, así que no hace falta el pronombre. La marca va pegada al principio: a- soy yo, re- sos vos, o- es él o ella. Con la raíz -ha (ir): aha = voy, reho = vas, oho = va. Con -ju (venir): aju = vengo, reju = venís, ou = viene.",
        en: "In Guaraní the verb already tells you who's acting, so you don't need a pronoun. The marker is glued to the front: a- is I, re- is you, o- is he/she. With the root -ha (go): aha = I go, reho = you go, oho = he/she goes. With -ju (come): aju = I come, reju = you come, ou = he/she comes." },
      { es: "Para negar, el guaraní envuelve el verbo entre dos piezas: nd- adelante e -i atrás. Aikuaa es «sé»; ndaikuaái es «no sé». Fijate cómo el verbo queda abrazado por la negación.",
        en: "To negate, Guaraní wraps the verb between two pieces: nd- in front and -i behind. Aikuaa is \"I know\"; ndaikuaái is \"I don't know\". Notice how the verb is hugged by the negation." },
      { es: "Para dar una orden se usa e-: eju = vení, ejapo = hacé. Y para presentarte, che réra: «mi nombre». Pero la pregunta no es «qué es tu nombre» sino Mávapa nde réra — «¿quién es tu nombre?». Para el guaraní el nombre no es una cosa, es una persona.",
        en: "For a command you use e-: eju = come, ejapo = do it. And to introduce yourself, che réra: \"my name\". But the question isn't \"what is your name\" — it's Mávapa nde réra, \"who is your name?\". For Guaraní a name isn't a thing, it's a person." }
    ],
    points: [
      { es: "a- = yo · re- = vos · o- = él/ella. Pegados al verbo.", en: "a- = I · re- = you · o- = he/she. Glued to the verb." },
      { es: "Negación en dos partes: nd- … -i (ndaikuaái).", en: "Two-part negation: nd- … -i (ndaikuaái)." },
      { es: "e- forma el imperativo: eju, eguapy, ehendu.", en: "e- makes the imperative: eju, eguapy, ehendu." },
      { es: "Se pregunta el nombre con máva («quién»), no con mba'e.", en: "You ask a name with máva (\"who\"), not with mba'e." }
    ],
    examples: [
      { gn: "— Mávapa nde réra? — Che réra Ana.", es: "— ¿Cómo te llamás? — Me llamo Ana.", en: "— What's your name? — My name is Ana." },
      { gn: "Aha mbo'ehaópe", es: "Voy a la escuela", en: "I'm going to school" },
      { gn: "Ndaikuaái, eju ko'ápe", es: "No sé, vení aquí", en: "I don't know, come here" }
    ],
    culture: {
      title: { es: "El jopara", en: "Jopara" },
      body: { es: "En la calle vas a escuchar guaraní y español mezclados en la misma frase: eso se llama jopara («mezcla», y también el nombre de un guiso de poroto y locro). Nadie lo considera un error; es la manera real en que Paraguay habla. El guaraniete, el guaraní «puro» de la escuela, es otro registro — como el español del noticiero frente al de la cocina.",
              en: "On the street you'll hear Guaraní and Spanish mixed inside a single sentence: that's called jopara (\"mixture\", and also the name of a bean-and-corn stew). Nobody counts it as an error; it's how Paraguay actually talks. Guaraniete, the \"pure\" Guaraní of the classroom, is a different register — like news-anchor Spanish next to kitchen Spanish." }
    }
  },

  /* ==================== GRADE 4 — Verbos, comida y casa ==================== */

  "g4:0": {
    focus: { es: "La primera de las dos familias de verbos: los que se conjugan con a-, re-, o-.",
             en: "The first of Guaraní's two verb families: the ones that take a-, re-, o-." },
    intro: [
      { es: "En el grado 3 usaste aha, reho, oho. Ese juego de prefijos — a-, re-, o- — no vale para todos los verbos: el guaraní tiene dos familias distintas, y esta se llama areal justamente por a-re-o. Son los verbos de hacer: comer, dormir, caminar, cantar, trabajar.",
        en: "In grade 3 you used aha, reho, oho. That set of prefixes — a-, re-, o- — doesn't apply to every verb: Guaraní has two different families, and this one is called areal precisely because of a-re-o. These are the verbs of doing: eat, sleep, walk, sing, work." },
      { es: "La conjugación completa es corta: a- (yo), re- (vos), o- (él/ella), ja- o ña- (nosotros con vos), ro- (nosotros sin vos), pe- (ustedes), o- (ellos). Fijate que la tercera persona del singular y del plural son la misma: o-.",
        en: "The full conjugation is short: a- (I), re- (you), o- (he/she), ja- or ña- (we with you), ro- (we without you), pe- (you plural), o- (they). Notice that third person singular and plural are identical: o-." },
      { es: "Como el prefijo ya dice quién actúa, el verbo solo es una oración entera: Akaru significa «como». Y no existe el infinitivo: no hay una palabra «comer» suelta, así que el diccionario te muestra directamente akaru.",
        en: "Because the prefix already says who is acting, the verb on its own is a whole sentence: Akaru means \"I eat\". And there is no infinitive — no bare word for \"to eat\" — so the dictionary simply lists akaru." }
    ],
    points: [
      { es: "a- yo · re- vos · o- él/ella y también ellos.", en: "a- I · re- you · o- he/she and also they." },
      { es: "Un verbo conjugado ya es una oración: Amba'apo.", en: "A conjugated verb is already a sentence: Amba'apo." },
      { es: "No hay infinitivo; el diccionario muestra la forma con a-.", en: "There's no infinitive; the dictionary shows the a- form." },
      { es: "Los areales son verbos de acción, no de estado.", en: "Areal verbs are verbs of action, not of state." }
    ],
    examples: [
      { gn: "Akaru ha upéi ake", es: "Como y después duermo", en: "I eat and then I sleep" },
      { gn: "Remba'apópa?", es: "¿Trabajás?", en: "Do you work?" },
      { gn: "Opurahéi porã", es: "Canta lindo", en: "She sings beautifully" }
    ],
    culture: {
      title: { es: "Una clase obligatoria", en: "A required subject" },
      body: { es: "La reforma educativa de 1994 convirtió al Paraguay en uno de los poquísimos países del mundo con educación bilingüe obligatoria en una lengua indígena: el guaraní se enseña como materia desde primer grado hasta el último año del bachillerato. Esta app sigue justamente ese recorrido de doce grados.",
              en: "The 1994 education reform made Paraguay one of very few countries in the world with compulsory bilingual schooling in an Indigenous language: Guaraní is taught as a subject from first grade through the final year of secondary school. This app follows exactly that twelve-grade path." }
    }
  },

  "g4:1": {
    focus: { es: "La comida paraguaya — y el prefijo tembi-, que convierte verbos en cosas.",
             en: "Paraguayan food — and the tembi- prefix that turns verbs into things." },
    intro: [
      { es: "Tembi'u significa comida, pero no es una palabra suelta: está armada. U es el verbo comer, y tembi- es un prefijo que significa «lo que resulta de». Tembi'u es, literalmente, «lo que se come».",
        en: "Tembi'u means food, but it isn't a simple word — it's assembled. U is the verb to eat, and tembi- is a prefix meaning \"that which results from\". Tembi'u is literally \"that which is eaten\"." },
      { es: "Esa misma máquina fabrica medio idioma: apo (hacer) da tembiapo (trabajo, «lo que se hace»); kuaa (saber) da tembikuaa (conocimiento, «lo que se sabe»), una palabra que vas a ver en el grado 12. Si reconocés tembi-, adivinás decenas de palabras.",
        en: "That same machine builds half the language: apo (to do) gives tembiapo (work, \"that which is done\"); kuaa (to know) gives tembikuaa (knowledge, \"that which is known\"), a word you'll meet in grade 12. Recognise tembi- and you can guess dozens of words." },
      { es: "En esta lista conviven dos capas de historia. Mandi'o, avati, so'o y kamby son guaraníes de siempre — la mandioca y el maíz se cultivaban acá mucho antes de la llegada de los europeos. Kesu, en cambio, es el «queso» español adaptado a la escritura guaraní.",
        en: "This list holds two layers of history side by side. Mandi'o, avati, so'o and kamby are old Guaraní words — cassava and corn were farmed here long before Europeans arrived. Kesu, by contrast, is Spanish \"queso\" respelled in Guaraní." }
    ],
    points: [
      { es: "tembi- + verbo = el resultado de ese verbo.", en: "tembi- + verb = the result of that verb." },
      { es: "u = comer · tembi'u = «lo que se come» = comida.", en: "u = to eat · tembi'u = \"what is eaten\" = food." },
      { es: "kamby (leche) es guaraní; kesu viene del español.", en: "kamby (milk) is Guaraní; kesu comes from Spanish." },
      { es: "«Yo como esto» es ha'u — una forma irregular de u.", en: "\"I eat it\" is ha'u — an irregular form of u." }
    ],
    examples: [
      { gn: "Iporã ko tembi'u", es: "Esta comida está rica", en: "This food is delicious" },
      { gn: "Ha'u mandi'o ha so'o", es: "Como mandioca y carne", en: "I eat cassava and meat" },
      { gn: "Aipota kamby", es: "Quiero leche", en: "I want milk" }
    ],
    culture: {
      title: { es: "La mandioca en cada mesa", en: "Cassava on every table" },
      body: { es: "En Paraguay la mandi'o acompaña prácticamente toda comida, como el pan en otros países. De su almidón sale la chipa, el pan de queso que se come especialmente en Semana Santa, cuando familias enteras se juntan a amasarla en el tatakua, el horno de barro cuyo nombre significa «agujero de fuego».",
              en: "In Paraguay mandi'o accompanies virtually every meal, the way bread does elsewhere. Its starch makes chipa, the cheese bread eaten above all during Holy Week, when whole families gather to knead it for the tatakua — the clay oven whose name means \"fire hole\"." }
    }
  },

  "g4:2": {
    focus: { es: "La casa — y por qué óga se convierte en róga cuando es tuya.",
             en: "The home — and why óga becomes róga when it's yours." },
    intro: [
      { es: "Óga es casa. Pero «mi casa» no es *che óga sino che róga. Óga pertenece a los sustantivos triformes que conociste en el grado 3 con tesa: cambian de forma según el poseedor. Las tres caras son óga (suelta), che róga / nde róga (con che o nde) y hóga (de él o ella).",
        en: "Óga is house. But \"my house\" isn't *che óga — it's che róga. Óga belongs to the triform nouns you met in grade 3 with tesa: they change shape according to the owner. The three faces are óga (on its own), che róga / nde róga (with che or nde) and hóga (his or hers)." },
      { es: "Guardá bien la palabra tupa (cama), porque tiene una gemela peligrosa: Tupã, con la a nasal, significa trueno y es el nombre que los misioneros adoptaron para Dios. Una tilde de diferencia separa tu cama de la divinidad.",
        en: "Keep tupa (bed) firmly in mind, because it has a dangerous twin: Tupã, with a nasal a, means thunder and is the name the missionaries adopted for God. One tilde separates your bed from the divine." },
      { es: "Y otra vez conviven dos orígenes: okẽ (puerta), ovetã (ventana) y apyka (silla, emparentada con guapy, sentarse) son guaraníes, mientras que mesa entró del español y se quedó a vivir en la misma habitación.",
        en: "And once again two origins share the room: okẽ (door), ovetã (window) and apyka (chair, related to guapy, to sit) are Guaraní, while mesa walked in from Spanish and stayed." }
    ],
    points: [
      { es: "Triforme: óga → che róga → hóga.", en: "Triform: óga → che róga → hóga." },
      { es: "tupa = cama · Tupã = trueno, Dios. La nariz manda.", en: "tupa = bed · Tupã = thunder, God. The nose rules." },
      { es: "El sustantivo no cambia en plural: mokõi okẽ = dos puertas.", en: "Nouns don't change for plural: mokõi okẽ = two doors." },
      { es: "apyka viene de guapy (sentarse): «lugar para sentarse».", en: "apyka comes from guapy (to sit): \"a place to sit\"." }
    ],
    examples: [
      { gn: "Che róga michĩ", es: "Mi casa es chiquita", en: "My house is small" },
      { gn: "Emboty okẽ", es: "Cerrá la puerta", en: "Close the door" },
      { gn: "Oĩ mokõi apyka ko'ápe", es: "Hay dos sillas acá", en: "There are two chairs here" }
    ],
    culture: {
      title: { es: "Tupã, el trueno que se volvió Dios", en: "Tupã, the thunder that became God" },
      body: { es: "Para los guaraníes antiguos Tupã no era el creador supremo sino un espíritu asociado al trueno y a la tormenta. Cuando los jesuitas tradujeron el catecismo eligieron esa palabra para nombrar al Dios cristiano, y así quedó. Hoy Tupão significa iglesia: literalmente, «la casa de Tupã».",
              en: "For the old Guaraní, Tupã was not the supreme creator but a spirit tied to thunder and storms. When the Jesuits translated the catechism they chose that word for the Christian God, and it stuck. Today Tupão means church: literally, \"Tupã's house\"." }
    }
  },

  "g4:3": {
    focus: { es: "Objetos cotidianos — y el sufijo -ha, la fábrica de palabras del guaraní.",
             en: "Everyday objects — and the suffix -ha, Guaraní's word factory." },
    intro: [
      { es: "Haihá significa lápiz, y está construido a la vista: hai es escribir o dibujar, y -ha es un sufijo que señala el instrumento, el lugar o la persona de una acción. Haihá es «la cosa para escribir».",
        en: "Haihá means pencil, and it's built in plain sight: hai is to write or draw, and -ha is a suffix marking the instrument, the place or the person of an action. Haihá is \"the thing for writing\"." },
      { es: "Este sufijo es uno de los más productivos del idioma y lo vas a reencontrar por todas partes: mbo'e es enseñar, así que mbo'ehára es el que enseña (maestro) y mbo'ehao es el lugar donde se enseña (escuela). Incluso el nombre de esta app sale de ahí.",
        en: "This suffix is one of the language's most productive, and you'll meet it everywhere: mbo'e is to teach, so mbo'ehára is the one who teaches (teacher) and mbo'ehao is the place where teaching happens (school). Even this app's name comes from there." },
      { es: "La otra estrategia guaraní es juntar dos palabras y describir: akã (cabeza) + ao (ropa) = akãngao, «ropa de cabeza», sombrero. Y kuatia, que hoy significa papel, libro y documento, antes quería decir dibujo — la palabra para escribir nació de la palabra para dibujar.",
        en: "Guaraní's other strategy is to join two words and describe: akã (head) + ao (clothing) = akãngao, \"head-clothing\", a hat. And kuatia, which today means paper, book and document, once meant drawing — the word for writing grew out of the word for drawing." }
    ],
    points: [
      { es: "-ha convierte un verbo en instrumento, lugar o persona.", en: "-ha turns a verb into an instrument, a place or a person." },
      { es: "hai (escribir) + -ha = haihá (lápiz).", en: "hai (to write) + -ha = haihá (pencil)." },
      { es: "akã + ao = akãngao. El guaraní prefiere describir a prestar.", en: "akã + ao = akãngao. Guaraní prefers describing over borrowing." },
      { es: "sapatu sí es préstamo: viene de «zapato».", en: "sapatu is a loan, though: it comes from Spanish \"zapato\"." }
    ],
    examples: [
      { gn: "Che kuatia pyahu", es: "Mi cuaderno es nuevo", en: "My notebook is new" },
      { gn: "Ahai che réra", es: "Escribo mi nombre", en: "I write my name" },
      { gn: "Amoĩ che akãngao", es: "Me pongo el sombrero", en: "I put on my hat" }
    ],
    culture: {
      title: { es: "Ñandutí, la tela de araña", en: "Ñandutí, the spider's web" },
      body: { es: "El encaje más famoso del Paraguay se llama ñandutí, que en guaraní significa literalmente «tela de araña» (ñandu = araña). Se teje en círculos radiales imitando la telaraña bajo el rocío. Otro textil emblemático es el ao po'i — ao (ropa) y po'i (fino) —, el «tejido fino» bordado a mano en Yataity.",
              en: "Paraguay's most famous lace is called ñandutí, which in Guaraní literally means \"spider web\" (ñandu = spider). It's woven in radiating circles imitating a web under dew. Another emblematic textile is ao po'i — ao (cloth) and po'i (fine) — the hand-embroidered \"fine weave\" of Yataity." }
    }
  },

  /* ==================== GRADE 5 — Pronombres y preguntas ==================== */

  "g5:0": {
    focus: { es: "Los pronombres — y el «nosotros» que el español no puede decir.",
             en: "The pronouns — and the \"we\" that English can't say." },
    intro: [
      { es: "El guaraní tiene siete pronombres y no seis, porque parte el «nosotros» en dos. Ñande incluye a la persona con la que hablás («vos y yo»); ore la deja afuera («nosotros, pero no vos»). No es un matiz: elegir mal cambia a quién estás invitando.",
        en: "Guaraní has seven pronouns rather than six, because it splits \"we\" in two. Ñande includes the person you're talking to (\"you and I\"); ore leaves them out (\"us, but not you\"). It isn't a nuance: picking the wrong one changes who you're including." },
      { es: "Ñande retã dicho a otro paraguayo significa «nuestra patria, la tuya y la mía». Ore retã dicho a un extranjero significa «nuestra patria, no la tuya». Los hablantes toman esa decisión todo el tiempo, sin pensarla.",
        en: "Ñande retã said to a fellow Paraguayan means \"our homeland, yours and mine\". Ore retã said to a foreigner means \"our homeland, not yours\". Speakers make that choice constantly, without thinking about it." },
      { es: "Como el verbo ya marca la persona, el pronombre es opcional: se usa para enfatizar o contrastar. Aha alcanza para decir «voy»; Che aha subraya que voy yo y no otro.",
        en: "Since the verb already marks person, the pronoun is optional — you use it to emphasise or contrast. Aha is enough for \"I'm going\"; Che aha stresses that I'm the one going, not someone else." }
    ],
    points: [
      { es: "ñande = nosotros con vos · ore = nosotros sin vos.", en: "ñande = we including you · ore = we excluding you." },
      { es: "El pronombre es opcional: el verbo ya marca quién.", en: "The pronoun is optional: the verb already marks who." },
      { es: "ha'e vale para él y para ella: no se marca el género.", en: "ha'e covers both he and she: gender isn't marked." },
      { es: "-kuéra forma el plural: ha'e → ha'ekuéra.", en: "-kuéra makes the plural: ha'e → ha'ekuéra." }
    ],
    examples: [
      { gn: "Ñande jaha", es: "Vamos (vos y yo)", en: "Let's go (you and I)" },
      { gn: "Ore roho", es: "Nosotros vamos (sin vos)", en: "We're going (without you)" },
      { gn: "Ha'e omba'apo, che ake", es: "Él trabaja, yo duermo", en: "He works, I sleep" }
    ],
    culture: {
      title: { es: "Ñande, una palabra política", en: "Ñande, a political word" },
      body: { es: "La distinción entre ñande y ore se vuelve retórica pública: los políticos paraguayos dicen ñande retã para incluir al oyente, y los movimientos sociales hablan de ñane ñe'ẽ, «nuestra lengua». Elegir ñande es un gesto de pertenencia compartida — por eso vas a reencontrar esa palabra en el último grado.",
              en: "The ñande/ore distinction turns into public rhetoric: Paraguayan politicians say ñande retã to fold the listener in, and social movements speak of ñane ñe'ẽ, \"our language\". Choosing ñande is a gesture of shared belonging — which is why you'll meet the word again in the final grade." }
    }
  },

  "g5:1": {
    focus: { es: "Decir «mío» — y la palabra mba'e, que está escondida por todos lados.",
             en: "Saying \"mine\" — and mba'e, the word hiding everywhere." },
    intro: [
      { es: "Ya usaste che y nde delante del sustantivo. El juego completo es: che (mi), nde (tu), i- / h- / iñ- (su), ñande u ore (nuestro) y pende (de ustedes). Y recordá que algunos sustantivos cambian de forma: óga → che róga → hóga.",
        en: "You've already used che and nde before a noun. The full set is: che (my), nde (your), i- / h- / iñ- (his/her), ñande or ore (our) and pende (your, plural). And remember that some nouns change shape: óga → che róga → hóga." },
      { es: "Para decir «es mío» se usa che mba'e. Mba'e significa cosa, así que literalmente estás diciendo «mi cosa». Simple — pero esa palabra es una de las más importantes del idioma.",
        en: "To say \"it's mine\" you use che mba'e. Mba'e means thing, so you're literally saying \"my thing\". Simple — but that word is one of the most important in the language." },
      { es: "Mba'e está adentro de media lengua: mba'épa (¿qué?), mba'érepa (¿por qué?), mba'éichapa (¿cómo?) y hasta amba'apo, el verbo trabajar, que es mba'e + apo: «hacer cosas». Trabajar, en guaraní, es literalmente hacer cosas.",
        en: "Mba'e sits inside half the language: mba'épa (what?), mba'érepa (why?), mba'éichapa (how?) and even amba'apo, the verb to work, which is mba'e + apo: \"to do things\". Working, in Guaraní, is literally thing-doing." }
    ],
    points: [
      { es: "che / nde / i-h-iñ- / ñande-ore / pende.", en: "che / nde / i-h-iñ- / ñande-ore / pende." },
      { es: "mba'e = cosa. Che mba'e = «mi cosa» = es mío.", en: "mba'e = thing. Che mba'e = \"my thing\" = it's mine." },
      { es: "amba'apo es literalmente «hago cosas».", en: "amba'apo literally means \"I do things\"." },
      { es: "Los triformes cambian la inicial: t- → r- → h-.", en: "Triform nouns shift their first letter: t- → r- → h-." }
    ],
    examples: [
      { gn: "Ko kuatia che mba'e", es: "Este libro es mío", en: "This book is mine" },
      { gn: "Nde róga mombyry", es: "Tu casa está lejos", en: "Your house is far away" },
      { gn: "Hóga oĩ ko'ápe", es: "Su casa está acá", en: "Her house is here" }
    ],
    culture: {
      title: { es: "El «che» que viajó a Argentina", en: "The \"che\" that travelled to Argentina" },
      body: { es: "El famoso che rioplatense — el que le dio el apodo a Ernesto «Che» Guevara — viene con mucha probabilidad de este mismo che guaraní, que significa «yo» y «mi». Una de las explicaciones más aceptadas es que pasó al español de la región por contacto con el guaraní. Cada vez que alguien dice «che, vení», está usando un pronombre guaraní.",
              en: "The famous Rioplatense che — the one that nicknamed Ernesto \"Che\" Guevara — most likely comes from this very Guaraní che, meaning \"I\" and \"my\". One widely accepted account has it entering regional Spanish through contact with Guaraní. Every time someone says \"che, come here\", they're using a Guaraní pronoun." }
    }
  },

  "g5:2": {
    focus: { es: "Preguntar — la familia mba'e y la partícula -pa.",
             en: "Asking questions — the mba'e family and the -pa particle." },
    intro: [
      { es: "Desde el grado 1 sabés que -pa al final convierte una palabra en pregunta. Ahora mirá la lista entera: mávapa, mba'épa, moõpa, araka'épa, mba'érepa, mboýpa. Todas terminan igual. Aprender a preguntar en guaraní es, sobre todo, aprender a pegar -pa.",
        en: "Since grade 1 you've known that -pa at the end turns a word into a question. Now look at the whole list: mávapa, mba'épa, moõpa, araka'épa, mba'érepa, mboýpa. They all end the same way. Learning to ask questions in Guaraní is mostly learning to attach -pa." },
      { es: "Y hay un segundo ahorro: tres de esas preguntas salen de mba'e (cosa). Mba'épa es «¿qué?». Mba'érepa es mba'e + -re (sobre) + -pa: «¿sobre qué cosa?» = ¿por qué? Mba'éichapa es mba'e + -icha (como) + -pa: «¿cómo qué cosa?» = ¿cómo? Una sola raíz genera tres preguntas.",
        en: "And there's a second saving: three of those questions come from mba'e (thing). Mba'épa is \"what?\". Mba'érepa is mba'e + -re (about) + -pa: \"about what thing?\" = why? Mba'éichapa is mba'e + -icha (like) + -pa: \"like what thing?\" = how? One root generates three questions." },
      { es: "La -pa también sirve para preguntas de sí o no, pegada directamente al verbo: Reikuaa es «sabés» y Reikuaápa es «¿sabés?». No hace falta cambiar el orden ni la entonación.",
        en: "The -pa also makes yes/no questions, attached straight onto the verb: Reikuaa is \"you know\" and Reikuaápa is \"do you know?\". No word-order change, no change of intonation." }
    ],
    points: [
      { es: "Casi toda pregunta lleva -pa al final.", en: "Almost every question carries -pa at the end." },
      { es: "mba'e (cosa) genera qué, por qué y cómo.", en: "mba'e (thing) generates what, why and how." },
      { es: "-pa sobre un verbo = pregunta de sí o no: Reipotápa?", en: "-pa on a verb = a yes/no question: Reipotápa?" },
      { es: "máva pregunta por personas; mba'e, por cosas.", en: "máva asks about people; mba'e about things." }
    ],
    examples: [
      { gn: "Moõpa reho?", es: "¿A dónde vas?", en: "Where are you going?" },
      { gn: "Mba'érepa nde ñembyasy?", es: "¿Por qué estás triste?", en: "Why are you sad?" },
      { gn: "Reikuaápa mba'épa he'ise?", es: "¿Sabés qué significa?", en: "Do you know what it means?" }
    ],
    culture: {
      title: { es: "Piko, la partícula que se pasó al español", en: "Piko, the particle that crossed over" },
      body: { es: "Junto a -pa existe piko, una partícula interrogativa con matiz de sorpresa o énfasis. Los paraguayos la usan tanto que la incorporaron a su español: «¿Qué piko?», «¿Por qué piko?». Es una de las marcas más reconocibles del castellano paraguayo — gramática guaraní hablando en español.",
              en: "Alongside -pa there's piko, a question particle with a shade of surprise or emphasis. Paraguayans use it so much that it crossed into their Spanish: \"¿Qué piko?\", \"¿Por qué piko?\". It's one of the most recognisable marks of Paraguayan Spanish — Guaraní grammar speaking Spanish." }
    }
  },

  "g5:3": {
    focus: { es: "La segunda familia de verbos: los estados, que se conjugan como posesivos.",
             en: "The second verb family: states, conjugated like possessives." },
    intro: [
      { es: "Esta es una de las ideas más importantes de todo el guaraní. El grado 4 te dio los verbos areales, los de acción, con a-, re-, o-. Existe una segunda familia entera, los chendales, que no aceptan a-: se conjugan con los mismos prefijos posesivos che-, nde-, i-/h-. El nombre sale de che-nde-i.",
        en: "This is one of the most important ideas in all of Guaraní. Grade 4 gave you the areal verbs, the action ones, with a-, re-, o-. There's a whole second family, the chendal verbs, which don't take a-: they conjugate with the very same possessive prefixes che-, nde-, i-/h-. The name comes from che-nde-i." },
      { es: "Che rasy no está armado como akaru. Literalmente dice «mi dolor», y se traduce «estoy enfermo». Por eso la conjugación es che rasy, nde rasy, hasy — exactamente la misma maquinaria de che róga, nde róga, hóga.",
        en: "Che rasy isn't built like akaru. It literally says \"my ache\", and translates as \"I'm sick\". That's why the conjugation runs che rasy, nde rasy, hasy — exactly the same machinery as che róga, nde róga, hóga." },
      { es: "Esto trae una consecuencia enorme: el guaraní no tiene el verbo «tener». Che róga no significa solo «mi casa», también significa «tengo casa» — «mi casa existe». Los estados, los sentimientos y la posesión usan todos esta familia.",
        en: "This has an enormous consequence: Guaraní has no verb \"to have\". Che róga doesn't just mean \"my house\", it also means \"I have a house\" — \"my house exists\". States, feelings and possession all use this family." }
    ],
    points: [
      { es: "Chendales: che- / nde- / i-h-. Describen estados.", en: "Chendal: che- / nde- / i-h-. They describe states." },
      { es: "No existe el verbo «tener»: che róga = tengo casa.", en: "There's no verb \"to have\": che róga = I have a house." },
      { es: "Areales = hacer · chendales = estar, ser, tener.", en: "Areal = doing · chendal = being, feeling, having." },
      { es: "Se niegan igual que los otros: nd- … -i.", en: "They negate the same way: nd- … -i." }
    ],
    examples: [
      { gn: "Che rasy ko ára", es: "Hoy estoy enfermo", en: "I'm sick today" },
      { gn: "Nde kane'õpa?", es: "¿Estás cansado?", en: "Are you tired?" },
      { gn: "Che ñembyahýi ha che vy'a", es: "Tengo hambre y estoy contento", en: "I'm hungry and I'm happy" }
    ],
    culture: {
      title: { es: "Sentir es tener", en: "To feel is to have" },
      body: { es: "Fijate en la lógica: en guaraní no «sos» tu estado, lo tenés. No decís «estoy triste» sino «mi tristeza». Sumado a que las emociones viven en el py'a (el vientre) y no en el corazón, el resultado es una manera distinta de pensar el sentimiento: algo que te ocurre y te habita, no algo que te define.",
              en: "Notice the logic: in Guaraní you don't *be* your state, you have it. You don't say \"I am sad\" but \"my sadness\". Add that emotions live in the py'a (the belly) rather than the heart, and you get a different way of thinking about feeling: something that happens to you and dwells in you, not something that defines you." }
    }
  },

  /* ==================== GRADE 6 — Adjetivos y naturaleza ==================== */

  "g6:0": {
    focus: { es: "Los adjetivos — que van detrás del sustantivo y ya son verbos.",
             en: "Adjectives — they follow the noun and are already verbs." },
    intro: [
      { es: "En el grado 2, con los colores, viste que los adjetivos guaraníes se comportan como verbos y llevan el «ser» adentro. Vale para todos: óga guasu significa a la vez «casa grande» y «la casa es grande». El contexto decide, y no hace falta ningún verbo extra.",
        en: "In grade 2, with the colours, you saw that Guaraní adjectives behave like verbs and carry \"to be\" inside them. It holds for all of them: óga guasu means both \"big house\" and \"the house is big\". Context decides, and no extra verb is needed." },
      { es: "Vienen en parejas fáciles de guardar: guasu / michĩ (grande / chico), pyahu / tuja (nuevo / viejo), porã / vai (lindo-bueno / feo-malo). Porã es una de las palabras más útiles del idioma: cubre bueno, lindo, bien y correcto.",
        en: "They come in pairs that are easy to remember: guasu / michĩ (big / small), pyahu / tuja (new / old), porã / vai (nice-good / ugly-bad). Porã is one of the most useful words in the language: it covers good, pretty, well and properly." },
      { es: "Con el prefijo i- de tercera persona, porã se vuelve iporã: «(eso) es bueno» — el «bien» que ya contestabas en el grado 1. Y para intensificar hay un sufijo carísimo de usar: -eterei. Iporãiterei es «buenísimo».",
        en: "With the third-person prefix i-, porã becomes iporã: \"(it) is good\" — the very \"fine\" you were answering with back in grade 1. And to intensify there's a cheap and cheerful suffix: -eterei. Iporãiterei is \"absolutely lovely\"." }
    ],
    points: [
      { es: "El adjetivo va siempre después: jagua guasu.", en: "The adjective always follows: jagua guasu." },
      { es: "Ya incluye «ser»: Óga pyahu = la casa es nueva.", en: "It already includes \"to be\": Óga pyahu = the house is new." },
      { es: "i- delante lo pone en tercera persona: iporã, ivai.", en: "i- in front puts it in third person: iporã, ivai." },
      { es: "-eterei intensifica: tuichaiterei, iporãiterei.", en: "-eterei intensifies: tuichaiterei, iporãiterei." }
    ],
    examples: [
      { gn: "Che róga pyahu", es: "Mi casa es nueva", en: "My house is new" },
      { gn: "Ko yvoty iporãiterei", es: "Esta flor es lindísima", en: "This flower is absolutely gorgeous" },
      { gn: "Jagua michĩ ha mbarakaja guasu", es: "Perro chico y gato grande", en: "A small dog and a big cat" }
    ],
    culture: {
      title: { es: "Porã, la palabra comodín", en: "Porã, the all-purpose word" },
      body: { es: "Porã aparece por todo el país: en el saludo iporã, en nombres de lugares y proyectos, en teko porã («buen vivir», que vas a estudiar en el grado 10) y hasta en el español paraguayo, donde se escucha «está porã». Si tuvieras que llevarte una sola palabra guaraní de viaje, probablemente sería esta.",
              en: "Porã turns up all over the country: in the greeting iporã, in the names of places and projects, in teko porã (\"good living\", which you'll study in grade 10) and even in Paraguayan Spanish, where you'll hear \"está porã\". If you could take just one Guaraní word travelling with you, this would probably be it." }
    }
  },

  "g6:1": {
    focus: { es: "Hablar del clima — donde el guaraní prefiere verbos a sustantivos.",
             en: "Talking about the weather — where Guaraní prefers verbs to nouns." },
    intro: [
      { es: "Ama es el sustantivo lluvia, pero en la conversación real casi nunca se usa solo: se dice oky, «llueve», con el prefijo o- de tercera persona que ya conocés. Donde el español pone un sustantivo, el guaraní suele poner un verbo.",
        en: "Ama is the noun rain, but in real conversation you rarely use it alone: people say oky, \"it's raining\", with the third-person o- prefix you already know. Where Spanish or English put a noun, Guaraní tends to put a verb." },
      { es: "El frío y el calor usan la maquinaria del grado 5. Che ro'y es literalmente «mi frío» = tengo frío; haku es «(eso) es caliente» = hace calor. Fijate que el frío se tiene y el calor simplemente es: el clima es un estado, igual que estar cansado.",
        en: "Cold and heat use grade 5's machinery. Che ro'y is literally \"my cold\" = I'm cold; haku is \"(it) is hot\" = it's hot. Notice that cold is something you have and heat just is: weather is a state, exactly like being tired." },
      { es: "Y volvé a mirar ára porã. Ára, como viste en el grado 3, significa día, tiempo, cielo y clima a la vez. Por eso «buen tiempo» y «buen momento» se dicen igual: hablar del clima y hablar del día son la misma conversación.",
        en: "And look again at ára porã. Ára, as you saw in grade 3, means day, time, sky and weather all at once. That's why \"good weather\" and \"a good moment\" are said the same way: talking about the weather and talking about the day are the same conversation." }
    ],
    points: [
      { es: "ama = lluvia (sustantivo) · oky = llueve (verbo).", en: "ama = rain (noun) · oky = it rains (verb)." },
      { es: "che ro'y = tengo frío · haku = hace calor.", en: "che ro'y = I'm cold · haku = it's hot." },
      { es: "-hína marca acción en curso: okyhína, está lloviendo.", en: "-hína marks ongoing action: okyhína, it's raining now." },
      { es: "ára porã sirve para «buen tiempo» y «buen momento».", en: "ára porã covers both \"good weather\" and \"a good time\"." }
    ],
    examples: [
      { gn: "Okyhína", es: "Está lloviendo", en: "It's raining" },
      { gn: "Haku eterei ko'ágã", es: "Hace muchísimo calor ahora", en: "It's boiling hot right now" },
      { gn: "Che ro'y, aipota kamby haku", es: "Tengo frío, quiero leche caliente", en: "I'm cold, I want warm milk" }
    ],
    culture: {
      title: { es: "Un país de calor", en: "A country of heat" },
      body: { es: "Paraguay es uno de los países más calurosos de Sudamérica: en verano se pasan semanas por encima de los 40 grados. De ahí salen dos instituciones nacionales: la siesta, que vacía las ciudades al mediodía, y el tereré, el mate frío que se toma todo el día y que vas a estudiar en el grado 10.",
              en: "Paraguay is one of South America's hottest countries: summer brings weeks above 40°C. Two national institutions grow out of that: the siesta, which empties the cities at midday, and tereré, the cold mate drunk all day long, which you'll study in grade 10." }
    }
  },

  "g6:2": {
    focus: { es: "La naturaleza — y la familia de palabras que sale de y (agua) e yvy (tierra).",
             en: "Nature — and the word family growing out of y (water) and yvy (earth)." },
    intro: [
      { es: "Mirá la lista de esta lección con atención: yvyra, yvoty, yvy, yvytu, yvága, ysyry. Casi todas empiezan con y. No es casualidad ni capricho ortográfico: en el grado 1 aprendiste que y es agua e yvy es tierra, y prácticamente todo el vocabulario de la naturaleza está construido sobre esas dos raíces.",
        en: "Look carefully at this lesson's list: yvyra, yvoty, yvy, yvytu, yvága, ysyry. Nearly all of them start with y. That's neither coincidence nor a spelling quirk: in grade 1 you learned that y is water and yvy is earth, and virtually the whole vocabulary of nature is built on those two roots." },
      { es: "De yvy (tierra) salen yvyra (el árbol, lo que se levanta de la tierra), yvytu (el viento, el aire sobre la tierra), yvága (el cielo, lo que está arriba) e yvoty (la flor). De y (agua) sale ysyry, el arroyo — el agua que se desliza, de syry, deslizarse.",
        en: "From yvy (earth) come yvyra (the tree, what rises from the ground), yvytu (the wind, the air over the land), yvága (the sky, what lies above) and yvoty (the flower). From y (water) comes ysyry, the stream — water that slides, from syry, to slide." },
      { es: "Ka'aguy rompe el molde y es igual de transparente: ka'a significa hierba o hoja — la misma ka'a de la yerba mate — y guy es «debajo». El monte es, literalmente, «debajo de las hojas».",
        en: "Ka'aguy breaks the pattern and is just as transparent: ka'a means herb or leaf — the same ka'a as yerba mate — and guy is \"under\". The forest is, literally, \"under the leaves\"." }
    ],
    points: [
      { es: "y = agua · yvy = tierra. Son la raíz de casi todo.", en: "y = water · yvy = earth. They're the root of nearly everything." },
      { es: "ysyry = agua que corre, de syry (deslizarse).", en: "ysyry = running water, from syry (to slide)." },
      { es: "ka'aguy = ka'a (hoja) + guy (debajo).", en: "ka'aguy = ka'a (leaf) + guy (under)." },
      { es: "Reconocer raíces te ahorra memorizar palabras sueltas.", en: "Spotting roots saves you memorising isolated words." }
    ],
    examples: [
      { gn: "Ka'aguy hovyũ", es: "El monte es verde", en: "The forest is green" },
      { gn: "Oĩ peteĩ ysyry ko'ápe", es: "Hay un arroyo acá", en: "There's a stream here" },
      { gn: "Yvytu oipeju yvyra rehe", es: "El viento sopla sobre los árboles", en: "The wind blows over the trees" }
    ],
    culture: {
      title: { es: "Ka'a, la planta que se volvió costumbre", en: "Ka'a, the plant that became a custom" },
      body: { es: "La yerba mate (ka'a) fue domesticada por los guaraníes mucho antes de la llegada de los europeos, y ellos la difundieron por todo el Cono Sur. La leyenda cuenta que Ka'a Jarýi, la dueña de la yerba, la entregó como regalo a un anciano que la había tratado con respeto. Hoy media Sudamérica toma mate gracias a esa planta.",
              en: "Yerba mate (ka'a) was domesticated by the Guaraní long before Europeans arrived, and they spread it across the Southern Cone. Legend tells that Ka'a Jarýi, the keeper of the herb, gave it as a gift to an old man who had treated her with respect. Half of South America drinks mate today thanks to that plant." }
    }
  },

  "g6:3": {
    focus: { es: "Armar oraciones — el orden de las palabras y todo lo que el guaraní no necesita.",
             en: "Building sentences — word order, and everything Guaraní doesn't need." },
    intro: [
      { es: "Ya tenés todas las piezas; esta lección solo las ordena. La regla central es que el adjetivo va después del sustantivo, y los demostrativos ko (este) y pe (ese, aquel) van antes. Juntando las dos: pe yvyra guasu = «aquel árbol grande».",
        en: "You already have all the pieces; this lesson just arranges them. The core rule is that the adjective follows the noun, while the demonstratives ko (this) and pe (that) come before it. Put both together: pe yvyra guasu = \"that big tree\"." },
      { es: "Y ahora la parte liberadora: el guaraní no tiene artículos. No existe «el», «la» ni «un». Óga solo puede significar casa, una casa o la casa, según el contexto. Tampoco hay verbo «ser». Tampoco hace falta el pronombre.",
        en: "And now the liberating part: Guaraní has no articles. There is no \"the\" and no \"a\". Óga on its own can mean house, a house or the house, depending on context. Nor is there a verb \"to be\". Nor do you need the pronoun." },
      { es: "El resultado es que dos palabras bastan para una oración completa: Yvoty porã. Puede significar «flor linda» o «la flor es linda», y esa ambigüedad no es un defecto: es la economía del idioma, la misma que en el grado 10 hace posible la poesía.",
        en: "The upshot is that two words make a complete sentence: Yvoty porã. It can mean \"pretty flower\" or \"the flower is pretty\", and that ambiguity isn't a flaw: it's the language's economy — the same economy that makes the poetry of grade 10 possible." }
    ],
    points: [
      { es: "ko = este · pe = ese/aquel. Van adelante.", en: "ko = this · pe = that. They go in front." },
      { es: "El adjetivo va detrás del sustantivo.", en: "The adjective goes after the noun." },
      { es: "No hay artículos ni verbo «ser».", en: "There are no articles and no verb \"to be\"." },
      { es: "ha une palabras y oraciones: iporã ha michĩ.", en: "ha joins words and clauses: iporã ha michĩ." }
    ],
    examples: [
      { gn: "Ko óga pyahu", es: "Esta casa es nueva", en: "This house is new" },
      { gn: "Pe yvyra guasu", es: "Aquel árbol grande", en: "That big tree" },
      { gn: "Che jagua michĩ ha iporã", es: "Mi perro es chiquito y lindo", en: "My dog is small and sweet" }
    ],
    culture: {
      title: { es: "Decir mucho con poco", en: "Saying a lot with a little" },
      body: { es: "Esa capacidad de construir una oración con dos palabras es la razón de que el guaraní sea tan bueno para los refranes y la poesía. Los ñe'ẽnga, los dichos populares que vas a ver en el grado 10, suelen tener tres o cuatro palabras y decir un párrafo entero. La economía gramatical se convierte en recurso literario.",
              en: "That ability to build a sentence out of two words is why Guaraní is so good at proverbs and poetry. The ñe'ẽnga, the popular sayings you'll meet in grade 10, tend to run three or four words and say a whole paragraph. Grammatical economy turns into a literary resource." }
    }
  },

  /* ==================== GRADE 7 — Tiempos verbales ==================== */

  "g7:0": {
    focus: { es: "El pasado — y la sorpresa de que el verbo guaraní no marca el tiempo.",
             en: "The past — and the surprise that Guaraní verbs don't mark tense." },
    intro: [
      { es: "Antes de aprender el pasado hay que entender algo raro para un hispanohablante: el verbo guaraní no lleva tiempo. Akaru puede significar «como», «estoy comiendo» o «comí», según de qué se esté hablando. No es que falte información: es que el tiempo lo aporta el contexto.",
        en: "Before learning the past you need to grasp something odd for a Spanish or English speaker: the Guaraní verb carries no tense. Akaru can mean \"I eat\", \"I'm eating\" or \"I ate\", depending on what's being talked about. It isn't missing information — the time comes from context." },
      { es: "Por eso, muchas veces alcanza con poner una palabra de tiempo: Kuehe akaru ya es «ayer comí», sin tocar el verbo. El guaraní marca el tiempo solo cuando hace falta marcarlo.",
        en: "That's why a time word is often enough on its own: Kuehe akaru already means \"yesterday I ate\", with the verb untouched. Guaraní marks tense only when marking it matters." },
      { es: "Cuando querés marcarlo, -kuri señala un pasado reciente y se escribe separado: akaru kuri, «recién comí». Para un pasado más lejano o terminado existe -va'ekue, que sí va pegado.",
        en: "When you do want to mark it, -kuri points to a recent past and is written separately: akaru kuri, \"I just ate\". For a more distant or completed past there's -va'ekue, which does attach." }
    ],
    points: [
      { es: "El verbo no marca tiempo por defecto: lo hace el contexto.", en: "The verb doesn't mark tense by default: context does." },
      { es: "-kuri = pasado reciente, y va separado del verbo.", en: "-kuri = recent past, written separately from the verb." },
      { es: "Un adverbio como kuehe ya ubica la acción.", en: "A time word like kuehe already places the action." },
      { es: "-va'ekue marca un pasado lejano o concluido.", en: "-va'ekue marks a distant or completed past." }
    ],
    examples: [
      { gn: "Kuehe aha mbo'ehaópe", es: "Ayer fui a la escuela", en: "Yesterday I went to school" },
      { gn: "Akaru kuri", es: "Recién comí", en: "I just ate" },
      { gn: "Ake porã kuri", es: "Dormí bien", en: "I slept well" }
    ],
    culture: {
      title: { es: "El tiempo vive en los sustantivos", en: "Tense lives on the nouns" },
      body: { es: "Acá viene una rareza que fascina a los lingüistas: el guaraní marca el tiempo en los sustantivos. Con -kue decís lo que algo fue y con -rã lo que va a ser. Che rógakue es «mi ex casa», che rógarã es «mi futura casa», che ménakue es «mi ex marido». Donde el español necesita una frase entera, el guaraní usa una sílaba — y lo hace en el sustantivo, no en el verbo.",
              en: "Here's an oddity that fascinates linguists: Guaraní marks tense on nouns. With -kue you say what something used to be, with -rã what it is going to be. Che rógakue is \"my former house\", che rógarã is \"my future house\", che ménakue is \"my ex-husband\". Where Spanish or English need a whole phrase, Guaraní uses one syllable — and puts it on the noun, not the verb." }
    }
  },

  "g7:1": {
    focus: { es: "El futuro con -ta — que se pega al verbo y le corre el acento.",
             en: "The future with -ta — it attaches to the verb and shifts the stress." },
    intro: [
      { es: "El futuro es más simple que el pasado: se pega -ta al final del verbo, sin espacio. Aha → ahata (iré), akaru → akaruta (comeré). A diferencia de kuri, que va suelto, -ta forma una sola palabra con el verbo.",
        en: "The future is simpler than the past: you attach -ta to the end of the verb, no space. Aha → ahata (I'll go), akaru → akaruta (I'll eat). Unlike kuri, which stands apart, -ta forms a single word with the verb." },
      { es: "Y eso trae una consecuencia ortográfica. Como el acento guaraní cae por defecto en la última sílaba, al agregar -ta el acento se corre hacia ella. Si el verbo llevaba tilde escrita, hay que reescribirla: amba'apo se convierte en amba'apóta.",
        en: "And that has a spelling consequence. Since Guaraní stress falls by default on the last syllable, adding -ta pulls the stress onto it. If the verb carried a written accent, it has to be rewritten: amba'apo becomes amba'apóta." },
      { es: "-ta no expresa solo futuro, también intención y voluntad: Ahata es «iré» y también «pienso ir». En preguntas suena a ofrecimiento: Reipotápa? pregunta si querés; Rejapótapa? pregunta si lo vas a hacer.",
        en: "-ta expresses not only future but intention and willingness: Ahata is \"I will go\" and also \"I mean to go\". In questions it sounds like an offer: Reipotápa? asks whether you want to; Rejapótapa? asks whether you're going to do it." }
    ],
    points: [
      { es: "-ta se pega al verbo, sin espacio.", en: "-ta attaches to the verb, with no space." },
      { es: "El acento se corre a la última sílaba: amba'apóta.", en: "The stress shifts to the final syllable: amba'apóta." },
      { es: "-ta sirve para futuro y para intención.", en: "-ta covers both future and intention." },
      { es: "-ma significa «ya»: ahama, ya me voy.", en: "-ma means \"already\": ahama, I'm off now." }
    ],
    examples: [
      { gn: "Ko'ẽro ahata tavápe", es: "Mañana iré al pueblo", en: "Tomorrow I'll go to town" },
      { gn: "Mba'épa rejapóta?", es: "¿Qué vas a hacer?", en: "What are you going to do?" },
      { gn: "Akaruta ha upéi aketa", es: "Voy a comer y después a dormir", en: "I'm going to eat and then sleep" }
    ],
    culture: {
      title: { es: "-ma, el «ya» que está en todas partes", en: "-ma, the \"already\" that's everywhere" },
      body: { es: "Junto a -ta vas a escuchar constantemente -ma, que significa «ya»: ahama (ya me voy), oikéma (ya entró), iporãma (ya está bien). Los paraguayos trasladaron esa costumbre a su español, donde el «ya» aparece muchísimo más que en otros países: «ya me voy ya», «ya está ya». Es la gramática guaraní hablando castellano.",
              en: "Alongside -ta you'll constantly hear -ma, meaning \"already\": ahama (I'm off now), oikéma (it's already in), iporãma (it's fine now). Paraguayans carried that habit into their Spanish, where \"ya\" shows up far more than in other countries. It's Guaraní grammar speaking Castilian." }
    }
  },

  "g7:2": {
    focus: { es: "Los verbos reflexivos — y cómo la nasalidad decide qué prefijo usar.",
             en: "Reflexive verbs — and how nasality picks the prefix for you." },
    intro: [
      { es: "Mirá añembo'e, «estudio». Está armado en tres piezas: a- (yo) + ñe- (a mí mismo) + mbo'e (enseñar). Estudiar, en guaraní, es literalmente enseñarse a uno mismo. Ese ñe- del medio es el prefijo reflexivo.",
        en: "Look at añembo'e, \"I study\". It's built from three pieces: a- (I) + ñe- (myself) + mbo'e (to teach). Studying, in Guaraní, is literally teaching yourself. That ñe- in the middle is the reflexive prefix." },
      { es: "Y acá está el detalle bonito: el reflexivo tiene dos formas y la nasalidad elige cuál. Si la raíz es oral se usa je-; si es nasal se usa ñe-. Por eso ajahu (me baño) lleva je- y añembo'e lleva ñe-, porque mbo'e es nasal.",
        en: "And here's the lovely detail: the reflexive has two shapes and nasality chooses between them. If the root is oral you get je-; if it's nasal you get ñe-. That's why ajahu (I bathe) takes je- and añembo'e takes ñe-, because mbo'e is nasal." },
      { es: "O sea que la nasalidad que estudiaste en el grado 2 no era solo pronunciación: decide gramática. Todos los verbos de esta lección — añemongeta, añeñandu, añeha'ã — llevan ñe- por la misma razón.",
        en: "So the nasality you studied back in grade 2 wasn't only pronunciation: it decides grammar. Every verb in this lesson — añemongeta, añeñandu, añeha'ã — takes ñe- for the same reason." }
    ],
    points: [
      { es: "je- / ñe- = reflexivo, la acción vuelve sobre uno.", en: "je- / ñe- = reflexive, the action returns to the doer." },
      { es: "Se elige por nasalidad: je- si es oral, ñe- si es nasal.", en: "Nasality picks it: je- if oral, ñe- if nasal." },
      { es: "añembo'e = «me enseño» = estudio.", en: "añembo'e = \"I teach myself\" = I study." },
      { es: "mbo- convierte en causativo: mbo'e es «hacer saber».", en: "mbo- makes a causative: mbo'e is \"to make know\"." }
    ],
    examples: [
      { gn: "Añembo'e che rógape", es: "Estudio en mi casa", en: "I study at home" },
      { gn: "Ajahu ha upéi aha", es: "Me baño y después voy", en: "I bathe and then I go" },
      { gn: "Añeñandu porã ko'ágã", es: "Me siento bien ahora", en: "I feel good now" }
    ],
    culture: {
      title: { es: "Estudiar y rezar, la misma palabra", en: "Studying and praying, one word" },
      body: { es: "Añembo'e significa a la vez «estudio» y «rezo». La coincidencia no es casual: durante los siglos de las misiones jesuíticas aprender a leer y aprender el catecismo eran la misma actividad, hecha en el mismo lugar y con la misma palabra. El idioma conserva esa historia adentro de un verbo.",
              en: "Añembo'e means both \"I study\" and \"I pray\". The overlap is no accident: through the centuries of the Jesuit missions, learning to read and learning the catechism were the same activity, done in the same place under the same word. The language keeps that history inside a single verb." }
    }
  },

  "g7:3": {
    focus: { es: "Ubicar la acción en el tiempo — con palabras que nacen del amanecer.",
             en: "Placing actions in time — with words born from the dawn." },
    intro: [
      { es: "Ko'ẽro significa mañana, y está construido sobre ko'ẽ, «amanecer», más el sufijo -rõ que viste en las conjunciones: literalmente «cuando amanezca». Es la misma raíz del saludo del grado 1, Mba'éichapa neko'ẽ, «¿cómo amaneciste?».",
        en: "Ko'ẽro means tomorrow, and it's built on ko'ẽ, \"dawn\", plus the -rõ suffix you met in the conjunctions: literally \"when it dawns\". It's the same root as grade 1's greeting, Mba'éichapa neko'ẽ, \"how did you dawn?\"." },
      { es: "Ko'ágã (ahora) también se deja abrir: ko («este») + ãga («momento») = este momento. Y voi significa temprano, pero además «enseguida» y «de una»: un paraguayo lo usa las dos veces al día.",
        en: "Ko'ágã (now) also opens up: ko (\"this\") + ãga (\"moment\") = this moment. And voi means early, but also \"right away\" and \"straight off\": a Paraguayan uses it both ways every day." },
      { es: "Ára ha ára es «día y día» = todos los días. El guaraní repite una palabra para decir «cada» o para intensificar. Esa repetición, la reduplicación, es un recurso que vas a ver también en la poesía del grado 10.",
        en: "Ára ha ára is \"day and day\" = every day. Guaraní repeats a word to mean \"each\" or to intensify. That repetition — reduplication — is a device you'll also meet in grade 10's poetry." }
    ],
    points: [
      { es: "ko'ẽ = amanecer · ko'ẽro = mañana, «cuando amanezca».", en: "ko'ẽ = dawn · ko'ẽro = tomorrow, \"when it dawns\"." },
      { es: "ko'ágã = ko (este) + ãga (momento).", en: "ko'ágã = ko (this) + ãga (moment)." },
      { es: "Repetir una palabra significa «cada»: ára ha ára.", en: "Repeating a word means \"every\": ára ha ára." },
      { es: "Con un adverbio de tiempo no hace falta marcar el verbo.", en: "With a time word you needn't mark the verb at all." }
    ],
    examples: [
      { gn: "Ko'ẽro ahata mbo'ehaópe", es: "Mañana voy a la escuela", en: "Tomorrow I'm going to school" },
      { gn: "Kuehe oky", es: "Ayer llovió", en: "It rained yesterday" },
      { gn: "Ára ha ára añembo'e", es: "Estudio todos los días", en: "I study every day" }
    ],
    culture: {
      title: { es: "Ko'ẽ, el amanecer que canta", en: "Ko'ẽ, the singing dawn" },
      body: { es: "Ko'ẽ es una de las palabras favoritas de la canción paraguaya: aparece en títulos, en polcas y en guaranias, casi siempre asociada a la esperanza o al regreso. Ko'ẽju, «amanecer amarillo», nombra esa primera luz dorada, y da nombre a escuelas, radios y periódicos de todo el país.",
              en: "Ko'ẽ is a favourite of Paraguayan song: it shows up in titles, in polkas and guaranias, almost always tied to hope or homecoming. Ko'ẽju, \"yellow dawn\", names that first golden light, and lends its name to schools, radio stations and newspapers across the country." }
    }
  },

  /* ==================== GRADE 8 — Posposiciones y rutina ==================== */

  "g8:0": {
    focus: { es: "Las posposiciones — preposiciones que van detrás y se pegan a la palabra.",
             en: "Postpositions — prepositions that go behind and glue on." },
    intro: [
      { es: "En español «en», «de» y «con» van delante del sustantivo. En guaraní van detrás y pegadas: mbo'ehao + -pe = mbo'ehaópe, «a la escuela». Por eso no se llaman preposiciones sino posposiciones — la posición está en el nombre.",
        en: "In Spanish and English, \"in\", \"from\" and \"with\" come before the noun. In Guaraní they come after, glued on: mbo'ehao + -pe = mbo'ehaópe, \"to school\". That's why they're not prepositions but postpositions — the position is in the name." },
      { es: "Y otra vez aparece la nariz. La posposición -pe se convierte en -me después de una palabra nasal: ógape (en la casa) pero akãme (en la cabeza). Si venís siguiendo la nasalidad desde el grado 2, esto ya no te sorprende.",
        en: "And once again the nose turns up. The postposition -pe becomes -me after a nasal word: ógape (in the house) but akãme (on the head). If you've been tracking nasality since grade 2, this no longer surprises you." },
      { es: "El juego básico es corto: -pe (en, a), -gui (desde, de), -ndive (con), -rehe o -re (sobre, por), -peve (hasta). Ári, «encima de», es la excepción que se escribe suelta: mesa ári.",
        en: "The basic set is short: -pe (in, to), -gui (from), -ndive (with), -rehe or -re (about, for), -peve (until). Ári, \"on top of\", is the exception written separately: mesa ári." }
    ],
    points: [
      { es: "Van pegadas después del sustantivo, nunca delante.", en: "They attach after the noun, never before it." },
      { es: "-pe se vuelve -me después de palabra nasal.", en: "-pe becomes -me after a nasal word." },
      { es: "-gui también forma el «que» de las comparaciones.", en: "-gui also forms the \"than\" of comparisons." },
      { es: "ári se escribe separado: mesa ári, encima de la mesa.", en: "ári is written separately: mesa ári, on the table." }
    ],
    examples: [
      { gn: "Aha mbo'ehaópe", es: "Voy a la escuela", en: "I'm going to school" },
      { gn: "Aju che rógagui", es: "Vengo de mi casa", en: "I'm coming from my house" },
      { gn: "Aguata che irũ ndive", es: "Camino con mi amigo", en: "I walk with my friend" }
    ],
    culture: {
      title: { es: "El mapa está en guaraní", en: "The map is in Guaraní" },
      body: { es: "Los nombres de lugar del Paraguay y de sus vecinos son guaraní puro, y ahora podés desarmarlos: Yguasu es y (agua) + guasu (grande), «agua grande». Itaipú es ita (piedra) + pu (sonido), «la piedra que suena». Ypakarai, Areguá, Itauguá, Paraguay mismo: el mapa entero es un ejercicio de vocabulario.",
              en: "Place names across Paraguay and its neighbours are pure Guaraní, and you can now take them apart: Yguasu (Iguazú) is y (water) + guasu (big), \"big water\". Itaipú is ita (stone) + pu (sound), \"the singing stone\". Ypacaraí, Areguá, Itauguá, and Paraguay itself: the whole map is a vocabulary exercise." }
    }
  },

  "g8:1": {
    focus: { es: "Comparar — un solo sufijo, -ve, y el «que» que sale de -gui.",
             en: "Comparing — a single suffix, -ve, and a \"than\" made from -gui." },
    intro: [
      { es: "Para decir «más» no hace falta una palabra nueva: se pega -ve al adjetivo. Tuicha (grande) → tuichave (más grande). Porã → iporãve (mejor). Vai → ivaive (peor). Heta (mucho) → hetave (más). Un solo sufijo cubre todo el sistema.",
        en: "To say \"more\" you don't need a new word: you attach -ve to the adjective. Tuicha (big) → tuichave (bigger). Porã → iporãve (better). Vai → ivaive (worse). Heta (a lot) → hetave (more). One suffix covers the whole system." },
      { es: "¿Y el «que» de la comparación? No existe como palabra suelta: se usa la posposición -gui, la misma de «desde». Che tuichave ndegui es literalmente «yo grande-más desde vos» = soy más grande que vos.",
        en: "And the \"than\" of comparison? There's no separate word for it: you use the postposition -gui, the same one meaning \"from\". Che tuichave ndegui is literally \"I big-more from you\" = I'm bigger than you." },
      { es: "Para el superlativo se estira el mismo mecanismo: -eterei intensifica (iporãiterei, buenísimo) y opavavégui, «de todos», arma el «el más de todos».",
        en: "For the superlative you stretch the same mechanism: -eterei intensifies (iporãiterei, absolutely lovely) and opavavégui, \"from all\", builds \"the most of all\"." }
    ],
    points: [
      { es: "-ve = más. Se pega directamente al adjetivo.", en: "-ve = more. It attaches straight onto the adjective." },
      { es: "El «que» comparativo es -gui: tuichave ndegui.", en: "Comparative \"than\" is -gui: tuichave ndegui." },
      { es: "-eterei = muy, -ísimo: tuichaiterei.", en: "-eterei = very, -est: tuichaiterei." },
      { es: "heta = mucho · hetave = más en cantidad.", en: "heta = much · hetave = more in quantity." }
    ],
    examples: [
      { gn: "Che róga tuichave nde rógagui", es: "Mi casa es más grande que la tuya", en: "My house is bigger than yours" },
      { gn: "Kóva iporãve", es: "Este es mejor", en: "This one is better" },
      { gn: "Aipota hetave tembi'u", es: "Quiero más comida", en: "I want more food" }
    ],
    culture: {
      title: { es: "-ete, lo verdadero", en: "-ete, the true thing" },
      body: { es: "El intensificador -eterei viene de ete, que significa «verdadero, auténtico». Ese mismo ete está en jaguarete, «el jaguar verdadero» que conociste en el grado 2, y en guaraniete, el «guaraní verdadero» del que vas a hablar en el grado 11. Para el guaraní, intensificar algo es afirmar que es de verdad.",
              en: "The intensifier -eterei comes from ete, meaning \"true, genuine\". That same ete sits inside jaguarete, \"the true jaguar\" you met in grade 2, and inside guaraniete, the \"true Guaraní\" you'll discuss in grade 11. For Guaraní, intensifying something is asserting that it's the real thing." }
    }
  },

  "g8:2": {
    focus: { es: "Contar tu día — juntando verbos, reflexivos y posposiciones.",
             en: "Telling your day — verbs, reflexives and postpositions together." },
    intro: [
      { es: "Esta lección no trae gramática nueva: arma. Mirá lo que ya sabés dentro de cada palabra. Ajahu lleva el reflexivo je- del grado 7. Añembo'e lleva ñe- por nasalidad. Aha mbo'ehaópe lleva la posposición -pe de esta misma semana.",
        en: "This lesson brings no new grammar: it assembles. Look at what you already know inside each word. Ajahu carries the je- reflexive from grade 7. Añembo'e carries ñe- because of nasality. Aha mbo'ehaópe carries this week's -pe postposition." },
      { es: "Para encadenar acciones tenés tres piezas: upéi («después», va adelante) y riré («después de») y mboyve («antes de»), que son posposiciones de tiempo y por lo tanto van detrás del verbo: akaru riré = después de comer.",
        en: "To chain actions you have three pieces: upéi (\"then\", which goes in front) plus riré (\"after\") and mboyve (\"before\"), which are time postpositions and therefore follow the verb: akaru riré = after eating." },
      { es: "Agregá el -ma del grado 7 y ya podés narrar una mañana entera sin aprender nada nuevo: apáyma, ajahu, akaru riré aha mbo'ehaópe.",
        en: "Add grade 7's -ma and you can narrate a whole morning without learning anything new: apáyma, ajahu, akaru riré aha mbo'ehaópe." }
    ],
    points: [
      { es: "upéi = después, entonces. Va adelante.", en: "upéi = then, afterwards. It goes in front." },
      { es: "riré y mboyve van detrás del verbo.", en: "riré and mboyve go after the verb." },
      { es: "Media rutina lleva reflexivo: ajahu, añembo'e, aguapy.", en: "Half a routine is reflexive: ajahu, añembo'e, aguapy." },
      { es: "-ma agrega «ya»: apáyma, ya me desperté.", en: "-ma adds \"already\": apáyma, I'm already awake." }
    ],
    examples: [
      { gn: "Apáy voi ha ajahu", es: "Me despierto temprano y me baño", en: "I wake up early and bathe" },
      { gn: "Akaru riré aha mbo'ehaópe", es: "Después de comer voy a la escuela", en: "After eating I go to school" },
      { gn: "Ka'aru añembo'e che rógape", es: "A la tarde estudio en mi casa", en: "In the afternoon I study at home" }
    ],
    culture: {
      title: { es: "El día empieza temprano", en: "The day starts early" },
      body: { es: "Por el calor, la jornada paraguaya arranca de madrugada: muchas escuelas funcionan en dos turnos, mañana y tarde, y las clases del turno mañana pueden empezar a las siete. Al mediodía la ciudad se detiene para almorzar y dormir la siesta, y a la tarde vuelve la actividad — con la ronda de tereré incluida.",
              en: "Because of the heat, the Paraguayan day starts before sunrise: many schools run two shifts, morning and afternoon, and morning classes can begin at seven. At midday the city stops to eat lunch and nap, and by late afternoon life resumes — tereré circle included." }
    }
  },

  "g8:3": {
    focus: { es: "Los lugares — y el sufijo -ha otra vez, ahora construyendo edificios.",
             en: "Places — and the -ha suffix again, now building buildings." },
    intro: [
      { es: "Acordate del -ha del grado 4, el que convertía hai (escribir) en haihá (lápiz). El mismo sufijo construye los lugares. Ñemu es comerciar, así que ñemuha es el lugar donde se comercia: el mercado.",
        en: "Remember the -ha from grade 4, the one that turned hai (to write) into haihá (pencil). The same suffix builds places. Ñemu is to trade, so ñemuha is the place where trading happens: the market." },
      { es: "Mbo'ehao es el caso más lindo porque junta todo: mbo'e (enseñar) + ha (lugar) + o (de óga, casa) = «la casa donde se enseña». Y con la otra cara del sufijo, mbo'ehára es «el que enseña» — el maestro, el nombre de esta app.",
        en: "Mbo'ehao is the prettiest case because it joins everything: mbo'e (to teach) + ha (place) + o (from óga, house) = \"the house where teaching happens\". And with the suffix's other face, mbo'ehára is \"the one who teaches\" — the teacher, this app's name." },
      { es: "Tupão ya lo desarmaste en el grado 4: Tupã + óga, «la casa de Tupã». Y tape (camino) es triforme: después de otra palabra se vuelve rape, como en mborayhu rape, «el camino del amor», que te espera en el grado 10.",
        en: "You already took Tupão apart in grade 4: Tupã + óga, \"Tupã's house\". And tape (road) is triform: after another word it becomes rape, as in mborayhu rape, \"the path of love\", waiting for you in grade 10." }
    ],
    points: [
      { es: "-ha marca el lugar de una acción: ñemuha.", en: "-ha marks the place of an action: ñemuha." },
      { es: "mbo'ehao = donde se enseña · mbo'ehára = quien enseña.", en: "mbo'ehao = where teaching happens · mbo'ehára = who teaches." },
      { es: "Tupão = Tupã + óga, la casa de Tupã.", en: "Tupão = Tupã + óga, Tupã's house." },
      { es: "tape se vuelve rape después de otra palabra.", en: "tape becomes rape after another word." }
    ],
    examples: [
      { gn: "Aha ñemuhápe", es: "Voy al mercado", en: "I'm going to the market" },
      { gn: "Oĩ peteĩ mbo'ehao ko távape", es: "Hay una escuela en este pueblo", en: "There's a school in this town" },
      { gn: "Ohasa tape rupi", es: "Pasa por el camino", en: "He goes along the road" }
    ],
    culture: {
      title: { es: "Tava, el pueblo antiguo", en: "Tava, the old village" },
      body: { es: "Tava significa hoy pueblo o ciudad, pero antes nombraba la aldea guaraní: el conjunto de casas comunales donde vivía un grupo extenso de familias. Cuando los jesuitas organizaron las reducciones adoptaron la palabra, y quedó. Por eso muchas ciudades paraguayas conservan nombres guaraníes enteros: Itauguá, Areguá, Capiatá, Yaguarón.",
              en: "Tava today means town or city, but it once named the Guaraní village: the cluster of communal houses where an extended group of families lived. When the Jesuits organised the reductions they adopted the word, and it stayed. That's why so many Paraguayan cities keep whole Guaraní names: Itauguá, Areguá, Capiatá, Yaguarón." }
    }
  },

  /* ==================== GRADE 9 — Oraciones y narración ==================== */

  "g9:0": {
    focus: { es: "Unir ideas — y el sufijo -rõ, que fabrica el «si» y el «entonces».",
             en: "Joining ideas — and the -rõ suffix that manufactures \"if\" and \"then\"." },
    intro: [
      { es: "Las tres conjunciones básicas son fáciles: ha (y), térã (o) y ha katu (pero). Esta última es literalmente «y pues», porque katu es una partícula de énfasis que vas a escuchar por todos lados.",
        en: "The three basic conjunctions are easy: ha (and), térã (or) and ha katu (but). The last is literally \"and indeed\", because katu is an emphasis particle you'll hear everywhere." },
      { es: "Upéicharõ, «entonces», se deja abrir como todo en guaraní: upéicha significa «así, de esa manera», y -rõ es un sufijo que quiere decir «si» o «cuando». Upéicharõ es «si es así». Y ese -rõ es productivo: reju rõ significa «si venís».",
        en: "Upéicharõ, \"then\", opens up like everything in Guaraní: upéicha means \"like that, in that way\", and -rõ is a suffix meaning \"if\" or \"when\". Upéicharõ is \"if that's how it is\". And that -rõ is productive: reju rõ means \"if you come\"." },
      { es: "Mba'ére hace doble trabajo: con -pa pregunta «¿por qué?» y sin -pa responde «porque». La misma palabra abre y cierra la pregunta — otra economía del idioma.",
        en: "Mba'ére does double duty: with -pa it asks \"why?\" and without -pa it answers \"because\". The same word opens and closes the question — another of the language's economies." }
    ],
    points: [
      { es: "ha = y · térã = o · ha katu = pero.", en: "ha = and · térã = or · ha katu = but." },
      { es: "-rõ = si, cuando. upéicharõ = si es así, entonces.", en: "-rõ = if, when. upéicharõ = if that's so, then." },
      { es: "mba'ére pregunta «por qué» y responde «porque».", en: "mba'ére asks \"why\" and answers \"because\"." },
      { es: "katu es una partícula de énfasis: heẽ katu, claro que sí.", en: "katu is an emphasis particle: heẽ katu, of course." }
    ],
    examples: [
      { gn: "Aha térã apyta?", es: "¿Voy o me quedo?", en: "Shall I go or stay?" },
      { gn: "Oky, ha katu ahata", es: "Llueve, pero voy a ir", en: "It's raining, but I'll go" },
      { gn: "Reju rõ, javy'áta", es: "Si venís, vamos a estar contentos", en: "If you come, we'll be happy" }
    ],
    culture: {
      title: { es: "Katu, la palabra que afirma", en: "Katu, the word that affirms" },
      body: { es: "Katu no se traduce bien: agrega seguridad, permiso o entusiasmo. Heẽ katu es «claro que sí»; ejapo katu es «hacelo nomás»; ikatu es «se puede». Ese último dio ikatúpa, el «¿se puede?» que usás para pedir permiso en cualquier puerta del Paraguay.",
              en: "Katu doesn't translate neatly: it adds certainty, permission or enthusiasm. Heẽ katu is \"of course\"; ejapo katu is \"just go ahead\"; ikatu is \"it's possible\". That last one gave us ikatúpa, the \"may I?\" you'll use at any doorway in Paraguay." }
    }
  },

  "g9:1": {
    focus: { es: "Contar un cuento — las fórmulas que lo abren, lo encadenan y lo cierran.",
             en: "Telling a story — the formulas that open, chain and close it." },
    intro: [
      { es: "Peteĩ jey es el «había una vez» guaraní. Literalmente significa «una vez»: jey quiere decir «vez» y también «otra vez», así que mokõi jey es «dos veces». Con esas dos palabras empiezan casi todos los cuentos paraguayos.",
        en: "Peteĩ jey is the Guaraní \"once upon a time\". Literally it means \"one time\": jey means \"time\" and also \"again\", so mokõi jey is \"twice\". Almost every Paraguayan folktale opens with those two words." },
      { es: "Para encadenar están riré (después de) y mboyve (antes de). Son posposiciones de tiempo, así que — como todas las posposiciones del grado 8 — van detrás: akaru riré, «después de comer». Upérõ, «en ese momento», es otra vez upe + el -rõ de la lección anterior.",
        en: "For chaining there are riré (after) and mboyve (before). They're time postpositions, so — like every postposition in grade 8 — they follow: akaru riré, \"after eating\". Upérõ, \"at that moment\", is once again upe plus the -rõ from the previous lesson." },
      { es: "Y para cerrar, ipahápe: i- (su) + paha (fin) + -pe (en) = «en su final». Tres piezas de gramática que ya conocés, escondidas en una sola palabra de cuatro sílabas.",
        en: "And to close, ipahápe: i- (its) + paha (end) + -pe (in) = \"at its end\". Three pieces of grammar you already know, hiding inside one four-syllable word." }
    ],
    points: [
      { es: "Peteĩ jey abre los cuentos: «había una vez».", en: "Peteĩ jey opens the tales: \"once upon a time\"." },
      { es: "jey = vez y también otra vez: mokõi jey, dos veces.", en: "jey = time and also again: mokõi jey, twice." },
      { es: "riré y mboyve van detrás del verbo.", en: "riré and mboyve follow the verb." },
      { es: "ipahápe = i- + paha (fin) + -pe = al final.", en: "ipahápe = i- + paha (end) + -pe = in the end." }
    ],
    examples: [
      { gn: "Peteĩ jey oiko peteĩ mitã", es: "Una vez había un niño", en: "Once there was a child" },
      { gn: "Upérõ ou che sy", es: "En ese momento vino mi mamá", en: "At that moment my mother came" },
      { gn: "Ipahápe opa porã", es: "Al final terminó bien", en: "In the end it turned out well" }
    ],
    culture: {
      title: { es: "Perurima, el pícaro", en: "Perurima, the trickster" },
      body: { es: "El personaje más querido del cuento oral paraguayo es Perurima (o Perú Rimá): un pícaro que gana siempre por astucia y nunca por fuerza, y que suele burlarse del patrón o del rico. Sus historias se transmiten en guaraní de generación en generación como káso ñemombe'u, «casos contados», el género de la sobremesa y del fogón.",
              en: "The best-loved character in Paraguayan oral storytelling is Perurima (or Perú Rimá): a trickster who always wins by cunning and never by force, and who usually gets the better of the boss or the rich man. His stories pass down in Guaraní from generation to generation as káso ñemombe'u, \"told cases\", the genre of the after-dinner table and the fireside." }
    }
  },

  "g9:2": {
    focus: { es: "Los verbos para narrar — y oiko, el verbo que sirve para todo.",
             en: "Narration verbs — and oiko, the verb that does everything." },
    intro: [
      { es: "Todos los verbos de esta lección empiezan con o-, el prefijo de tercera persona del grado 4 — y acordate de que ese o- vale igual para «él» y para «ellos». Omombe'u (cuenta), ohecha (ve), ohendu (escucha): con estos tres ya se sostiene un relato.",
        en: "Every verb in this lesson starts with o-, grade 4's third-person prefix — and remember that o- serves for both \"he/she\" and \"they\". Omombe'u (tells), ohecha (sees), ohendu (hears): with those three you can already hold a story up." },
      { es: "Oĩ significa «hay» y «está»: existencia y ubicación en la misma palabra. Oĩ peteĩ óga es «hay una casa», y Oĩpa? es «¿está?» — la pregunta con la que se entra a cualquier casa paraguaya.",
        en: "Oĩ means both \"there is\" and \"is located\": existence and position in one word. Oĩ peteĩ óga is \"there's a house\", and Oĩpa? is \"is anyone in?\" — the question you call out at any Paraguayan doorway." },
      { es: "Pero la estrella es oiko: significa vivir, suceder, ocurrir, resultar y hasta volverse. Mba'épa oiko? es «¿qué pasa?». Oiko porã es «salió bien». Y su raíz es teko, «modo de ser», la palabra de la que cuelga medio grado 12.",
        en: "But the star is oiko: it means to live, to happen, to occur, to turn out, even to become. Mba'épa oiko? is \"what's going on?\". Oiko porã is \"it turned out well\". And its root is teko, \"way of being\", the word half of grade 12 hangs from." }
    ],
    points: [
      { es: "o- marca tercera persona, singular y plural.", en: "o- marks third person, singular and plural." },
      { es: "oĩ = hay y está: existencia y ubicación.", en: "oĩ = there is and is at: existence and location." },
      { es: "oiko = vivir, pasar, resultar, volverse.", en: "oiko = to live, happen, turn out, become." },
      { es: "oiko sale de teko, «modo de ser» — grado 12.", en: "oiko comes from teko, \"way of being\" — grade 12." }
    ],
    examples: [
      { gn: "Mba'épa oiko?", es: "¿Qué pasa?", en: "What's going on?" },
      { gn: "Oĩ peteĩ jagua ko'ápe", es: "Hay un perro acá", en: "There's a dog here" },
      { gn: "Che sy omombe'u chéve peteĩ káso", es: "Mi mamá me cuenta un cuento", en: "My mother tells me a tale" }
    ],
    culture: {
      title: { es: "Vivir es «ser de una manera»", en: "To live is \"to be in a way\"" },
      body: { es: "Que oiko signifique a la vez vivir y suceder no es un accidente: viene de teko, que no quiere decir «vida» sino «modo de ser». Para el guaraní, vivir no es existir sino comportarse de cierta manera. Esa raíz va a explicarte en el grado 12 palabras como tekoha, tekove, tekojoja y teko porã.",
              en: "That oiko means both to live and to happen is no accident: it comes from teko, which doesn't mean \"life\" but \"way of being\". For Guaraní, to live isn't to exist but to conduct oneself in a certain way. In grade 12 that root will explain words like tekoha, tekove, tekojoja and teko porã." }
    }
  },

  "g9:3": {
    focus: { es: "Los sentimientos — que en guaraní viven en el py'a, no en el corazón.",
             en: "Feelings — which in Guaraní live in the py'a, not the heart." },
    intro: [
      { es: "En el grado 3 lo anticipamos y acá se cumple: las emociones guaraníes están en el py'a, la zona del vientre. Py'aro es enojo (ro = amargo, «py'a amargo»), py'apy es tristeza y py'aguasu es valentía, «py'a grande». Una sola parte del cuerpo genera todo el vocabulario emocional.",
        en: "Grade 3 promised this and here it lands: Guaraní emotions live in the py'a, the belly area. Py'aro is anger (ro = bitter, \"bitter py'a\"), py'apy is sadness and py'aguasu is courage, \"big py'a\". One body part generates the whole emotional vocabulary." },
      { es: "Mborayhu, el amor, es la palabra más grande de la lista. Sale del verbo rayhu (amar): ahayhu es «amo». Y no nombra solamente el amor romántico — es también el afecto, la solidaridad y el cuidado mutuo.",
        en: "Mborayhu, love, is the biggest word on the list. It comes from the verb rayhu (to love): ahayhu is \"I love\". And it doesn't name romantic love alone — it also covers affection, solidarity and mutual care." },
      { es: "Para sentir usás la familia chendal del grado 5: che vy'a (estoy contento), che rasy (me duele). No «sos» tu emoción: la tenés, te ocurre.",
        en: "To feel, you use grade 5's chendal family: che vy'a (I'm happy), che rasy (I hurt). You don't *be* your emotion: you have it, it happens to you." }
    ],
    points: [
      { es: "py'a = vientre; ahí viven las emociones.", en: "py'a = belly; that's where emotions live." },
      { es: "py'aro (enojo) · py'apy (tristeza) · py'aguasu (valentía).", en: "py'aro (anger) · py'apy (sadness) · py'aguasu (courage)." },
      { es: "mborayhu viene de rayhu: ahayhu, yo amo.", en: "mborayhu comes from rayhu: ahayhu, I love." },
      { es: "Se sienten con la familia chendal: che vy'a, che rasy.", en: "You feel them with the chendal family: che vy'a, che rasy." }
    ],
    examples: [
      { gn: "Rohayhu", es: "Te amo", en: "I love you" },
      { gn: "Che vy'a rohechávo", es: "Me alegra verte", en: "I'm glad to see you" },
      { gn: "Akyhyje pyharépe", es: "Tengo miedo de noche", en: "I'm afraid at night" }
    ],
    culture: {
      title: { es: "Rohayhu: dos personas en una palabra", en: "Rohayhu: two people in one word" },
      body: { es: "Rohayhu no es «ro-» de tercera persona: el guaraní tiene un prefijo especial para cuando yo actúo sobre vos. Ese ro- significa «yo… a vos», así que rohayhu es «yo te amo» en una sola palabra, con las dos personas adentro. Pocas lenguas del mundo tienen un prefijo dedicado a esa relación — y el guaraní lo gastó en el verbo amar.",
              en: "The ro- in rohayhu isn't the third person: Guaraní has a dedicated prefix for when I act upon you. That ro- means \"I… you\", so rohayhu is \"I love you\" in a single word, with both people inside it. Few languages in the world have a prefix reserved for that relationship — and Guaraní spent it on the verb to love." }
    }
  },

  /* ==================== GRADE 10 — Ñe'ẽpoty y ñe'ẽnga ==================== */

  "g10:0": {
    focus: { es: "La poesía — y por qué el guaraní la fabrica simplemente juntando palabras.",
             en: "Poetry — and why Guaraní makes it simply by joining words." },
    intro: [
      { es: "Empecemos por la palabra misma. Ñe'ẽpoty significa poesía, y está armada con ñe'ẽ (palabra, lengua) y poty (flor) — la misma poty que está dentro de yvoty. La poesía, en guaraní, es literalmente «la palabra en flor».",
        en: "Start with the word itself. Ñe'ẽpoty means poetry, and it's built from ñe'ẽ (word, language) and poty (flower) — the same poty inside yvoty. Poetry, in Guaraní, is literally \"the word in bloom\"." },
      { es: "Y ahora mirá las otras dos: yvága resa es «el ojo del cielo» = estrella. Mborayhu rape es «el camino del amor». Fijate que reaparecen los triformes del grado 3 y del grado 8: tesa se vuelve resa y tape se vuelve rape cuando van detrás de otra palabra.",
        en: "Now look at the other two: yvága resa is \"the eye of the sky\" = star. Mborayhu rape is \"the road of love\". Notice the triform nouns from grades 3 and 8 coming back: tesa becomes resa and tape becomes rape when they follow another word." },
      { es: "Ese es el punto de toda la lección: el guaraní casi no necesita un vocabulario poético aparte, porque la composición ya produce metáforas sola. Lo que en español sería una figura literaria, en guaraní es simplemente cómo se fabrican las palabras.",
        en: "That's the whole point of this lesson: Guaraní barely needs a separate poetic vocabulary, because compounding already produces metaphor on its own. What would be a literary figure in English is, in Guaraní, just how words get made." }
    ],
    points: [
      { es: "ñe'ẽ (palabra) + poty (flor) = ñe'ẽpoty, poesía.", en: "ñe'ẽ (word) + poty (flower) = ñe'ẽpoty, poetry." },
      { es: "yvága resa = «ojo del cielo» = estrella.", en: "yvága resa = \"eye of the sky\" = star." },
      { es: "Los triformes vuelven: tesa→resa, tape→rape.", en: "Triform nouns return: tesa→resa, tape→rape." },
      { es: "La metáfora nace de la composición, no del adorno.", en: "The metaphor comes from compounding, not ornament." }
    ],
    examples: [
      { gn: "Ñe'ẽpoty ha purahéi", es: "Poesía y canción", en: "Poetry and song" },
      { gn: "Yvága resa omimbi", es: "Las estrellas brillan", en: "The stars are shining" },
      { gn: "Ahayhu ñane ñe'ẽ", es: "Amo nuestra lengua", en: "I love our language" }
    ],
    culture: {
      title: { es: "La guarania", en: "The guarania" },
      body: { es: "En 1925 el músico José Asunción Flores inventó un género entero para esta lengua: la guarania, una música lenta y melancólica pensada para cantar en guaraní. Su encuentro con el poeta Manuel Ortiz Guerrero dio canciones como India y Panambi Vera, que se siguen cantando un siglo después. La guarania fue declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2024.",
              en: "In 1925 the musician José Asunción Flores invented an entire genre for this language: the guarania, a slow, melancholy music meant to be sung in Guaraní. His partnership with the poet Manuel Ortiz Guerrero produced songs like India and Panambi Vera, still sung a century later. In 2024 UNESCO inscribed the guarania as Intangible Cultural Heritage of Humanity." }
    }
  },

  "g10:1": {
    focus: { es: "Los ñe'ẽnga — refranes que dicen un párrafo entero en tres palabras.",
             en: "The ñe'ẽnga — proverbs that say a whole paragraph in three words." },
    intro: [
      { es: "Los ñe'ẽnga son los dichos populares paraguayos, y su nombre sale otra vez de ñe'ẽ: son «la palabra dicha», la frase que ya circula hecha. Viven en guaraní incluso en boca de gente que conversa en español.",
        en: "The ñe'ẽnga are Paraguay's popular sayings, and their name comes once again from ñe'ẽ: they are \"the spoken word\", the phrase that already circulates ready-made. They live in Guaraní even in the mouths of people chatting in Spanish." },
      { es: "Mirá arandu, la palabra para sabiduría: se explica como ára (tiempo, día) + ndu (percibir). Ser sabio no es acumular datos sino percibir el momento — saber cuándo. Difícil encontrar una definición mejor en cualquier idioma.",
        en: "Look at arandu, the word for wisdom: it's explained as ára (time, day) + ndu (to perceive). Being wise isn't hoarding facts but perceiving the moment — knowing when. It would be hard to find a better definition in any language." },
      { es: "Y aparece una pieza gramatical nueva y muy productiva: el prefijo recíproco jo- (o ño- si la palabra es nasal), que significa «entre sí, mutuamente». Joaju es «unirse unos con otros» = unión. Lo vas a volver a ver en el grado 12.",
        en: "And a new, highly productive piece of grammar shows up: the reciprocal prefix jo- (or ño- if the word is nasal), meaning \"one another, mutually\". Joaju is \"joining with each other\" = unity. You'll meet it again in grade 12." }
    ],
    points: [
      { es: "arandu = ára + ndu: percibir el tiempo = sabiduría.", en: "arandu = ára + ndu: perceiving the moment = wisdom." },
      { es: "jo- / ño- = recíproco, «entre sí»: joaju.", en: "jo- / ño- = reciprocal, \"each other\": joaju." },
      { es: "teko porã = «buen modo de ser» = buen vivir.", en: "teko porã = \"good way of being\" = good living." },
      { es: "py'aguasu = py'a grande = valentía (grado 9).", en: "py'aguasu = big py'a = courage (grade 9)." }
    ],
    examples: [
      { gn: "Arandu ha py'aguasu", es: "Sabiduría y valentía", en: "Wisdom and courage" },
      { gn: "Ñande joaju imbarete", es: "Nuestra unión es fuerte", en: "Our unity is strong" },
      { gn: "Teko porã ñane retãme", es: "Buen vivir en nuestra patria", en: "Good living in our homeland" }
    ],
    culture: {
      title: { es: "El ñe'ẽnga termina con un «dijo»", en: "A ñe'ẽnga ends with a \"said\"" },
      body: { es: "La forma clásica del ñe'ẽnga paraguayo es una frase seguida de he'i («dijo») y un personaje absurdo: «…he'i karai perurima». El remate atribuye la sentencia a alguien, y casi siempre con humor. Es un género de sobremesa, de ronda de tereré y de comentario sobre la vida, más socarrón que solemne.",
              en: "The classic shape of a Paraguayan ñe'ẽnga is a phrase followed by he'i (\"said\") and some absurd character: \"…he'i karai perurima\". The punchline pins the saying on somebody, almost always with humour. It's a genre of the after-dinner table, the tereré circle and wry commentary on life — more sly than solemn." }
    }
  },

  "g10:2": {
    focus: { es: "Tereré, ka'a y pohã ñana — una cultura que se toma y se comparte.",
             en: "Tereré, ka'a and pohã ñana — a culture you drink and share." },
    intro: [
      { es: "Ka'a, la yerba mate, ya la conocés: estaba escondida en ka'aguy, «debajo de las hojas», en el grado 6. Tomada con agua fría se llama tereré, y es la bebida nacional del Paraguay — imprescindible en un país donde el verano pasa semanas arriba de los 40 grados.",
        en: "Ka'a, yerba mate, you already know: it was hiding inside ka'aguy, \"under the leaves\", back in grade 6. Drunk with cold water it's called tereré, Paraguay's national drink — indispensable in a country where summer spends weeks above 40°C." },
      { es: "Pero lo esencial del tereré no es la bebida sino la ronda. Hay una sola guampa y una sola bombilla, y van pasando de mano en mano en orden. Convidar no es cortesía: es la actividad misma. Por eso el verbo que la acompaña suele ser inclusivo, ja'u: «tomemos, vos y yo».",
        en: "But the essence of tereré isn't the drink, it's the circle. There's one guampa and one bombilla, passed from hand to hand in order. Sharing isn't politeness: it *is* the activity. That's why the verb that goes with it is usually the inclusive one, ja'u: \"let's drink, you and I\"." },
      { es: "Al agua se le agregan pohã ñana: pohã (remedio) + ñana (yuyo). Las yuyeras de los mercados machacan menta'i, cedrón, burrito o koku según lo que haga falta ese día. Tomar tereré es, literalmente, tomar remedio.",
        en: "Into the water go pohã ñana: pohã (remedy) + ñana (herb). The yuyeras in the markets crush menta'i, cedrón, burrito or koku depending on what the day calls for. Drinking tereré is, literally, drinking medicine." }
    ],
    points: [
      { es: "ka'a = yerba mate; tereré es la versión fría.", en: "ka'a = yerba mate; tereré is the cold version." },
      { es: "pohã ñana = pohã (remedio) + ñana (yuyo).", en: "pohã ñana = pohã (remedy) + ñana (herb)." },
      { es: "Una guampa, una bombilla: la ronda se comparte.", en: "One guampa, one bombilla: the circle is shared." },
      { es: "ja'u = «tomemos» con el nosotros inclusivo del grado 5.", en: "ja'u = \"let's drink\", with grade 5's inclusive we." }
    ],
    examples: [
      { gn: "Ja'u tereré", es: "Tomemos tereré", en: "Let's drink tereré" },
      { gn: "Aipota pohã ñana ko'ágã", es: "Quiero yuyos ahora", en: "I want medicinal herbs now" },
      { gn: "Jajeroky ha japurahéi", es: "Bailemos y cantemos", en: "Let's dance and sing" }
    ],
    culture: {
      title: { es: "Patrimonio de la humanidad", en: "Heritage of humanity" },
      body: { es: "En diciembre de 2020 la UNESCO inscribió como Patrimonio Cultural Inmaterial de la Humanidad no al tereré a secas, sino a «las prácticas y saberes tradicionales del tereré en la cultura del pohã ñana». Lo que se protegió fue el conocimiento de las plantas medicinales y el hábito de compartir la ronda — no la bebida, sino el vínculo.",
              en: "In December 2020 UNESCO inscribed as Intangible Cultural Heritage of Humanity not tereré on its own, but \"the practices and traditional knowledge of tereré in the culture of pohã ñana\". What was protected was the knowledge of medicinal plants and the habit of sharing the circle — not the drink, but the bond." }
    }
  },

  /* ==================== GRADE 11 — Escritura y variantes ==================== */

  "g11:0": {
    focus: { es: "Guaraniete y jopara — los dos registros, y por qué ninguno está mal.",
             en: "Guaraniete and jopara — two registers, and why neither is wrong." },
    intro: [
      { es: "Guaraniete es guaraní + ete, el sufijo «verdadero» que viste en jaguarete y en -eterei. Nombra el guaraní sin préstamos: el de la escuela, la literatura y los textos oficiales. Jopara significa «mezcla» y nombra lo que realmente se habla en la calle.",
        en: "Guaraniete is guaraní + ete, the \"true\" suffix you met in jaguarete and in -eterei. It names Guaraní without loanwords: the Guaraní of school, literature and official texts. Jopara means \"mixture\" and names what people actually speak on the street." },
      { es: "En la práctica no hay dos idiomas sino un continuo. Casi nadie habla guaraniete puro fuera del aula, y casi nadie habla español puro tampoco. Hay zonas que se van al español sin pedir permiso: los números grandes, los precios, la hora, los días de la semana.",
        en: "In practice there aren't two languages but a continuum. Almost nobody speaks pure guaraniete outside the classroom, and almost nobody speaks pure Spanish either. Some areas slide into Spanish without asking permission: big numbers, prices, the time of day, the days of the week." },
      { es: "Lo honesto es decirlo así: el jopara no es guaraní mal hablado, es el sonido de una sociedad bilingüe viva. Y aprender guaraniete tampoco es un capricho purista: es lo que te permite leer a los poetas, los documentos y esta misma app.",
        en: "The honest way to put it: jopara isn't badly spoken Guaraní, it's the sound of a living bilingual society. And learning guaraniete isn't purist fussiness either: it's what lets you read the poets, the documents, and this very app." }
    ],
    points: [
      { es: "-ete = verdadero: guaraniete, «guaraní verdadero».", en: "-ete = true: guaraniete, \"true Guaraní\"." },
      { es: "jopara = mezcla. No es un error: es un registro.", en: "jopara = mixture. Not an error: a register." },
      { es: "Números, precios y horas suelen decirse en español.", en: "Numbers, prices and clock times usually go in Spanish." },
      { es: "El guaraniete se usa en la escuela y en los textos formales.", en: "Guaraniete is used at school and in formal texts." }
    ],
    examples: [
      { gn: "Aju ñemuhágui", es: "Vengo del mercado (guaraniete)", en: "I'm coming from the market (guaraniete)" },
      { gn: "Aju mercado-gui", es: "Vengo del mercado (jopara)", en: "I'm coming from the market (jopara)" },
      { gn: "Mokõi térã «dos»?", es: "¿Mokõi o «dos»? En la calle, casi siempre «dos»", en: "Mokõi or \"dos\"? On the street, almost always \"dos\"" }
    ],
    culture: {
      title: { es: "Jopara también se come", en: "Jopara is also a stew" },
      body: { es: "Jopara no es solo un modo de hablar: es un guiso de poroto y maíz que se come el 1 de octubre para espantar a Karai Octubre, el personaje que trae el hambre después de la escasez de septiembre. La palabra que nombra la mezcla de dos lenguas nombra también la mezcla de dos granos — y en los dos casos, mezclar es lo que salva.",
              en: "Jopara isn't only a way of speaking: it's a bean-and-corn stew eaten on 1 October to scare off Karai Octubre, the figure who brings hunger after September's lean weeks. The word for the mixture of two languages also names the mixture of two grains — and in both cases, mixing is what saves you." }
    }
  },

  "g11:1": {
    focus: { es: "Escribir en guaraní — y las palabras que hubo que inventar para lograrlo.",
             en: "Writing in Guaraní — and the words that had to be invented for it." },
    intro: [
      { es: "Kuatiañe'ẽ, carta o documento, sale de kuatia (papel) + ñe'ẽ (palabra): «papel-palabra». Marandu es noticia o información. Jehaipy, redacción, viene de hai (escribir), la misma raíz de haihá, el lápiz del grado 4.",
        en: "Kuatiañe'ẽ, letter or document, comes from kuatia (paper) + ñe'ẽ (word): \"paper-word\". Marandu is news or information. Jehaipy, composition, comes from hai (to write), the same root as haihá, grade 4's pencil." },
      { es: "Ahora fijate en algo que se nota poco: las palabras para hablar de gramática son inventos modernos. Téra («nombre») se adaptó para significar sustantivo, ñe'ẽtéva para verbo, y ñe'ẽtekuaa — ñe'ẽ + teko + kuaa, «saber el modo de la palabra» — para gramática.",
        en: "Now notice something easy to miss: the words for talking about grammar are modern inventions. Téra (\"name\") was adapted to mean noun, ñe'ẽtéva for verb, and ñe'ẽtekuaa — ñe'ẽ + teko + kuaa, \"knowing the way of the word\" — for grammar." },
      { es: "Eso pasa porque durante siglos el guaraní se habló mucho más de lo que se escribió. Para poder enseñarse a sí mismo en la escuela, el idioma tuvo que fabricarse un vocabulario técnico — y lo hizo con sus propias piezas, sin pedirle prestado al español.",
        en: "That's because for centuries Guaraní was spoken far more than it was written. To be able to teach itself in school, the language had to manufacture a technical vocabulary — and it did so from its own pieces, without borrowing from Spanish." }
    ],
    points: [
      { es: "kuatiañe'ẽ = kuatia (papel) + ñe'ẽ (palabra).", en: "kuatiañe'ẽ = kuatia (paper) + ñe'ẽ (word)." },
      { es: "Los términos gramaticales son neologismos del siglo XX.", en: "The grammar terms are 20th-century coinages." },
      { es: "ñe'ẽtekuaa = «saber el modo de la palabra» = gramática.", en: "ñe'ẽtekuaa = \"knowing the way of the word\" = grammar." },
      { es: "hai (escribir) da haihá, jehaipy y haipy.", en: "hai (to write) gives haihá, jehaipy and haipy." }
    ],
    examples: [
      { gn: "Ahai peteĩ kuatiañe'ẽ", es: "Escribo una carta", en: "I'm writing a letter" },
      { gn: "Amoñe'ẽ marandu ko'ẽ guive", es: "Leo las noticias desde temprano", en: "I read the news from early on" },
      { gn: "Ko téra ha pe ñe'ẽtéva", es: "Este sustantivo y aquel verbo", en: "This noun and that verb" }
    ],
    culture: {
      title: { es: "Una lengua con leyes propias", en: "A language with its own laws" },
      body: { es: "La ortografía que estás usando se fijó en un congreso de lingüistas en Montevideo en 1950. Mucho después, la Ley de Lenguas de 2010 creó la Secretaría de Políticas Lingüísticas y, en 2012, la Academia de la Lengua Guaraní, encargada de normalizar el idioma. El guaraní es además lengua de trabajo del Mercosur desde 2006.",
              en: "The spelling you've been using was fixed at a congress of linguists in Montevideo in 1950. Much later, the 2010 Languages Act created the Secretariat of Linguistic Policies and, in 2012, the Academy of the Guaraní Language, charged with standardising it. Guaraní has also been a working language of Mercosur since 2006." }
    }
  },

  "g11:2": {
    focus: { es: "Un idioma con muchas voces — el guaraní paraguayo no es el único guaraní.",
             en: "One language, many voices — Paraguayan Guaraní isn't the only Guaraní." },
    intro: [
      { es: "Todo lo que aprendiste en estos once grados es guaraní paraguayo, la variedad que hablan millones de personas y que es oficial en el país. Pero no es la única: existen el mbya, el ava (o chiripá), el paĩ tavyterã, el guaraní occidental del Chaco boliviano, el kaiowá y el ñandeva del Brasil.",
        en: "Everything you've learned across these eleven grades is Paraguayan Guaraní, the variety spoken by millions and official in the country. But it isn't the only one: there are Mbya, Ava (or Chiripá), Paĩ Tavyterã, the Western Guaraní of the Bolivian Chaco, and Kaiowá and Ñandeva in Brazil." },
      { es: "Muchas de esas comunidades no llaman «guaraní» a su lengua: la llaman ava ñe'ẽ, «la lengua de la gente», porque ava significa persona. Es un recordatorio de que el nombre que nosotros usamos vino de afuera.",
        en: "Many of those communities don't call their language \"Guaraní\": they call it ava ñe'ẽ, \"the people's language\", because ava means person. It's a reminder that the name we use came from outside." },
      { es: "Y conviene decirlo con honestidad: el guaraní paraguayo goza de buena salud, pero las variedades indígenas las hablan comunidades mucho más chicas y son las que están realmente en riesgo. Que un idioma tenga millones de hablantes no significa que todas sus voces estén a salvo.",
        en: "And it's worth saying plainly: Paraguayan Guaraní is in good health, but the Indigenous varieties are spoken by far smaller communities and are the ones genuinely at risk. A language having millions of speakers doesn't mean all of its voices are safe." }
    ],
    points: [
      { es: "El guaraní paraguayo es una variedad entre varias.", en: "Paraguayan Guaraní is one variety among several." },
      { es: "Mbya, ava, paĩ tavyterã: variedades indígenas vivas.", en: "Mbya, Ava, Paĩ Tavyterã: living Indigenous varieties." },
      { es: "ava = persona · ava ñe'ẽ = «la lengua de la gente».", en: "ava = person · ava ñe'ẽ = \"the people's language\"." },
      { es: "Las variedades indígenas son las más amenazadas.", en: "The Indigenous varieties are the most endangered." }
    ],
    examples: [
      { gn: "Ava ñe'ẽ", es: "La lengua de la gente", en: "The people's language" },
      { gn: "Heta tekoha oĩ ñane retãme", es: "Hay muchas comunidades en nuestro país", en: "There are many communities in our country" },
      { gn: "Peteĩ ñe'ẽ, heta ñe'ẽjoja", es: "Una lengua, muchas hablas", en: "One language, many ways of speaking" }
    ],
    culture: {
      title: { es: "Diecinueve pueblos", en: "Nineteen peoples" },
      body: { es: "El Paraguay reconoce diecinueve pueblos indígenas agrupados en cinco familias lingüísticas: guaraní, maskoy, mataco-mataguayo, zamuco y guaicurú. Seis de esos pueblos hablan lenguas de la familia guaraní. Son, en conjunto, menos del dos por ciento de la población — la minoría que sostiene la lengua que habla la mayoría.",
              en: "Paraguay recognises nineteen Indigenous peoples grouped into five language families: Guaraní, Maskoy, Mataco-Mataguayo, Zamuco and Guaicurú. Six of those peoples speak languages of the Guaraní family. Together they are under two per cent of the population — the minority that sustains the language the majority speaks." }
    }
  },

  /* ==================== GRADE 12 — Comprensión y cultura ==================== */

  "g12:0": {
    focus: { es: "Teko — la raíz que explica media lengua y toda una manera de pensar.",
             en: "Teko — the root that explains half the language and a whole way of thinking." },
    intro: [
      { es: "Llegamos a la palabra más importante del guaraní. Teko no significa «vida» ni «cultura» exactamente: significa modo de ser, la manera en que algo o alguien es lo que es. Casi todo el vocabulario abstracto de este grado cuelga de ahí.",
        en: "We've arrived at the most important word in Guaraní. Teko doesn't mean \"life\" or \"culture\" exactly: it means way of being, the manner in which something or someone is what it is. Nearly all of this grade's abstract vocabulary hangs from it." },
      { es: "Mirá la familia: tekove es la vida, el ser vivo. Tekombo'e es educación — teko + mbo'e, «hacer aprender el modo de ser», que es una definición bastante más ambiciosa que «transmitir contenidos». Y oiko, el verbo comodín del grado 9, sale de esta misma raíz.",
        en: "Look at the family: tekove is life, a living being. Tekombo'e is education — teko + mbo'e, \"causing the way of being to be learned\", a rather more ambitious definition than \"transmitting content\". And oiko, grade 9's all-purpose verb, comes from this very root." },
      { es: "La pieza clave es tekoha, que se traduce como comunidad o hábitat pero significa algo más preciso: el lugar donde un teko es posible. No es simplemente el territorio, es la tierra que permite ser lo que uno es.",
        en: "The key piece is tekoha, translated as community or habitat but meaning something more precise: the place where a teko is possible. It isn't simply territory — it's the land that allows you to be what you are." }
    ],
    points: [
      { es: "teko = modo de ser, condición, costumbre.", en: "teko = way of being, condition, custom." },
      { es: "tekove = vida · tekoha = el lugar donde se puede ser.", en: "tekove = life · tekoha = the place where being is possible." },
      { es: "tekombo'e = educación: hacer aprender el modo de ser.", en: "tekombo'e = education: teaching a way of being." },
      { es: "oiko, del grado 9, viene de esta misma raíz.", en: "oiko, from grade 9, comes from this same root." }
    ],
    examples: [
      { gn: "Ñande tekoha", es: "Nuestra comunidad", en: "Our community" },
      { gn: "Tekombo'e iporã tekovépe", es: "La educación es buena para la vida", en: "Education is good for life" },
      { gn: "Tembikuaa ha arandu", es: "Conocimiento y sabiduría", en: "Knowledge and wisdom" }
    ],
    culture: {
      title: { es: "«Sin tekoha no hay teko»", en: "\"Without tekoha there is no teko\"" },
      body: { es: "La frase es del jesuita y lingüista Bartomeu Melià, que pasó su vida estudiando y acompañando a los pueblos guaraníes: sin el lugar, no hay modo de ser. Por eso, cuando una comunidad guaraní reclama su tierra, no está reclamando una propiedad sino la condición de posibilidad de seguir siendo quien es. Toda una filosofía cabe en dos palabras que ahora sabés desarmar.",
              en: "The phrase belongs to Bartomeu Melià, the Jesuit linguist who spent his life studying and accompanying Guaraní peoples: without the place, there is no way of being. So when a Guaraní community claims its land, it isn't claiming a property but the very condition for continuing to be who it is. A whole philosophy fits into two words you can now take apart." }
    }
  },

  "g12:1": {
    focus: { es: "Las palabras de la vida pública — y el prefijo que significa «entre todos».",
             en: "The vocabulary of public life — and the prefix that means \"among ourselves\"." },
    intro: [
      { es: "Tekojoja, la justicia, es teko + joja: joja significa parejo, nivelado. La justicia es «un modo de ser parejo» — igualdad y justicia en la misma palabra, sin necesidad de dos conceptos separados.",
        en: "Tekojoja, justice, is teko + joja: joja means level, even. Justice is \"a way of being that is level\" — equality and justice in one word, with no need for two separate concepts." },
      { es: "Vuelve el prefijo recíproco jo- / ño- del grado 10. Joaju es unión, «unirse unos con otros», y mbojoaju es integración: mbo- (hacer que) + joaju, o sea «hacer que se unan». Con dos prefijos armás una palabra política entera.",
        en: "Grade 10's reciprocal prefix jo- / ño- returns. Joaju is union, \"joining one another\", and mbojoaju is integration: mbo- (to cause) + joaju, that is \"to make them join\". With two prefixes you build an entire political word." },
      { es: "Tetãygua, ciudadano, es tetã (país) + -ygua, un sufijo que significa «que pertenece a, que es de». Es el mismo -ygua de ogaygua, «los de la casa», la palabra para familia que viste en el grado 1. La ciudadanía se dice con la misma pieza que la familia.",
        en: "Tetãygua, citizen, is tetã (country) + -ygua, a suffix meaning \"belonging to, one of\". It's the same -ygua as in ogaygua, \"those of the house\", the word for family from grade 1. Citizenship is said with the same piece as family." }
    ],
    points: [
      { es: "tekojoja = teko + joja (parejo) = justicia e igualdad.", en: "tekojoja = teko + joja (level) = justice and equality." },
      { es: "jo- / ño- = recíproco · mbo- = causativo.", en: "jo- / ño- = reciprocal · mbo- = causative." },
      { es: "-ygua = «que pertenece a»: tetãygua, ogaygua.", en: "-ygua = \"belonging to\": tetãygua, ogaygua." },
      { es: "aty guasu = «gran reunión» = asamblea.", en: "aty guasu = \"great gathering\" = assembly." }
    ],
    examples: [
      { gn: "Tekojoja ha sãso", es: "Justicia y libertad", en: "Justice and freedom" },
      { gn: "Oiko peteĩ aty guasu ko'ẽro", es: "Mañana hay una gran asamblea", en: "There's a great assembly tomorrow" },
      { gn: "Che tetãygua", es: "Soy ciudadano", en: "I am a citizen" }
    ],
    culture: {
      title: { es: "El Aty Guasu", en: "The Aty Guasu" },
      body: { es: "Aty guasu no es una palabra de diccionario: es el nombre propio de la gran asamblea de las comunidades guaraníes, donde se discute y se decide en conjunto. En Brasil, el Aty Guasu de los Kaiowá y Guaraní de Mato Grosso do Sul reúne desde hace décadas a cientos de líderes para defender sus tierras. La palabra sigue nombrando exactamente lo que nombraba hace siglos.",
              en: "Aty guasu isn't a dictionary entry: it's the proper name of the great assembly of Guaraní communities, where matters are debated and decided together. In Brazil, the Aty Guasu of the Kaiowá and Guaraní of Mato Grosso do Sul has gathered hundreds of leaders for decades to defend their lands. The word still names exactly what it named centuries ago." }
    }
  },

  "g12:2": {
    focus: { es: "Cerrar el camino con ñane — el «nuestro» que te incluye a vos.",
             en: "Closing the path with ñane — the \"our\" that includes you." },
    intro: [
      { es: "En el grado 5 aprendiste que el guaraní parte el «nosotros» en dos: ñande incluye a quien escucha, ore lo deja afuera. Las dos palabras más repetidas del Paraguay usan la forma inclusiva: ñane retã (nuestra patria) y ñane ñe'ẽ (nuestra lengua). Ñande se vuelve ñane delante de ciertas palabras, pero el sentido es el mismo.",
        en: "In grade 5 you learned that Guaraní splits \"we\" in two: ñande includes the listener, ore leaves them out. Paraguay's two most repeated phrases use the inclusive form: ñane retã (our homeland) and ñane ñe'ẽ (our language). Ñande becomes ñane before certain words, but the meaning is the same." },
      { es: "Eso significa que decir ñane ñe'ẽ es siempre una invitación: incluye a quien escucha. Después de doce grados, esa lengua también es tuya — la frase te está incluyendo a vos.",
        en: "That means saying ñane ñe'ẽ is always an invitation: it includes whoever is listening. After twelve grades, that language is yours too — the phrase is including you." },
      { es: "Teko teete, identidad, es teko + ete: «el modo de ser verdadero», con el mismo -ete de jaguarete y guaraniete. Y jeroviapy, la fe y la esperanza, viene de jerovia, confiar. Terminás el curso con las palabras más grandes del idioma, armadas con las piezas más chicas — que es exactamente como funciona el guaraní.",
        en: "Teko teete, identity, is teko + ete: \"the true way of being\", with the same -ete as jaguarete and guaraniete. And jeroviapy, faith and hope, comes from jerovia, to trust. You finish the course with the language's biggest words, built from its smallest pieces — which is exactly how Guaraní works." }
    ],
    points: [
      { es: "ñande se vuelve ñane delante de ciertas palabras.", en: "ñande becomes ñane before certain words." },
      { es: "ñane ñe'ẽ incluye al que escucha: es una invitación.", en: "ñane ñe'ẽ includes the listener: it's an invitation." },
      { es: "teko teete = «el modo de ser verdadero» = identidad.", en: "teko teete = \"the true way of being\" = identity." },
      { es: "jerovia = confiar · jeroviapy = fe, esperanza.", en: "jerovia = to trust · jeroviapy = faith, hope." }
    ],
    examples: [
      { gn: "Ñane retã ha ñane ñe'ẽ", es: "Nuestra patria y nuestra lengua", en: "Our homeland and our language" },
      { gn: "Ahayhu ñane ñe'ẽ", es: "Amo nuestra lengua", en: "I love our language" },
      { gn: "Aguyje ndéve, ha jajotopáta", es: "Gracias a vos, y hasta luego", en: "Thank you, and see you again" }
    ],
    culture: {
      title: { es: "Terminaste el camino", en: "You've finished the path" },
      body: { es: "Doce grados atrás empezaste con seis vocales y la palabra y, «agua». Ahora podés desarmar tekoha, leer un nombre de ciudad en el mapa, entender por qué rohayhu lleva dos personas adentro y reconocer la nariz guaraní dentro del español paraguayo. El guaraní tiene unos seis millones de hablantes y es la única lengua indígena oficial de un país americano — y desde hoy, un hablante más. Aguyjevete ndéve.",
              en: "Twelve grades ago you started with six vowels and the word y, \"water\". Now you can take tekoha apart, read a city's name off the map, understand why rohayhu carries two people inside it, and hear the Guaraní nose inside Paraguayan Spanish. Guaraní has around six million speakers and is the only Indigenous language official in an American country — and from today, one speaker more. Aguyjevete ndéve." }
    }
  }
};

/* Lookup helper — returns null when a lesson has no notes yet (Learn step is skipped). */
function teachFor(gradeId, lessonIdx) {
  return TEACH[gradeId + ":" + lessonIdx] || null;
}
