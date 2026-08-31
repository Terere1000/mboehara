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
      { es: "Al abuelo también se le dice tamói; a la abuela, jarýi.", en: "A grandfather is also called tamói; a grandmother, jarýi." }
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
      body: { es: "El personaje que te acompaña en esta app es Jasy Jateré, uno de los siete hijos míticos de Tau y Keraná. Su nombre lleva jasy (luna) adentro. La leyenda dice que se aparece a la hora de la siesta y se lleva a los chicos que no duermen — por eso en Paraguay la siesta se respeta.",
              en: "The character keeping you company in this app is Jasy Jateré, one of the seven mythical children of Tau and Keraná. His name has jasy (moon) inside it. Legend says he appears at siesta time and carries off children who won't nap — which is why in Paraguay the siesta is taken seriously." }
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
  }
};

/* Lookup helper — returns null when a lesson has no notes yet (Learn step is skipped). */
function teachFor(gradeId, lessonIdx) {
  return TEACH[gradeId + ":" + lessonIdx] || null;
}
