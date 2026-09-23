window.BOOK_02 = {
  id: "book-02",
  title: "Les Anges du Musée",
  subtitle: "Une nuit au musée, les statues changent de place quand personne ne les regarde. Pour retrouver le Docteur, il faudra garder les yeux ouverts… mais aussi savoir quand détourner le regard.",
  start: "intro",
  heroes: {
    rose: {
      name: "Rose Tyler",
      short: "Rose",
      icon: "🌹",
      trait: "Elle fait confiance à son instinct et n'abandonne personne.",
      item: { id:"phone", name:"Téléphone lumineux", icon:"📱" }
    },
    donna: {
      name: "Donna Noble",
      short: "Donna",
      icon: "💫",
      trait: "Franche, drôle et impossible à intimider.",
      item: { id:"museumPass", name:"Pass visiteur", icon:"🎟️" }
    },
    clara: {
      name: "Clara Oswald",
      short: "Clara",
      icon: "🍃",
      trait: "Elle adore les énigmes et remarque les petits détails.",
      item: { id:"torch", name:"Lampe torche", icon:"🔦" }
    }
  },
  items: {
    phone: {name:"Téléphone lumineux",icon:"📱"},
    museumPass: {name:"Pass visiteur",icon:"🎟️"},
    torch: {name:"Lampe torche",icon:"🔦"},
    camera: {name:"Appareil photo",icon:"📷"},
    mirror: {name:"Petit miroir",icon:"🪞"},
    battery: {name:"Batterie de secours",icon:"🔋"},
    keycard: {name:"Carte de sécurité",icon:"💳"},
    chalk: {name:"Craie blanche",icon:"🖍️"},
    postcard: {name:"Carte postale",icon:"💌"}
  },
  scenes: {
    intro: {
      chapter:"Prologue",
      title:"Le musée ferme ses portes",
      glyph:"🏛️",
      tone:"blue",
      text: state => {
        const n = window.BOOK_02.heroes[state.hero].short;
        return `${n} entre dans le Musée des Mondes avec le Docteur. Une voix annonce la fermeture. Le Docteur s'arrête devant une statue d'ange et fronce les sourcils. « Ne bouge pas. Je vais vérifier quelque chose. » Les lumières s'éteignent une seconde. Quand elles reviennent, le Docteur a disparu.`;
      },
      event:"La statue est maintenant plus proche.",
      choices:[
        {icon:"👀",label:"Garder les yeux sur la statue",next:"main_hall",flags:{careful:1}},
        {icon:"📣",label:"Appeler le Docteur",next:"echo_hall",flags:{brave:1}},
        {icon:"🚪",label:"Chercher une sortie éclairée",next:"security_door",flags:{clues:1}}
      ]
    },

    main_hall: {
      chapter:"Salle centrale",
      title:"Ne cligne pas",
      glyph:"👼",
      tone:"danger",
      text:"La statue d'ange reste immobile tant que tu la regardes. Sur le sol, une flèche à la craie pointe vers la galerie des horloges. À côté, une porte mène au poste de sécurité.",
      choices:[
        {icon:"🕰️",label:"Suivre la flèche vers les horloges",next:"clock_gallery",flags:{clues:1}},
        {icon:"🛡️",label:"Reculer jusqu'au poste de sécurité",next:"security_door",flags:{careful:1}},
        {icon:"🗿",label:"Observer le socle de la statue",next:"angel_plaque",flags:{clues:1}}
      ]
    },

    echo_hall: {
      chapter:"Couloir des portraits",
      title:"Une voix derrière le mur",
      glyph:"🖼️",
      tone:"danger",
      text:"« Docteur ? » Ton appel revient en écho. Puis une autre voix répond, très faible : « Je suis là… enfin, pas exactement là. » Un portrait ancien tremble sur le mur.",
      choices:[
        {icon:"🖼️",label:"Décrocher le portrait",next:"portrait_back",flags:{clues:1}},
        {icon:"👂",label:"Suivre la voix",next:"clock_gallery"},
        {icon:"🏃",label:"Retourner dans la salle centrale",next:"main_hall"}
      ]
    },

    portrait_back: {
      chapter:"Couloir des portraits",
      title:"Le message du Docteur",
      glyph:"✍️",
      text:"Derrière le portrait, quelqu'un a écrit : « Les Anges ne bougent pas quand ils sont observés. Mais attention aux images. Trouve la salle 17. » Une petite craie blanche tombe du cadre.",
      giveItem:"chalk",
      event:"Objet obtenu : Craie blanche.",
      flags:{clues:2},
      choices:[
        {icon:"1️⃣7️⃣",label:"Chercher la salle 17",next:"room17_door"},
        {icon:"🕰️",label:"Passer par la galerie des horloges",next:"clock_gallery"},
        {icon:"🏛️",label:"Retourner dans la grande salle",next:"main_hall"}
      ]
    },

    angel_plaque: {
      chapter:"Salle centrale",
      title:"Une statue qui n'existe pas",
      glyph:"📜",
      text:"La plaque indique : « ANGE PLEUREUR — provenance inconnue — ajouté aujourd'hui ». Pourtant, la poussière autour du socle montre que la statue a été déplacée plusieurs fois cette nuit.",
      flags:{clues:2},
      choices:[
        {icon:"🖍️",label:"Tracer une ligne autour du socle",requiresItem:"chalk",next:"chalk_circle"},
        {icon:"🛡️",label:"Aller au poste de sécurité",next:"security_door"},
        {icon:"🕰️",label:"Suivre la flèche vers les horloges",next:"clock_gallery"}
      ]
    },

    chalk_circle: {
      chapter:"Salle centrale",
      title:"La preuve",
      glyph:"⭕",
      text:"Tu traces un cercle à la craie autour des pieds de l'Ange. Tu regardes ailleurs une demi-seconde puis reviens vers lui. Ses pieds dépassent déjà du cercle.",
      event:"La statue bouge vraiment quand personne ne la regarde.",
      flags:{proof:true,clues:1},
      choices:[
        {icon:"👀",label:"Reculer sans quitter l'Ange des yeux",next:"security_door",flags:{careful:1}},
        {icon:"📷",label:"Chercher une caméra pour le surveiller",next:"security_room"},
        {icon:"🕰️",label:"Partir vers les horloges",next:"clock_gallery"}
      ]
    },

    security_door: {
      chapter:"Poste de sécurité",
      title:"Accès réservé",
      glyph:"🚪",
      text:"La porte du poste de sécurité demande une autorisation. Derrière la vitre, plusieurs écrans montrent les galeries du musée. Sur l'un d'eux, le Docteur passe en courant… mais l'image date de 1963.",
      choices:[
        {icon:"🎟️",label:"Utiliser le pass visiteur",requiresItem:"museumPass",next:"pass_trick"},
        {icon:"📱",label:"Éclairer le lecteur avec le téléphone",requiresItem:"phone",next:"reader_panel"},
        {icon:"🔎",label:"Chercher une carte oubliée",next:"lost_keycard",flags:{clues:1}}
      ]
    },

    pass_trick: {
      chapter:"Poste de sécurité",
      title:"Presque la bonne carte",
      glyph:"🎟️",
      text:"Le lecteur refuse le pass… puis affiche : « Visiteur spécial — accompagnateur du Docteur ». La porte s'ouvre. Visiblement, le Docteur a encore bricolé quelque chose.",
      choices:[
        {icon:"📺",label:"Regarder les caméras",next:"security_room",flags:{clues:1}},
        {icon:"🔋",label:"Chercher l'alimentation de secours",next:"battery_cabinet"},
        {icon:"📞",label:"Utiliser l'interphone",next:"intercom"}
      ]
    },

    reader_panel: {
      chapter:"Poste de sécurité",
      title:"Le fil caché",
      glyph:"📱",
      text:"La lumière du téléphone révèle un petit fil débranché sous le lecteur. Tu le remets en place et la porte s'ouvre avec un bip joyeux.",
      flags:{clues:1},
      choices:[
        {icon:"📺",label:"Regarder les caméras",next:"security_room"},
        {icon:"🔋",label:"Ouvrir l'armoire électrique",next:"battery_cabinet"},
        {icon:"📞",label:"Appeler sur l'interphone",next:"intercom"}
      ]
    },

    lost_keycard: {
      chapter:"Poste de sécurité",
      title:"Sous le banc",
      glyph:"💳",
      text:"Sous un banc, tu trouves la carte d'un gardien. Juste à côté, des marques dans la poussière ressemblent à des empreintes de pierre.",
      giveItem:"keycard",
      event:"Objet obtenu : Carte de sécurité.",
      flags:{clues:1},
      choices:[
        {icon:"💳",label:"Ouvrir le poste de sécurité",next:"security_room"},
        {icon:"👣",label:"Suivre les marques de pierre",next:"clock_gallery"},
        {icon:"🏛️",label:"Retourner à la salle centrale",next:"main_hall"}
      ]
    },

    security_room: {
      chapter:"Poste de sécurité",
      title:"Six écrans, sept Anges",
      glyph:"📺",
      tone:"danger",
      text:"Les écrans montrent six statues d'anges. Tu les comptes : une, deux, trois… six. Puis tu regardes la salle derrière toi : un septième Ange se reflète dans la vitre.",
      choices:[
        {icon:"📺",label:"Garder l'Ange dans le reflet",next:"mirror_logic",flags:{careful:1}},
        {icon:"🔦",label:"Allumer toutes les lampes de secours",next:"battery_cabinet"},
        {icon:"📷",label:"Prendre l'appareil photo du gardien",next:"take_camera"}
      ]
    },

    take_camera: {
      chapter:"Poste de sécurité",
      title:"Une mauvaise photo",
      glyph:"📷",
      tone:"danger",
      text:"L'appareil contient une photo d'un Ange. Au moment où l'image s'affiche, la statue sur la photo semble tourner la tête. Tu te souviens du message : attention aux images.",
      giveItem:"camera",
      event:"Objet obtenu : Appareil photo.",
      choices:[
        {icon:"🗑️",label:"Effacer la photo de l'Ange",next:"camera_safe",flags:{clues:1}},
        {icon:"📷",label:"Garder la photo pour l'étudier",next:"image_trap"},
        {icon:"🔌",label:"Retirer la batterie de l'appareil",next:"camera_safe",flags:{careful:1}}
      ]
    },

    camera_safe: {
      chapter:"Poste de sécurité",
      title:"L'écran devient noir",
      glyph:"📷",
      text:"L'image disparaît. L'appareil peut maintenant servir sans montrer l'Ange. Avec son flash, tu pourrais éclairer une pièce pendant quelques secondes.",
      flags:{safeCamera:true},
      choices:[
        {icon:"🕰️",label:"Aller vers la galerie des horloges",next:"clock_gallery"},
        {icon:"1️⃣7️⃣",label:"Chercher la salle 17",next:"room17_door"},
        {icon:"🔋",label:"Prendre une batterie de secours",next:"battery_cabinet"}
      ]
    },

    image_trap: {
      chapter:"Poste de sécurité",
      title:"L'image cligne",
      glyph:"⚠️",
      tone:"danger",
      text:"La photo change. L'Ange dessiné est maintenant beaucoup plus proche. L'écran se met à clignoter tout seul. Mieux vaut ne pas garder cette image.",
      choices:[
        {icon:"🗑️",label:"Effacer immédiatement la photo",next:"camera_safe",flags:{careful:1}},
        {icon:"🔌",label:"Retirer la batterie",next:"camera_safe"},
        {icon:"🏃",label:"Poser l'appareil et sortir",next:"clock_gallery",flags:{brave:1}}
      ]
    },

    mirror_logic: {
      chapter:"Poste de sécurité",
      title:"Deux regards valent mieux qu'un",
      glyph:"🪞",
      text:"Grâce au reflet de la vitre, tu surveilles l'Ange sans lui tourner complètement le dos. Dans un tiroir, tu trouves un petit miroir de poche. Cela pourrait être utile.",
      giveItem:"mirror",
      event:"Objet obtenu : Petit miroir.",
      flags:{clues:1,careful:1},
      choices:[
        {icon:"🕰️",label:"Partir vers les horloges",next:"clock_gallery"},
        {icon:"1️⃣7️⃣",label:"Chercher la salle 17",next:"room17_door"},
        {icon:"🔋",label:"Vérifier l'électricité",next:"battery_cabinet"}
      ]
    },

    battery_cabinet: {
      chapter:"Sous-sol technique",
      title:"Plus que dix minutes de lumière",
      glyph:"🔋",
      text:"L'ordinateur indique que le musée n'a presque plus d'électricité. Une batterie de secours peut alimenter soit les lumières, soit la porte de la salle 17.",
      choices:[
        {icon:"💡",label:"Brancher la batterie sur les lumières",next:"lights_on",flags:{careful:1}},
        {icon:"1️⃣7️⃣",label:"Garder la batterie pour la salle 17",next:"take_battery"},
        {icon:"📞",label:"Essayer l'interphone avant de choisir",next:"intercom",flags:{clues:1}}
      ]
    },

    take_battery: {
      chapter:"Sous-sol technique",
      title:"Une batterie lourde",
      glyph:"🔋",
      text:"Tu décroches la batterie. Elle est lourde, mais encore pleine. Dès que tu la retires, la moitié des couloirs s'éteint.",
      giveItem:"battery",
      event:"Objet obtenu : Batterie de secours.",
      choices:[
        {icon:"1️⃣7️⃣",label:"Aller à la salle 17",next:"room17_door"},
        {icon:"🕰️",label:"Traverser la galerie des horloges",next:"clock_gallery"},
        {icon:"🏛️",label:"Retourner à la grande salle",next:"main_hall"}
      ]
    },

    lights_on: {
      chapter:"Musée",
      title:"Tout s'allume",
      glyph:"💡",
      text:"Les lampes de secours éclairent chaque galerie. Plusieurs Anges sont figés en plein mouvement. Tu peux enfin voir un chemin sûr jusqu'à la salle 17.",
      flags:{lights:true,clues:1},
      choices:[
        {icon:"1️⃣7️⃣",label:"Suivre le chemin éclairé",next:"room17_door"},
        {icon:"🕰️",label:"Examiner la galerie des horloges",next:"clock_gallery"},
        {icon:"📺",label:"Retourner aux caméras",next:"security_room"}
      ]
    },

    intercom: {
      chapter:"Poste de sécurité",
      title:"Le Docteur au téléphone",
      glyph:"📞",
      text:"L'interphone grésille. La voix du Docteur répond : « Salle 17 ! Et si tu vois un Ange… eh bien, continue de le voir ! » Puis une autre voix murmure derrière lui : « 1963… 1987… 2026… »",
      event:"Le Docteur est coincé entre plusieurs années.",
      flags:{clues:2},
      choices:[
        {icon:"1️⃣7️⃣",label:"Chercher la salle 17",next:"room17_door"},
        {icon:"🕰️",label:"Examiner les horloges",next:"clock_gallery"},
        {icon:"📺",label:"Regarder où se trouve la salle 17",next:"security_room"}
      ]
    },

    clock_gallery: {
      chapter:"Galerie des horloges",
      title:"Toutes les heures à la fois",
      glyph:"🕰️",
      tone:"warm",
      text:"Des dizaines d'horloges montrent des heures différentes. L'une indique 1963, une autre 1987, une autre aujourd'hui. Tout au fond, une horloge affiche simplement « 17 ».",
      choices:[
        {icon:"1️⃣7️⃣",label:"Toucher l'horloge marquée 17",next:"clock_portal",flags:{brave:1}},
        {icon:"🔍",label:"Comparer les dates",next:"date_pattern",flags:{clues:1}},
        {icon:"👼",label:"Regarder la statue entre les horloges",next:"angel_clock"}
      ]
    },

    date_pattern: {
      chapter:"Galerie des horloges",
      title:"Le bon ordre",
      glyph:"🔢",
      text:"Tu remarques que les dates forment une suite : 1963, 1987, 2005, 2026… puis un espace vide. Ce ne sont pas des heures : ce sont des endroits où les Anges ont envoyé des gens dans le temps.",
      flags:{clues:2},
      choices:[
        {icon:"1️⃣7️⃣",label:"Chercher pourquoi la salle 17 manque",next:"room17_door"},
        {icon:"🕰️",label:"Tourner l'horloge 17",next:"clock_portal"},
        {icon:"👼",label:"Examiner l'Ange de la galerie",next:"angel_clock"}
      ]
    },

    angel_clock: {
      chapter:"Galerie des horloges",
      title:"L'Ange tient une clé",
      glyph:"👼",
      tone:"danger",
      text:"La statue cache quelque chose dans sa main : une petite carte métallique. Pour l'attraper, il faudrait s'approcher sans cesser de regarder son visage.",
      choices:[
        {icon:"🪞",label:"Utiliser le miroir pour surveiller l'Ange",requiresItem:"mirror",next:"angel_keycard"},
        {icon:"📷",label:"Utiliser le flash de l'appareil",requiresItem:"camera",next:"angel_flash"},
        {icon:"↩️",label:"Ne pas prendre de risque",next:"room17_door",flags:{careful:1}}
      ]
    },

    angel_keycard: {
      chapter:"Galerie des horloges",
      title:"Pris sans cligner",
      glyph:"💳",
      text:"Avec le miroir, tu gardes le visage de l'Ange dans ton champ de vision et récupères la carte métallique. Elle porte le nombre 17.",
      giveItem:"keycard",
      event:"Objet obtenu : Carte de sécurité 17.",
      flags:{clues:1},
      choices:[
        {icon:"1️⃣7️⃣",label:"Aller à la salle 17",next:"room17_door"},
        {icon:"🕰️",label:"Tester l'horloge 17",next:"clock_portal"},
        {icon:"🏛️",label:"Revenir au hall",next:"main_hall"}
      ]
    },

    angel_flash: {
      chapter:"Galerie des horloges",
      title:"FLASH !",
      glyph:"📸",
      text:"Le flash éclaire la salle. L'Ange est figé. Tu saisis la carte dans sa main juste avant que la lumière retombe.",
      giveItem:"keycard",
      flags:{brave:1},
      event:"Objet obtenu : Carte de sécurité 17.",
      choices:[
        {icon:"1️⃣7️⃣",label:"Courir vers la salle 17",next:"room17_door"},
        {icon:"🕰️",label:"Examiner l'horloge 17",next:"clock_portal"},
        {icon:"🔦",label:"Chercher plus de lumière",next:"battery_cabinet"}
      ]
    },

    clock_portal: {
      chapter:"Galerie des horloges",
      title:"Une seconde en 1963",
      glyph:"🌀",
      tone:"danger",
      text:"Le sol disparaît une seconde. Tu aperçois une rue de Londres en 1963 et le Docteur qui court au loin. Puis tu reviens au musée. L'horloge 17 vient de créer une fenêtre dans le temps.",
      flags:{sawPortal:true,clues:2},
      choices:[
        {icon:"1️⃣7️⃣",label:"Trouver la salle 17",next:"room17_door"},
        {icon:"🖍️",label:"Marquer l'horloge à la craie",requiresItem:"chalk",next:"marked_clock"},
        {icon:"🏛️",label:"Retourner au poste de sécurité",next:"security_room"}
      ]
    },

    marked_clock: {
      chapter:"Galerie des horloges",
      title:"La marque reste",
      glyph:"🖍️",
      text:"Tu dessines une étoile sur l'horloge. Quand la fenêtre temporelle revient, l'étoile apparaît aussi sur une porte derrière le Docteur. La salle 17 existe dans plusieurs époques à la fois.",
      flags:{portalMarked:true,clues:2},
      choices:[
        {icon:"1️⃣7️⃣",label:"Courir vers la salle 17",next:"room17_door"},
        {icon:"📞",label:"Prévenir le Docteur par l'interphone",next:"intercom"},
        {icon:"👼",label:"Vérifier où sont les Anges",next:"main_hall"}
      ]
    },

    room17_door: {
      chapter:"Salle 17",
      title:"La porte qui n'aime pas aujourd'hui",
      glyph:"1️⃣7️⃣",
      tone:"danger",
      text:"La porte 17 apparaît au bout d'un couloir que tu n'avais jamais vu. Son écran affiche : « ALIMENTATION ABSENTE — AUTORISATION OU ÉNERGIE REQUISE ».",
      choices:[
        {icon:"💳",label:"Utiliser la carte de sécurité",requiresItem:"keycard",next:"room17_open"},
        {icon:"🔋",label:"Brancher la batterie de secours",requiresItem:"battery",next:"room17_open"},
        {icon:"🕰️",label:"Chercher une entrée par l'horloge 17",next:"clock_portal"}
      ]
    },

    room17_open: {
      chapter:"Salle 17",
      title:"Le piège des années",
      glyph:"🌀",
      tone:"danger",
      text:"La salle 17 est immense à l'intérieur. Des portes flottent dans le noir : 1963, 1987, 2005, aujourd'hui. Le Docteur est coincé au centre, entouré de quatre Anges qui se regardent les uns les autres.",
      choices:[
        {icon:"🪞",label:"Placer le miroir entre les Anges",requiresItem:"mirror",next:"mirror_solution",flags:{clues:1}},
        {icon:"💡",label:"Éclairer tous les Anges en même temps",next:"light_solution",flags:{brave:1}},
        {icon:"🚪",label:"Ouvrir la porte marquée aujourd'hui",next:"today_door"}
      ]
    },

    mirror_solution: {
      chapter:"Salle 17",
      title:"Les Anges se surveillent",
      glyph:"🪞",
      tone:"success",
      text:"Tu poses le miroir au bon endroit. Chaque Ange voit maintenant un autre Ange ou son propre reflet. Aucun ne peut bouger. Le Docteur lève les pouces : « Très élégant ! »",
      flags:{angelsLocked:true,smartSolution:true,clues:2},
      choices:[
        {icon:"🤝",label:"Rejoindre le Docteur",next:"doctor_center"},
        {icon:"🚪",label:"Fermer les portes temporelles",next:"close_doors"},
        {icon:"📷",label:"Utiliser le flash pour vérifier",requiresItem:"camera",next:"doctor_center"}
      ]
    },

    light_solution: {
      chapter:"Salle 17",
      title:"Que la lumière soit !",
      glyph:"💡",
      tone:"success",
      text:"Tu allumes tout ce qui peut briller. Les Anges se figent. Le Docteur profite de la lumière pour bondir hors du cercle.",
      flags:{doctorFree:true,angelsLit:true},
      choices:[
        {icon:"🚪",label:"Fermer les portes temporelles",next:"close_doors"},
        {icon:"🏃",label:"Courir vers le TARDIS",next:"museum_escape"},
        {icon:"👀",label:"Rester et surveiller les Anges",next:"doctor_center",flags:{careful:1}}
      ]
    },

    today_door: {
      chapter:"Salle 17",
      title:"La porte d'aujourd'hui",
      glyph:"🚪",
      text:"La porte s'ouvre sur le musée tel qu'il devrait être : lumières allumées, visiteurs partout, aucun Ange en mouvement. Mais le Docteur est encore derrière toi, coincé entre les années.",
      choices:[
        {icon:"↩️",label:"Revenir chercher le Docteur",next:"doctor_center",flags:{brave:1}},
        {icon:"🏃",label:"Passer la porte et appeler de l'aide",next:"ending_escape"},
        {icon:"🖍️",label:"Bloquer la porte ouverte avec la craie",requiresItem:"chalk",next:"door_wedge"}
      ]
    },

    door_wedge: {
      chapter:"Salle 17",
      title:"Une toute petite cale",
      glyph:"🖍️",
      text:"La craie empêche la porte de se refermer. C'est ridicule… mais ça marche. Le Docteur peut maintenant voir clairement quelle porte mène à aujourd'hui.",
      flags:{todayOpen:true,clues:1},
      choices:[
        {icon:"🤝",label:"Aller chercher le Docteur",next:"doctor_center"},
        {icon:"🚪",label:"Fermer les autres portes",next:"close_doors"},
        {icon:"👀",label:"Surveiller les Anges",next:"mirror_solution"}
      ]
    },

    doctor_center: {
      chapter:"Salle 17",
      title:"Au milieu des secondes",
      glyph:"🧥",
      text:"Le Docteur explique vite : les Anges utilisent la salle 17 comme une gare. Chaque porte mène à une année différente. Pour arrêter le piège, il faut fermer toutes les portes sauf celle d'aujourd'hui.",
      flags:{doctorFree:true,clues:1},
      choices:[
        {icon:"🚪",label:"Fermer les portes dans l'ordre",next:"close_doors"},
        {icon:"🕰️",label:"Demander quelles années fermer d'abord",next:"door_order",flags:{clues:1}},
        {icon:"🏃",label:"Partir immédiatement",next:"museum_escape"}
      ]
    },

    door_order: {
      chapter:"Salle 17",
      title:"Du plus ancien au plus récent",
      glyph:"🔢",
      text:"« Commence par 1963, puis 1987, puis 2005. Garde aujourd'hui pour la fin. Et surtout, ne ferme pas la porte quand nous sommes encore du mauvais côté ! »",
      flags:{knowsOrder:true,clues:2},
      choices:[
        {icon:"🚪",label:"Fermer les portes correctement",next:"close_doors"},
        {icon:"👀",label:"Vérifier les Anges d'abord",next:"mirror_solution"},
        {icon:"🏃",label:"Courir vers aujourd'hui",next:"museum_escape"}
      ]
    },

    close_doors: {
      chapter:"Final",
      title:"Une seule année",
      glyph:"🚪",
      tone:"success",
      text:"Les portes disparaissent l'une après l'autre. Les Anges restent figés, mais la dernière porte tremble. Il faut choisir comment la refermer sans rester coincé.",
      choices:[
        {icon:"🪞",label:"Faire regarder les Anges vers le miroir",requiresItem:"mirror",next: s => (s.flags.doctorFree && s.flags.clues >= 6) ? "ending_perfect" : "ending_escape"},
        {icon:"💡",label:"Maintenir les lumières et fermer la porte",next: s => s.flags.doctorFree ? "ending_escape" : "ending_past"},
        {icon:"🏃",label:"Sauter tous les deux par la porte aujourd'hui",next: s => s.flags.doctorFree ? "ending_escape" : "ending_past"}
      ]
    },

    museum_escape: {
      chapter:"Final",
      title:"Course dans le musée",
      glyph:"🏃",
      tone:"danger",
      text:"Le musée commence à changer autour de vous. Une galerie devient 1963, puis 1987, puis revient à aujourd'hui. La porte du TARDIS est au bout du hall.",
      choices:[
        {icon:"👀",label:"Avancer en surveillant les Anges",next:"ending_escape",flags:{careful:1}},
        {icon:"📷",label:"Utiliser le flash pour gagner du temps",requiresItem:"camera",next:"ending_perfect"},
        {icon:"🚪",label:"Foncer vers le TARDIS",next:"ending_escape",flags:{brave:1}}
      ]
    },

    ending_perfect: {
      end:true,
      endLabel:"Fin parfaite",
      title:"Le musée ouvre à neuf heures",
      glyph:"🌅",
      tone:"success",
      text: state => {
        const n = window.BOOK_02.heroes[state.hero].short;
        return `À neuf heures précises, les portes du musée s'ouvrent normalement. Les Anges sont enfermés dans une salle où ils se regardent tous grâce à des miroirs. Le Docteur et ${n} sortent du TARDIS avec deux chocolats chauds. « Pas mal pour une visite de nuit. La prochaine fois, on choisit un musée avec des dinosaures. Les dinosaures, au moins, clignent des yeux. »`;
      }
    },

    ending_escape: {
      end:true,
      endLabel:"Fin réussie",
      title:"Dehors avant l'ouverture",
      glyph:"🌙",
      tone:"warm",
      text: state => {
        const n = window.BOOK_02.heroes[state.hero].short;
        return `${n} et le Docteur atteignent le TARDIS juste avant que la dernière lumière s'éteigne. Les portes temporelles se ferment derrière eux. Les Anges restent dans le musée, immobiles pour le moment. Le Docteur programme une équipe de spécialistes pour sécuriser la salle 17 dès le matin. Mission accomplie… avec une petite surveillance à prévoir.`;
      }
    },

    ending_past: {
      end:true,
      endLabel:"Fin temporelle",
      title:"Une carte postale du passé",
      glyph:"💌",
      tone:"danger",
      text: state => {
        const n = window.BOOK_02.heroes[state.hero].short;
        return `Une lumière blanche clignote. ${n} se retrouve devant le musée… mais les voitures sont anciennes et personne n'a de téléphone portable. Un facteur passe et tend une carte postale déjà adressée : « Ne t'inquiète pas. Je viens te chercher. Ne bouge pas de 1987 ! — Le Docteur. » Ce n'est pas la meilleure fin, mais l'aventure n'est certainement pas terminée.`;
      }
    }
  }
};