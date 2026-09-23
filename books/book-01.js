window.BOOK_01 = {
  id: "book-01",
  title: "Le Docteur a disparu !",
  subtitle: "Le TARDIS est là… mais le Docteur a disparu. Trois morceaux de temps se sont mélangés. À toi de les remettre dans le bon ordre.",
  start: "intro",
  heroes: {
    rose: {
      name: "Rose Tyler",
      short: "Rose",
      icon: "🌹",
      trait: "Curieuse et courageuse. Elle sait parler aux gens et repère vite ce qui ne va pas.",
      item: { id:"psychic", name:"Papier psychique", icon:"🪪" }
    },
    amy: {
      name: "Amy Pond",
      short: "Amy",
      icon: "⭐",
      trait: "Audacieuse et rapide. Elle fonce quand tout le monde hésite.",
      item: { id:"tardisKey", name:"Clé du TARDIS", icon:"🔑" }
    },
    clara: {
      name: "Clara Oswald",
      short: "Clara",
      icon: "🍃",
      trait: "Maligne et observatrice. Elle adore résoudre les énigmes.",
      item: { id:"sonic", name:"Tournevis sonique", icon:"🪛" }
    }
  },
  items: {
    psychic: { name:"Papier psychique", icon:"🪪" },
    tardisKey: { name:"Clé du TARDIS", icon:"🔑" },
    sonic: { name:"Tournevis sonique", icon:"🪛" },
    clockGear: { name:"Roue d'horloge", icon:"⚙️" },
    starMap: { name:"Carte des étoiles", icon:"🗺️" },
    dalekCell: { name:"Cellule d'énergie", icon:"🔋" },
    blueCrystal: { name:"Cristal temporel", icon:"💎" },
    feather: { name:"Plume argentée", icon:"🪶" }
  },
  scenes: {
    intro: {
      chapter:"Prologue",
      title:"Le TARDIS sans Docteur",
      glyph:"🚪",
      text:s => `${this && ""}`,
      tone:"blue",
      choices:[]
    }
  }
};

