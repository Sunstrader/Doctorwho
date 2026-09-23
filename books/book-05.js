window.BOOK_05 = {
  id:"book-05",
  title:"Le Dernier Dalek",
  subtitle:"Un Dalek isolé envoie un appel de détresse depuis une station au bord d'une étoile mourante. Est-ce un piège… ou quelqu'un demande-t-il vraiment de l'aide ?",
  start:"intro",
  heroes:{
    rose:{
      name:"Rose Tyler",short:"Rose",icon:"🌹",
      trait:"Elle cherche toujours la personne derrière le monstre.",
      item:{id:"psychic",name:"Papier psychique",icon:"🪪"}
    },
    donna:{
      name:"Donna Noble",short:"Donna",icon:"💫",
      trait:"Elle pose les questions que tout le monde évite et ne se laisse pas impressionner.",
      item:{id:"comm",name:"Communicateur",icon:"📟"}
    },
    clara:{
      name:"Clara Oswald",short:"Clara",icon:"🍃",
      trait:"Elle réfléchit vite et repère les contradictions.",
      item:{id:"sonic",name:"Tournevis sonique",icon:"🪛"}
    }
  },
  items:{
    psychic:{name:"Papier psychique",icon:"🪪"},
    comm:{name:"Communicateur",icon:"📟"},
    sonic:{name:"Tournevis sonique",icon:"🪛"},
    starKey:{name:"Clé stellaire",icon:"🌟"},
    powerCell:{name:"Cellule d'énergie",icon:"🔋"},
    memoryChip:{name:"Puce mémoire",icon:"💾"},
    shieldBadge:{name:"Badge de sécurité",icon:"🛡️"},
    seed:{name:"Graine solaire",icon:"🌱"},
    prism:{name:"Prisme de lumière",icon:"🔷"}
  },
  scenes:{
    intro:{
      chapter:"Prologue",
      title:"Un appel impossible",
      glyph:"📡",
      tone:"danger",
      text:state=>{
        const n=window.BOOK_05.heroes[state.hero].short;
        return `Le TARDIS capte un message court : « AIDE. STATION HÉLIOS. ÉTOILE INSTABLE. » Puis une voix métallique ajoute : « DALEK… DEMANDE… AIDE. » Le Docteur reste silencieux. ${n} le regarde. Un Dalek qui demande de l'aide, c'est soit très important… soit un très mauvais piège.`;
      },
      choices:[
        {icon:"🚪",label:"Aller voir malgré le risque",next:"station_arrival",flags:{brave:1}},
        {icon:"📡",label:"Analyser le message d'abord",next:"signal_analysis",flags:{clues:1}},
        {icon:"🗣️",label:"Répondre au Dalek",next:"first_contact",flags:{kind:1}}
      ]
    },

    signal_analysis:{
      chapter:"TARDIS",
      title:"Le message se répète depuis trois jours",
      glyph:"📈",
      text:"Le message n'est pas automatique. Il change légèrement à chaque répétition. Quelqu'un essaie réellement d'attirer l'attention. La station dérive vers une étoile rouge instable.",
      flags:{clues:2},
      choices:[
        {icon:"🚪",label:"Atterrir dans la station",next:"station_arrival"},
        {icon:"📟",label:"Répondre au signal",next:"first_contact"},
        {icon:"⭐",label:"Étudier l'étoile",next:"star_problem",flags:{clues:1}}
      ]
    },

    first_contact:{
      chapter:"Transmission",
      title:"« POURQUOI RÉPONDEZ-VOUS ? »",
      glyph:"👁️",
      tone:"danger",
      text:"La voix métallique revient. « IDENTIFIEZ-VOUS. » Le Docteur ne répond pas tout de suite. Puis le Dalek demande, plus bas : « POURQUOI… RÉPONDEZ-VOUS ? »",
      choices:[
        {icon:"🤝",label:"Dire : « Parce que tu as demandé de l'aide »",next:"dalek_surprised",flags:{kind:2}},
        {icon:"🪪",label:"Présenter le papier psychique au système",requiresItem:"psychic",next:"psychic_access"},
        {icon:"❓",label:"Demander ce qui s'est passé",next:"distress_story",flags:{clues:1}}
      ]
    },

    dalek_surprised:{
      chapter:"Transmission",
      title:"Silence",
      glyph:"…",
      text:"Le Dalek ne répond pas pendant plusieurs secondes. Puis : « RÉPONSE… NON PRÉVUE. » Il transmet un code d'amarrage et coupe la communication.",
      flags:{dockCode:true,kind:1},
      choices:[
        {icon:"🚪",label:"Utiliser le code pour entrer",next:"station_arrival"},
        {icon:"⭐",label:"Étudier l'étoile d'abord",next:"star_problem"},
        {icon:"📡",label:"Vérifier si le code est un piège",next:"code_check",flags:{clues:1}}
      ]
    },

    psychic_access:{
      chapter:"Transmission",
      title:"Autorisation improbable",
      glyph:"🪪",
      text:"Le système lit le papier psychique comme une autorisation de secours prioritaire. Les portes d'amarrage s'ouvrent. Même le Docteur semble impressionné.",
      flags:{dockCode:true,clues:1},
      choices:[
        {icon:"🚪",label:"Entrer dans la station",next:"station_arrival"},
        {icon:"📡",label:"Chercher d'autres survivants",next:"life_scan"},
        {icon:"⭐",label:"Analyser l'étoile",next:"star_problem"}
      ]
    },

    distress_story:{
      chapter:"Transmission",
      title:"La station s'est vidée",
      glyph:"📡",
      text:"Le Dalek explique en phrases courtes : la station étudiait une étoile mourante. Une tempête solaire a détruit les navettes. Les scientifiques ont été évacués par téléportation. Lui est resté coincé dans la station.",
      flags:{clues:2},
      choices:[
        {icon:"❓",label:"Demander pourquoi il n'a pas attaqué les scientifiques",next:"why_not_attack",flags:{clues:1}},
        {icon:"🚪",label:"Atterrir dans la station",next:"station_arrival"},
        {icon:"⭐",label:"Demander ce qui arrive à l'étoile",next:"star_problem"}
      ]
    },

    why_not_attack:{
      chapter:"Transmission",
      title:"Un Dalek qui hésite",
      glyph:"👁️",
      text:"« ORDRE : DÉTRUIRE. » Silence. « ORDRE… NON EXÉCUTÉ. » Le Docteur s'approche de l'écran. Quelque chose a changé dans ce Dalek.",
      flags:{clues:2,dalekChanged:true},
      choices:[
        {icon:"🤝",label:"Lui dire que ce choix compte",next:"dalek_surprised",flags:{kind:1}},
        {icon:"🚪",label:"Aller le voir",next:"station_arrival"},
        {icon:"📡",label:"Chercher ce qui a pu le changer",next:"memory_hint",flags:{clues:1}}
      ]
    },

    code_check:{
      chapter:"TARDIS",
      title:"Le code est vrai",
      glyph:"✅",
      text:"Le code correspond à une procédure de secours standard. Aucune bombe, aucun verrou caché. Pour l'instant, le Dalek dit la vérité.",
      flags:{trustEvidence:true,clues:1},
      choices:[
        {icon:"🚪",label:"Entrer dans la station",next:"station_arrival"},
        {icon:"📡",label:"Scanner les formes de vie",next:"life_scan"},
        {icon:"⭐",label:"Étudier l'étoile",next:"star_problem"}
      ]
    },

    life_scan:{
      chapter:"TARDIS",
      title:"Une seule forme de vie",
      glyph:"📡",
      text:"Le scanner trouve une seule forme de vie dans toute la station : le Dalek. Mais plusieurs robots de maintenance fonctionnent encore.",
      flags:{clues:1},
      choices:[
        {icon:"🚪",label:"Atterrir",next:"station_arrival"},
        {icon:"🤖",label:"Chercher les robots sur le plan",next:"robot_bay"},
        {icon:"⭐",label:"Analyser la tempête solaire",next:"star_problem"}
      ]
    },

    star_problem:{
      chapter:"Station Hélios",
      title:"L'étoile va éclater trop tôt",
      glyph:"☀️",
      tone:"danger",
      text:"L'étoile ne devrait pas devenir dangereuse avant des milliers d'années. Quelque chose dans la station aspire son énergie et accélère la tempête.",
      flags:{clues:2},
      choices:[
        {icon:"🚪",label:"Entrer dans la station pour trouver la cause",next:"station_arrival"},
        {icon:"🧪",label:"Chercher le laboratoire stellaire",next:"solar_lab"},
        {icon:"📡",label:"Demander au Dalek ce qu'il sait",next:"distress_story"}
      ]
    },

    station_arrival:{
      chapter:"Station Hélios",
      title:"Une station presque noire",
      glyph:"🚪",
      tone:"danger",
      text:"Le TARDIS atterrit dans un hangar vide. Les lumières clignotent. Trois chemins : poste de sécurité, laboratoire solaire, baie des robots. Au loin, une voix métallique répète : « VITE. »",
      choices:[
        {icon:"🛡️",label:"Passer par le poste de sécurité",next:"security_post",flags:{clues:1}},
        {icon:"☀️",label:"Aller au laboratoire solaire",next:"solar_lab"},
        {icon:"🤖",label:"Explorer la baie des robots",next:"robot_bay"}
      ]
    },

    security_post:{
      chapter:"Station Hélios",
      title:"Journal d'évacuation",
      glyph:"🛡️",
      text:"Le dernier rapport confirme que tous les humains ont quitté la station. Une note ajoute : « Unité Dalek endommagée placée en confinement. Comportement inhabituel. N'a pas attaqué le personnel. »",
      flags:{dalekChanged:true,clues:2},
      choices:[
        {icon:"💳",label:"Prendre le badge de sécurité",next:"take_badge"},
        {icon:"💾",label:"Lire les journaux sur le Dalek",next:"memory_hint"},
        {icon:"☀️",label:"Aller au laboratoire solaire",next:"solar_lab"}
      ]
    },

    take_badge:{
      chapter:"Station Hélios",
      title:"Accès niveau quatre",
      glyph:"🛡️",
      giveItem:"shieldBadge",
      text:"Le badge ouvre les sections techniques et le confinement.",
      event:"Objet obtenu : Badge de sécurité.",
      flags:{clues:1},
      choices:[
        {icon:"👁️",label:"Ouvrir la zone de confinement",next:"dalek_room"},
        {icon:"☀️",label:"Ouvrir le laboratoire solaire",next:"solar_lab"},
        {icon:"🔋",label:"Ouvrir la salle d'énergie",next:"power_room"}
      ]
    },

    memory_hint:{
      chapter:"Archives",
      title:"Une puce étrangère",
      glyph:"💾",
      text:"Les journaux indiquent qu'une puce mémoire humaine a été branchée accidentellement au Dalek pendant une réparation. Depuis, il conserve des souvenirs qui ne sont pas les siens.",
      flags:{memoryKnown:true,dalekChanged:true,clues:3},
      choices:[
        {icon:"👁️",label:"Aller parler au Dalek",next:"dalek_room"},
        {icon:"💾",label:"Chercher la puce d'origine",next:"memory_archive"},
        {icon:"☀️",label:"Revenir au problème de l'étoile",next:"solar_lab"}
      ]
    },

    robot_bay:{
      chapter:"Station Hélios",
      title:"Trois petits robots",
      glyph:"🤖",
      text:"Trois robots roulent en cercle autour d'une caisse. Quand ils te voient, ils affichent : « ÉVACUATION TERMINÉE. MISSION SECONDAIRE : PROTÉGER LA GRAINE. »",
      choices:[
        {icon:"🌱",label:"Demander ce qu'est la graine",next:"seed_box",flags:{clues:1}},
        {icon:"🤖",label:"Leur demander de réparer la station",next:"robot_help"},
        {icon:"☀️",label:"Leur demander pourquoi l'étoile devient instable",next:"robot_star"}
      ]
    },

    seed_box:{
      chapter:"Station Hélios",
      title:"Une graine solaire",
      glyph:"🌱",
      text:"La caisse contient une graine conçue pour absorber doucement l'énergie d'une étoile puis la libérer plus tard. Elle devait servir à faire pousser des jardins sur des planètes froides.",
      giveItem:"seed",
      event:"Objet obtenu : Graine solaire.",
      flags:{clues:2},
      choices:[
        {icon:"☀️",label:"Emporter la graine au laboratoire",next:"solar_lab"},
        {icon:"🤖",label:"Demander aux robots de venir",next:"robot_help"},
        {icon:"👁️",label:"Aller voir le Dalek",next:"dalek_room"}
      ]
    },

    robot_help:{
      chapter:"Station Hélios",
      title:"Équipe de réparation",
      glyph:"🤖",
      text:"Les robots acceptent de te suivre, mais ils ont besoin d'un ordre clair. Ils peuvent réparer soit les boucliers, soit le système d'énergie.",
      choices:[
        {icon:"🛡️",label:"Réparer les boucliers",next:"shields_up",flags:{clues:1}},
        {icon:"🔋",label:"Réparer l'énergie",next:"power_room",flags:{clues:1}},
        {icon:"☀️",label:"Les envoyer au laboratoire",next:"solar_lab"}
      ]
    },

    robot_star:{
      chapter:"Station Hélios",
      title:"La machine qui boit le soleil",
      glyph:"☀️",
      text:"Les robots montrent un schéma : un collecteur expérimental est bloqué en position ouverte. Il aspire trop d'énergie de l'étoile et la rend instable.",
      flags:{knowsCollector:true,clues:2},
      choices:[
        {icon:"☀️",label:"Aller au collecteur",next:"solar_lab"},
        {icon:"🔋",label:"Couper l'énergie de la station",next:"power_room"},
        {icon:"👁️",label:"Demander si le Dalek peut aider",next:"dalek_room"}
      ]
    },

    solar_lab:{
      chapter:"Laboratoire solaire",
      title:"Le collecteur bloqué",
      glyph:"☀️",
      tone:"danger",
      text:"Une grande lentille pointe vers l'étoile. Elle absorbe beaucoup trop d'énergie. Pour l'arrêter, il faut soit fermer la lentille, soit détourner l'énergie, soit couper toute la station.",
      choices:[
        {icon:"🪛",label:"Réparer le mécanisme avec le tournevis",requiresItem:"sonic",next:"collector_fix"},
        {icon:"🌱",label:"Utiliser la graine solaire pour absorber l'excès",requiresItem:"seed",next:"seed_solution"},
        {icon:"🔋",label:"Couper l'énergie depuis la salle principale",next:"power_room"}
      ]
    },

    collector_fix:{
      chapter:"Laboratoire solaire",
      title:"Le moteur répond",
      glyph:"🪛",
      text:"Le tournevis réveille le moteur de la lentille. Il peut se fermer, mais il manque une clé stellaire pour valider la commande.",
      flags:{collectorReady:true,clues:1},
      choices:[
        {icon:"🌟",label:"Chercher la clé stellaire",next:"star_key_hunt"},
        {icon:"👁️",label:"Demander au Dalek s'il l'a vue",next:"dalek_room"},
        {icon:"🔋",label:"Chercher une autre solution",next:"power_room"}
      ]
    },

    seed_solution:{
      chapter:"Laboratoire solaire",
      title:"La graine s'ouvre",
      glyph:"🌱",
      tone:"success",
      text:"La graine déploie des pétales de lumière et absorbe l'énergie en trop. L'étoile se calme un peu, mais le collecteur reste ouvert. Il faut encore l'arrêter.",
      flags:{starStable:true,clues:2},
      choices:[
        {icon:"🌟",label:"Chercher la clé du collecteur",next:"star_key_hunt"},
        {icon:"👁️",label:"Aller voir le Dalek",next:"dalek_room"},
        {icon:"🔋",label:"Réparer l'alimentation",next:"power_room"}
      ]
    },

    power_room:{
      chapter:"Salle d'énergie",
      title:"Trois lignes de puissance",
      glyph:"🔋",
      text:"Trois lignes alimentent la station : boucliers, laboratoire, confinement. Couper la mauvaise ligne pourrait libérer le Dalek ou laisser la tempête frapper la station.",
      choices:[
        {icon:"☀️",label:"Couper seulement le laboratoire",next:"lab_power_cut",flags:{clues:1}},
        {icon:"🛡️",label:"Garder les boucliers en priorité",next:"shields_up"},
        {icon:"👁️",label:"Vérifier le confinement avant de couper",next:"dalek_room"}
      ]
    },

    lab_power_cut:{
      chapter:"Salle d'énergie",
      title:"Le collecteur s'arrête… presque",
      glyph:"🔋",
      text:"La lentille cesse d'aspirer l'étoile, mais son mécanisme reste coincé ouvert. La prochaine surtension pourrait la rallumer.",
      flags:{collectorOff:true,starStable:true},
      choices:[
        {icon:"🌟",label:"Fermer la lentille manuellement",next:"star_key_hunt"},
        {icon:"🛡️",label:"Renforcer les boucliers",next:"shields_up"},
        {icon:"👁️",label:"Aller parler au Dalek",next:"dalek_room"}
      ]
    },

    shields_up:{
      chapter:"Station Hélios",
      title:"Boucliers à 40 %",
      glyph:"🛡️",
      text:"Les robots remettent les boucliers en marche. Ils ne tiendront pas éternellement, mais la station a gagné du temps.",
      flags:{shields:true},
      choices:[
        {icon:"☀️",label:"Retourner au laboratoire",next:"solar_lab"},
        {icon:"👁️",label:"Aller au confinement",next:"dalek_room"},
        {icon:"🔋",label:"Stabiliser l'énergie",next:"power_room"}
      ]
    },

    dalek_room:{
      chapter:"Confinement",
      title:"Le Dalek derrière la vitre",
      glyph:"👁️",
      tone:"danger",
      text:"Le Dalek attend derrière un champ de force. Son armure est abîmée. Il ne pointe pas son arme vers toi. À côté de lui repose une clé brillante en forme d'étoile.",
      choices:[
        {icon:"🗣️",label:"Lui demander la clé",next:"ask_key",flags:{kind:1}},
        {icon:"💾",label:"Parler de la puce mémoire",next:"memory_talk",flags:{clues:1}},
        {icon:"🛡️",label:"Garder le champ de force et prendre la clé autrement",next:"remote_key"}
      ]
    },

    ask_key:{
      chapter:"Confinement",
      title:"« POURQUOI ME FAIRE CONFIANCE ? »",
      glyph:"🌟",
      text:"Le Dalek pousse la clé vers la vitre avec sa pince. « OUVREZ. JE PEUX TRANSPORTER LA CLÉ AU COLLECTEUR. » Puis il ajoute : « VOUS NE DEVRIEZ PAS ME FAIRE CONFIANCE. »",
      choices:[
        {icon:"🤝",label:"Dire : « Je te fais confiance pour ce choix-là »",next:"release_choice",flags:{kind:2}},
        {icon:"🛡️",label:"Garder le champ fermé et récupérer la clé",next:"remote_key"},
        {icon:"❓",label:"Demander ce qu'il veut vraiment",next:"dalek_goal",flags:{clues:1}}
      ]
    },

    dalek_goal:{
      chapter:"Confinement",
      title:"Un souvenir de jardin",
      glyph:"🌿",
      text:"Le Dalek hésite. « LA MÉMOIRE CONTIENT… UN JARDIN. DES ENFANTS. DE LA LUMIÈRE. » Il ne comprend pas pourquoi ce souvenir l'empêche d'obéir à ses anciens ordres.",
      flags:{dalekChanged:true,memoryKnown:true,kind:1,clues:2},
      choices:[
        {icon:"💾",label:"Chercher la puce mémoire",next:"memory_archive"},
        {icon:"🤝",label:"Lui proposer d'aider à sauver la station",next:"release_choice"},
        {icon:"🌟",label:"Prendre seulement la clé",next:"remote_key"}
      ]
    },

    memory_talk:{
      chapter:"Confinement",
      title:"Des souvenirs qui ne lui appartiennent pas",
      glyph:"💾",
      text:"Quand tu mentionnes la puce, le Dalek devient silencieux. « SOUVENIRS INUTILES. » Puis, plus bas : « JE NE VEUX PAS LES PERDRE. »",
      flags:{kind:2,dalekChanged:true},
      choices:[
        {icon:"💾",label:"Promettre de sauvegarder la puce",next:"memory_archive"},
        {icon:"🤝",label:"Lui demander de vous aider",next:"release_choice"},
        {icon:"🌟",label:"Demander seulement la clé",next:"ask_key"}
      ]
    },

    memory_archive:{
      chapter:"Archives",
      title:"La puce du botaniste",
      glyph:"💾",
      text:"La puce appartenait à une botaniste de la station. Elle contenait des souvenirs de son jardin et de sa famille. Une copie de sauvegarde est encore branchée dans l'ordinateur.",
      giveItem:"memoryChip",
      event:"Objet obtenu : Puce mémoire.",
      flags:{clues:2,memorySafe:true},
      choices:[
        {icon:"👁️",label:"Apporter la copie au Dalek",next:"give_memory"},
        {icon:"☀️",label:"Retourner au laboratoire",next:"solar_lab"},
        {icon:"🌟",label:"Chercher la clé stellaire",next:"star_key_hunt"}
      ]
    },

    give_memory:{
      chapter:"Confinement",
      title:"Une copie des souvenirs",
      glyph:"💾",
      text:"Tu montres la copie au Dalek. « MÉMOIRE PRÉSERVÉE. » Sa voix ne change presque pas, mais son arme s'abaisse complètement.",
      flags:{dalekTrust:true,kind:2},
      choices:[
        {icon:"🤝",label:"Ouvrir le confinement et travailler ensemble",next:"release_choice"},
        {icon:"🌟",label:"Demander la clé sans l'ouvrir",next:"remote_key"},
        {icon:"☀️",label:"Lui expliquer le plan pour sauver l'étoile",next:"team_plan",flags:{clues:1}}
      ]
    },

    remote_key:{
      chapter:"Confinement",
      title:"La clé sous la porte",
      glyph:"🌟",
      text:"Le Dalek utilise sa pince pour faire glisser la clé dans une petite trappe de sécurité. Tu peux la récupérer sans couper le champ de force.",
      giveItem:"starKey",
      event:"Objet obtenu : Clé stellaire.",
      flags:{keySafe:true},
      choices:[
        {icon:"☀️",label:"Porter la clé au collecteur",next:"collector_final"},
        {icon:"💾",label:"Chercher la puce mémoire avant de partir",next:"memory_archive"},
        {icon:"🗣️",label:"Promettre de revenir",next:"collector_final",flags:{kind:1}}
      ]
    },

    release_choice:{
      chapter:"Confinement",
      title:"Ouvrir ou ne pas ouvrir",
      glyph:"🔓",
      tone:"danger",
      text:"Le Docteur pose la main sur la commande du champ de force. « On ne peut pas savoir ce qu'il fera ensuite. Mais on peut décider ce qu'on fait, nous. »",
      choices:[
        {icon:"🔓",label:"Ouvrir le champ et lui faire confiance",next:"dalek_released",flags:{brave:1,kind:1}},
        {icon:"🌟",label:"Prendre la clé sans l'ouvrir",next:"remote_key"},
        {icon:"💾",label:"Sauvegarder d'abord ses souvenirs",next:"memory_archive"}
      ]
    },

    dalek_released:{
      chapter:"Station Hélios",
      title:"Le Dalek sort",
      glyph:"👁️",
      tone:"danger",
      text:"Le champ disparaît. Le Dalek avance lentement. Son arme passe devant toi… puis se tourne vers une conduite en feu et l'éteint. « PRIORITÉ : SAUVER STATION. »",
      giveItem:"starKey",
      flags:{dalekFree:true,dalekTrust:true,kind:2},
      event:"Le Dalek vous remet la Clé stellaire.",
      choices:[
        {icon:"☀️",label:"Aller ensemble au collecteur",next:"team_plan"},
        {icon:"🛡️",label:"Demander au Dalek de renforcer les boucliers",next:"dalek_shields"},
        {icon:"🔋",label:"Demander au Dalek de réparer l'énergie",next:"dalek_power"}
      ]
    },

    dalek_shields:{
      chapter:"Station Hélios",
      title:"« BOUCLIERS : OBEISSEZ ! »",
      glyph:"🛡️",
      text:"Le Dalek branche sa pince au système. « BOUCLIERS : OBEISSEZ ! » Étrangement, cela fonctionne. Les protections montent à 80 %.",
      flags:{shields:true,dalekHelp:true},
      choices:[
        {icon:"☀️",label:"Rejoindre le collecteur",next:"team_plan"},
        {icon:"🔋",label:"Réparer aussi l'énergie",next:"dalek_power"},
        {icon:"💾",label:"Sauvegarder ses souvenirs",next:"memory_archive"}
      ]
    },

    dalek_power:{
      chapter:"Station Hélios",
      title:"Une prise Dalek",
      glyph:"🔋",
      text:"Le Dalek transfère une partie de sa propre énergie à la station. Les lumières reviennent. Lui devient plus lent.",
      flags:{powerStable:true,dalekHelp:true,kind:1},
      choices:[
        {icon:"☀️",label:"Aller vite au collecteur",next:"team_plan"},
        {icon:"🔋",label:"Lui rendre de l'énergie avec une cellule",next:"power_cell_hunt"},
        {icon:"💾",label:"Sauvegarder ses souvenirs",next:"memory_archive"}
      ]
    },

    power_cell_hunt:{
      chapter:"Station Hélios",
      title:"Cellule de secours",
      glyph:"🔋",
      text:"Une armoire contient une cellule pleine. Elle peut soit recharger le Dalek, soit alimenter les boucliers pendant la tempête.",
      giveItem:"powerCell",
      event:"Objet obtenu : Cellule d'énergie.",
      choices:[
        {icon:"👁️",label:"Donner la cellule au Dalek",next:"dalek_recharge",flags:{kind:1}},
        {icon:"🛡️",label:"La brancher aux boucliers",next:"shields_up"},
        {icon:"☀️",label:"L'emporter au collecteur",next:"collector_final"}
      ]
    },

    dalek_recharge:{
      chapter:"Station Hélios",
      title:"Énergie partagée",
      glyph:"🔋",
      text:"Le Dalek se recharge. « ACTION NON NÉCESSAIRE. » Puis il ajoute : « …MERCI. » Le Docteur lève un sourcil très haut.",
      flags:{dalekStrong:true,dalekTrust:true,kind:2},
      choices:[
        {icon:"☀️",label:"Aller au collecteur",next:"team_plan"},
        {icon:"🛡️",label:"Vérifier les boucliers",next:"shields_up"},
        {icon:"💾",label:"Sauvegarder les souvenirs",next:"memory_archive"}
      ]
    },

    star_key_hunt:{
      chapter:"Station Hélios",
      title:"La clé est dans le confinement",
      glyph:"🌟",
      text:"Le plan de la station indique que la clé stellaire a été déplacée dans la zone de confinement lors de l'évacuation. Elle est donc… avec le Dalek.",
      flags:{clues:1},
      choices:[
        {icon:"👁️",label:"Aller au confinement",next:"dalek_room"},
        {icon:"🛡️",label:"Chercher un badge d'accès",next:"security_post"},
        {icon:"🔋",label:"Couper le collecteur sans clé",next:"power_room"}
      ]
    },

    team_plan:{
      chapter:"Final",
      title:"Trois choses à faire",
      glyph:"☀️",
      tone:"danger",
      text:"Le plan est simple : fermer le collecteur, protéger la station pendant la tempête et empêcher l'excès d'énergie de frapper l'étoile. Simple… sauf qu'il reste moins de quatre minutes.",
      flags:{teamPlan:true},
      choices:[
        {icon:"🌟",label:"Fermer le collecteur avec la clé",requiresItem:"starKey",next:"collector_final"},
        {icon:"🌱",label:"Placer la graine solaire près de la lentille",requiresItem:"seed",next:"seed_final"},
        {icon:"👁️",label:"Laisser le Dalek tenir la salle d'énergie",next:"dalek_final_role",flags:{kind:1}}
      ]
    },

    collector_final:{
      chapter:"Final",
      title:"La clé stellaire",
      glyph:"🌟",
      tone:"success",
      text:"La clé tourne. La grande lentille commence enfin à se fermer. Mais une énorme vague d'énergie arrive de l'étoile. Il faut décider où envoyer l'excès.",
      flags:{collectorClosed:true},
      choices:[
        {icon:"🌱",label:"L'envoyer dans la graine solaire",requiresItem:"seed",next:"seed_final"},
        {icon:"🛡️",label:"L'envoyer dans les boucliers",next:"shield_final"},
        {icon:"👁️",label:"La laisser passer par le circuit du Dalek",next:"dalek_final_role"}
      ]
    },

    seed_final:{
      chapter:"Final",
      title:"Une fleur de lumière",
      glyph:"🌱",
      tone:"success",
      text:"La graine s'ouvre en une immense fleur lumineuse. Elle absorbe l'excès d'énergie sans blesser l'étoile. Il ne reste plus qu'à stabiliser la station.",
      flags:{starSaved:true,cleanEnergy:true},
      choices:[
        {icon:"🛡️",label:"Renforcer les boucliers",next:s=>s.flags.shields?"ending_perfect":"ending_station"},
        {icon:"👁️",label:"Demander l'aide du Dalek",next:s=>s.flags.dalekTrust?"ending_perfect":"ending_station"},
        {icon:"🚪",label:"Évacuer avant la dernière vague",next:"ending_station"}
      ]
    },

    shield_final:{
      chapter:"Final",
      title:"La station encaisse",
      glyph:"🛡️",
      tone:"danger",
      text:"Les boucliers absorbent la vague. La station tremble de partout mais tient. L'étoile se calme progressivement.",
      flags:{starSaved:true},
      choices:[
        {icon:"👁️",label:"Retourner chercher le Dalek",next:s=>s.flags.dalekFree?"ending_station":"ending_leave"},
        {icon:"🚪",label:"Rejoindre le TARDIS",next:"ending_station"},
        {icon:"💾",label:"Sauvegarder les souvenirs avant de partir",requiresItem:"memoryChip",next:"ending_station"}
      ]
    },

    dalek_final_role:{
      chapter:"Final",
      title:"« JE PEUX TENIR. »",
      glyph:"👁️",
      tone:"danger",
      text:"Le Dalek se branche directement au circuit. « JE PEUX TENIR. FERMEZ LE COLLECTEUR. » Toute l'énergie de la station passe par son armure.",
      choices:[
        {icon:"🔋",label:"L'aider avec une cellule d'énergie",requiresItem:"powerCell",next:"dalek_shared_load"},
        {icon:"🌱",label:"Détourner une partie vers la graine",requiresItem:"seed",next:"seed_final"},
        {icon:"🌟",label:"Fermer vite le collecteur",requiresItem:"starKey",next:"dalek_sacrifice"}
      ]
    },

    dalek_shared_load:{
      chapter:"Final",
      title:"Personne ne porte tout seul",
      glyph:"🔋",
      tone:"success",
      text:"La cellule partage la charge. Le Dalek tient, le collecteur se ferme et l'étoile cesse de gronder. Les lumières reviennent une à une.",
      flags:{starSaved:true,dalekSaved:true,perfectTeam:true},
      choices:[
        {icon:"🤝",label:"Débrancher le Dalek avec le Docteur",next:"ending_perfect"},
        {icon:"🌱",label:"Planter la graine dans le jardin de la station",next:"ending_perfect"},
        {icon:"🚪",label:"Rejoindre le TARDIS ensemble",next:"ending_perfect"}
      ]
    },

    dalek_sacrifice:{
      chapter:"Final",
      title:"La lumière blanche",
      glyph:"⚡",
      tone:"danger",
      text:"Le collecteur se ferme. L'étoile est sauvée. Quand la lumière retombe, le Dalek est immobile. Sa puce mémoire clignote encore faiblement.",
      flags:{starSaved:true,dalekDamaged:true},
      choices:[
        {icon:"💾",label:"Sauver sa mémoire",next:"ending_memory"},
        {icon:"🪛",label:"Essayer de le réparer",requiresItem:"sonic",next:"ending_station"},
        {icon:"🚪",label:"Évacuer avant la prochaine vague",next:"ending_station"}
      ]
    },

    ending_perfect:{
      end:true,
      endLabel:"Fin parfaite",
      title:"Une nouvelle mission",
      glyph:"🌅",
      tone:"success",
      text:state=>{
        const n=window.BOOK_05.heroes[state.hero].short;
        return `L'étoile se calme. La station est sauvée. Le Dalek regarde ${n}, puis le jardin expérimental de la station. « NOUVELLE DIRECTIVE ? » Le Docteur sourit. « Tu pourrais commencer par ne détruire personne. Ensuite, essaie de faire pousser quelque chose. » Quelques minutes plus tard, le Dalek pousse une petite caisse de graines vers la serre. Ce n'est pas une fin. C'est peut-être un commencement.`;
      }
    },

    ending_station:{
      end:true,
      endLabel:"Fin réussie",
      title:"Hélios tient bon",
      glyph:"🛰️",
      tone:"warm",
      text:"Le collecteur est arrêté et l'étoile est sauvée. La station a subi des dégâts, mais elle tiendra jusqu'à l'arrivée d'une équipe de secours. Le Dalek reste sous surveillance, vivant. Le Docteur promet de revenir avec des spécialistes. Rien n'est complètement résolu, mais personne n'a été abandonné.",
    },

    ending_memory:{
      end:true,
      endLabel:"Fin douce-amère",
      title:"Le jardin reste",
      glyph:"💾",
      tone:"warm",
      text:state=>{
        const n=window.BOOK_05.heroes[state.hero].short;
        return `Le Dalek ne peut plus bouger, mais ${n} sauve sa puce mémoire. Le Docteur la place dans un petit boîtier du TARDIS. Une image apparaît : un jardin au soleil, des fleurs, des rires. « On n'a pas pu tout sauver, dit le Docteur. Mais on a sauvé ce qu'il avait choisi de garder. » L'étoile, elle, brille de nouveau calmement.`;
      }
    },

    ending_leave:{
      end:true,
      endLabel:"Fin prudente",
      title:"La station derrière vous",
      glyph:"🚪",
      tone:"danger",
      text:"La tempête est stoppée juste à temps. Vous rejoignez le TARDIS et quittez la station avant la dernière secousse. Le Dalek reste confiné, en sécurité pour le moment. Le Docteur envoie immédiatement un message d'alerte à une équipe de secours. La question de ce qu'il deviendra reste ouverte.",
    }
  }
};