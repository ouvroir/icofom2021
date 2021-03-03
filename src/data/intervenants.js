export const intervenants = [
  {
    id: "yves-bergeron", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Yves",
    lastName: "Bergeron",
    institution: "UQAM Chair for Museum Governance and Cultural Law",
    presentation: "",
    intervention: "", // @todo ajouter
    sessions: ["conference-ouverture-01", "conference"]
  },
  // @todo supprimer
  {
    id: "laurent-jerome", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Laurent",
    lastName: "Jérôme",
    institution: "Université du Québec à Montréal",
    presentation: "Laurent Jérôme est anthropologue et professeur au Département de sciences des religions de l’UQAM. Directeur de la Revue Recherches amérindiennes au Québec, il s’intéresse à la transmission des savoirs ainsi qu’aux politiques du patrimoine et de la culture en milieux autochtones au Québec et au Brésil.",
    intervention: "",
    sessions: ["conference-ouverture-01"]
  },
  {
    id: "elisabeth-kaine", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Elisabeth",
    lastName: "Kaine",
    institution: "Titulaire de la Chaire UNESCO en transmission culturelle chez les Premiers peuples comme dynamique de mieux-être et d’empowerment",
    presentation: "",
    intervention: {
      en: "[Title to come]",
      fr: "[Titre à venir]",
      es: "[Próximo título]"},
    sessions: ["conference-ouverture-01"]
  },
  {
    id: "anna-leschchenko", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Anna",
    lastName: "Leshchenko",
    institution: "vice-présidente, ICOFOM",
    presentation: "Anna Leshchenko is a Vice Chair of the International Committee for Museology. She holds a degree in Museology from the Russian State University for the Humanities and has more than 10 years of experience in teaching museology to university students, as well as museum research and work in the ICOFOM committee.",
    intervention: "", // @rmq pas de présentation pour les président de session
    sessions: ["decoloniser-les-musees-1"]
  },
  {
    id: "lynn-maranda", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Lynn",
    lastName: "Maranda",
    institution: "Curator Emerita, Museum of Vancouver", // @rmq il arrive qu’il n’y ait pas d’institution
    presentation: "Curator Emerita, Museum of Vancouver; Curator of Ethnology/Anthropology for 44 years. Currently, 2nd Secretary of ICOM’s International Committee for Museology, Fellow of Royal Anthropological Institute, member of American Anthropological Association, ICOM Canada, Council for Museum Anthropology, Commonwealth Association of Museums, ICOM’s International Committee for Museums of Ethnography.",
    intervention: "The Politics of Decolonization and the Museum Enigma",
    texte: "icofom2021-lynn-maranda",
    sessions: ["decoloniser-les-musees-1", "social-museology"]
  },
  {
    id: "vinicius-moncao", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Vinícius",
    lastName: "Monção",
    institution: "Faculdade de Educação, Universidade de São Paulo (FEUSP) – Sāo Paulo, Brasil", // @rmq il arrive qu’il n’y ait pas d’institution
    presentation: "",
    intervention: "La descolonizacion de los museos desde una perspectiva una perspectiva museologica transnacional",
    texte: "icofom2021-vinicius-moncao",
    sessions: ["decoloniser-les-musees-1"]
  },
  {
    id: "lin-li", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Lin",
    lastName: "Li",
    institution: "Reinwardt Academie – Amsterdam, Netherlands", // @rmq il arrive qu’il n’y ait pas d’institution
    presentation: "Lin Li is a graduate student in the master of museology program at the Amsterdam University of Arts (Reinwardt Academie) and has two years of work experience as an event planner in the Zhejiang Provincial Museum in China.",
    intervention: "Repatriation from Another Perspective: Implications on Chinese Museums and Decolonization",
    texte: "icofom2021-lin-li",
    sessions: ["decoloniser-les-musees-1"]
  },
  {
    id: "nada-guzin", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Nada",
    lastName: "Guzin Lukić",
    institution: "Université du Québec en Outaouais",
    presentation: "Nada Guzin Lukic est professeure en muséologie et patrimoine, responsable des programmes de cycles supérieurs en muséologie et pratiques des arts à l’Université du Québec en Outaouais. Titulaire d’un doctorat en ethnologie de l’Université Laval, ses recherches portent sur la muséologie de la réconciliation, la muséalisation, l’inclusion et l’histoire des musées.",
    intervention: "",
    sessions: ["decoloniser-les-musees-2"]
  },
  {
    id: "victor-zaiden", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Victor",
    lastName: "Zaiden",
    institution: "Universidade de Brasília – Brasília, Brazil",
    presentation: "Ana Avelar is an adjunct professor of Theory, Criticism and Art History at the University of Brasília. She was a curator at Niemeyer House between 2017 and 2021. In 2019, she won the Curators Exchange Program promoted by the Brazilian Contemporary Art Association - ABACT in partnership with the Getty Research Institute.",
    intervention: "The Laboratory-Exhibition: A Metalinguistic Curatorial Approach to Discuss the Future of Berlin’s Ethnological Collections",
    texte: "icofom2021-victor-zaiden-ana-avelar",
    sessions: ["decoloniser-les-musees-2"]
  },
  {
    id: "ana-avelar", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Ana",
    lastName: "Avelar",
    institution: "Universidade de Brasília – Brasília, Brazil",
    presentation: "",
    intervention: "The Laboratory-Exhibition: A Metalinguistic Curatorial Approach to Discuss the Future of Berlin’s Ethnological Collections",
    texte: "icofom2021-victor-zaiden-ana-avelar",
    sessions: ["decoloniser-les-musees-2"]
  },
  {
    id: "barbara-molina", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Bárbara",
    lastName: "Molina",
    institution: "Universidad de Barcelona-España",
    presentation: "Bárbara Molina, PhD por la Universidad de Barcelona en Gestión de la cultura y el patrimonio. Ex becaria en el Museo Nacional del Indígena Americano del Instituto Smithsoniano en Washington D.C. Se ha desempeñado como docente universitaria en Ecuador en la Universidad de Azuay, la Universidad de Cuenca, y la Universidad Politécnica Salesiana. Es investigadora, consultora y gestora independiente en museología, gestión participativa del patrimonio cultural y mundial.",
    intervention: "La representación andina en los museos etnológicos europeos",
    texte: "icofom2021-barbara-molina",
    sessions: ["decoloniser-les-musees-2"]
  },
  {
    id: "leon-perelson-bellinha", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Leon",
    lastName: "Perelson Bellinha",
    institution: "Federal University of the State of Rio de Janeiro – Rio de Janeiro, Brazil",
    presentation: "",
    intervention: "Decolonizing a Colonizer’s Tool",
    texte: "icofom2021-leon-perelson-bellinha",
    sessions: ["decoloniser-les-musees-2"]
  },
  {
    id: "marion-bertin", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Marion",
    lastName: "Bertin",
    institution: "École du Louvre & Université de La Rochelle – France",
    presentation: "Diplômée de l’École du Louvre en histoire de l’art et en muséologie, Marion Bertin est docteure en anthropologie de l’Université de La Rochelle (CRHIA) et diplômée de Troisième Cycle de l’École du Louvre. Ses recherches portent sur les circulations d’objets océaniens dans les collections privées et publiques. Elle est aussi secrétaire de l’ICOFOM.",
    intervention: "Que signifie « décoloniser » les musées ?",
    texte: "icofom2021-marion-bertin",
    sessions: ["decoloniser-les-musees-2"]
  },
  {
    id: "maria-juliana-angarita", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "María Juliana",
    lastName: "Angarita Bohorquez",
    institution: "Université du Québec à Montréal",
    presentation: "Diplômée en relations internationales et titulaire d’une maîtrise en muséologie, María Juliana Angarita poursuit des études doctorales en muséologie, médiation et patrimoine à l’Université du Québec à Montréal, sous la direction de Jennifer Carter, Ph. D. Ses intérêts de recherche portent sur la patrimonialisation et le commissariat de sujets sensibles.",
    intervention: "", // @rmq président
    sessions: ["decoloniser-la-museologie"]
  },
  {
    id: "francois-mairesse", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "François",
    lastName: "Mairesse",
    institution: "Université Sorbonne nouvelle (CERLIS, CNRS, ICCA) – Paris, France",
    presentation: "François Mairesse est muséologue, professeur d’économie de la culture et titulaire de la Chaire UNESCO sur l’étude de la diversité muséale et son évolution, Museum Prospect, à l’Université Sorbonne nouvelle – Paris 3 (CERLIS, CNRS, labex ICCA).  Il a auparavant dirigé le Musée royal de Mariemont en Belgique (de 2002 à 2010) et a présidé l’ICOFOM de 2013 à 2019.",
    intervention: "Décoloniser la muséologie ?",
    texte: "icofom2021-francois-mairesse",
    sessions: ["conference-ouverture-02", "decoloniser-la-museologie"]
  },
  {
    id: "liubov-petrunina", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Liubov",
    lastName: "Petrunina",
    institution: "Independent museum consultant, PhD – Moscow, Russia",
    presentation: "Petrunina Liubov, PhD, for 32 years worked in the State Tretyakov Gallery as a researcher in inventory, sociology, methodology, and PR departments. An author of more than 50 articles, two books concerning social image of museum visitors.  During five years she delivered special course (Gallery’s management) in Lomonosov Moscow State University.",
    intervention: "Deconstruction of Museum landscape",
    texte: "icofom2021-liubov-petrunina",
    sessions: ["decoloniser-la-museologie"]
  },
  {
    id: "susana-manjarrez", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Susana",
    lastName: "Manjarrez",
    institution: "Coordinación Nacional de Museos y Exposiciones – INAH Ciudad de México, México",
    presentation: "",
    intervention: "La Decolonización de la palabra : del Museo (con mayúscula) a sus Públicos y a las Comunidades ¿ en las que se inscriben ?",
    texte: "icofom2021-susana-manjarrez",
    sessions: ["decoloniser-la-museologie"]
  },
  {
    id: "michele-rivet", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Michèle",
    lastName: "Rivet",
    institution: "Vice-president of the Canadian Museum for Human Rights. Board Member, ICOM-Canada",
    presentation: "Michèle RIVET, C.M., juriste et muséologue, est Vice-présidente du CA du Musée canadien pour les droits de la personne, musée national, Membre des CA d’ICOM-Canada et d’ICOFOM. Elle a eu une première carrière au sein de la magistrature&nbsp;; notamment, pendant 20 ans, elle fut la première juge-présidente du Tribunal des droits de la personne du Québec.",
    intervention: "La leçon des Peuples Premiers",
    texte: "icofom2021-michele-rivet",
    sessions: ["conference-ouverture-01", "premiers-peubles-1"]
  },
  {
    id: "emmanuel-kasarherou", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Emmanuel",
    lastName: "Kasarhérou",
    institution: "Président du Musée du Quai Branly-Jacques Chirac",
    presentation: "Emmanuel Kasarhérou, né en 1960 à Nouméa en Nouvelle-Calédonie, Conservateur en chef du patrimoine, ancien directeur de l’Agence de Développement de la Culture Kanak (ADCK) et du Centre Culturel Jean-Marie Tjibaou à Nouméa. Co-commissaire de l’exposition «&nbsp;Kanak, l’art est une parole&nbsp;» présentée au musée du quai Branly en 2013 puis au Centre culturel Jean-Marie Tjibaou à Nouméa en 2014, et co-commissaire de l’exposition «&nbsp;20 ans, Les acquisitions du musée du quai Branly – Jacques Chirac&nbsp;» en 2019. Nommé en mai 2020, président du musée du quai Branly – Jacques Chirac.",
    intervention: {
      en: "[Title to come]", // on peut sans problèmes avoir des balises html dans ces chaînes de caractères
      fr: "[Titre à venir]",
      es: "[Próximo título]"
    },
    sessions: ["conference-ouverture-02"]
  },
  {
    id: "lydie-olga-ntap", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Lydie",
    lastName: "Olga Ntap",
    institution: "Musée de la femme",
    presentation: "Lydie Olga Ntap est avocate et fondatrice du Musée de la Femme, premier musée dédié aux femmes au Canada. Lauréate 2015 du Mois de l’histoire des noirs pour sa contribution à la muséologie, elle est impliquée dans différents conseils d’administration et Vice-présidente de l’Association internationale des Musées de Femmes depuis 2016.",
    intervention: "",
    sessions: ["restitution"]
  },
  {
    id: "ana-carolina-gelmini-de-faria", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Ana Carolina",
    lastName: "Gelmini de Faria",
    institution: "Federal University of Rio Grande do Sul (UFRGS) - Porto Alegre, Brazil",
    presentation: "Master and PhD in Education (UFRGS) at the Museologist (UNIRIO). Professor of the Museology Course at the Department of Information Sciences at the Faculty of Library and Communication at the Federal University of Rio Grande do Sul (DCI / FABICO / UFRGS) and the Postgraduate Program in Museology and Heritage at the same University (PPGMusPa / UFRGS).",
    intervention: "A Cultural Heritage between to Forces: Who shall preserve the Parthenon Marbles",
    texte: "icofom2021-ana-carolina-gelmini-de-faria-kimberly-terrany-alves-pires",
    sessions: ["restitution"]
  },
  {
    id: "kimberly-terrany-alves-pires", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Kimberly",
    lastName: "Terrany Alves Pires",
    institution: "Federal University of Rio Grande do Sul (UFRGS) - Porto Alegre, Brazil",
    presentation: "Museologist (UFRGS) and master’s student in Museology and Heritage (UFRGS). Cultural Management Technician (IFSUL – Sapucaia do Sul). Currently works as a freelance in museological consultancy and cultural production.",
    intervention: "A Cultural Heritage between to Forces: Who shall preserve the Parthenon Marbles",
    texte: "icofom2021-ana-carolina-gelmini-de-faria-kimberly-terrany-alves-pires",
    sessions: ["restitution"]
  },
  {
    id: "ibrahima-cisse", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Ibrahima",
    lastName: "Cisse",
    institution: "Doctorant en muséologie, médiation patrimoine au sein de la Chaire sur la gouvernance des musées et le droit de la culture de l’Université du Québec à Montréal, Canada",
    presentation: "Ibrahima Cisse est doctorant en muséologie, médiation, patrimoine au sein de la Chaire sur la gouvernance des musées et le droit de la culture de  l’Université du Québec à Montréal (UQÀM).  Son sujet de doctorat porte sur «&nbsp;la coopération internationale des musées publics sénégalais de l’époque postindépendance (1960-2025)&nbsp;».",
    intervention: "La question du retour des objets sénégalais des musées européens&nbsp;: enjeux, stratégies d’intervention, expertises muséologiques et négociations diplomatiques",
    texte: "icofom2021-ibrahima-cisse",
    sessions: ["restitution", "musees-africains"]
  },
  {
    id: "camille-labadie", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Camille",
    lastName: "Labadie",
    institution: "Université du Québec à Montréal, Montréal, Canada",
    presentation: "Camille Labadie est titulaire d’une licence en Histoire, d’un baccalauréat en Relations internationales et Droit international et d’une maîtrise en Droit international. Elle est chargée de cours à l’UQAM où elle termine ses études doctorales. Ses recherches portent sur la réparation des dommages culturels en droit international.",
    intervention: "Décoloniser les collections: enjeux et obstacles de la restitution des biens culturels en droit",
    texte: "icofom2021-camille-labadie",
    sessions: ["restitution"]
  },
  {
    id: "jos-van-beurden", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Jos",
    lastName: "van Beurden",
    institution: "Free University – Amsterdam, the Netherlands",
    presentation: "Dr. Jos van Beurden (Free University, Amsterdam) published ‘Treasures in  Trusted Hands - Negotiating the Future of Colonial Cultural Objects’  (2017; nominated for NWO Boekman Dissertation Price). He is writing a  book about restitution issues in the Netherlands and Belgium (2021) and  distributing news-clippings about colonial collections via Facebook RM* [restitution matters].",
    intervention: "Colonial Collections and Restitution issues – The State of a Global Debate",
    texte: "icofom2021-jos-van-beurden",
    sessions: ["restitution"]
  },
  {
    id: "fanny-fouche", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Fanny",
    lastName: "Fouché",
    institution: "École du Louvre, Paris, France/IHAM, Université de Neuchâtel, Suisse",
    presentation: "",
    intervention: "Le musée face à l’héritage colonial : un pharmakon ?",
    texte: "icofom2021-fanny-fouche",
    sessions: ["restitution"]
  },
  {
    id: "caroline-hotte", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Caroline",
    lastName: "Hotte",
    institution: "Université de Québec à Montréal – Montréal, Canada",
    presentation: "Caroline Nepton Hotte est étudiante au doctorat au Département de sciences des religions et professeure régulière au Département d’histoire de l’art de l’Université du Québec à Montréal (UQAM). Membre de la communauté ilnue de Mashteuiatsh (Québec), elle s’intéresse depuis plus de vingt ans aux questions autochtones, particulièrement aux enjeux concernant les femmes des Premières Nations.",
    intervention: "",
    sessions: ["premiers-peubles-1"]
  },
  {
    id: "freire-rodriguez-saldana", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Freire",
    lastName: "Rodríguez Saldaña",
    institution: "UNAM – Ciudad de México – México",
    presentation: "Sociologist with background in Art History and Museology. Experience of 15 years in the National Coordination of Museums and Exhibitions of INAH in Mexico, where he participated in various museum projects on management, support for curatorship, transfer of collections, museology and visitor studies. Participation in various forums and publications.",
    intervention: "La leçon des Peuples Premiers",
    texte: "icofom2021-freire-rodriguez-saldana",
    sessions: ["premiers-peubles-1"]
  },
  {
    id: "maria-de-simone-ferreira", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "maria",
    lastName: "de Simone Ferreira",
    institution: "Museu Histórico Nacional – Rio de Janeiro, Brazil",
    presentation: "Technical Coordinator of Museu Histórico Nacional, in Rio de Janeiro, Brazil. She worked at and directed the Museu de Arqueologia de Itaipu, in Niterói, Brazil (2006-2012). Maria is a museologist and she has a PhD in History. Her research interests concern history of museums, modern collections, and history and archaeology museums.",
    intervention: "Heritage Narratives at the Itaipu Archaeology Museum: Territory and Resistance through Artisanal Fishing",
    texte: "icofom2021-maria-de-simone-ferreira",
    sessions: ["premiers-peubles-1"]
  },
  {
    id: "leandro-guedes", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Leandro",
    lastName: "Guedes",
    institution: "Federal University of Rio de Janeiro State – Rio de Janeiro, Brazil",
    presentation: "Leandro Guedes is a museologist graduated at Federal University of the State of Rio de Janeiro (UNIRIO) and master's student in Museology and Heritage at UNIRIO. The main interest in research is in Museology, Musealization, Ethnographic Collections and Ethnographic Museums.",
    intervention: "Musealization is an Indigenous Business: Reflections About Objects and Subjects in the Museological Chain of the Indian Museum of Rio de Janeiro",
    texte: "icofom2021-leandro-guedes",
    sessions: ["premiers-peubles-1"]
  },
  {
    id: "laurier-turgeon", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Laurier",
    lastName: "Turgeon",
    institution: "Université Laval – Québec, Canada",
    presentation: "Laurier Turgeon est professeur titulaire en ethnologie et en histoire au département des sciences historiques de l’Université Laval. Il dirige le Laboratoire d’enquête ethnologique et multimédia (LEEM) et le programme d'études patrimoniales. Il a été titulaire de la Chaire de recherche du Canada en patrimoine ethnologique de 2003 à 2017.",
    intervention: "",
    sessions: ["premiers-peubles-2"]
  },
  {
    id: "adriana-russi", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Adriana",
    lastName: "Russi",
    institution: "Universidad Federal Fluminense – Rio das Ostras, Brasil",
    presentation: "Post-doctorate in Museology, PhD in Social Memory and artist with a master's degree in Anthropology. Professor at Universidade Federal Fluminense, where she coordinated the Oriximiná Heritage Education Program (http://www.patrimoniocultural.uff.br). She is currently researching: indigenous peoples in museological processes and mapping of ethnographic collections in Brazil. Member of the Graduate Program in Social Memory at UNIRIO.", // @todo url
    intervention: "Descolonizando museos, aproximando pueblos indígenas : avances y adversidades en el (difícil) contexto brasileño",
    texte: "icofom2021-adriana-russi",
    sessions: ["premiers-peubles-2"]
  },
  {
    id: "karine-duhamel", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Karine",
    lastName: "Duhamel",
    institution: "Canadian Museum for Human Rights – Winnipeg, Canada",
    presentation: "Karine Duhamel is Anishinaabe-Métis. Since 2016, she has worked as Curator of Indigenous Content at the Canadian Museum for Human Rights in Winnipeg, Manitoba. An accomplished historian and frequently requested public speaker, she is passionate about communicating Indigenous epistemologies and stories to promote understanding between Indigenous and non-Indigenous people.",
    intervention: "All My Relations: (Re)Imagined Communities and Indigenous Peoples",
    texte: "icofom2021-karine-duhamel",
    sessions: ["premiers-peubles-2"]
  },
  {
    id: "marie-charlotte-franco", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Marie-Charlotte",
    lastName: "Franco",
    institution: "Centre interuniversitaire de recherches et d’études autochtones (CIÉRA) affiliée au département d’anthropologie de l’Université de Montréal - Montréal, Canada",
    presentation: "Marie-Charlotte Franco est allochtone. Actuellement chercheure postdoctorale au Centre interuniversitaire d’études et de recherches autochtones, sa thèse porte sur la décolonisation et l’autochtonisation du Musée McCord. Elle co-dirige la revue Les Cahiers du CIÉRA et enseigne la muséologie à l’Université du Québec à Montréal et l’Université du Québec en Outaouais.",
    intervention: "La décolonisation et l’autochtonisation de la muséologie. Le cas du Musée McCord à Tiohtiá:ke/Montréal",
    texte: "icofom2021-marie-charlotte-franco",
    sessions: ["premiers-peubles-2"]
  },
  {
    id: "manuelina-maria-duarte-candido", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Manuelina Maria",
    lastName: "Duarte Cândido",
    institution: "Université de Liège and PPGAS/FCS/UFG - Liège, Brasil",
    presentation: "Manuelina Duarte is professor of Museology at the University of Liège, Belgium, since 2018 and administrator of the Embarcadère du Savoir. She is also supervising doctoral theses in Social Anthropology at the Federal University of Goiás, Brazil. She is a former director of the Brazilian Institute of Museums (IBRAM).",
    intervention: "Digital strategies for widening the scope of dissemination of indigenous cultures: the Presença Karajá Project and the Tainacan Platform",
    texte: "icofom2021-manuelina-maria-duarte-candido",
    sessions: ["premiers-peubles-2"]
  },
  {
    id: "luciana-conrado-martins", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Luciana",
    lastName: "Conrado Martins",
    institution: "Percebe e Projeto Tainacan - Network Intelligence Laboratory/ FCI/UNB – São Paulo, Brazil",
    presentation: "Luciana Martins is PhD in Education, director of the company Percebe, professor of the Postgraduate Program in Arts, Heritage and Museology at the Federal University of Piauí. She is also the coordinator of the Brazilian section of the Committee for Education and Cultural Action (CECA-BR) of ICOM.",
    intervention: "Digital strategies for widening the scope of dissemination of indigenous cultures: the Presença Karajá Project and the Tainacan Platform",
    texte: "icofom2021-manuelina-maria-duarte-candido",
    sessions: ["premiers-peubles-2"]
  },
  {
    id: "andrea-dias-vial", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Andréa",
    lastName: "Dias Vial",
    institution: "Independent Researcher, Dra. História Social – São Paulo, Brazil",
    presentation: "Andréa Vial has a PhD in Social History with a specialisation in Museology from the University of São Paulo, working mainly with cultural heritage and museology. She is a former director of the Department of Museums of São Paulo city. Her research focuses on ethnographic museum collections for the Karajá Presence Project.",
    intervention: "Digital strategies for widening the scope of dissemination of indigenous cultures: the Presença Karajá Project and the Tainacan Platform",
    texte: "icofom2021-manuelina-maria-duarte-candido",
    sessions: ["premiers-peubles-2"]
  },
  {
    id: "cynthia-chavez-lamar", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Cynthia",
    lastName: "Chavez-lamar",
    institution: "acting Associate Director for Collections and Operations National Museum of the American Indian, Smithsonian Institute – United States",
    presentation: "Dr. Cynthia Chavez Lamar (San Felipe Pueblo, Hopi, Tewa, and Navajo) is currently acting Associate Director for Collections and Operations at the Smithsonian’s National Museum of the American Indian in Washington, D.C. Her career experience also includes director positions at the Indian Pueblo Cultural Center, Albuquerque, NM and the School for Advanced Research, Santa Fe, NM. Much of her work and research focuses on collaborations between Native peoples and art and cultural institutions.",
    intervention: {
      en: "[Title to come]",
      fr: "[Titre à venir]",
      es: "[Próximo título]"
    },
    texte: "",
    sessions: ["conference-ouverture-03"]
  },
  {
    id: "jonathan-lainey", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Jonathan",
    lastName: "Lainey",
    institution: "Musée McCord – Montréal, Canada",
    presentation: "",
    intervention: "",
    texte: "",
    sessions: ["conference-ouverture-03"]
  },
  {
    id: "christine-bluard", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Christine",
    lastName: "Bluard",
    institution: "Musée royal de l’Afrique centrale (Africamuseum) – Tervuren, Belgique",
    presentation: "Christine Bluard est muséologue, en charge du développement des arts contemporains au Musée royal de l’Afrique centrale (AfricaMuseum) à Tervuren, en Belgique. Elle coordonne le programme des résidences d’artiste depuis 2013. Elle est facilitatrice au musée pour la recherche dans les collections et le contact avec les scientifiques.",
    intervention: "Africamuseum : réorganisation",
    texte: "icofom2021-christine-bluard",
    sessions: ["musees-africains"]
  },
  {
    id: "simbarashe-shadreck-chitima", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Simbarashe",
    lastName: "Shadreck Chitima",
    institution: "Midlands State University-Gweru – Zimbabwe",
    presentation: "Simbarashe Shadreck Chitima (PhD), is a lecturer at Midlands State University, Zimbabwe. Dr. Chitima is also a freelance curator whose interests lie in museum education, exhibition design, accessibility of cultural institutions, disability studies, conservation and Decoloniality issues.",
    intervention: "Negotiating the Decolonisation of National Museums in Zimbabwe",
    texte: "icofom2021-simbarashe-shadreck-chitima",
    sessions: ["musees-africains"]
  },
  {
    id: "cossi-zephirin-daavo", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Cossi Zéphirin",
    lastName: "Daavo",
    institution: "Ministère du Tourisme, de la Culture et des Arts (MTCA) – Cotonou, Bénin",
    presentation: "",
    intervention: "Les musées africains et le patrimoine immatériel : quelques pistes pour une nouvelle muséologie",
    texte: "icofom2021-cossi-zephirin-daavo",
    sessions: ["musees-africains"]
  },
  {
    id: "ernest-kpan", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Ernest",
    lastName: "Kpan",
    institution: "Ministère de la Culture et de la Francophonie – Abidjan, Côte d’Ivoire",
    presentation: "",
    intervention: "La décolonisation de la muséologie : analyse réflexive sur les musées et les communautés culturelles en Côte-d’Ivoire",
    texte: "icofom2021-ernest-kpan",
    sessions: ["musees-africains"]
  },
  {
    id: "françois-thierry-toe", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "François Thierry",
    lastName: "Toé",
    institution: "Musée Beaulne – Coaticook, Canada",
    presentation: "François Thierry Toé est natif de Côte d’Ivoire. Muséologue et docteur en histoire de l’art, il fait son entrée dans le monde des musées comme conservateur au Musée national du costume de Côte d’Ivoire en 1998. Depuis 2008, il est directeur-conservateur du Musée Beaulne à Coaticook au Québec (Canada).",
    intervention: "Politiques et pratiques muséales africaines à l’aune des métissages et des hybridations",
    texte: "icofom2021-françois-thierry-toe",
    sessions: ["musees-africains"]
  },
  {
    id: "anne-benichou", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Anne",
    lastName: "Bénichou",
    institution: "Université du Québéc à Montréal – Montréal, Canada",
    presentation: "",
    intervention: "",
    texte: "",
    sessions: ["decolonisation-musee-art"]
  },
  {
    id: "vicky-buring", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Vicky",
    lastName: "Buring",
    institution: "École du Louvre – Paris, France",
    presentation: "Vicky Buring est étudiante à l’École du Louvre. Elle a présenté en 2018 un mémoire d’étude «&nbsp;Najia Mehadji, 1970-1982&nbsp;: les années Sorcières&nbsp;». Elle participe au séminaire de muséologie canadienne à Montréal l’été de la même année où elle effectue en binôme une recherche appliquée sur la conception d’exposition. En 2020, elle présente un mémoire de recherche «&nbsp;Le modèle noir de Géricault à Matisse, un tournant patrimonial&nbsp;?&nbsp;» Elle prépare actuellement le concours de conservateur du patrimoine.",
    intervention: "L’exposition Le modèle noir : de Géricault à Matisse au Musée d’Orsay, un exercice de décolonisation dans un musée de beaux-arts ?",
    texte: "icofom2021-vicky-buring",
    sessions: ["decolonisation-musee-art"]
  },
  {
    id: "daphnee-yiannaki", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Daphnée",
    lastName: "Yiannaki",
    institution: "Université du Québec à Montréal - Montréal, Canada",
    presentation: "Titulaire d’une maîtrise en histoire de l’art (Université Paris Nanterre, 2017) et en muséologie (UQAM, 2019), Daphnée Yiannaki poursuit un doctorat en muséologie à l’UQAM. Ses recherches portent sur les collections et les expositions d’art contemporain autochtone dans les musées aux États-Unis et au Canada.",
    intervention: "Stratégies de décolonisation dans les musées d’art : le collectionnement et l’exposition permanente de l’art contemporain autochtone au Musée des beaux-arts du Canada et au Musée des beaux-arts de Montréal depuis 2000",
    texte: "icofom2021-daphnee-yiannaki",
    sessions: ["decolonisation-musee-art"]
  },
  {
    id: "vivian-horta", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Vivian",
    lastName: "Horta",
    institution: "Universidade Federal do Rio de Janeiro - Rio de Janeiro, Brazil",
    presentation: "",
    intervention: "The right to ancestry in Paulo Nazareth’s works",
    texte: "icofom2021-vivian-horta",
    sessions: ["decolonisation-musee-art"]
  },
  {
    id: "marcia-bertotto", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Márcia",
    lastName: "Bertotto",
    institution: "UFRGS – Porto Alegre, Brasil",
    presentation: "Márcia Regina Bertotto. Museologista. Licenciado en Historia y Máster en Ciencias Sociales. Doctorado en Museología. Trabaja como profesora en el Curso de Museología y en el Programa de Posgrado en Museología y Patrimonio de la Universidad Federal de Rio Grande del Sur/Brasil. Investigación en Gestión de Museos y Políticas Públicas Culturales.",
    intervention: "Uno museo Comunitario en el Sur del Brasil – Mixturas, Hibridismos y Participación",
    texte: "icofom2021-marcia-bertotto-vera-rangel",
    sessions: ["social-museology"]
  },
  {
    id: "vera-rangel", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Vera",
    lastName: "Rangel",
    institution: "Museóloga y Consultora Independiente – Porto Alegre, Brasil",
    presentation: "Vera Maria Sperandio Rangel: Museologista  consultora. Doctor en Museología 2013. Máster en C. Sociales, especializaciones en Museología y Proyectos Sociales y Culturales. Miembro del Consejo Consultivo, ICOM/Brasil (2003-20004 y 2005-2006). Comité Icom: ICOFOM. Asesor Eficaz (2021-2022) de COREM 3ª Región / RS.",
    intervention: "Uno museo Comunitario en el Sur del Brasil – Mixturas, Hibridismos y Participación",
    texte: "icofom2021-marcia-bertotto-vera-rangel",
    sessions: ["social-museology"]
  },
  {
    id: "silvilene-barros", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Silvilene",
    lastName: "Barros",
    institution: "Universidade Federal do Estado do Rio de Janeiro - Rio de Janeiro, Brazil",
    presentation: "",
    intervention: "Experimental Museology, its Principles and Practices: The Creation of the LGBTI+ Memory and Training Center in Rio de Janeiro",
    texte: "icofom2021-silvilene-barros-carolina-zanesi-marina-pinheiro",
    sessions: ["social-museology"]
  },
  {
    id: "carolina-zanesi", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Carolina",
    lastName: "Zanesi",
    institution: "Universidade Federal do Estado do Rio de Janeiro - Rio de Janeiro, Brazil",
    presentation: "Carolina Zanesi, museology student at the Federal University of the State of Rio de Janeiro (UNIRIO), participant in the extension project “Musealiza-a-Ação” and a member of the Research Group on Experimental Museology and Image (MEI).",
    intervention: "Experimental Museology, its Principles and Practices: The Creation of the LGBTI+ Memory and Training Center in Rio de Janeiro",
    texte: "icofom2021-silvilene-barros-carolina-zanesi-marina-pinheiro",
    sessions: ["social-museology"]
  },
  {
    id: "marina-pinheiro", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Marina",
    lastName: "Pinheiro",
    institution: "Universidade Federal do Estado do Rio de Janeiro - Rio de Janeiro, Brazil",
    presentation: "Marina da Silva Pinheiro, museology student at the Federal University of the State of Rio de Janeiro. Participant in the extension project “# museologiapresente – acts, conversation circle and performance”. A member of the Kilombola Museology network and in the Research Group on Experimental Museology and Image (MEI).",
    intervention: "Experimental Museology, its Principles and Practices: The Creation of the LGBTI+ Memory and Training Center in Rio de Janeiro",
    texte: "icofom2021-silvilene-barros-carolina-zanesi-marina-pinheiro",
    sessions: ["social-museology"]
  },
  {
    id: "andre-delpuech", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "André",
    lastName: "Delpuech",
    institution: "directeur du Musée de l’Homme, Muséum national d’histoire naturelle – Paris, France",
    presentation: "Conservateur général du patrimoine, André Delpuech est directeur du musée de l’Homme de Paris depuis avril 2017. De 2005 à cette date, il a été responsable des collections des Amériques au Musée du quai Branly. De 1992 à 1999, il a été conservateur régional de l’archéologie de la Guadeloupe, puis chercheur à l’UMR «&nbsp;Archéologie des Amériques&nbsp;» (Université de Paris I et C.N.R.S.), avant  de diriger, en 2002, le bureau de la recherche archéologique à la sous-direction de l’Archéologie du Ministère de la Culture et de la Communication.",
    intervention: "Colonisation et esclavage&nbsp;: Pour une nécessaire et juste place en patrimoine et en musée",
    texte: "icofom2021-andre-delpuech",
    sessions: ["conference"]
  },
  {
    id: "stephane-chagnon", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Stéphane",
    lastName: "Chagnon",
    institution: "Directeur général de la Société des musées du Québec – Montréal, Canada",
    presentation: "Stéphane Chagnon est directeur général de la Société des musées du Québec qui regroupe 300 institutions muséales. Il œuvre depuis 25 ans pour la muséologie à titre de directeur, commissaire et administrateur et possède une excellente connaissance du réseau muséal québécois et des enjeux auxquels sont actuellement confrontés les musées.",
    intervention: "",
    texte: "",
    sessions: ["conference-ouverture-04"]
  },
  {
    id: "ruth-phillips", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Ruth",
    lastName: "Phillips",
    institution: "professeure émérite, Université Carleton – Ottawa, Canada",
    presentation: "Ayant soutenu, en septembre 2020, une thèse entre l'École du Louvre et l’Institut d’Histoire de l’Art de l’Université de Neuchâtel sur la présence du sacré au musée autour des pérégrinations de reliquaires chrétiens des sanctuaires du Moyen Age vers les espaces muséaux, Fanny Fouché poursuit ses recherches entre histoire de l’art médiéval et muséologie.",
    intervention: {
      en: "[Title to come]", // on peut sans problèmes avoir des balises html dans ces chaînes de caractères
      fr: "[Titre à venir]",
      es: "[Próximo título]"
    },
    texte: "",
    sessions: ["conference-ouverture-04"]
  },
  {
    id: "johanne-lamoureux", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Johanne",
    lastName: "Lamoureux",
    institution: "Université de Montréal – Montréal, Canada",
    presentation: "",
    intervention: "",
    texte: "",
    sessions: ["metissage-1"]
  },
  // @todo attention pb
  {
    id: "fabien-van-geert", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Fabien",
    lastName: "Van Geert",
    institution: "Université Sorbonne Nouvelle – Paris, France",
    presentation: "Fabien Van Geert est maître de conférences en muséologie à l’université Sorbonne Nouvelle. Ses recherches portent principalement sur les musées ethnographiques et les musées de société.",
    intervention: ["Muséologies postcoloniale et décoloniale. Ou les frontières poreuses des concepts muséologiques", "Le centre culturel Tjibaou, ou les complexités d’incarner le « destin commun » pluriethnique néo-calédonien"],
    textes: ["icofom2021-fabien-van-geert", "icofom2021-fabien-van-geert-quitterie-puel"],
    sessions: ["metissage-1", "metissage-2"]
  },
  {
    id: "jean-françois-gauvin", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Jean-François",
    lastName: "Gauvin",
    institution: "Université Laval — Québec, Canada",
    presentation: "",
    intervention: "Les musées et le métissage culturel intra muros à l’heure du vivre-ensemble : bousculer les conventions",
    texte: "icofom2021-jean-françois-gauvin-manon-joly-marie-kim-gagnon",
    sessions: ["metissage-1"]
  },
  {
    id: "manon-joly", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Manon",
    lastName: "Joly",
    institution: "Université Laval — Québec, Canada",
    presentation: "J’ai complété une double licence en sociologie - muséologie et en médiation - actions culturelles.  Mon projet de mémoire en maîtrise ethnologie - patrimoine de l’Université Laval s’oriente sur la muséologie numérique à destination des adolescents dans les musées. Côté professionnel, je travaille dans un musée ethnographique à Québec.",
    intervention: "Muséologies postcoloniale et décoloniale. Ou les frontières poreuses des concepts muséologiques",
    texte: "icofom2021-jean-françois-gauvin-manon-joly-marie-kim-gagnon",
    sessions: ["metissage-1"]
  },
  {
    id: "marie-kim-gagnon", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Marie-Kim",
    lastName: "Gagnon",
    institution: "Université Laval — Québec, Canada",
    presentation: "Passionnée de culture, j’ai complété un baccalauréat en anthropologie ainsi qu’un diplôme d’études supérieures spécialisées en muséologie à l’Université Laval. Mes champs d’intérêt sont principalement la gouvernance des musées ainsi que la mise en valeur du patrimoine immatériel. Au niveau professionnel, je suis muséologue pour une société d’histoire en Chaudière-Appalaches.",
    intervention: "Muséologies postcoloniale et décoloniale. Ou les frontières poreuses des concepts muséologiques",
    texte: "icofom2021-jean-françois-gauvin-manon-joly-marie-kim-gagnon",
    sessions: ["metissage-1"]
  },
  {
    id: "jean-françois-leclerc", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Jean-François",
    lastName: "Leclerc",
    institution: "Muzéum Expert-conseil - Montréal, Canada",
    presentation: "Historien et muséologue, il a dirigé le Centre d’histoire de Montréal (devenu le MEM. Centre des mémoires montréalaises), redéfinissant ce musée municipal autour d’une muséologie à l’écoute de l’histoire et de la parole des citoyens de toutes origines. Comme consultant chargé de plusieurs projets d’exposition et de médiation, il accompagne actuellement la mise sur pied d’un musée des cultures africaines et afro-descendantes, l’Afromusée.",
    intervention: "La préservation du passé et des cultures immigrantes dans les musées : une définition du patrimoine à repenser",
    texte: "icofom2021-jean-françois-leclerc",
    sessions: ["metissage-1"]
  },
  {
    id: "rebeca-lemay-perrault", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Rébéca",
    lastName: "Lemay-Perrault",
    institution: "Université du Québec à Montréal – Montréal, Canada",
    presentation: "Maryse Paquin détient un doctorat en éducation et une maîtrise en muséologie. Elle a également mené des études postdoctorales en psychopédagogie. Elle est professeure titulaire au Département d’études en loisir, culture et tourisme de l’Université du Québec à Trois-Rivières. Ses intérêts de recherche portent sur la médiation culturelle. Elle œuvre en éducation culturelle depuis les trente dernières années.",
    intervention: "Perspective agoniste : Proposition pour l’inclusion des communautés culturelles et leur participation dans les musées",
    texte: "icofom2021-rebeca-lemay-perrault-maryse-paquin",
    sessions: ["metissage-1"]
  },
  {
    id: "maryse-paquin", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Maryse",
    lastName: "Paquin",
    institution: "Université du Québec à Trois-Rivières – Trois-Rivières, Canada",
    presentation: "",
    intervention: "Perspective agoniste : Proposition pour l’inclusion des communautés culturelles et leur participation dans les musées",
    texte: "icofom2021-rebeca-lemay-perrault-maryse-paquin",
    sessions: ["metissage-1"]
  },
  {
    id: "habib-saidi", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Habib",
    lastName: "Saidi",
    institution: "",
    presentation: "",
    intervention: "",
    texte: "",
    sessions: ["metissage-2"]
  },
  {
    id: "markus-walz", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Markus",
    lastName: "Walz",
    institution: "",
    presentation: "Cultural anthropologist with doctoral studies in history. After a traineeship at the State Museum Koblenz and working as a museum consultant at the Museum Office for Westphalia in Münster, actually professor of theoretical and historical museology at the Leipzig University of Applied Sciences.",
    intervention: "Filled Containers, Felt Communities. Facts and Constructivism in Regional Museums",
    texte: "icofom2021-markus-walz",
    sessions: ["metissage-2"]
  },
  {
    id: "marilia-xavier-cury", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Marília",
    lastName: "Xavier Cury",
    institution: "Museum of Archaeology and Ethnology of the University of São Paulo - São Paulo, Brazil",
    presentation: "Associate Professor at Museum of Archeology and Ethnology of the University of São Paulo, Brazil. Professor in the Graduate Programs in Museology (USP) and Archeology (MAE-USP). Coordinates the IInterMuseologias – Laboratory Interfaces between Museologies - Communication, Mediation, Audiences and Reception.",
    intervention: "Metamuseology, Museology and decolonization – indigenous people and museums in Brazil",
    texte: "icofom2021-marilia-xavier-cury",
    sessions: ["metissage-2"]
  },
  {
    id: "shikoh-shiraiwa", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Shikoh",
    lastName: "Shiraiwa",
    institution: "University of Helsinki – Helsinki, Finland",
    presentation: "Olga Zabalueva is a Russian museologist who is currently doing her PhD in Culture and Society at Linköping university, Sweden. Her interdisciplinary research focuses on museology as a field of knowledge; museums and the (re)construction of identities; the active social position of a contemporary museum; memory and activism.",
    intervention: "Museological Myths of Decolonization and Neutrality",
    texte: "icofom2021-shikoh-shiraiwa-olga-zabalueva",
    sessions: ["metissage-2"]
  },
  {
    id: "olga-zabalueva", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Olga",
    lastName: "Zabalueva",
    institution: "Linköping University – Sweden",
    presentation: "",
    intervention: "Museological Myths of Decolonization and Neutrality",
    texte: "icofom2021-shikoh-shiraiwa-olga-zabalueva",
    sessions: ["metissage-2"]
  },
  {
    id: "hector-valverde-martinez", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Héctor",
    lastName: "Valverde Martínez",
    institution: "Universidad Nacional Autónoma de México – Mexico City, Mexico",
    presentation: "Bachelor of Communication and Management of Culture and Arts, specializing in Museography and master’s degree in Communication. He participated as a speaker at the 42nd ICOFOM Symposium, the 12th International Congress on The Inclusive Museum and the 6th International Congress Cultural Heritage and New Technologies. He is currently collaborating in the National Program of Promotion and Community Outreach of the National Coordination of Museums and Exhibitions of the INAH.",
    intervention: "Through the eyes of the mannequins How we see us?",
    texte: "icofom2021-hector-valverde-martinez",
    sessions: ["metissage-2"]
  },
  {
    id: "quitterie-puel", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Quitterie",
    lastName: "Puel",
    institution: "Chercheuse indépendante – Perth, Australie",
    presentation: "J’ai effectué un master en muséologie et nouveaux médias à la Sorbonne Nouvelle en 2018 grâce auquel j’ai eu la chance d’effectuer un stage de 6 mois au Centre Culturel Tjibaou de Nouméa. Je vis désormais à Perth où je travaille pour un journal français.",
    intervention: "Le centre culturel Tjibaou, ou les complexités d’incarner le « destin commun » pluriethnique néo-calédonien",
    texte: "icofom2021-fabien-van-geert-quitterie-puel",
    sessions: ["metissage-1"]
  },
  {
    id: "marie-lalonde", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Marie",
    lastName: "Lalonde",
    institution: "présidente ICOM-Canada – Canada",
    presentation: "Perferentes per obiecta defensi reginae inde quaesitum exsertantis praestituto quid iam truci praedoctis praestituto adhibitis funestis iudex imaginarius interrogationibus die permissi interrogationibus adhibitis iudex imaginarius cursim inde nec quid diluere interrogationibus quidve interrogationibus hinc stimulis quid responsum defensi esset reginae truci per equitum Caesarem ad obiecta Caesarem funestis essent quid.",
    intervention: "",
    texte: "",
    sessions: ["conference-cloture"]
  },
  {
    id: "bruno-brulon-soares", // on essaie ici de garder une nomenclature identique pour tous les ids : prenom-nom
    firstName: "Bruno",
    lastName: "Brulon-Soares",
    institution: "ICOFOM – Brazil",
    presentation: "Bruno Brulon Soares (brunobrulon@gmail.com) is a museologist and anthropologist based in Brazil, professor of museology at the Federal University of the State of Rio de Janeiro (UNIRIO) and professor in the Post-Graduate Program in Museology and Heritage (UNIRIO / MAST). He coordinates the Laboratory of Experimental Museology at this university, working closely with community-based museums and with several projects at the grassroots level involving cultural heritage and museums. Currently he is chair of the ICOM International Committee for Museology (ICOFOM) and co-chair of the Standing Committee for the Museum Definition (ICOM Define). His research currently focuses on museums decolonisation, community action and the political uses of museums and cultural heritage.",
    intervention: "",
    texte: "",
    sessions: ["social-museology", "conference-cloture"]
  }
]