// Text and scenes are assigned separately to keep the data easy to edit.
Object.assign(window.BOOK_01.scenes, {
  intro: {
    chapter:"Prologue",
    title:"Le TARDIS sans Docteur",
    glyph:"🚪",
    text: state => {
      const n = window.BOOK_01.heroes[state.hero].short;
      return `${n} pousse la porte du TARDIS. La salle de contrôle clignote comme un sapin de Noël. Mais le Docteur n'est pas là. Sur l'écran, trois dates tournent en boucle. Puis une voix très lointaine murmure : « Trouve les trois secondes perdues… »`;
    },
    event:"Quelque chose a découpé le temps en trois morceaux.",
    choices:[
      {icon:"🕰️",label:"Suivre la date la plus ancienne",hint:"Londres, 1969",next:"london_arrival",flags:{courage:1}},
      {icon:"🛰️",label:"Choisir la date dans le futur",hint:"Musée orbital, année 4002",next:"museum_arrival",flags:{clues:1}},
      {icon:"🌌",label:"Toucher le symbole qui clignote",hint:"Une route inconnue",next:"rift_room",flags:{courage:1}}
    ]
  },

  london_arrival: {
    chapter:"Morceau 1 · Londres",
    title:"La rue arrêtée",
    glyph:"🕰️",
    tone:"warm",
    text:"Le TARDIS atterrit dans une petite rue de Londres. Tout est immobile : un ballon flotte dans les airs, une goutte de pluie ne tombe plus et une horloge est bloquée sur 17 h 17. Seule une petite fille bouge encore.",
    choices:[
      {icon:"👧",label:"Parler à la petite fille",hint:"Elle a peut-être vu quelque chose.",next:"london_girl",flags:{mercy:1}},
      {icon:"🕰️",label:"Examiner la grande horloge",hint:"Quelque chose brille derrière le cadran.",next:"clock_tower",flags:{clues:1}},
      {icon:"🚪",label:"Entrer dans la boutique ouverte",hint:"Une lumière bleue vient de l'intérieur.",next:"watch_shop"}
    ]
  },

  london_girl: {
    chapter:"Morceau 1 · Londres",
    title:"La fille qui compte",
    glyph:"👧",
    tone:"warm",
    text:"La petite fille compte tout bas : « seize… dix-sept… seize… dix-sept… » Elle explique qu'un homme avec un grand manteau a caché quelque chose dans l'horloge avant de disparaître dans une lumière blanche.",
    event:"Indice trouvé : le Docteur est bien passé ici.",
    choices:[
      {icon:"🤝",label:"Lui promettre de réparer le temps",next:"clock_tower",flags:{mercy:1,clues:1}},
      {icon:"🏃",label:"Courir vers l'horloge",next:"clock_tower",flags:{courage:1}},
      {icon:"🛍️",label:"Chercher un outil dans la boutique",next:"watch_shop",flags:{clues:1}}
    ]
  },

  watch_shop: {
    chapter:"Morceau 1 · Londres",
    title:"La boutique des montres",
    glyph:"⌚",
    tone:"warm",
    text:"Des centaines de montres font toutes « tic » en même temps, puis « tac » en même temps. Au fond de la boutique, un vieux coffre porte le même symbole que l'écran du TARDIS.",
    choices:[
      {icon:"🪛",label:"Ouvrir le coffre avec le tournevis sonique",requiresItem:"sonic",hint:"Le verrou électronique grésille.",next:"shop_sonic"},
      {icon:"🪪",label:"Montrer le papier psychique au gardien",requiresItem:"psychic",hint:"Il te prend pour une inspectrice du temps.",next:"shop_psychic"},
      {icon:"🔍",label:"Chercher une autre façon de l'ouvrir",next:"shop_puzzle",flags:{clues:1}}
    ]
  },

  shop_sonic: {
    chapter:"Morceau 1 · Londres",
    title:"Le coffre bleu",
    glyph:"🪛",
    text:"Le tournevis sonique chante doucement. Le coffre s'ouvre. À l'intérieur se trouve une petite roue dentée couverte de poussière bleue. Quand tu la touches, toutes les montres s'arrêtent.",
    giveItem:"clockGear",
    event:"Objet obtenu : Roue d'horloge.",
    choices:[
      {icon:"⚙️",label:"Porter la roue à la grande horloge",next:"clock_fix"},
      {icon:"👧",label:"Retourner voir la petite fille",next:"london_girl",flags:{mercy:1}},
      {icon:"🚪",label:"Retourner au TARDIS",next:"tardis_between",flags:{clues:1}}
    ]
  },

  shop_psychic: {
    chapter:"Morceau 1 · Londres",
    title:"Inspectrice du temps",
    glyph:"🪪",
    text:"Le gardien regarde le papier psychique et ouvre de grands yeux. Pour lui, tu es une « Inspectrice officielle des horloges impossibles ». Il te remet aussitôt une petite roue dentée trouvée sous le coffre.",
    giveItem:"clockGear",
    event:"Objet obtenu : Roue d'horloge.",
    choices:[
      {icon:"⚙️",label:"Réparer la grande horloge",next:"clock_fix",flags:{clues:1}},
      {icon:"👧",label:"Demander au gardien ce qu'il a vu",next:"guard_story"},
      {icon:"🚪",label:"Retourner au TARDIS",next:"tardis_between"}
    ]
  },

  shop_puzzle: {
    chapter:"Morceau 1 · Londres",
    title:"Trois aiguilles",
    glyph:"🧩",
    text:"Sur le coffre, trois petites aiguilles peuvent tourner. Un mot est gravé : « La seconde vient après la minute, mais avant demain. » En observant les montres, tu comprends qu'il faut toutes les placer sur 17.",
    choices:[
      {icon:"1️⃣",label:"Mettre 17 - 17 - 17",hint:"Ça semble logique.",next:"shop_puzzle_win",flags:{clues:1}},
      {icon:"2️⃣",label:"Mettre 12 - 6 - 3",next:"shop_puzzle_bump"},
      {icon:"3️⃣",label:"Laisser le coffre et monter à l'horloge",next:"clock_tower"}
    ]
  },

  shop_puzzle_win: {
    chapter:"Morceau 1 · Londres",
    title:"Le clic parfait",
    glyph:"⚙️",
    text:"Clic ! Le coffre s'ouvre. À l'intérieur, une roue dentée brille comme si elle était éclairée par une étoile.",
    giveItem:"clockGear",
    event:"Objet obtenu : Roue d'horloge.",
    choices:[
      {icon:"🕰️",label:"Réparer l'horloge",next:"clock_fix"},
      {icon:"👧",label:"Montrer la roue à la petite fille",next:"london_girl",flags:{mercy:1}},
      {icon:"🚪",label:"Retourner au TARDIS",next:"tardis_between"}
    ]
  },

  shop_puzzle_bump: {
    chapter:"Morceau 1 · Londres",
    title:"BONG !",
    glyph:"🔔",
    text:"Le coffre ne s'ouvre pas. En revanche, toutes les montres sonnent d'un coup. BONG ! Une trappe s'ouvre dans le plafond et laisse tomber une vieille échelle.",
    choices:[
      {icon:"🪜",label:"Monter par l'échelle",next:"clock_tower",flags:{courage:1}},
      {icon:"🧩",label:"Réessayer l'énigme",next:"shop_puzzle"},
      {icon:"🚪",label:"Sortir dans la rue",next:"london_arrival"}
    ]
  },

  guard_story: {
    chapter:"Morceau 1 · Londres",
    title:"L'homme pressé",
    glyph:"🧥",
    text:"Le gardien se souvient d'un homme très pressé qui parlait tout seul : « Pas une boucle. Une tresse ! Trois moments attachés ensemble ! » Puis l'homme a disparu avant la fin de sa phrase.",
    event:"Indice : les trois époques doivent être reliées, pas seulement visitées.",
    choices:[
      {icon:"🕰️",label:"Réparer l'horloge",next:"clock_fix",flags:{clues:1}},
      {icon:"🚪",label:"Retourner au TARDIS",next:"tardis_between",flags:{clues:1}},
      {icon:"👧",label:"Aller voir la petite fille",next:"london_girl",flags:{mercy:1}}
    ]
  },

  clock_tower: {
    chapter:"Morceau 1 · Londres",
    title:"Derrière le cadran",
    glyph:"🕰️",
    tone:"warm",
    text:"Tu montes dans la tour. Derrière le cadran, une pièce manque dans le mécanisme. À chaque fois que les aiguilles essaient d'avancer, une lumière blanche les repousse.",
    choices:[
      {icon:"⚙️",label:"Placer la roue d'horloge",requiresItem:"clockGear",next:"clock_fix"},
      {icon:"🪛",label:"Utiliser le tournevis sonique",requiresItem:"sonic",next:"clock_sonic"},
      {icon:"🔍",label:"Observer la lumière blanche",next:"white_light",flags:{clues:1}}
    ]
  },

  clock_sonic: {
    chapter:"Morceau 1 · Londres",
    title:"Le mécanisme répond",
    glyph:"🪛",
    text:"Le tournevis sonique révèle une petite pièce cachée derrière le mécanisme. C'est exactement la roue qui manquait ! Tu la replaces et le grand balancier repart.",
    giveItem:"clockGear",
    choices:[
      {icon:"▶️",label:"Lancer l'horloge",next:"clock_fix",flags:{clues:1}},
      {icon:"✨",label:"Examiner la poussière bleue",next:"white_light",flags:{clues:1}},
      {icon:"🚪",label:"Retourner au TARDIS",next:"tardis_between"}
    ]
  },

  white_light: {
    chapter:"Morceau 1 · Londres",
    title:"Une seconde prisonnière",
    glyph:"✨",
    text:"Dans la lumière, tu vois une image du Docteur. Il frappe contre une paroi invisible et montre trois doigts. Puis l'image disparaît. La lumière vient du futur.",
    event:"Tu comprends que chaque époque contient une partie de la prison du Docteur.",
    choices:[
      {icon:"🛍️",label:"Chercher la pièce manquante dans la boutique",next:"watch_shop"},
      {icon:"🚪",label:"Retourner au TARDIS",next:"tardis_between",flags:{clues:1}},
      {icon:"🕰️",label:"Fouiller encore le mécanisme",next:"clock_tower"}
    ]
  },

  clock_fix: {
    chapter:"Morceau 1 · Londres",
    title:"La première seconde",
    glyph:"⚙️",
    tone:"success",
    text:"La roue s'emboîte. TAC ! Le ballon retombe, la pluie recommence et la petite fille éclate de rire. Une étincelle bleue jaillit de l'horloge et file vers le TARDIS.",
    event:"Premier morceau de temps réparé.",
    flags:{piece1:true,clues:1},
    choices:[
      {icon:"🚪",label:"Retourner au TARDIS",next:"tardis_between"},
      {icon:"👧",label:"Dire au revoir à la petite fille",next:"london_goodbye",flags:{mercy:1}},
      {icon:"✨",label:"Suivre l'étincelle bleue",next:"tardis_between",flags:{courage:1}}
    ]
  },

  london_goodbye: {
    chapter:"Morceau 1 · Londres",
    title:"Un petit cadeau",
    glyph:"🪶",
    tone:"warm",
    text:"La petite fille te donne une plume argentée trouvée juste avant que le temps se bloque. « Pour que tu te souviennes de moi. » La plume brille quand tu la rapproches du TARDIS.",
    giveItem:"feather",
    event:"Objet obtenu : Plume argentée.",
    choices:[
      {icon:"🚪",label:"Retourner au TARDIS",next:"tardis_between"},
      {icon:"✨",label:"Regarder la plume briller",next:"feather_hint",flags:{clues:1}},
      {icon:"👋",label:"Lui faire un grand signe et partir",next:"tardis_between",flags:{mercy:1}}
    ]
  },

  feather_hint: {
    chapter:"Morceau 1 · Londres",
    title:"La plume pointe vers les étoiles",
    glyph:"🪶",
    text:"La plume tourne toute seule et pointe vers le ciel. Pendant une seconde, tu aperçois le reflet d'une station spatiale dans sa surface.",
    event:"La prochaine piste se trouve dans le futur.",
    choices:[
      {icon:"🛰️",label:"Partir pour le futur",next:"museum_arrival",flags:{clues:1}},
      {icon:"🚪",label:"Retourner d'abord au TARDIS",next:"tardis_between"},
      {icon:"🕰️",label:"Regarder une dernière fois l'horloge",next:"tardis_between"}
    ]
  },

  tardis_between: {
    chapter:"Entre les morceaux",
    title:"Le TARDIS respire",
    glyph:"💙",
    text: state => {
      const fixed = state.flags.piece1 ? "Une des trois dates a cessé de clignoter." : "Les trois dates clignotent encore.";
      return `Le TARDIS ronronne faiblement. ${fixed} Sur l'écran apparaît maintenant un musée suspendu au-dessus d'une planète violette.`;
    },
    choices:[
      {icon:"🛰️",label:"Aller au musée orbital",next:"museum_arrival"},
      {icon:"🌌",label:"Suivre la fissure lumineuse",next:"rift_room",flags:{courage:1}},
      {icon:"🧭",label:"Demander au TARDIS de choisir",next:"museum_arrival",flags:{clues:1}}
    ]
  },

  museum_arrival: {
    chapter:"Morceau 2 · An 4002",
    title:"Le musée sans visiteurs",
    glyph:"🛰️",
    text:"Le TARDIS apparaît dans un immense musée orbital. Des planètes tournent sous un plafond transparent. Pourtant, il n'y a personne. Au centre de la salle flotte une carte des étoiles avec un gros morceau manquant.",
    choices:[
      {icon:"🗺️",label:"Examiner la carte des étoiles",next:"star_map_room",flags:{clues:1}},
      {icon:"🤖",label:"Suivre un petit robot de nettoyage",next:"robot_route"},
      {icon:"🚨",label:"Ouvrir la porte marquée « Interdit »",next:"forbidden_gallery",flags:{courage:1}}
    ]
  },

  star_map_room: {
    chapter:"Morceau 2 · An 4002",
    title:"La carte incomplète",
    glyph:"🗺️",
    text:"La carte montre trois points reliés par une ligne bleue : Londres, le musée et un vaisseau inconnu. Le troisième point est caché sous une tache noire qui bouge comme de l'encre.",
    choices:[
      {icon:"🪛",label:"Scanner la tache avec le tournevis sonique",requiresItem:"sonic",next:"map_sonic"},
      {icon:"🪶",label:"Poser la plume argentée sur la carte",requiresItem:"feather",next:"map_feather"},
      {icon:"🤖",label:"Chercher le conservateur du musée",next:"robot_route"}
    ]
  },

  map_sonic: {
    chapter:"Morceau 2 · An 4002",
    title:"Coordonnées retrouvées",
    glyph:"🪛",
    text:"Le tournevis sonique fait disparaître la tache noire. Le troisième point est un ancien vaisseau Dalek caché dans une nébuleuse. La carte se détache du projecteur et se replie dans ta main.",
    giveItem:"starMap",
    event:"Objet obtenu : Carte des étoiles.",
    choices:[
      {icon:"🚨",label:"Explorer la galerie interdite",next:"forbidden_gallery"},
      {icon:"🚪",label:"Retourner au TARDIS",next:"museum_exit",flags:{clues:1}},
      {icon:"🤖",label:"Questionner le petit robot",next:"robot_route"}
    ]
  },

  map_feather: {
    chapter:"Morceau 2 · An 4002",
    title:"Un chemin dans les étoiles",
    glyph:"🪶",
    text:"La plume se met à dessiner une ligne argentée sur la carte. Elle révèle un ancien vaisseau Dalek caché dans une nébuleuse. Puis la carte se replie et tombe doucement dans ta main.",
    giveItem:"starMap",
    event:"Objet obtenu : Carte des étoiles.",
    flags:{clues:1},
    choices:[
      {icon:"🚪",label:"Retourner au TARDIS",next:"museum_exit"},
      {icon:"🚨",label:"Explorer la galerie interdite",next:"forbidden_gallery"},
      {icon:"🤖",label:"Suivre le robot",next:"robot_route"}
    ]
  },

  robot_route: {
    chapter:"Morceau 2 · An 4002",
    title:"BIP veut aider",
    glyph:"🤖",
    text:"Le petit robot s'appelle BIP. Il projette une phrase : « VISITEUR TEMPOREL DÉTECTÉ. CONSERVATEUR : PORTÉ DISPARU. OBJET DANGEREUX : GALERIE 7. » Puis il te tend une carte d'accès.",
    choices:[
      {icon:"🚨",label:"Aller à la galerie 7",next:"forbidden_gallery",flags:{clues:1}},
      {icon:"🪪",label:"Montrer le papier psychique à BIP",requiresItem:"psychic",next:"robot_psychic"},
      {icon:"🗺️",label:"Retourner examiner la carte",next:"star_map_room"}
    ]
  },

  robot_psychic: {
    chapter:"Morceau 2 · An 4002",
    title:"Accès méga-super-officiel",
    glyph:"🤖",
    text:"BIP lit le papier psychique. Ses yeux clignotent très vite. « AUTORISATION : MÉGA-SUPER-OFFICIELLE. » Il ouvre une petite trappe secrète qui mène directement derrière la galerie 7.",
    flags:{clues:1},
    choices:[
      {icon:"🚪",label:"Prendre le passage secret",next:"crystal_room"},
      {icon:"🗺️",label:"Demander où est le vaisseau inconnu",next:"star_map_room"},
      {icon:"🤖",label:"Remercier BIP",next:"forbidden_gallery",flags:{mercy:1}}
    ]
  },

  forbidden_gallery: {
    chapter:"Morceau 2 · An 4002",
    title:"Galerie 7",
    glyph:"💎",
    tone:"danger",
    text:"Derrière la porte, une salle entière est gelée dans le temps. Au centre flotte un cristal bleu. À l'intérieur, tu vois encore le Docteur ! Une ombre métallique tourne autour du cristal.",
    choices:[
      {icon:"💎",label:"S'approcher doucement du cristal",next:"crystal_room",flags:{clues:1}},
      {icon:"🏃",label:"Courir et attraper le cristal",next:"shadow_chase",flags:{courage:1}},
      {icon:"🚪",label:"Se cacher et observer l'ombre",next:"shadow_watch",flags:{clues:1}}
    ]
  },

  shadow_watch: {
    chapter:"Morceau 2 · An 4002",
    title:"L'ombre n'est pas vivante",
    glyph:"🛰️",
    tone:"danger",
    text:"Tu restes immobile. L'ombre recommence exactement le même trajet, encore et encore. Ce n'est pas un monstre : c'est l'enregistrement d'un Dalek pris dans la boucle temporelle.",
    event:"Tu peux traverser la salle juste après son passage.",
    choices:[
      {icon:"👣",label:"Passer derrière l'ombre",next:"crystal_room",flags:{clues:1}},
      {icon:"🏃",label:"Courir devant elle",next:"shadow_chase",flags:{courage:1}},
      {icon:"🚪",label:"Retourner chercher BIP",next:"robot_route"}
    ]
  },

  shadow_chase: {
    chapter:"Morceau 2 · An 4002",
    title:"Trop vite !",
    glyph:"⚡",
    tone:"danger",
    text:"Tu bondis vers le cristal. L'ombre métallique s'allume et crie un mot incompréhensible. Un rayon passe juste au-dessus de ta tête. Heureusement, BIP déclenche l'alarme et l'ombre se fige.",
    event:"Tu as eu chaud, mais la voie est libre.",
    choices:[
      {icon:"💎",label:"Prendre le cristal maintenant",next:"crystal_room",flags:{courage:1}},
      {icon:"🤖",label:"Rejoindre BIP",next:"robot_route",flags:{mercy:1}},
      {icon:"🚪",label:"Retourner au TARDIS",next:"museum_exit"}
    ]
  },

  crystal_room: {
    chapter:"Morceau 2 · An 4002",
    title:"La deuxième seconde",
    glyph:"💎",
    tone:"success",
    text:"Le cristal pulse comme un petit cœur. Quand tu le prends, la salle se remet en mouvement. L'image du Docteur disparaît du cristal et une voix sort des haut-parleurs : « Deux sur trois ! Ne laisse pas les Daleks fermer la tresse ! »",
    giveItem:"blueCrystal",
    flags:{piece2:true,clues:1},
    event:"Deuxième morceau de temps réparé. Objet obtenu : Cristal temporel.",
    choices:[
      {icon:"🗺️",label:"Chercher les coordonnées du vaisseau Dalek",next:"star_map_room"},
      {icon:"🚪",label:"Retourner au TARDIS",next:"museum_exit"},
      {icon:"🤖",label:"Dire au revoir à BIP",next:"museum_goodbye",flags:{mercy:1}}
    ]
  },

  museum_goodbye: {
    chapter:"Morceau 2 · An 4002",
    title:"BIP fait coucou",
    glyph:"🤖",
    text:"BIP agite ses deux petites pinces. Sur son écran apparaît un cœur carré. Avant ton départ, il envoie directement au TARDIS les coordonnées de la nébuleuse.",
    flags:{hasCoords:true,mercy:1,clues:1},
    choices:[
      {icon:"🚪",label:"Partir pour la nébuleuse",next:"museum_exit"},
      {icon:"💎",label:"Observer le cristal",next:"crystal_message"},
      {icon:"👋",label:"Faire coucou à BIP jusqu'à la porte",next:"museum_exit",flags:{mercy:1}}
    ]
  },

  crystal_message: {
    chapter:"Morceau 2 · An 4002",
    title:"Le message caché",
    glyph:"💎",
    text:"Dans le cristal, trois images apparaissent : une horloge, une étoile et un œil Dalek. Puis le Docteur montre la console du TARDIS et fait un grand geste comme pour dire : « Ensemble ! »",
    event:"Indice important : les morceaux doivent être réunis dans le TARDIS.",
    flags:{clues:2},
    choices:[
      {icon:"🚪",label:"Retourner au TARDIS",next:"museum_exit"},
      {icon:"🗺️",label:"Chercher la carte des étoiles",next:"star_map_room"},
      {icon:"🤖",label:"Demander de l'aide à BIP",next:"museum_goodbye",flags:{mercy:1}}
    ]
  },

  museum_exit: {
    chapter:"Entre les morceaux",
    title:"Une destination dangereuse",
    glyph:"🌌",
    text: state => {
      const clue = state.item === "starMap" || state.flags.hasCoords
        ? "Les coordonnées du vaisseau Dalek apparaissent clairement sur l'écran."
        : "Le TARDIS retrouve une faible trace Dalek dans la nébuleuse.";
      return `${clue} Une seule date clignote encore. Le Docteur est tout près.`;
    },
    choices:[
      {icon:"🌌",label:"Entrer dans la nébuleuse",next:"dalek_approach",flags:{courage:1}},
      {icon:"💎",label:"Étudier le cristal avant de partir",requiresItem:"blueCrystal",next:"crystal_message"},
      {icon:"🌀",label:"Suivre la fissure temporelle",next:"rift_room"}
    ]
  },

  rift_room: {
    chapter:"Hors du temps",
    title:"La fissure blanche",
    glyph:"🌀",
    tone:"danger",
    text:"Le TARDIS traverse une fissure blanche et atterrit dans un lieu impossible : une petite pièce où trois portes flottent dans le vide. Sur chacune est dessiné un symbole : horloge, étoile, Dalek.",
    choices:[
      {icon:"🕰️",label:"Prendre la porte Horloge",next:"london_arrival"},
      {icon:"⭐",label:"Prendre la porte Étoile",next:"museum_arrival"},
      {icon:"🤖",label:"Prendre la porte Dalek",next:"dalek_approach",flags:{courage:1}}
    ]
  },

  dalek_approach: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Le vaisseau silencieux",
    glyph:"🛸",
    tone:"danger",
    text:"Un ancien vaisseau Dalek flotte dans la brume violette. Aucune lumière. Aucun mouvement. Pourtant, le TARDIS refuse d'approcher davantage. Il faudra entrer à pied par une petite passerelle.",
    choices:[
      {icon:"🔑",label:"Verrouiller le TARDIS avec sa clé avant de partir",requiresItem:"tardisKey",next:"dalek_airlock_safe",flags:{clues:1}},
      {icon:"🗺️",label:"Utiliser la carte des étoiles pour trouver une entrée",requiresItem:"starMap",next:"dalek_secret_entry",flags:{clues:1}},
      {icon:"🚪",label:"Prendre la passerelle principale",next:"dalek_airlock",flags:{courage:1}}
    ]
  },

  dalek_airlock_safe: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"La porte se referme",
    glyph:"🔑",
    tone:"danger",
    text:"Tu verrouilles le TARDIS. À peine as-tu quitté la passerelle qu'une pince Dalek essaie d'ouvrir sa porte. CLANG ! Elle n'y arrive pas. Bonne idée : ton chemin de retour reste sûr.",
    flags:{tardisSafe:true},
    choices:[
      {icon:"👣",label:"Avancer dans le couloir",next:"dalek_corridor"},
      {icon:"🔍",label:"Suivre les câbles bleus",next:"energy_room",flags:{clues:1}},
      {icon:"👂",label:"Écouter derrière la grande porte",next:"dalek_voice"}
    ]
  },

  dalek_secret_entry: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Le conduit oublié",
    glyph:"🗺️",
    tone:"danger",
    text:"La carte révèle une ancienne entrée de maintenance. Tu arrives derrière la salle d'énergie sans croiser un seul Dalek. Au sol, une cellule d'énergie encore chargée clignote.",
    giveItem:"dalekCell",
    flags:{secretRoute:true,clues:1},
    event:"Objet obtenu : Cellule d'énergie.",
    choices:[
      {icon:"🔋",label:"Prendre la cellule vers la salle centrale",next:"dalek_core"},
      {icon:"👂",label:"Écouter les voix dans le couloir",next:"dalek_voice"},
      {icon:"🚪",label:"Chercher une sortie vers le TARDIS",next:"dalek_corridor"}
    ]
  },

  dalek_airlock: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Porte verrouillée",
    glyph:"🚨",
    tone:"danger",
    text:"La passerelle se ferme derrière toi. Trois lumières rouges s'allument. Une voix métallique annonce : « INTRUS DÉTECTÉ. » Mais aucun Dalek n'apparaît. Le vaisseau semble presque vide.",
    choices:[
      {icon:"🪛",label:"Ouvrir le panneau avec le tournevis sonique",requiresItem:"sonic",next:"energy_room"},
      {icon:"🪪",label:"Présenter le papier psychique au scanner",requiresItem:"psychic",next:"scanner_confused"},
      {icon:"🏃",label:"Courir avant que l'alarme se réveille",next:"dalek_corridor",flags:{courage:1}}
    ]
  },

  scanner_confused: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Le Dalek qui hésite",
    glyph:"🪪",
    tone:"danger",
    text:"Le scanner lit le papier psychique. « IDENTITÉ : … TECHNICIEN SUPÉRIEUR DES… GÂTEAUX ? » La porte s'ouvre pendant que l'ordinateur essaie de comprendre ce qu'est un gâteau.",
    flags:{clues:1},
    choices:[
      {icon:"🔋",label:"Entrer dans la salle d'énergie",next:"energy_room"},
      {icon:"👣",label:"Prendre le couloir central",next:"dalek_corridor"},
      {icon:"🎂",label:"Dire très sérieusement : « Inspection des gâteaux ! »",next:"dalek_corridor",flags:{courage:1}}
    ]
  },

  dalek_corridor: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Les voix derrière les murs",
    glyph:"👁️",
    tone:"danger",
    text:"Le couloir est sombre. Dans les murs, des voix Daleks répètent la même phrase. Ce ne sont pas de vrais soldats : seulement des souvenirs enregistrés. Au bout, deux portes : ÉNERGIE et CŒUR TEMPOREL.",
    choices:[
      {icon:"🔋",label:"Entrer dans ÉNERGIE",next:"energy_room"},
      {icon:"💙",label:"Entrer dans CŒUR TEMPOREL",next:"dalek_core",flags:{courage:1}},
      {icon:"👂",label:"Écouter les voix",next:"dalek_voice",flags:{clues:1}}
    ]
  },

  dalek_voice: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Ce que les Daleks voulaient",
    glyph:"👁️",
    tone:"danger",
    text:"Tu comprends quelques mots : les Daleks ont essayé d'enfermer le Docteur dans une seconde qui recommence sans fin. Mais leur machine a cassé et a coincé aussi leur propre vaisseau.",
    event:"La prison et le vaisseau utilisent la même source d'énergie.",
    flags:{clues:2},
    choices:[
      {icon:"🔋",label:"Couper la source d'énergie",next:"energy_room"},
      {icon:"💙",label:"Aller directement au cœur temporel",next:"dalek_core"},
      {icon:"🚪",label:"Retourner vers le TARDIS",next:"dalek_corridor"}
    ]
  },

  energy_room: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"La dernière batterie",
    glyph:"🔋",
    tone:"danger",
    text:"Une seule cellule alimente encore tout le vaisseau. Si tu la retires, les portes risquent de se fermer. Mais sans elle, la prison temporelle ne pourra plus tenir longtemps.",
    choices:[
      {icon:"🔋",label:"Retirer la cellule d'énergie",next:"take_cell",flags:{courage:1}},
      {icon:"🪛",label:"Dérégler doucement le système",requiresItem:"sonic",next:"soft_shutdown",flags:{clues:1}},
      {icon:"💙",label:"Laisser la cellule et aller au cœur",next:"dalek_core"}
    ]
  },

  take_cell: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Silence total",
    glyph:"🔋",
    tone:"danger",
    text:"Tu retires la cellule. Toutes les lumières s'éteignent. Puis un petit éclair bleu apparaît au fond de la pièce : la prison du Docteur vient de perdre une partie de sa force.",
    giveItem:"dalekCell",
    flags:{powerCut:true},
    event:"Objet obtenu : Cellule d'énergie.",
    choices:[
      {icon:"💙",label:"Courir vers le cœur temporel",next:"dalek_core",flags:{courage:1}},
      {icon:"🚪",label:"Retourner vers le TARDIS",next:"dalek_corridor"},
      {icon:"👂",label:"Écouter dans le noir",next:"doctor_whisper",flags:{clues:1}}
    ]
  },

  soft_shutdown: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Tout doucement…",
    glyph:"🪛",
    tone:"danger",
    text:"Le tournevis sonique baisse l'énergie sans couper les portes. La prison temporelle faiblit et les systèmes Daleks restent endormis. C'est exactement ce qu'il fallait.",
    flags:{powerCut:true,cleanShutdown:true,clues:1},
    choices:[
      {icon:"💙",label:"Aller au cœur temporel",next:"dalek_core"},
      {icon:"👂",label:"Chercher la voix du Docteur",next:"doctor_whisper"},
      {icon:"🚪",label:"Vérifier le chemin du retour",next:"dalek_corridor"}
    ]
  },

  doctor_whisper: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"« Pas la porte rouge ! »",
    glyph:"🗣️",
    tone:"danger",
    text:"Dans le noir, la voix du Docteur arrive comme un souffle : « Si tu m'entends… le cœur a trois anneaux. Bleu, blanc, rouge. Surtout pas rouge ! Enfin… sauf si tu aimes les explosions. »",
    event:"Indice : au cœur temporel, choisir l'anneau bleu ou blanc.",
    flags:{clues:2},
    choices:[
      {icon:"💙",label:"Aller au cœur temporel",next:"dalek_core"},
      {icon:"🔋",label:"Garder la cellule avec toi",next:"dalek_core"},
      {icon:"🚪",label:"Retourner au TARDIS",next:"dalek_corridor"}
    ]
  },

  dalek_core: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Le cœur temporel",
    glyph:"🌀",
    tone:"danger",
    text:"Une sphère blanche flotte au centre de la salle. À l'intérieur, le Docteur est figé en plein milieu d'un pas. Trois anneaux tournent autour de lui : bleu, blanc et rouge.",
    choices:[
      {icon:"🔵",label:"Arrêter l'anneau bleu",next:"blue_ring",flags:{clues:1}},
      {icon:"⚪",label:"Arrêter l'anneau blanc",next:"white_ring",flags:{mercy:1}},
      {icon:"🔴",label:"Arrêter l'anneau rouge",next:"red_ring",flags:{courage:1}}
    ]
  },

  blue_ring: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"La troisième seconde",
    glyph:"🔵",
    tone:"success",
    text:"L'anneau bleu ralentit. La sphère se fissure. Le Docteur bouge enfin un doigt, puis deux. « Excellent choix ! Maintenant, retour au TARDIS ! Il faut tresser les trois secondes ensemble ! »",
    flags:{piece3:true,correctRing:true,clues:1},
    choices:[
      {icon:"🏃",label:"Courir vers le TARDIS",next:"final_console",flags:{courage:1}},
      {icon:"🔋",label:"Utiliser la cellule pour stabiliser le cœur",requiresItem:"dalekCell",next:"cell_stabilize"},
      {icon:"💎",label:"Utiliser le cristal temporel",requiresItem:"blueCrystal",next:"crystal_stabilize"}
    ]
  },

  white_ring: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Une porte s'ouvre",
    glyph:"⚪",
    tone:"success",
    text:"L'anneau blanc s'arrête et ouvre une brèche. Le Docteur tombe hors de la sphère comme s'il sortait d'une porte invisible. « Je savais que tu viendrais ! Enfin… j'espérais très fort. »",
    flags:{piece3:true,doctorFree:true,clues:1},
    choices:[
      {icon:"🏃",label:"Retourner ensemble au TARDIS",next:"final_console"},
      {icon:"🔋",label:"Couper l'énergie avant de partir",next:"energy_room",flags:{clues:1}},
      {icon:"👁️",label:"Vérifier qu'aucun Dalek ne se réveille",next:"final_console",flags:{courage:1}}
    ]
  },

  red_ring: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Oh oh.",
    glyph:"🔴",
    tone:"danger",
    text:"L'anneau rouge s'arrête. Le vaisseau entier se met à trembler. Le Docteur se libère… mais toutes les alarmes Daleks s'allument en même temps. « Techniquement, ça a marché ! Maintenant : COURS ! »",
    flags:{piece3:true,redAlarm:true,doctorFree:true},
    choices:[
      {icon:"🏃",label:"Courir vers le TARDIS",next:"escape_red",flags:{courage:1}},
      {icon:"🔋",label:"Retirer la cellule d'énergie",next:"take_cell"},
      {icon:"🪛",label:"Essayer d'éteindre l'alarme",requiresItem:"sonic",next:"soft_shutdown"}
    ]
  },

  cell_stabilize: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Une batterie pour une seconde",
    glyph:"🔋",
    tone:"success",
    text:"Tu places la cellule dans un logement vide. Le cœur se stabilise assez longtemps pour libérer complètement le Docteur. Il attrape ta main : « Très beau bricolage. On rentre ! »",
    flags:{doctorFree:true,stableCore:true},
    choices:[
      {icon:"🚪",label:"Retourner au TARDIS",next:"final_console"},
      {icon:"👁️",label:"Éteindre le reste du vaisseau",next:"final_console",flags:{clues:1}},
      {icon:"🏃",label:"Partir avant que ça change d'avis",next:"final_console",flags:{courage:1}}
    ]
  },

  crystal_stabilize: {
    chapter:"Morceau 3 · La nébuleuse",
    title:"Les deux lumières",
    glyph:"💎",
    tone:"success",
    text:"Le cristal du musée et le cœur Dalek brillent ensemble. Pendant une seconde, tout devient bleu. Puis la prison disparaît. Le Docteur tombe sur ses pieds et sourit : « Trois morceaux. Une seule seconde. Parfait. »",
    flags:{doctorFree:true,stableCore:true,perfectLink:true,clues:2},
    choices:[
      {icon:"🚪",label:"Retourner au TARDIS",next:"final_console"},
      {icon:"💎",label:"Emporter le cristal",next:"final_console",flags:{clues:1}},
      {icon:"👣",label:"Laisser le cristal stabiliser le vaisseau",next:"final_console",flags:{mercy:1}}
    ]
  },

  escape_red: {
    chapter:"Course finale",
    title:"Les Daleks se réveillent",
    glyph:"🚨",
    tone:"danger",
    text: state => state.flags.tardisSafe
      ? "Des yeux Daleks s'allument dans les couloirs. Mais le TARDIS est toujours verrouillé et intact. Tu atteins sa porte juste avant qu'un rayon frappe la passerelle."
      : "Des yeux Daleks s'allument dans les couloirs. Tu cours jusqu'au TARDIS, mais une pince métallique est déjà accrochée à sa porte.",
    choices:[
      {icon:"🔑",label:"Ouvrir vite avec la clé du TARDIS",requiresItem:"tardisKey",next:"final_console",flags:{courage:1}},
      {icon:"🪛",label:"Détacher la pince avec le tournevis",requiresItem:"sonic",next:"final_console"},
      {icon:"💥",label:"Pousser la pince et se glisser à l'intérieur",next:"final_console_damaged"}
    ]
  },

  final_console: {
    chapter:"Final",
    title:"Trois secondes, une histoire",
    glyph:"💙",
    tone:"success",
    text: state => {
      const doctor = state.flags.doctorFree ? "Le Docteur bondit autour de la console." : "La voix du Docteur résonne depuis la console.";
      return `${doctor} Trois lumières apparaissent : Londres, le musée et la nébuleuse. « Il faut les réunir maintenant. Une seule mauvaise connexion et la boucle recommence ! »`;
    },
    choices:[
      {icon:"💎",label:"Placer le cristal au centre de la console",requiresItem:"blueCrystal",next:s => (s.flags.piece1 && s.flags.piece2 && s.flags.piece3 && s.flags.clues >= 5) ? "ending_perfect" : "ending_partial"},
      {icon:"🔋",label:"Brancher la cellule Dalek à la console",requiresItem:"dalekCell",next:s => s.flags.piece3 ? "ending_partial" : "ending_fail"},
      {icon:"🌀",label:"Lancer le TARDIS sans rien ajouter",next:s => (s.flags.piece1 && s.flags.piece2 && s.flags.piece3) ? "ending_partial" : "ending_fail"}
    ]
  },

  final_console_damaged: {
    chapter:"Final",
    title:"Le TARDIS tousse",
    glyph:"💥",
    tone:"danger",
    text:"La pince Dalek a abîmé une partie de la porte. Le TARDIS décolle quand même, mais la console crache des étincelles. Il faut choisir vite avant que la boucle se referme.",
    flags:{tardisDamaged:true},
    choices:[
      {icon:"💎",label:"Utiliser le cristal temporel",requiresItem:"blueCrystal",next:"ending_partial"},
      {icon:"🔋",label:"Utiliser la cellule Dalek",requiresItem:"dalekCell",next:"ending_partial"},
      {icon:"🌀",label:"Forcer le départ du TARDIS",next:"ending_fail"}
    ]
  },

  ending_perfect: {
    end:true,
    endLabel:"Fin parfaite",
    title:"Le temps chante de nouveau",
    glyph:"✨",
    tone:"success",
    text: state => {
      const hero = window.BOOK_01.heroes[state.hero].short;
      return `${hero} place le dernier élément sur la console. Les trois lumières se rejoignent comme des rubans. Londres reprend son cours, le musée retrouve ses visiteurs et le vaisseau Dalek s'éteint sans exploser. Le Docteur est libre. Il sourit : « Tu n'as pas seulement sauvé ma seconde. Tu as sauvé toutes celles qui venaient après. Alors… où allons-nous maintenant ? »`;
    }
  },

  ending_partial: {
    end:true,
    endLabel:"Fin aventureuse",
    title:"Sauvé… mais pas tout à fait rangé",
    glyph:"🌠",
    tone:"warm",
    text: state => {
      const hero = window.BOOK_01.heroes[state.hero].short;
      return `Le TARDIS secoue ${hero} comme une boîte pleine de billes, puis tout devient calme. Le Docteur est libre et la boucle est cassée. Une petite chose reste étrange : quelque part dans l'univers, une horloge avance maintenant de trois secondes. Le Docteur hausse les épaules. « On réparera ça après le goûter. »`;
    }
  },

  ending_fail: {
    end:true,
    endLabel:"Fin à recommencer",
    title:"La seconde recommence",
    glyph:"⏳",
    tone:"danger",
    text: state => {
      const hero = window.BOOK_01.heroes[state.hero].short;
      return `La console clignote. Une lumière blanche remplit le TARDIS. Puis ${hero} ouvre les yeux devant la même porte qu'au début. Le Docteur a encore disparu… mais cette fois, un petit mot est posé sur la console : « Presque ! Cherche mieux les trois morceaux. — Le Docteur »`;
    }
  }
});
