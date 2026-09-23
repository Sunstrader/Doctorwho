window.BOOK_04 = {
  id:"book-04",
  title:"Panique dans le TARDIS",
  subtitle:"Le TARDIS a perdu le contrôle de ses propres pièces. La bibliothèque mène à une plage, la cuisine flotte dans l'espace et la salle de contrôle disparaît derrière chaque porte.",
  start:"intro",
  heroes:{
    rose:{
      name:"Rose Tyler",short:"Rose",icon:"🌹",
      trait:"Elle connaît bien le TARDIS et lui fait confiance même quand il devient bizarre.",
      item:{id:"tardisKey",name:"Clé du TARDIS",icon:"🔑"}
    },
    amy:{
      name:"Amy Pond",short:"Amy",icon:"⭐",
      trait:"Elle garde la tête froide dans les endroits impossibles.",
      item:{id:"notebook",name:"Petit carnet",icon:"📓"}
    },
    donna:{
      name:"Donna Noble",short:"Donna",icon:"💫",
      trait:"Elle ne se laisse pas impressionner, même par un vaisseau plus grand à l'intérieur.",
      item:{id:"handbag",name:"Sac rouge",icon:"👜"}
    }
  },
  items:{
    tardisKey:{name:"Clé du TARDIS",icon:"🔑"},
    notebook:{name:"Petit carnet",icon:"📓"},
    handbag:{name:"Sac rouge",icon:"👜"},
    blueThread:{name:"Fil bleu",icon:"🧵"},
    libraryCard:{name:"Carte de bibliothèque",icon:"📚"},
    compass:{name:"Boussole impossible",icon:"🧭"},
    crystal:{name:"Cristal du TARDIS",icon:"💎"},
    teaCup:{name:"Tasse de thé",icon:"☕"},
    roomKey:{name:"Clé de la chambre zéro",icon:"🗝️"}
  },
  scenes:{
    intro:{
      chapter:"Prologue",
      title:"La porte qui donne sur trois endroits",
      glyph:"🚪",
      text:state=>{
        const n=window.BOOK_04.heroes[state.hero].short;
        return `Le Docteur ouvre une porte du TARDIS. Derrière : la bibliothèque. Il la referme, l'ouvre encore : une plage. Il recommence : un couloir rempli de parapluies. « Ah. » Il regarde ${n}. « Le TARDIS a oublié où il a rangé ses propres pièces. » Puis toutes les lumières deviennent rouges.`;
      },
      event:"La salle de contrôle disparaît derrière vous.",
      choices:[
        {icon:"📚",label:"Entrer dans la bibliothèque",next:"library",flags:{clues:1}},
        {icon:"🏖️",label:"Prendre la porte vers la plage",next:"beach_room",flags:{brave:1}},
        {icon:"☂️",label:"Suivre le couloir aux parapluies",next:"umbrella_hall"}
      ]
    },

    library:{
      chapter:"Zone perdue",
      title:"La bibliothèque sans fin",
      glyph:"📚",
      text:"Les étagères montent si haut qu'elles disparaissent dans la brume. Certains livres portent des titres étranges : « Pièces qui n'existent plus », « Couloirs qui n'ont jamais existé », « Cuisine : troisième gauche après Saturne ».",
      choices:[
        {icon:"📓",label:"Noter les directions dans le carnet",requiresItem:"notebook",next:"map_notes"},
        {icon:"📚",label:"Chercher un livre sur le TARDIS",next:"tardis_manual",flags:{clues:1}},
        {icon:"🪜",label:"Monter à l'échelle lumineuse",next:"upper_library",flags:{brave:1}}
      ]
    },

    map_notes:{
      chapter:"Zone perdue",
      title:"Une carte qui se dessine toute seule",
      glyph:"📓",
      text:"Chaque fois que tu notes le nom d'une pièce, le carnet ajoute une flèche que tu n'as pas dessinée. Le TARDIS semble utiliser les pages pour te répondre.",
      flags:{mapStarted:true,clues:2},
      choices:[
        {icon:"🧵",label:"Suivre une flèche marquée « FIL BLEU »",next:"blue_thread_room"},
        {icon:"📚",label:"Chercher le manuel du TARDIS",next:"tardis_manual"},
        {icon:"🚪",label:"Suivre la flèche « CHAMBRE ZÉRO »",next:"zero_door"}
      ]
    },

    tardis_manual:{
      chapter:"Zone perdue",
      title:"Le manuel inutilement utile",
      glyph:"📖",
      text:"Un énorme livre s'ouvre tout seul. Première page : « En cas de réorganisation intérieure involontaire, ne paniquez pas. » Deuxième page : « Si vous paniquez déjà, cherchez le cœur auxiliaire. » Le reste est écrit en Gallifreyan.",
      flags:{knowsHeart:true,clues:2},
      choices:[
        {icon:"💙",label:"Chercher le cœur auxiliaire",next:"blue_thread_room"},
        {icon:"📚",label:"Prendre la carte glissée dans le livre",next:"take_library_card"},
        {icon:"🪜",label:"Monter dans les étages",next:"upper_library"}
      ]
    },

    take_library_card:{
      chapter:"Zone perdue",
      title:"Carte de prêt interdimensionnelle",
      glyph:"📚",
      text:"Une carte tombe du manuel : « Bibliothèque du TARDIS — emprunteur : tout le monde, date de retour : hier ». Elle porte un petit symbole de porte.",
      giveItem:"libraryCard",
      event:"Objet obtenu : Carte de bibliothèque.",
      choices:[
        {icon:"🚪",label:"Tester la carte sur une porte",next:"card_door"},
        {icon:"💙",label:"Chercher le cœur auxiliaire",next:"blue_thread_room"},
        {icon:"🪜",label:"Explorer plus haut",next:"upper_library"}
      ]
    },

    upper_library:{
      chapter:"Zone perdue",
      title:"Le plafond est un sol",
      glyph:"🪜",
      text:"En haut de l'échelle, la gravité tourne doucement. Tu te retrouves à marcher sur ce qui était le plafond. Une petite porte bleue est maintenant juste devant toi.",
      flags:{clues:1},
      choices:[
        {icon:"🚪",label:"Ouvrir la petite porte",next:"blue_thread_room"},
        {icon:"⬇️",label:"Redescendre",next:"library"},
        {icon:"🧭",label:"Suivre la direction qui semble être « nord »",next:"compass_room"}
      ]
    },

    beach_room:{
      chapter:"Zone perdue",
      title:"Une plage dans le TARDIS",
      glyph:"🏖️",
      tone:"warm",
      text:"Du sable chaud sous les pieds, un ciel orange au-dessus. Pourtant, derrière toi, la porte bleue est toujours là. Une ligne de coquillages forme une flèche vers une cabine de plage.",
      choices:[
        {icon:"🐚",label:"Suivre les coquillages",next:"beach_hut",flags:{clues:1}},
        {icon:"🌊",label:"Regarder ce qu'il y a au-delà des vagues",next:"sea_edge"},
        {icon:"🚪",label:"Retourner vers la porte",next:"moving_door"}
      ]
    },

    beach_hut:{
      chapter:"Zone perdue",
      title:"La cabine du mardi",
      glyph:"🏠",
      text:"La cabine contient une tasse de thé encore chaude et une pancarte : « N'OUVREZ PAS LE PLACARD LE MARDI ». Le Docteur vérifie sa montre. « Nous sommes… probablement mardi. »",
      choices:[
        {icon:"☕",label:"Prendre la tasse de thé",next:"take_tea"},
        {icon:"🚪",label:"Ouvrir quand même le placard",next:"tuesday_closet",flags:{brave:1}},
        {icon:"🏖️",label:"Sortir de la cabine",next:"beach_room"}
      ]
    },

    take_tea:{
      chapter:"Zone perdue",
      title:"Toujours chaud",
      glyph:"☕",
      text:"La tasse reste chaude même quand tu la poses dans le sable. Sur le fond est dessiné le même symbole que dans le manuel : un cœur entouré de trois portes.",
      giveItem:"teaCup",
      flags:{clues:1},
      event:"Objet obtenu : Tasse de thé.",
      choices:[
        {icon:"💙",label:"Suivre le symbole du cœur",next:"blue_thread_room"},
        {icon:"🚪",label:"Ouvrir le placard",next:"tuesday_closet"},
        {icon:"🌊",label:"Explorer le bord de mer",next:"sea_edge"}
      ]
    },

    tuesday_closet:{
      chapter:"Zone perdue",
      title:"Le placard n'est pas un placard",
      glyph:"🚪",
      tone:"danger",
      text:"Derrière la porte : un immense couloir métallique. Une voix du TARDIS annonce calmement : « Mauvais jour. » Puis la cabine disparaît derrière toi.",
      flags:{clues:1},
      choices:[
        {icon:"➡️",label:"Avancer dans le couloir",next:"umbrella_hall"},
        {icon:"🧵",label:"Suivre un fil bleu au sol",next:"blue_thread_room"},
        {icon:"🔙",label:"Essayer de rouvrir le placard",next:"moving_door"}
      ]
    },

    sea_edge:{
      chapter:"Zone perdue",
      title:"La mer finit au mur",
      glyph:"🌊",
      text:"À vingt mètres du rivage, la mer s'arrête net contre un mur blanc invisible. Derrière, tu vois passer des couloirs du TARDIS comme des poissons.",
      flags:{clues:2},
      choices:[
        {icon:"👜",label:"Chercher quelque chose d'utile dans le sac",requiresItem:"handbag",next:"handbag_trick"},
        {icon:"🚪",label:"Frapper sur le mur invisible",next:"moving_door"},
        {icon:"🏖️",label:"Retourner vers la cabine",next:"beach_hut"}
      ]
    },

    handbag_trick:{
      chapter:"Zone perdue",
      title:"Donna avait tout prévu… probablement",
      glyph:"👜",
      text:"Dans le sac, entre un paquet de mouchoirs et trois stylos, tu trouves une petite bobine de fil bleu. Au moment où tu la sors, le fil passe tout seul à travers le mur.",
      giveItem:"blueThread",
      event:"Objet obtenu : Fil bleu.",
      flags:{clues:1},
      choices:[
        {icon:"🧵",label:"Suivre le fil",next:"blue_thread_room"},
        {icon:"🏖️",label:"Retourner sur la plage",next:"beach_room"},
        {icon:"🚪",label:"Essayer de traverser le mur",next:"moving_door"}
      ]
    },

    umbrella_hall:{
      chapter:"Zone perdue",
      title:"Le couloir aux cent parapluies",
      glyph:"☂️",
      text:"Des parapluies pendent au plafond. À chaque pas, l'un d'eux s'ouvre et pointe dans une direction différente. Un parapluie bleu refuse de bouger.",
      choices:[
        {icon:"☂️",label:"Suivre le parapluie bleu",next:"blue_thread_room",flags:{clues:1}},
        {icon:"🧭",label:"Chercher un vrai nord",next:"compass_room"},
        {icon:"🚪",label:"Prendre la première porte",next:"kitchen_zero"}
      ]
    },

    kitchen_zero:{
      chapter:"Zone perdue",
      title:"La cuisine en apesanteur",
      glyph:"🍳",
      text:"Des cuillères, des biscuits et une théière flottent dans toute la pièce. Au milieu tourne une petite clé argentée.",
      choices:[
        {icon:"🗝️",label:"Attraper la clé",next:"take_room_key",flags:{brave:1}},
        {icon:"☕",label:"Attraper la théière",next:"floating_tea"},
        {icon:"🚪",label:"Traverser jusqu'à l'autre porte",next:"zero_door"}
      ]
    },

    take_room_key:{
      chapter:"Zone perdue",
      title:"La clé de la chambre zéro",
      glyph:"🗝️",
      text:"Tu attrapes la clé au vol. Une étiquette indique : « Chambre Zéro — uniquement si le TARDIS est très, très confus ».",
      giveItem:"roomKey",
      event:"Objet obtenu : Clé de la chambre zéro.",
      flags:{clues:2},
      choices:[
        {icon:"0️⃣",label:"Chercher la chambre zéro",next:"zero_door"},
        {icon:"🧭",label:"Passer par la salle de navigation",next:"compass_room"},
        {icon:"🧵",label:"Suivre le fil bleu au mur",next:"blue_thread_room"}
      ]
    },

    floating_tea:{
      chapter:"Zone perdue",
      title:"Un indice dans la théière",
      glyph:"🫖",
      text:"La théière tourne lentement. Sous son couvercle est écrit : « Le cœur n'est jamais loin. Les portes, elles, mentent. »",
      flags:{clues:2},
      choices:[
        {icon:"💙",label:"Chercher le cœur sans suivre les portes",next:"blue_thread_room"},
        {icon:"🗝️",label:"Attraper la clé qui flotte",next:"take_room_key"},
        {icon:"🚪",label:"Prendre la porte la plus proche",next:"moving_door"}
      ]
    },

    moving_door:{
      chapter:"Zone perdue",
      title:"La porte change d'avis",
      glyph:"🚪",
      text:"Tu ouvres la porte : bibliothèque. Tu la fermes. Tu l'ouvres : cuisine. Encore une fois : un couloir. Le TARDIS ne garde aucune pièce au même endroit.",
      choices:[
        {icon:"📓",label:"Noter les trois destinations",requiresItem:"notebook",next:"door_pattern"},
        {icon:"🔑",label:"Utiliser la clé du TARDIS sur la porte",requiresItem:"tardisKey",next:"key_command"},
        {icon:"🧵",label:"Chercher un fil bleu au lieu d'une porte",next:"blue_thread_room"}
      ]
    },

    door_pattern:{
      chapter:"Zone perdue",
      title:"Trois, puis une",
      glyph:"📓",
      text:"En notant les destinations, tu vois un rythme : bibliothèque, cuisine, couloir… puis toujours une pièce bleue pendant une demi-seconde.",
      flags:{sawBlueRoom:true,clues:2},
      choices:[
        {icon:"🚪",label:"Ouvrir au bon moment",next:"blue_thread_room"},
        {icon:"0️⃣",label:"Chercher la chambre zéro",next:"zero_door"},
        {icon:"🧭",label:"Chercher un meilleur guide",next:"compass_room"}
      ]
    },

    key_command:{
      chapter:"Zone perdue",
      title:"La clé reconnaît sa maison",
      glyph:"🔑",
      text:"La clé chauffe dans ta main. Au lieu d'ouvrir la porte, elle tourne légèrement vers la gauche comme une aiguille de boussole.",
      flags:{keyCompass:true,clues:2},
      choices:[
        {icon:"⬅️",label:"Suivre la direction de la clé",next:"blue_thread_room"},
        {icon:"🧭",label:"Comparer avec une vraie boussole",next:"compass_room"},
        {icon:"🚪",label:"Réessayer la porte",next:"moving_door"}
      ]
    },

    compass_room:{
      chapter:"Salle de navigation",
      title:"Une boussole qui pointe vers l'intérieur",
      glyph:"🧭",
      text:"Au centre d'une pièce ronde flotte une boussole. Son aiguille ne pointe ni nord ni sud : elle pointe vers toi. Puis vers le mur. Puis vers le plafond.",
      choices:[
        {icon:"🧭",label:"Prendre la boussole",next:"take_compass"},
        {icon:"📓",label:"Noter ses mouvements",requiresItem:"notebook",next:"compass_pattern"},
        {icon:"🧵",label:"Suivre la ligne bleue sous son socle",next:"blue_thread_room"}
      ]
    },

    take_compass:{
      chapter:"Salle de navigation",
      title:"Boussole impossible",
      glyph:"🧭",
      text:"Dès que tu la prends, l'aiguille se calme et pointe vers la source d'énergie la plus proche.",
      giveItem:"compass",
      event:"Objet obtenu : Boussole impossible.",
      flags:{clues:1},
      choices:[
        {icon:"💙",label:"Suivre l'aiguille",next:"blue_thread_room"},
        {icon:"0️⃣",label:"Chercher la chambre zéro",next:"zero_door"},
        {icon:"🚪",label:"Tester une porte au hasard",next:"moving_door"}
      ]
    },

    compass_pattern:{
      chapter:"Salle de navigation",
      title:"Elle dessine un cœur",
      glyph:"📓",
      text:"Sur le carnet, les mouvements de l'aiguille forment une boucle qui ressemble à un cœur. Une flèche part du dessin vers un mur sans porte.",
      flags:{clues:2},
      choices:[
        {icon:"🧱",label:"Toucher le mur",next:"blue_thread_room"},
        {icon:"🧭",label:"Prendre la boussole",next:"take_compass"},
        {icon:"0️⃣",label:"Chercher la chambre zéro",next:"zero_door"}
      ]
    },

    card_door:{
      chapter:"Zone perdue",
      title:"Une porte empruntée",
      glyph:"📚",
      text:"La carte de bibliothèque glisse dans une fente qui n'était pas là une seconde plus tôt. La porte affiche : « Emprunt autorisé : une pièce pour quinze minutes. »",
      choices:[
        {icon:"💙",label:"Emprunter la salle du cœur",next:"blue_thread_room",flags:{clues:1}},
        {icon:"0️⃣",label:"Emprunter la chambre zéro",next:"zero_door"},
        {icon:"🎛️",label:"Emprunter la salle de contrôle",next:"fake_console"}
      ]
    },

    fake_console:{
      chapter:"Zone perdue",
      title:"Une salle de contrôle presque correcte",
      glyph:"🎛️",
      text:"Tout ressemble à la vraie salle de contrôle… sauf que la console est minuscule et les portes sont gigantesques. Le Docteur tape sur un levier. « Copie de secours. Très vieille. Très susceptible. »",
      flags:{clues:1},
      choices:[
        {icon:"💙",label:"Demander où est le cœur auxiliaire",next:"blue_thread_room"},
        {icon:"🔘",label:"Appuyer sur le bouton bleu",next:"blue_thread_room"},
        {icon:"🔴",label:"Appuyer sur le bouton rouge",next:"room_shuffle"}
      ]
    },

    room_shuffle:{
      chapter:"Zone perdue",
      title:"Tout bouge",
      glyph:"🌀",
      tone:"danger",
      text:"Le TARDIS grogne. Des dizaines de pièces glissent autour de vous comme des cartes mélangées. Pendant un instant, tu vois la vraie salle de contrôle très loin.",
      flags:{shuffle:true},
      choices:[
        {icon:"🧵",label:"Attraper le fil bleu qui passe",next:"blue_thread_room",flags:{brave:1}},
        {icon:"0️⃣",label:"Sauter vers la porte marquée zéro",next:"zero_door"},
        {icon:"🎛️",label:"Rester dans la fausse salle",next:"fake_console"}
      ]
    },

    blue_thread_room:{
      chapter:"Le chemin intérieur",
      title:"Le fil bleu",
      glyph:"🧵",
      tone:"blue",
      text:"Un fil bleu traverse le sol, monte sur le mur et continue au plafond. Il ne dépend d'aucune porte. Il semble traverser directement les pièces du TARDIS.",
      choices:[
        {icon:"🧵",label:"Suivre le fil sans le lâcher",next:"thread_walk",flags:{clues:1}},
        {icon:"✂️",label:"Essayer de tirer dessus",next:"thread_pull"},
        {icon:"0️⃣",label:"Chercher où il passe près de la chambre zéro",next:"zero_door"}
      ]
    },

    thread_pull:{
      chapter:"Le chemin intérieur",
      title:"Le TARDIS répond",
      glyph:"🧵",
      text:"Tu tires doucement. Quelque part, une cloche fait DING. Puis le fil devient plus chaud et se tend vers une petite trappe.",
      giveItem:"blueThread",
      flags:{clues:1},
      event:"Objet obtenu : Fil bleu.",
      choices:[
        {icon:"🕳️",label:"Ouvrir la trappe",next:"heart_access"},
        {icon:"🧵",label:"Suivre le fil",next:"thread_walk"},
        {icon:"0️⃣",label:"Passer par la chambre zéro",next:"zero_door"}
      ]
    },

    thread_walk:{
      chapter:"Le chemin intérieur",
      title:"Marcher à travers les pièces",
      glyph:"🧵",
      text:"Tu suis le fil. Bibliothèque. Cuisine. Jardin. Salle de musique. Chambre avec cent lits. À chaque fois, le fil traverse le mur suivant sans demander la permission.",
      flags:{clues:2},
      choices:[
        {icon:"💙",label:"Continuer jusqu'au cœur",next:"heart_access"},
        {icon:"0️⃣",label:"S'arrêter à la chambre zéro",next:"zero_door"},
        {icon:"🧭",label:"Vérifier avec la boussole",requiresItem:"compass",next:"heart_access"}
      ]
    },

    zero_door:{
      chapter:"Chambre Zéro",
      title:"Une porte sans poignée",
      glyph:"0️⃣",
      text:"La porte porte un simple zéro. Pas de poignée, pas de bouton. Au-dessus, une phrase : « Pour se souvenir d'où l'on va, il faut d'abord se souvenir d'où l'on vient. »",
      choices:[
        {icon:"🗝️",label:"Utiliser la clé de la chambre zéro",requiresItem:"roomKey",next:"zero_room"},
        {icon:"🔑",label:"Essayer la clé du TARDIS",requiresItem:"tardisKey",next:"zero_key"},
        {icon:"📓",label:"Écrire le nom de la salle de contrôle",requiresItem:"notebook",next:"zero_note"}
      ]
    },

    zero_key:{
      chapter:"Chambre Zéro",
      title:"La clé tourne à l'envers",
      glyph:"🔑",
      text:"La clé du TARDIS tourne toute seule dans ta main. La porte s'ouvre d'un millimètre, juste assez pour laisser passer une lumière dorée.",
      flags:{clues:1},
      choices:[
        {icon:"🚪",label:"Pousser la porte",next:"zero_room"},
        {icon:"💙",label:"Suivre la lumière vers le cœur",next:"heart_access"},
        {icon:"🔙",label:"Revenir au fil bleu",next:"blue_thread_room"}
      ]
    },

    zero_note:{
      chapter:"Chambre Zéro",
      title:"Le mot devient une poignée",
      glyph:"📓",
      text:"Tu écris « SALLE DE CONTRÔLE ». L'encre se soulève de la page et forme une poignée sur la porte.",
      flags:{clues:2},
      choices:[
        {icon:"🚪",label:"Ouvrir",next:"zero_room"},
        {icon:"📓",label:"Noter aussi « CŒUR »",next:"heart_access"},
        {icon:"🔙",label:"Retourner à la bibliothèque",next:"library"}
      ]
    },

    zero_room:{
      chapter:"Chambre Zéro",
      title:"La pièce qui se souvient",
      glyph:"✨",
      tone:"warm",
      text:"La chambre est vide sauf pour des milliers de petites lumières. Chaque lumière est un souvenir d'une pièce du TARDIS. Au centre flotte l'image de la vraie salle de contrôle.",
      flags:{foundZero:true,clues:2},
      choices:[
        {icon:"🎛️",label:"Toucher l'image de la salle de contrôle",next:"memory_console"},
        {icon:"💙",label:"Chercher le souvenir du cœur",next:"heart_memory"},
        {icon:"🚪",label:"Chercher le souvenir de la porte d'entrée",next:"front_door_memory"}
      ]
    },

    heart_memory:{
      chapter:"Chambre Zéro",
      title:"Le cœur est blessé",
      glyph:"💙",
      text:"Le souvenir montre un cristal bleu qui se fissure. Chaque fissure provoque un changement de couloir. Voilà la cause : le cœur auxiliaire du TARDIS est abîmé.",
      flags:{knowsDamage:true,clues:3},
      choices:[
        {icon:"💙",label:"Aller jusqu'au vrai cœur",next:"heart_access"},
        {icon:"🎛️",label:"Chercher la salle de contrôle",next:"memory_console"},
        {icon:"💎",label:"Chercher un cristal de remplacement",next:"crystal_store"}
      ]
    },

    front_door_memory:{
      chapter:"Chambre Zéro",
      title:"La sortie existe encore",
      glyph:"🚪",
      text:"La porte d'entrée du TARDIS est toujours à sa place. Ce sont les pièces autour qui bougent. Si nécessaire, vous pourrez sortir… mais abandonner le TARDIS ici serait risqué.",
      flags:{exitKnown:true},
      choices:[
        {icon:"💙",label:"Réparer d'abord le cœur",next:"heart_access"},
        {icon:"🎛️",label:"Rechercher la console",next:"memory_console"},
        {icon:"🚪",label:"Préparer une sortie d'urgence",next:"emergency_exit"}
      ]
    },

    crystal_store:{
      chapter:"Chambre Zéro",
      title:"Le placard aux morceaux de TARDIS",
      glyph:"💎",
      text:"Une lumière devient une petite réserve. À l'intérieur flotte un cristal bleu de remplacement, à peine plus gros qu'un sucre.",
      giveItem:"crystal",
      event:"Objet obtenu : Cristal du TARDIS.",
      flags:{clues:1},
      choices:[
        {icon:"💙",label:"Porter le cristal au cœur",next:"heart_access"},
        {icon:"🎛️",label:"Chercher la salle de contrôle",next:"memory_console"},
        {icon:"🧵",label:"Suivre le fil bleu",next:"blue_thread_room"}
      ]
    },

    memory_console:{
      chapter:"Chambre Zéro",
      title:"Un raccourci vers la console",
      glyph:"🎛️",
      text:"L'image de la salle de contrôle devient une vraie porte. De l'autre côté, la console principale clignote dans le noir. Mais le Docteur secoue la tête : « La console ne peut rien faire tant que le cœur auxiliaire est cassé. »",
      flags:{consoleFound:true,clues:1},
      choices:[
        {icon:"💙",label:"Chercher le cœur",next:"heart_access"},
        {icon:"🔘",label:"Essayer quand même la console",next:"console_fail"},
        {icon:"🚪",label:"Garder cette porte ouverte",next:"heart_access",flags:{shortcut:true}}
      ]
    },

    console_fail:{
      chapter:"Salle de contrôle",
      title:"La console éternue",
      glyph:"⚡",
      tone:"danger",
      text:"Le Docteur tire un levier. La console fait POUF et une pluie de petits papiers tombe du plafond. Sur chacun est écrit : « PAS MAINTENANT ». Même le Docteur semble vexé.",
      choices:[
        {icon:"💙",label:"Aller réparer le cœur",next:"heart_access"},
        {icon:"📄",label:"Lire un papier différent",next:"paper_hint",flags:{clues:1}},
        {icon:"🚪",label:"Chercher une sortie",next:"emergency_exit"}
      ]
    },

    paper_hint:{
      chapter:"Salle de contrôle",
      title:"Un papier différent",
      glyph:"📄",
      text:"Un seul papier dit : « TROIS CHOSES : REPÈRE, SOUVENIR, ÉNERGIE ». Le Docteur sourit. « Ça, c'est utile. Le TARDIS nous donne la recette. »",
      flags:{repairRecipe:true,clues:2},
      choices:[
        {icon:"🧭",label:"Trouver un repère",next:"compass_room"},
        {icon:"0️⃣",label:"Chercher un souvenir",next:"zero_room"},
        {icon:"💎",label:"Chercher une source d'énergie",next:"crystal_store"}
      ]
    },

    heart_access:{
      chapter:"Cœur auxiliaire",
      title:"La trappe bleue",
      glyph:"💙",
      tone:"danger",
      text:"Derrière une petite trappe se trouve une salle énorme. Au centre, un cristal bleu fissuré pulse trop vite. Trois anneaux autour de lui portent les mots : REPÈRE, SOUVENIR, ÉNERGIE.",
      choices:[
        {icon:"🧭",label:"Placer la boussole sur REPÈRE",requiresItem:"compass",next:"repair_anchor"},
        {icon:"🧵",label:"Placer le fil bleu sur SOUVENIR",requiresItem:"blueThread",next:"repair_memory"},
        {icon:"💎",label:"Placer le cristal sur ÉNERGIE",requiresItem:"crystal",next:"repair_energy"}
      ]
    },

    repair_anchor:{
      chapter:"Cœur auxiliaire",
      title:"Le TARDIS retrouve son centre",
      glyph:"🧭",
      text:"La boussole cesse de tourner. Pour la première fois, elle pointe dans une seule direction : la salle de contrôle.",
      flags:{anchor:true,clues:1},
      choices:[
        {icon:"🧵",label:"Ajouter un souvenir",next:"need_memory"},
        {icon:"💎",label:"Ajouter de l'énergie",next:"need_energy"},
        {icon:"🎛️",label:"Retourner à la console",next:"final_console"}
      ]
    },

    repair_memory:{
      chapter:"Cœur auxiliaire",
      title:"Le TARDIS se rappelle",
      glyph:"🧵",
      text:"Le fil bleu se transforme en une carte lumineuse de toutes les pièces. Les couloirs cessent de bouger pendant quelques secondes.",
      flags:{memory:true,clues:1},
      choices:[
        {icon:"🧭",label:"Ajouter un repère",next:"need_anchor"},
        {icon:"💎",label:"Ajouter de l'énergie",next:"need_energy"},
        {icon:"🎛️",label:"Retourner à la console",next:"final_console"}
      ]
    },

    repair_energy:{
      chapter:"Cœur auxiliaire",
      title:"Une nouvelle étincelle",
      glyph:"💎",
      text:"Le petit cristal se met à briller. Le cœur auxiliaire ralentit et prend une couleur bleu profond.",
      flags:{energy:true,clues:1},
      choices:[
        {icon:"🧭",label:"Ajouter un repère",next:"need_anchor"},
        {icon:"🧵",label:"Ajouter un souvenir",next:"need_memory"},
        {icon:"🎛️",label:"Retourner à la console",next:"final_console"}
      ]
    },

    need_anchor:{
      chapter:"Réparation",
      title:"Il manque un repère",
      glyph:"🧭",
      text:"Le cœur fonctionne mieux, mais les pièces continuent de glisser. Il faut quelque chose qui sache toujours où se trouve le centre.",
      choices:[
        {icon:"🧭",label:"Chercher la boussole",next:"compass_room"},
        {icon:"🔑",label:"Utiliser la clé du TARDIS comme repère",requiresItem:"tardisKey",next:"key_anchor"},
        {icon:"🎛️",label:"Essayer la console sans repère",next:"final_console"}
      ]
    },

    key_anchor:{
      chapter:"Réparation",
      title:"La clé sait toujours où est la porte",
      glyph:"🔑",
      text:"La clé du TARDIS se colle à l'anneau REPÈRE. Le cœur accepte cette solution et se stabilise.",
      flags:{anchor:true,clues:1},
      choices:[
        {icon:"🎛️",label:"Retourner à la console",next:"final_console"},
        {icon:"💙",label:"Vérifier les autres anneaux",next:"heart_access"},
        {icon:"0️⃣",label:"Retourner dans la chambre zéro",next:"zero_room"}
      ]
    },

    need_memory:{
      chapter:"Réparation",
      title:"Il manque un souvenir",
      glyph:"🧵",
      text:"Le TARDIS a de l'énergie mais ne sait plus quelle pièce va où. Il lui faut un souvenir stable.",
      choices:[
        {icon:"🧵",label:"Chercher le fil bleu",next:"blue_thread_room"},
        {icon:"📓",label:"Donner la carte dessinée dans le carnet",requiresItem:"notebook",next:"notebook_memory"},
        {icon:"0️⃣",label:"Retourner dans la chambre zéro",next:"zero_room"}
      ]
    },

    notebook_memory:{
      chapter:"Réparation",
      title:"Une carte faite à la main",
      glyph:"📓",
      text:"Le carnet contient tous les chemins parcourus. Le TARDIS l'absorbe en lumière et reconstruit une carte de ses propres pièces.",
      flags:{memory:true,clues:1},
      choices:[
        {icon:"🎛️",label:"Retourner à la console",next:"final_console"},
        {icon:"💙",label:"Vérifier les autres anneaux",next:"heart_access"},
        {icon:"🧭",label:"Chercher un repère",next:"compass_room"}
      ]
    },

    need_energy:{
      chapter:"Réparation",
      title:"Il manque une étincelle",
      glyph:"💎",
      text:"Le cœur sait où il est et se souvient des pièces, mais il n'a pas assez d'énergie pour tout remettre en place.",
      choices:[
        {icon:"💎",label:"Chercher un cristal de secours",next:"crystal_store"},
        {icon:"☕",label:"Poser la tasse chaude sur le capteur",requiresItem:"teaCup",next:"tea_energy"},
        {icon:"🎛️",label:"Essayer quand même la console",next:"final_console"}
      ]
    },

    tea_energy:{
      chapter:"Réparation",
      title:"Une tasse impossible",
      glyph:"☕",
      text:"La tasse est toujours chaude parce qu'elle emprunte un peu d'énergie au TARDIS. Pas assez pour une réparation parfaite, mais assez pour relancer le cœur.",
      flags:{energy:true,teaFix:true},
      choices:[
        {icon:"🎛️",label:"Retourner à la console",next:"final_console"},
        {icon:"💙",label:"Vérifier les autres anneaux",next:"heart_access"},
        {icon:"0️⃣",label:"Passer par la chambre zéro",next:"zero_room"}
      ]
    },

    emergency_exit:{
      chapter:"Sortie de secours",
      title:"Abandonner le TARDIS ?",
      glyph:"🚪",
      tone:"danger",
      text:"La porte d'entrée est enfin devant vous. Dehors, une rue tranquille. Le TARDIS tremble derrière. Vous pourriez sortir et être en sécurité, mais le laisser ainsi risquerait de perdre toutes ses pièces dans le vortex.",
      choices:[
        {icon:"💙",label:"Rester pour le réparer",next:"heart_access",flags:{brave:1}},
        {icon:"🚪",label:"Sortir avec le Docteur",next:"ending_safe"},
        {icon:"🔑",label:"Verrouiller la porte puis chercher une autre solution",requiresItem:"tardisKey",next:"ending_safe"}
      ]
    },

    final_console:{
      chapter:"Final",
      title:"La salle de contrôle revient",
      glyph:"🎛️",
      tone:"success",
      text:"La vraie salle de contrôle se reforme autour de vous. Le Docteur attrape trois leviers. « Le cœur est prêt. Maintenant, on lui demande gentiment de remettre chaque pièce à sa place. »",
      choices:[
        {icon:"✨",label:"Lancer la réorganisation complète",next:s=>(s.flags.anchor&&s.flags.memory&&s.flags.energy&&s.flags.clues>=7)?"ending_perfect":"ending_mixed"},
        {icon:"🏠",label:"Remettre seulement les pièces essentielles",next:s=>(s.flags.anchor||s.flags.memory||s.flags.energy)?"ending_mixed":"ending_safe"},
        {icon:"🚪",label:"Stabiliser seulement la porte d'entrée",next:"ending_safe"}
      ]
    },

    ending_perfect:{
      end:true,
      endLabel:"Fin parfaite",
      title:"Chaque pièce à sa place",
      glyph:"✨",
      tone:"success",
      text:state=>{
        const n=window.BOOK_04.heroes[state.hero].short;
        return `La console fait DING. La bibliothèque revient derrière la bonne porte. La cuisine retrouve sa gravité. La plage retourne quelque part où une plage peut réellement tenir. Le Docteur ouvre dix portes au hasard : tout est parfait. Puis il en ouvre une onzième et découvre une salle remplie de canards en plastique. Il regarde ${n}. « Celle-là, je la garde. » Le TARDIS ronronne, très fier de lui.`;
      }
    },

    ending_mixed:{
      end:true,
      endLabel:"Fin réussie",
      title:"Presque tout est rangé",
      glyph:"🌀",
      tone:"warm",
      text:state=>{
        const n=window.BOOK_04.heroes[state.hero].short;
        return `Le TARDIS se stabilise. La salle de contrôle, les chambres et la porte d'entrée sont revenues au bon endroit. Quelques détails restent étranges : la bibliothèque partage maintenant une porte avec la cuisine et une douche donne parfois sur la plage. Le Docteur appelle ça « du caractère ». ${n} appelle ça « encore du rangement à faire ».`;
      }
    },

    ending_safe:{
      end:true,
      endLabel:"Fin prudente",
      title:"Le TARDIS se met en veille",
      glyph:"💤",
      tone:"warm",
      text:"Le Docteur coupe presque toute l'énergie du TARDIS avant que les pièces ne se perdent. Le vaisseau est sauvé mais endormi. Il faudra le réparer calmement avant le prochain voyage. Pour une fois, le Docteur n'a nulle part où courir. Il propose du thé. La cuisine apparaît à la troisième porte essayée, ce qui est déjà un progrès.",
    }
  }
};