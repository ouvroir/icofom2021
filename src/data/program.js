export const program = [
  {
    day: "2021-03-15",
    zoomLink: "https://www.facebook.com/icofom",
    subscribeLink : "", // J'ai un doute ici, le lien change t-il selon les jours ?
    sessions: [
      {
        id: "conference-ouverture-01", // bien faire attention ici à l'unicité de ces ids, puisqu'ils seront utilsiés pour référencer les sessions dans les fiches des intervenants
        titles: {
          en: "Opening conference",
          fr: "Conférence inaugurale",
          es: "Conferencia inaugural"
        },
        timeRange: ["09:00", "10:20", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["laurent-jerome"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["yves-bergeron", "michele-rivet"],
            interventionTitles: {
              en: "[Opening]", // on peut sans problèmes avoir des balises html dans ces chaînes de caractères
              fr: "[Ouverture]",
              es: "[Apertura]"
            }
          },
          {
            intervenantId: ["elisabeth-kaine"],
            interventionTitles: {
              en: "Récit d’une incursion autochtone en territoire muséal (interpreted in English)", // on peut sans problèmes avoir des balises html dans ces chaînes de caractères
              fr: "Récit d’une incursion autochtone en territoire muséal",
              es: "Récit d’une incursion autochtone en territoire muséal (interpreted in English)"
            }
          }
        ],
      },
      {
        id: "decoloniser-la-museologie",
        // si multilingue :
        titles: {
          en: "Decolonizing museology",
          fr: "Décoloniser la muséologie",
          es: "Descolonizar la museología"
        },
        timeRange: ["10:30", "12:00", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["maria-juliana-angarita", "ann-davis"], // @todo ajouter ann-davis
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["francois-mairesse"],
            interventionTitle: "Décoloniser la muséologie ? (en)",
            texte: "icofom2021-francois-mairesse"
          },
          {
            intervenantId: ["liubov-petrunina"],
            interventionTitle: "Deconstruction of Museum landscape",
            texte: "icofom2021-liubov-petrunina"
          },
          {
            intervenantId: ["susana-manjarrez"],
            interventionTitle: "La Decolonización de la palabra: del Museo (con mayúscula) a sus Públicos y a las Comunidades ¿en las que se inscriben ? (es)",
            texte: "icofom2021-susana-manjarrez"
          }
          //, {
          //  intervenantId: ["ernest-kpan"],
          //  interventionTitle: "La décolonisation de la muséologie : analyse réflexive sur les musées et les communautés culturelles en Côte-d’Ivoire",
          //  texte: "icofom2021-ernest-kpan"
          // }
        ],
      },
      {
        id: "social-event-01",
        titles: {
          en: "Social event",
          fr: "Événement social",
          es: "Evento social"
        },
        timeRange: ["12:00", "13:00", "EDT"],
        replayLink: "",
        president: [""],
        interventions: [
          {
            intervenantId: [""],
            interventionTitles: {
              en: "Social event for registered participants",
              fr: "Événement social pour les participants enregistrés",
              es: "Evento social para los participantes inscritos"
            },
            texte: ""
          }
        ]
      },
      {
        id: "decoloniser-les-musees-1",
        // si multilingue :
        titles: {
          en: "Decolonizing museums (1)",
          fr: "Décoloniser les musées (1)",
          es: "Descolonizar los museos (1)"
        },
        timeRange: ["13:00", "14:30", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["anna-leschchenko"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["lynn-maranda"],
            interventionTitle: "The Politics of Decolonization and the Museum Enigma",
            texte: "icofom2021-lynn-maranda"
          },
          {
            intervenantId: ["vinicius-moncao"],
            interventionTitle: "La descolonizacion de los museos desde una perspectiva una perspectiva museologica transnacional (en)",
            texte: "icofom2021-vinicius-moncao"
          },
          {
            intervenantId: ["lin-li"],
            interventionTitle: "Repatriation from Another Perspective: Implications on Chinese Museums and Decolonization",
            texte: "icofom2021-lin-li"
          },
          {
            intervenantId: ["simbarashe-shadreck-chitima"],
            interventionTitle: "Negotiating the Decolonisation of National Museums in Zimbabwe",
            texte: "icofom2021-simbarashe-shadreck-chitima"
          }
        ],
      },
      {
        id: "decoloniser-les-musees-2",
        // si multilingue :
        titles: {
          en: "Decolonizing museums (2)",
          fr: "Décoloniser les musées (2)",
          es: "Descolonizar los museos (2)"
        },
        timeRange: ["15:00", "17:00", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["nada-guzin"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["victor-zaiden","ana-avelar"],
            interventionTitle: "The Laboratory-Exhibition: A Metalinguistic Curatorial Approach to Discuss the Future of Berlin’s Ethnological Collections",
            texte: "icofom2021-victor-zaiden-ana-avelar"

          },
          {
            intervenantId: ["barbara-molina"],
            interventionTitle: "La representación andina en los museos etnológicos europeos (en)",
            texte: "icofom2021-barbara-molina"
          },
          {
            intervenantId: ["leon-perelson-bellinha"],
            interventionTitle: "Decolonizing a Colonizer’s Tool",
            texte: "icofom2021-leon-perelson-bellinha"

          },
          {
            intervenantId: ["marion-bertin"],
            interventionTitle: "Que signifie « décoloniser » les musées ? (en)",
            texte: "icofom2021-marion-bertin"
          },
          {
            intervenantId: ["christine-bluard"],
            interventionTitle: "Africamuseum : réorganisation (fr)",
            texte: "icofom2021-christine-bluard"
          }
        ],
      },
    ],
  },
  {
    day: "2021-03-16",
    zoomLink: "https://www.facebook.com/icofom",
    subscribeLink : "", // J'ai un doute ici, le lien change t-il selon les jours ?
    sessions: [
      {
        id: "conference-ouverture-02",
        titles: {
          en: "Keynote speech",
          fr: "Grande conférence",
          es: "Discurso principal"
        },
        timeRange: ["09:00", "10:20", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["francois-mairesse"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["emmanuel-kasarherou"],
            interventionTitles: {
              en: "Le musée du quai Branly à l’heure du décentrement du regard (interpreted in English)", // on peut sans problèmes avoir des balises html dans ces chaînes de caractères
              fr: "Le musée du quai Branly à l’heure du décentrement du regard",
              es: "Le musée du quai Branly à l’heure du décentrement du regard (interpreted in English)"
            }
          }
        ],
      },
      {
        id: "restitution",
        titles: {
          en: "Restitution and resistance to decolonization",
          fr: "Restitution et résistance à la décolonisation",
          es: "Restitución y resistencia a la descolonización"
        },
        timeRange: ["10:30", "12:30", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["manuelina-duarte"], // @todo Maryse Paquin et Manuelina Duarte à confirmer
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["ana-carolina-gelmini-de-faria","kimberly-terrany-alves-pires"],
            interventionTitle: "A Cultural Heritage between to Forces: Who shall preserve the Parthenon Marbles",
            texte: "icofom2021-ana-carolina-gelmini-de-faria-kimberly-terrany-alves-pires"
          },
          {
            intervenantId: ["ibrahima-cisse"],
            interventionTitle: "La question du retour des objets sénégalais des musées européens : enjeux, stratégies d’intervention, expertises muséologiques et négociations diplomatiques (fr)",
            texte: "icofom2021-ibrahima-cisse"
          },
          {
            intervenantId: ["camille-labadie"],
            interventionTitle: "Décoloniser les collections: enjeux et obstacles de la restitution des biens culturels en droit (en)",
            texte: "icofom2021-camille-labadie"
          },
          {
            intervenantId: ["jos-van-beurden"],
            interventionTitle: "Colonial Collections and Restitution issues – The State of a Global Debate (en)",
            texte: "icofom2021-jos-van-beurden"
          },
          {
            intervenantId: ["fanny-fouche"],
            interventionTitle: "Le musée face à l’héritage colonial : un pharmakon ? (en)",
            texte: "icofom2021-fanny-fouche"
          }
        ],
      },
      {
        id: "social-event-02",
        titles: {
          en: "Social event",
          fr: "Événement social",
          es: "Evento social"
        },
        timeRange: ["12:30", "13:30", "EDT"],
        replayLink: "",
        president: [""],
        interventions: [
          {
            intervenantId: [""],
            interventionTitles: {
              en: "Social event for registered participants",
              fr: "Événement social pour les participants enregistrés",
              es: "Evento social para los participantes inscritos"
            },
            texte: ""
          }
        ]
      },
      {
        id: "premiers-peubles-1",
        titles: {
          en: "Museums and First People (1)",
          fr: "Musées et Premiers Peuples (1)",
          es: "Museos y pueblos originarios (1)"
        },
        timeRange: ["14:00", "15:30", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["caroline-hotte"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["michele-rivet"],
            interventionTitle: "La leçon des Peuples Premiers",
            texte: "icofom2021-michele-rivet"
          },
          {
            intervenantId: ["freire-rodriguez-saldana"],
            interventionTitle: "Discursos Museales Nacionales en Tres Museos Norteamericanos. Su deconstrucción desde la mirada indígena (en)",
            texte: "icofom2021-freire-rodriguez-saldana"
          },
          {
            intervenantId: ["maria-de-simone-ferreira"],
            interventionTitle: "Heritage Narratives at the Itaipu Archaeology Museum: Territory and Resistance through Artisanal Fishing (en)",
            texte: "icofom2021-maria-de-simone-ferreira"
          },
          {
            intervenantId: ["leandro-guedes"],
            interventionTitle: "Musealization is an Indigenous Business: Reflections About Objects and Subjects in the Museological Chain of the Indian Museum of Rio de Janeiro (en)",
            texte: "icofom2021-leandro-guedes"
          }
        ],
      },
      {
        id: "premiers-peubles-2",
        titles: {
          en: "Museums and First People (2)",
          fr: "Musées et Premiers Peuples (2)",
          es: "Museos y pueblos originarios (2)" // @todo check translation
        },
        timeRange: ["16:00", "17:30", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["laurier-turgeon"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["adriana-russi"],
            interventionTitle: "Descolonizando museos, aproximando pueblos indígenas: avances y adversidades en el (difícil) contexto brasileño (en)",
            texte: "icofom2021-adriana-russi"
          },
          {
            intervenantId: ["karine-duhamel"],
            interventionTitle: "All My Relations: (Re)Imagined Communities and Indigenous Peoples (en)",
            texte: "icofom2021-karine-duhamel"
          },
          {
            intervenantId: ["marie-charlotte-franco"],
            interventionTitle: "La décolonisation et l’autochtonisation de la muséologie. Le cas du Musée McCord à Tiohtiá:ke/Montréal (en)",
            texte: "icofom2021-marie-charlotte-franco"
          },
          {
            intervenantId: ["manuelina-maria-duarte-candido", "luciana-conrado-martins", "andrea-dias-vial"],
            interventionTitle: "Digital strategies for widening the scope of dissemination of indigenous cultures: the Presença Karajá Project and the Tainacan Platform (en)",
            texte: "icofom2021-manuelina-maria-duarte-candido"
          }
        ],
      }
    ],
  },
  {
    day: "2021-03-17",
    zoomLink: "https://www.facebook.com/icofom",
    subscribeLink : "", // J'ai un doute ici, le lien change t-il selon les jours ?
    sessions: [
      {
        id: "conference-ouverture-03",
        titles: {
          en: "Keynote speech",
          fr: "Grande conférence",
          es: "Discurso principal"
        },
        timeRange: ["09:00", "10:20", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format @todo horaire ?
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["jonathan-lainey"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["cynthia-chavez-lamar"],
            interventionTitles: {
              en: "Looking Back and Moving Forward at the Smithsonian’s National Museum of the American Indian", // on peut sans problèmes avoir des balises html dans ces chaînes de caractères
              fr: "Looking Back and Moving Forward at the Smithsonian’s National Museum of the American Indian (interprétée en Français)",
              es: "Looking Back and Moving Forward at the Smithsonian’s National Museum of the American Indian (interprétée en Français)"
            }
          }
        ],
      },
      {
        id: "social-museology",
        titles: {
          en: "Social museology and experimental museology",
          fr: "Muséologie sociale et muséologie expérimentale",
          es: "Museología social y experimental" // @todo check translation
        },
        timeRange: ["10:30", "12:00", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["bruno-brulon-soares"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["marcia-bertotto","vera-rangel"],
            interventionTitle: "Uno museo Comunitario en el Sur del Brasil – Mixturas, Hibridismos y Participación (es)",
            texte: "icofom2021-marcia-bertotto-vera-rangel"
          },
          {
            intervenantId: ["silvilene-barros","carolina-zanesi","marina-pinheiro"],
            interventionTitle: "Experimental Museology, its Principles and Practices: The Creation of the LGBTI+ Memory and Training Center in Rio de Janeiro (en)",
            texte: "icofom2021-silvilene-barros-carolina-zanesi-marina-pinheiro"
          },
          {
            intervenantId: ["cossi-zephirin-daavo"],
            interventionTitle: "Les musées africains et le patrimoine immatériel : quelques pistes pour une nouvelle muséologie (fr)",
            texte: "icofom2021-cossi-zephirin-daavo"
          }
        ],
      },
      {
        id: "social-event-03",
        titles: {
          en: "Social event",
          fr: "Événement social",
          es: "Evento social"
        },
        timeRange: ["12:00", "13:00", "EDT"],
        replayLink: "",
        president: [""],
        interventions: [
          {
            intervenantId: [""],
            interventionTitles: {
              en: "Social event for registered participants",
              fr: "Événement social pour les participants enregistrés",
              es: "Evento social para los participantes inscritos"
            },
            texte: ""
          },
          {
            intervenantId: [""],
            interventionTitles: {
              en: "Publication launch : Médiation culturelle, musées, publics diversifiés. Guide pour une expérience inclusive https://fb.me/e/3DOqK39Q6",
              fr: "Lancement publication : Médiation culturelle, musées, publics diversifiés. Guide pour une expérience inclusive https://fb.me/e/3DOqK39Q6",
              es: "Lanzamiento de la publicación : Médiation culturelle, musées, publics diversifiés. Guide pour une expérience inclusive https://fb.me/e/3DOqK39Q6"
            },
            texte: ""
          }
        ]
      },
      {
        id: "decolonisation-musee-art",
        titles: {
          en: "Decolonisation in art museums",
          fr: "Décolonisation dans les musées d’art",
          es: "La descolonización en los museos de arte" // @todo check translation
        },
        timeRange: ["13:00", "14:30", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["annette-viel"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["vicky-buring"],
            interventionTitle: "L’exposition Le modèle noir: de Géricault à Matisse au Musée d’Orsay, un exercice de décolonisation dans un musée de beaux-arts ? (en)",
            texte: "icofom2021-vicky-buring"
          },
          {
            intervenantId: ["daphnee-yiannaki"],
            interventionTitle: "Stratégies de décolonisation dans les musées d’art: le collectionnement et l’exposition permanente de l’art contemporain autochtone au Musée des beaux-arts du Canada et au Musée des beaux-arts de Montréal depuis 2000 (en)",
            texte: "icofom2021-daphnee-yiannaki"
          },
          {
            intervenantId: ["vivian-horta"],
            interventionTitle: "The right to ancestry in Paulo Nazareth’s works (en)",
            texte: "icofom2021-vivian-horta"
          }
        ],
      },
      {
        id: "conference",
        titles: {
          en: "Keynote speech",
          fr: "Grande conférence",
          es: "Discurso principal"
        },
        timeRange: ["15:00", "16:00", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["yves-bergeron"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["andre-delpuech"],
            interventionTitle: "Colonisation et esclavage : Pour une nécessaire et juste place en patrimoine et en musée (interpreted in English)"
          }
        ],
      }
    ],
  },
  {
    day: "2021-03-18",
    zoomLink: "https://www.facebook.com/icofom",
    subscribeLink : "", // J'ai un doute ici, le lien change t-il selon les jours ?
    sessions: [
      {
        id: "conference-ouverture-04",
        titles: {
          en: "Keynote speech",
          fr: "Grande conférence",
          es: "Discurso principal"
        },
        timeRange: ["09:00", "10:20", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format @todo horaire ?
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["stephane-chagnon"], // id du président @todo manquant
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["ruth-phillips"],
            interventionTitles: {
              en: "‘Changing Up’ the Museum: Cultural Translation and Decolonial Politics", // on peut sans problèmes avoir des balises html dans ces chaînes de caractères
              fr: "‘Changing Up’ the Museum: Cultural Translation and Decolonial Politics (interprétée en Français)",
              es: "‘Changing Up’ the Museum: Cultural Translation and Decolonial Politics (interprétée en Français)"
            }
          }
        ],
      },
      {
        id: "metissage-1",
        titles: {
          en: "Métis: cultural communities (1)",
          fr: "Métissage: communautés culturelles (1)",
          es: "Métis: comunidades culturales (1)"
        },
        timeRange: ["10:30", "12:30", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format @todo vérifier
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["johanne-lamoureux"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["jean-françois-gauvin","manon-joly","marie-kim-gagnon"],
            interventionTitle: "Les musées et le métissage culturel intra muros à l’heure du vivre-ensemble: bousculer les conventions (en)",
            texte: "icofom2021-jean-françois-gauvin-manon-joly-marie-kim-gagnon"
          },
          {
            intervenantId: ["jean-françois-leclerc"],
            interventionTitle: "La préservation du passé et des cultures immigrantes dans les musées : une définition du patrimoine à repenser (en)",
            texte: "icofom2021-jean-françois-leclerc"
          },
          {
            intervenantId: ["rebeca-lemay-perrault","maryse-paquin"],
            interventionTitle: "Perspective agoniste: Proposition pour l’inclusion des communautés culturelles et leur participation dans les musées (en)",
            texte: "icofom2021-rebeca-lemay-perrault-maryse-paquin"
          },
          {
            intervenantId: ["fabien-van-geert","quitterie-puel"],
            interventionTitle: "Le centre culturel Tjibaou, ou les complexités d’incarner le «destin commun» pluriethnique néo-calédonien (en)",
            texte: "icofom2021-fabien-van-geert-quitterie-puel"
          },
          {
            intervenantId: ["françois-thierry-toe"],
            interventionTitle: "Politiques et pratiques muséales africaines à l’aune des métissages et des hybridations (fr)",
            texte: "icofom2021-françois-thierry-toe"
          }
        ],
      },
      {
        id: "icofom",
        titles: {
          en: "ICOFOM General Assembly",
          fr: "Assemblée générale de l’ICOFOM",
          es: "Asamblea General de ICOFOM"
        },
        timeRange: ["12:30", "13:30", "EDT"],
        replayLink: "",
        president: [""],
        interventions: [
          {
            intervenantId: [""],
            interventionTitles: {
              en: "Meeting reserved for ICOFOM members",
              fr: "Réunion réservée aux membres de l’ICOFOM",
              es: "Reunión sólo para miembros de ICOFOM"
            },
            texte: ""
          }
        ]
      },
      {
        id: "metissage-2",
        titles: {
          en: "Métis: cultural communities (2)",
          fr: "Métissage: communautés culturelles (2)",
          es: "Métis: comunidades culturales (2)"
        },
        timeRange: ["13:30", "15:00", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["habib-saidi"], // @todo ajouter deuxième Alain Caron
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["markus-walz"],
            interventionTitle: "Filled Containers, Felt Communities. Facts and Constructivism in Regional Museums (en)",
            texte: "icofom2021-markus-walz"
          },
          {
            intervenantId: ["marilia-xavier-cury"],
            interventionTitle: "Metamuseology, Museology and decolonization – indigenous people and museums in Brazil (es)",
            texte: "icofom2021-marilia-xavier-cury"
          },
          {
            intervenantId: ["shikoh-shiraiwa","olga-zabalueva"],
            interventionTitle: "Museological Myths of Decolonization and Neutrality (en)",
            texte: "icofom2021-shikoh-shiraiwa-olga-zabalueva"
          },
          {
            intervenantId: ["hector-valverde-martinez"],
            interventionTitle: "Through the eyes of the mannequins How we see us? (en)",
            texte: "icofom2021-hector-valverde-martinez"
          },
          {
            intervenantId: ["fabien-van-geert"],
            interventionTitle: "Muséologies postcoloniale et décoloniale. Ou les frontières poreuses des concepts muséologiques (en)",
            texte: "icofom2021-fabien-van-geert"
          },

        ],
      },
      {
        id: "conference-cloture",
        titles: {
          en: "Closing session",
          fr: "Session de clôture",
          es: "Sesión de clausura" // @todo check translation
        },
        timeRange: ["15:30", "16:30", "EDT"], // heure de début / heure de fin / timezone. Selon vos besoins de multilingue / localisation des dates, possibilité de changer ce format
        replayLink: "", // liens YouTube du replay, si déjà disponibles. Laisser la chaîne vide si ce n'est pas le cas. On n'entre ici que l'id de la vidéo : "https://www.youtube.com/watch?v=TDZUcqDG-aM"
        president: ["marie-lalonde"], // id du président
        interventions: [ // toujours utiliser un tableau même s'il n'y a qu'une seule intervention sur la session
          {
            intervenantId: ["bruno-brulon-soares"],
            interventionTitles: {
              en: "Synthesis and conclusions – The myths of museology: deconstructing, reconstructing and redistributing",
              fr: "Synthèse et conclusions",
              es: "Síntesis y conclusiones"
            }
          }
        ],
      }
    ],
  }
];
