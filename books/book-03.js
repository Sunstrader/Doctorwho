window.BOOK_03 = {
  id: "book-03",
  title: "Le Dinosaure de Londres",
  subtitle: "Un jeune dinosaure apparaît au beau milieu de Londres. Il n'est pas dangereux… seulement perdu, affamé et beaucoup trop grand pour passer inaperçu.",
  start: "intro",
  heroes: {
    amy: {
      name:"Amy Pond", short:"Amy", icon:"⭐",
      trait:"Rapide, audacieuse et toujours prête à improviser.",
      item:{id:"redScarf",name:"Grande écharpe rouge",icon:"🧣"}
    },
    clara: {
      name:"Clara Oswald", short:"Clara", icon:"🍃",
      trait:"Très observatrice. Elle trouve souvent une solution que personne n'avait vue.",
      item:{id:"phone",name:"Téléphone avec appareil photo",icon:"📱"}
    },
    bill: {
      name:"Bill Potts", short:"Bill", icon:"🌈",
      trait:"Curieuse, drôle et excellente pour parler aux gens sans paniquer.",
      item:{id:"snack",name:"Sac de pommes",icon:"🍎"}
    }
  },
  items: {
    redScarf:{name:"Grande écharpe rouge",icon:"🧣"},
    phone:{name:"Téléphone avec appareil photo",icon:"📱"},
    snack:{name:"Sac de pommes",icon:"🍎"},
    whistle:{name:"Sifflet de gardien",icon:"📯"},
    leaf:{name:"Feuille préhistorique",icon:"🌿"},
    tracker:{name:"Balise temporelle",icon:"📡"},
    rope:{name:"Corde solide",icon:"🪢"},
    eggShell:{name:"Coquille d'œuf",icon:"🥚"},
    key:{name:"Clé du parc",icon:"🗝️"}
  },
  scenes: {
    intro: {
      chapter:"Prologue",
      title:"Un très gros bruit",
      glyph:"🦕",
      tone:"warm",
      text: state => {
        const n=window.BOOK_03.heroes[state.hero].short;
        return `Le TARDIS atterrit à Londres avec un grand BONG. Le Docteur ouvre la porte et lève les yeux. Très haut. Encore plus haut. Un jeune dinosaure au long cou regarde ${n} et pousse un petit « wouf » étonné. « Bonne nouvelle, dit le Docteur. Il n'a pas envie de nous manger. Mauvaise nouvelle : il n'a rien à faire ici. »`;
      },
      event:"Le dinosaure porte une étrange lumière bleue autour du cou.",
      choices:[
        {icon:"🍎",label:"Essayer de l'approcher doucement",next:"meet_dino",flags:{kind:1}},
        {icon:"📡",label:"Examiner la lumière bleue",next:"blue_glow",flags:{clues:1}},
        {icon:"🏃",label:"Suivre les policiers qui arrivent",next:"police_arrive",flags:{brave:1}}
      ]
    },

    meet_dino: {
      chapter:"Hyde Park",
      title:"Il s'appelle comment ?",
      glyph:"🦕",
      text:"Le jeune dinosaure baisse la tête. Il a de grands yeux curieux et une petite branche coincée entre les dents. Le Docteur décide de l'appeler Milo, juste pour avoir quelque chose à crier s'il part en courant.",
      choices:[
        {icon:"🍎",label:"Lui donner une pomme",requiresItem:"snack",next:"apple_friend"},
        {icon:"🧣",label:"Agiter doucement l'écharpe",requiresItem:"redScarf",next:"scarf_friend"},
        {icon:"🤲",label:"Tendre la main sans bouger",next:"dino_trust",flags:{kind:1}}
      ]
    },

    apple_friend: {
      chapter:"Hyde Park",
      title:"Milo adore les pommes",
      glyph:"🍎",
      tone:"warm",
      text:"Milo avale la pomme presque sans mâcher. Puis il pose son énorme museau près de toi comme un chien qui réclame une deuxième friandise.",
      flags:{dinoTrust:true,kind:2},
      choices:[
        {icon:"📡",label:"Regarder la lumière autour de son cou",next:"blue_glow"},
        {icon:"🌳",label:"L'emmener vers les arbres",next:"park_route"},
        {icon:"🏙️",label:"Essayer de le faire rester caché",next:"hide_dino"}
      ]
    },

    scarf_friend: {
      chapter:"Hyde Park",
      title:"Le ruban rouge",
      glyph:"🧣",
      text:"Milo suit l'écharpe du regard comme un chat suit un jouet. Tu la noues très doucement autour d'une branche et il te suit sans peur.",
      flags:{dinoTrust:true,kind:1},
      choices:[
        {icon:"🌳",label:"Le guider vers le parc",next:"park_route"},
        {icon:"📡",label:"Examiner la lumière bleue",next:"blue_glow"},
        {icon:"👮",label:"Le garder calme quand la police arrive",next:"police_arrive"}
      ]
    },

    dino_trust: {
      chapter:"Hyde Park",
      title:"Un souffle chaud",
      glyph:"🤲",
      text:"Milo renifle ta main, souffle très fort et te décoiffe complètement. Le Docteur rit. « Excellent. Il te fait confiance. Ou il pense que tu es une feuille. Dans les deux cas, c'est utile. »",
      flags:{dinoTrust:true,kind:1},
      choices:[
        {icon:"📡",label:"Examiner sa lumière bleue",next:"blue_glow"},
        {icon:"🌳",label:"Le guider vers le parc",next:"park_route"},
        {icon:"👮",label:"Attendre la police",next:"police_arrive"}
      ]
    },

    blue_glow: {
      chapter:"Mystère",
      title:"Une balise qui n'est pas d'ici",
      glyph:"📡",
      text:"La lumière vient d'une petite balise accrochée à une liane autour du cou de Milo. Le Docteur la scanne. « Technologie temporelle. Quelqu'un l'a fait voyager exprès. »",
      flags:{clues:2},
      choices:[
        {icon:"📱",label:"Prendre la balise en photo",requiresItem:"phone",next:"photo_symbol"},
        {icon:"🦕",label:"Essayer de retirer la balise",next:"remove_tracker"},
        {icon:"🌳",label:"Suivre Milo : il semble vouloir aller quelque part",next:"park_route"}
      ]
    },

    photo_symbol: {
      chapter:"Mystère",
      title:"Le symbole en spirale",
      glyph:"📱",
      text:"En zoomant sur la photo, tu vois une minuscule spirale gravée sous la balise. Le Docteur la reconnaît : c'est la marque d'un ancien laboratoire de voyage temporel.",
      flags:{clues:2,sawSymbol:true},
      choices:[
        {icon:"📡",label:"Retirer la balise",next:"remove_tracker"},
        {icon:"🏛️",label:"Chercher le laboratoire dans les archives",next:"museum_archive"},
        {icon:"🌳",label:"Suivre Milo dans le parc",next:"park_route"}
      ]
    },

    remove_tracker: {
      chapter:"Mystère",
      title:"La balise s'allume",
      glyph:"📡",
      tone:"danger",
      text:"Au moment où tu touches la balise, elle projette une carte lumineuse. Un point rouge clignote sous Londres. Puis Milo pousse un cri et regarde vers le sol.",
      giveItem:"tracker",
      event:"Objet obtenu : Balise temporelle.",
      flags:{clues:1},
      choices:[
        {icon:"⬇️",label:"Suivre le point rouge sous Londres",next:"underground_entrance"},
        {icon:"🌳",label:"Calmer Milo d'abord",next:"park_route",flags:{kind:1}},
        {icon:"🏛️",label:"Chercher ce symbole dans un musée",next:"museum_archive"}
      ]
    },

    police_arrive: {
      chapter:"Hyde Park",
      title:"« Personne ne bouge ! »",
      glyph:"👮",
      text:"Deux voitures de police arrivent. Les policiers regardent Milo, puis le Docteur, puis encore Milo. « C'est… à vous ? » demande l'un d'eux. Le Docteur répond : « Temporairement. Très temporairement. »",
      choices:[
        {icon:"🎟️",label:"Laisser le Docteur parler",next:"doctor_talks",flags:{clues:1}},
        {icon:"🗣️",label:"Expliquer que Milo est perdu",next:"police_help",flags:{kind:1}},
        {icon:"🦕",label:"Profiter de la distraction pour guider Milo vers le parc",next:"park_route",flags:{brave:1}}
      ]
    },

    doctor_talks: {
      chapter:"Hyde Park",
      title:"Une explication presque crédible",
      glyph:"🧥",
      text:"Le Docteur montre un papier, parle très vite de migration temporelle et termine par « question de sécurité nationale et paléontologique ». Les policiers décident que c'est probablement au-dessus de leur salaire.",
      flags:{policeHelp:true},
      choices:[
        {icon:"🌳",label:"Demander qu'ils ferment le parc",next:"park_route"},
        {icon:"🚧",label:"Leur demander de bloquer les rues",next:"hide_dino",flags:{clues:1}},
        {icon:"📡",label:"Examiner la balise",next:"blue_glow"}
      ]
    },

    police_help: {
      chapter:"Hyde Park",
      title:"Une histoire simple marche mieux",
      glyph:"🗣️",
      text:"Tu dis simplement : « Il est perdu. Si tout le monde crie, il va avoir peur. » Les policiers se regardent, puis baissent leurs sirènes. Milo se calme aussitôt.",
      flags:{policeHelp:true,kind:2},
      choices:[
        {icon:"🌳",label:"L'emmener dans le parc",next:"park_route"},
        {icon:"🚧",label:"Demander de bloquer les routes",next:"hide_dino"},
        {icon:"📡",label:"Examiner sa balise",next:"blue_glow"}
      ]
    },

    hide_dino: {
      chapter:"Londres",
      title:"Cacher un dinosaure",
      glyph:"🌳",
      text:"Cacher un dinosaure de plusieurs mètres derrière trois arbres ne fonctionne pas très bien. Mais les policiers ferment la rue et les passants restent à distance. Milo grignote tranquillement les feuilles.",
      choices:[
        {icon:"🌿",label:"Examiner les feuilles qu'il choisit",next:"strange_leaf",flags:{clues:1}},
        {icon:"📡",label:"Examiner la lumière bleue",next:"blue_glow"},
        {icon:"🚶",label:"Le guider plus loin dans Hyde Park",next:"park_route"}
      ]
    },

    park_route: {
      chapter:"Hyde Park",
      title:"Milo suit une odeur",
      glyph:"🌳",
      tone:"warm",
      text:"Milo avance entre les arbres, renifle l'air et change brusquement de direction. Il se dirige vers un vieux portail de service fermé depuis des années.",
      choices:[
        {icon:"🗝️",label:"Chercher la clé du portail",next:"keeper_hut"},
        {icon:"🪢",label:"Passer par-dessus avec une corde",requiresItem:"rope",next:"old_greenhouse"},
        {icon:"🦕",label:"Laisser Milo pousser le portail",next:"gate_crash",flags:{brave:1}}
      ]
    },

    keeper_hut: {
      chapter:"Hyde Park",
      title:"La cabane du gardien",
      glyph:"🛖",
      text:"Dans une petite cabane, tu trouves un vieux sifflet, une corde et un trousseau de clés. Une photo jaunie montre le même portail… avec une serre immense derrière.",
      choices:[
        {icon:"🗝️",label:"Prendre la clé du parc",next:"take_key"},
        {icon:"🪢",label:"Prendre la corde",next:"take_rope"},
        {icon:"📯",label:"Prendre le sifflet",next:"take_whistle"}
      ]
    },

    take_key: {
      chapter:"Hyde Park",
      title:"La bonne clé",
      glyph:"🗝️",
      giveItem:"key",
      text:"Une grande clé porte une étiquette : « Serre ancienne ». C'est exactement ce qu'il faut.",
      choices:[
        {icon:"🚪",label:"Ouvrir le vieux portail",next:"old_greenhouse"},
        {icon:"🦕",label:"Retourner chercher Milo",next:"park_route"},
        {icon:"🛖",label:"Regarder encore dans la cabane",next:"keeper_hut"}
      ]
    },

    take_rope: {
      chapter:"Hyde Park",
      title:"Une corde utile",
      glyph:"🪢",
      giveItem:"rope",
      text:"La corde est vieille mais solide. Le Docteur tire dessus, hoche la tête et dit : « Parfait pour les situations qui nécessitent exactement une corde. »",
      choices:[
        {icon:"🚪",label:"Retourner au portail",next:"park_route"},
        {icon:"🛖",label:"Chercher autre chose",next:"keeper_hut"},
        {icon:"🦕",label:"Rejoindre Milo",next:"park_route"}
      ]
    },

    take_whistle: {
      chapter:"Hyde Park",
      title:"Fiiiit !",
      glyph:"📯",
      giveItem:"whistle",
      text:"Le sifflet produit un son aigu. Au loin, Milo relève immédiatement la tête. Voilà un bon moyen de l'appeler.",
      flags:{callDino:true},
      choices:[
        {icon:"🦕",label:"Appeler Milo vers le portail",next:"park_route"},
        {icon:"🛖",label:"Chercher encore dans la cabane",next:"keeper_hut"},
        {icon:"🌳",label:"Suivre le chemin derrière la cabane",next:"old_greenhouse"}
      ]
    },

    gate_crash: {
      chapter:"Hyde Park",
      title:"CRAC",
      glyph:"💥",
      text:"Milo pousse le portail avec son museau. Le verrou saute et le portail tombe lentement dans l'herbe. Le Docteur grimace. « On laissera une note. Une très grande note. »",
      flags:{gateBroken:true},
      choices:[
        {icon:"🌿",label:"Entrer dans la vieille serre",next:"old_greenhouse"},
        {icon:"🦕",label:"Vérifier que Milo ne s'est pas blessé",next:"dino_trust",flags:{kind:1}},
        {icon:"📡",label:"Regarder si la balise réagit",next:"greenhouse_signal"}
      ]
    },

    old_greenhouse: {
      chapter:"La serre oubliée",
      title:"Des plantes impossibles",
      glyph:"🌿",
      text:"Derrière le portail se cache une serre abandonnée. À l'intérieur poussent des fougères géantes qui ne devraient plus exister. Milo devient tout excité.",
      choices:[
        {icon:"🌿",label:"Examiner une fougère",next:"strange_leaf",flags:{clues:1}},
        {icon:"🦕",label:"Suivre Milo au fond de la serre",next:"nest_room"},
        {icon:"📡",label:"Chercher le signal temporel",next:"greenhouse_signal"}
      ]
    },

    strange_leaf: {
      chapter:"La serre oubliée",
      title:"Une feuille de très loin",
      glyph:"🌿",
      text:"Le Docteur examine la feuille. « Crétacé. Et fraîche de ce matin. Quelqu'un fait pousser ici des plantes préhistoriques. » Une petite feuille argentée se détache dans ta main.",
      giveItem:"leaf",
      event:"Objet obtenu : Feuille préhistorique.",
      flags:{clues:2},
      choices:[
        {icon:"🦕",label:"Montrer la feuille à Milo",next:"leaf_path"},
        {icon:"📡",label:"Chercher la source temporelle",next:"greenhouse_signal"},
        {icon:"🥚",label:"Explorer le fond de la serre",next:"nest_room"}
      ]
    },

    leaf_path: {
      chapter:"La serre oubliée",
      title:"Milo connaît cette odeur",
      glyph:"🦕",
      text:"Milo renifle la feuille et pousse un cri joyeux. Il fonce vers une porte cachée sous les lianes. Derrière, un escalier descend sous Londres.",
      flags:{dinoTrust:true,clues:1},
      choices:[
        {icon:"⬇️",label:"Descendre l'escalier",next:"underground_entrance"},
        {icon:"🥚",label:"Regarder d'abord le nid au fond",next:"nest_room"},
        {icon:"📡",label:"Vérifier la balise",next:"greenhouse_signal"}
      ]
    },

    nest_room: {
      chapter:"La serre oubliée",
      title:"Le nid vide",
      glyph:"🥚",
      text:"Au fond de la serre, un grand nid est caché sous les fougères. Il est vide, sauf pour un morceau de coquille énorme. Milo le renifle et gémit doucement.",
      giveItem:"eggShell",
      flags:{clues:2,kind:1},
      event:"Objet obtenu : Coquille d'œuf.",
      choices:[
        {icon:"🧬",label:"Montrer la coquille au Docteur",next:"egg_scan"},
        {icon:"⬇️",label:"Chercher où mène le passage sous le nid",next:"underground_entrance"},
        {icon:"🦕",label:"Rester un moment près de Milo",next:"dino_memory",flags:{kind:1}}
      ]
    },

    egg_scan: {
      chapter:"La serre oubliée",
      title:"Ce n'est pas son œuf",
      glyph:"🥚",
      text:"Le Docteur scanne la coquille. « Pas Milo. Mais la même espèce. Quelqu'un a déjà amené d'autres dinosaures ici. » Une trace d'énergie mène sous la serre.",
      flags:{clues:2},
      choices:[
        {icon:"⬇️",label:"Suivre la trace sous Londres",next:"underground_entrance"},
        {icon:"📡",label:"Comparer avec la balise",next:"greenhouse_signal"},
        {icon:"🦕",label:"Calmer Milo",next:"dino_memory",flags:{kind:1}}
      ]
    },

    dino_memory: {
      chapter:"La serre oubliée",
      title:"Il veut rentrer",
      glyph:"🦕",
      tone:"warm",
      text:"Milo se couche près du nid et ferme les yeux. Il n'est pas en colère. Il est seulement perdu. Quand la balise clignote, il se relève et regarde vers l'escalier.",
      flags:{dinoTrust:true,kind:2},
      choices:[
        {icon:"⬇️",label:"Lui dire : « On te ramène chez toi »",next:"underground_entrance"},
        {icon:"📯",label:"Tester le sifflet pour qu'il te suive",requiresItem:"whistle",next:"underground_entrance"},
        {icon:"📡",label:"Examiner la balise",next:"greenhouse_signal"}
      ]
    },

    greenhouse_signal: {
      chapter:"La serre oubliée",
      title:"Sous nos pieds",
      glyph:"📡",
      text:"Le signal de la balise devient très fort près d'une plaque métallique au sol. Elle cache un ascenseur qui descend bien plus profondément que le métro.",
      flags:{clues:1},
      choices:[
        {icon:"⬇️",label:"Prendre l'ascenseur",next:"underground_lab"},
        {icon:"🥚",label:"Explorer encore la serre",next:"nest_room"},
        {icon:"🏛️",label:"Chercher d'abord des archives",next:"museum_archive"}
      ]
    },

    underground_entrance: {
      chapter:"Sous Londres",
      title:"Une porte vieille de demain",
      glyph:"⬇️",
      tone:"danger",
      text:"Sous la serre, un couloir moderne s'enfonce dans le sol. Pourtant, la poussière indique qu'il est abandonné depuis longtemps. Une porte affiche une spirale identique à celle de la balise.",
      choices:[
        {icon:"📡",label:"Approcher la balise du lecteur",requiresItem:"tracker",next:"underground_lab"},
        {icon:"📱",label:"Montrer la photo du symbole",requiresItem:"phone",next:"symbol_door"},
        {icon:"🔍",label:"Chercher un autre passage",next:"maintenance_tunnel"}
      ]
    },

    symbol_door: {
      chapter:"Sous Londres",
      title:"Reconnaissance visuelle",
      glyph:"📱",
      text:"Le scanner reconnaît le symbole sur ta photo et ouvre la porte. « Voilà une sécurité étonnamment naïve », dit le Docteur.",
      flags:{clues:1},
      choices:[
        {icon:"🧪",label:"Entrer dans le laboratoire",next:"underground_lab"},
        {icon:"🦕",label:"Faire entrer Milo doucement",next:"lab_with_dino",flags:{kind:1}},
        {icon:"🔧",label:"Explorer le tunnel technique",next:"maintenance_tunnel"}
      ]
    },

    maintenance_tunnel: {
      chapter:"Sous Londres",
      title:"Le tunnel qui vibre",
      glyph:"🔧",
      text:"Le tunnel est étroit pour toi et impossible pour Milo. Au bout, tu vois une grande machine ronde entourée de cages vides.",
      flags:{clues:1},
      choices:[
        {icon:"🧪",label:"Entrer discrètement dans le laboratoire",next:"underground_lab"},
        {icon:"🦕",label:"Retourner chercher Milo",next:"underground_entrance"},
        {icon:"⚙️",label:"Examiner la machine d'ici",next:"portal_machine",flags:{clues:1}}
      ]
    },

    museum_archive: {
      chapter:"Archives",
      title:"Le laboratoire disparu",
      glyph:"🏛️",
      text:"Les archives indiquent qu'un laboratoire nommé ChronoZoo a été construit sous Londres puis fermé après une panne. Son but : observer des animaux du passé sans voyager soi-même.",
      flags:{chronoZoo:true,clues:2},
      choices:[
        {icon:"⬇️",label:"Retourner sous la serre",next:"underground_entrance"},
        {icon:"📡",label:"Comparer les archives à la balise",next:"greenhouse_signal"},
        {icon:"🦕",label:"Rejoindre Milo",next:"park_route"}
      ]
    },

    underground_lab: {
      chapter:"ChronoZoo",
      title:"Le zoo temporel",
      glyph:"🧪",
      tone:"danger",
      text:"Des écrans poussiéreux s'allument. Ils montrent des dinosaures dans leur époque. Au centre, une énorme machine crée une fenêtre ronde vers une jungle préhistorique. Mais la fenêtre saute comme une image mal réglée.",
      choices:[
        {icon:"⚙️",label:"Examiner la machine",next:"portal_machine",flags:{clues:1}},
        {icon:"🦕",label:"Faire venir Milo",next:"lab_with_dino",flags:{kind:1}},
        {icon:"📼",label:"Lire le dernier journal du laboratoire",next:"lab_log",flags:{clues:1}}
      ]
    },

    lab_log: {
      chapter:"ChronoZoo",
      title:"Le dernier message",
      glyph:"📼",
      text:"Le journal explique que la machine a attiré accidentellement un bébé dinosaure. Les scientifiques ont voulu le renvoyer, mais la panne a fermé le portail. Avant de partir, ils ont caché une balise pour rouvrir le chemin un jour.",
      flags:{clues:3,knowsTruth:true},
      choices:[
        {icon:"📡",label:"Brancher la balise à la machine",requiresItem:"tracker",next:"portal_machine"},
        {icon:"🦕",label:"Faire venir Milo",next:"lab_with_dino"},
        {icon:"🔋",label:"Chercher l'alimentation principale",next:"power_room"}
      ]
    },

    lab_with_dino: {
      chapter:"ChronoZoo",
      title:"Milo reconnaît la jungle",
      glyph:"🦕",
      text:"Milo voit la jungle de l'autre côté de la fenêtre temporelle. Il pousse un cri si fort que les vitres vibrent. Au loin, un autre dinosaure répond.",
      flags:{dinoTrust:true,homeFound:true,kind:2},
      choices:[
        {icon:"⚙️",label:"Stabiliser le portail",next:"portal_machine"},
        {icon:"🦕",label:"Laisser Milo s'approcher",next:"portal_unstable"},
        {icon:"🔋",label:"Vérifier l'énergie",next:"power_room"}
      ]
    },

    power_room: {
      chapter:"ChronoZoo",
      title:"Une machine affamée",
      glyph:"🔋",
      text:"La machine manque d'énergie. Il reste assez de puissance pour ouvrir le portail une seule fois. Si ça échoue, Milo restera ici.",
      choices:[
        {icon:"📡",label:"Utiliser la balise comme guide",requiresItem:"tracker",next:"portal_machine",flags:{clues:1}},
        {icon:"🌿",label:"Utiliser la feuille comme repère biologique",requiresItem:"leaf",next:"leaf_calibration",flags:{clues:1}},
        {icon:"⚡",label:"Envoyer toute l'énergie d'un coup",next:"portal_unstable",flags:{brave:1}}
      ]
    },

    leaf_calibration: {
      chapter:"ChronoZoo",
      title:"La bonne époque",
      glyph:"🌿",
      tone:"success",
      text:"La machine analyse la feuille préhistorique. Les chiffres cessent de sauter et une date se verrouille exactement sur l'époque de Milo.",
      flags:{calibrated:true,clues:2},
      choices:[
        {icon:"🦕",label:"Ouvrir le portail pour Milo",next:"final_return"},
        {icon:"📡",label:"Ajouter aussi la balise",requiresItem:"tracker",next:"perfect_calibration"},
        {icon:"🥚",label:"Comparer avec la coquille",requiresItem:"eggShell",next:"perfect_calibration"}
      ]
    },

    portal_machine: {
      chapter:"ChronoZoo",
      title:"Trois réglages",
      glyph:"⚙️",
      text:"La machine demande trois réglages : époque, lieu et durée. Le Docteur peut tenir le portail ouvert, mais quelqu'un doit choisir les bons repères.",
      choices:[
        {icon:"📡",label:"Utiliser la balise de Milo",requiresItem:"tracker",next:"tracker_calibration"},
        {icon:"🌿",label:"Utiliser la feuille préhistorique",requiresItem:"leaf",next:"leaf_calibration"},
        {icon:"🎲",label:"Essayer les coordonnées affichées",next:"portal_unstable"}
      ]
    },

    tracker_calibration: {
      chapter:"ChronoZoo",
      title:"La balise se souvient",
      glyph:"📡",
      tone:"success",
      text:"La balise contient les coordonnées du lieu où Milo a été trouvé. La jungle devient nette. Un troupeau de dinosaures apparaît au loin.",
      flags:{calibrated:true,clues:2},
      choices:[
        {icon:"🦕",label:"Renvoyer Milo maintenant",next:"final_return"},
        {icon:"🌿",label:"Ajouter la feuille pour vérifier",requiresItem:"leaf",next:"perfect_calibration"},
        {icon:"🥚",label:"Comparer avec la coquille",requiresItem:"eggShell",next:"perfect_calibration"}
      ]
    },

    perfect_calibration: {
      chapter:"ChronoZoo",
      title:"Même lieu, même famille",
      glyph:"✨",
      tone:"success",
      text:"Les deux repères correspondent parfaitement. Le portail ne mène pas seulement à la bonne époque : il s'ouvre près du troupeau de Milo.",
      flags:{perfectRoute:true,calibrated:true,clues:2},
      choices:[
        {icon:"🦕",label:"Ouvrir grand le portail",next:"ending_perfect"},
        {icon:"👋",label:"Dire au revoir à Milo",next:"farewell",flags:{kind:1}},
        {icon:"📷",label:"Prendre une dernière photo",requiresItem:"phone",next:"farewell"}
      ]
    },

    portal_unstable: {
      chapter:"ChronoZoo",
      title:"Une jungle qui saute",
      glyph:"🌀",
      tone:"danger",
      text:"Le portail s'ouvre, mais l'image change : jungle, désert, océan, jungle. Milo ne peut pas traverser sans risque.",
      choices:[
        {icon:"📡",label:"Chercher la balise comme repère",next:"blue_glow"},
        {icon:"🌿",label:"Utiliser une plante de la serre",next:"strange_leaf"},
        {icon:"🦕",label:"Laisser Milo choisir le bon moment",next:"dino_choice"}
      ]
    },

    dino_choice: {
      chapter:"ChronoZoo",
      title:"Milo écoute",
      glyph:"🦕",
      text:"Milo reste devant le portail. Quand la jungle apparaît, il écoute. Une fois, deux fois… puis un cri de dinosaure répond de l'autre côté. Milo sait reconnaître son monde.",
      flags:{dinoTrust:true,homeFound:true},
      choices:[
        {icon:"🦕",label:"Le laisser traverser au prochain cri",next:"ending_return"},
        {icon:"🪢",label:"Le retenir avec la corde",requiresItem:"rope",next:"ending_sanctuary"},
        {icon:"📯",label:"Le rappeler avec le sifflet",requiresItem:"whistle",next:"ending_sanctuary"}
      ]
    },

    final_return: {
      chapter:"Final",
      title:"La porte vers chez lui",
      glyph:"🌄",
      tone:"success",
      text:"Le portail tient enfin. Milo regarde la jungle, puis vous regarde. Il hésite. Le Docteur sourit doucement. « C'est son choix maintenant. »",
      choices:[
        {icon:"👋",label:"L'encourager à rentrer chez lui",next: s => s.flags.perfectRoute && s.flags.kind >= 3 ? "ending_perfect" : "ending_return"},
        {icon:"🌳",label:"Le garder dans la serre pour le moment",next:"ending_sanctuary"},
        {icon:"🚪",label:"Ouvrir le TARDIS derrière lui",next:"ending_tardis"}
      ]
    },

    farewell: {
      chapter:"Final",
      title:"Au revoir, Milo",
      glyph:"👋",
      tone:"warm",
      text:"Tu poses une main sur le museau de Milo. Il souffle encore une fois et te décoiffe exactement comme au début. Puis il se tourne vers son monde.",
      flags:{kind:2},
      choices:[
        {icon:"🌄",label:"Le regarder rejoindre son troupeau",next:"ending_perfect"},
        {icon:"🦕",label:"Attendre qu'il choisisse seul",next:"ending_return"},
        {icon:"🚪",label:"Laisser aussi la porte du TARDIS ouverte",next:"ending_tardis"}
      ]
    },

    ending_perfect: {
      end:true,
      endLabel:"Fin parfaite",
      title:"Milo rentre à la maison",
      glyph:"🌄",
      tone:"success",
      text: state => {
        const n=window.BOOK_03.heroes[state.hero].short;
        return `Milo traverse le portail. De l'autre côté, un grand dinosaure arrive en courant et pousse un cri immense. Milo lui répond. Avant que le portail se ferme, il se retourne une dernière fois vers ${n}. Le Docteur renifle. « Poussière temporelle dans les yeux. Très fréquente. » Londres n'a plus de dinosaure perdu, et Milo a retrouvé les siens.`;
      }
    },

    ending_return: {
      end:true,
      endLabel:"Fin réussie",
      title:"Le bon moment",
      glyph:"🦕",
      tone:"warm",
      text: state => {
        const n=window.BOOK_03.heroes[state.hero].short;
        return `Milo attend, écoute puis traverse au moment où il reconnaît le cri de son troupeau. Le portail se ferme juste après lui. ${n} ne sait pas exactement où il est arrivé, mais le Docteur confirme qu'il est revenu à la bonne époque. « On n'a pas son adresse exacte. Mais on a son siècle. Pour un TARDIS, c'est déjà très bien. »`;
      }
    },

    ending_sanctuary: {
      end:true,
      endLabel:"Fin prudente",
      title:"Le jardin secret de Milo",
      glyph:"🌿",
      tone:"warm",
      text:"Le portail est trop instable pour risquer la traversée. Milo reste provisoirement dans la grande serre, remplie de plantes de son époque. Le Docteur promet de revenir avec de meilleures coordonnées. Pour Londres, le dinosaure a « mystérieusement disparu ». Pour Milo, c'est surtout une grande salle d'attente avec beaucoup de feuilles.",
    },

    ending_tardis: {
      end:true,
      endLabel:"Fin surprise",
      title:"Un passager de trop",
      glyph:"🚪",
      tone:"success",
      text: state => {
        const n=window.BOOK_03.heroes[state.hero].short;
        return `Milo regarde la jungle. Puis le TARDIS. Puis encore la jungle. Et il choisit… le TARDIS. Sa tête passe la porte, puis son cou, puis beaucoup trop de dinosaure. Le Docteur regarde ${n}. « Bon. Nous allons avoir besoin d'une salle plus grande. Heureusement, j'en ai quelques-unes. » Milo rentrera chez lui… après une toute petite aventure supplémentaire.`;
      }
    }
  }
};