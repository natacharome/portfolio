import { Project } from './interfaces/project';

export const projects_data: Project[] = [
  {
    id: 1,
    name: 'Novaskin Clinic - Site vitrine',
    subtitle:
      'Volonté d’attirer plus de prospets qualitatifs et d’avoir une approche plus médicale',
    description:
      "Novaskin Clinik est une clinique Belge spécialisée dans les soins ésthétique comme l'épilation définitive, l'éléctrostimulation et les soins de peau. Tâches réalisées : analyse du site existant, analyse des améliorations UX possibles, reprise des couleurs du client. Fortes conversions sur le nouveau site. On amène plus facilement le client à prendre rendez vous, il est guidé dans ses choix, les prix sont plus clairs. ",
    tasks: [
      'Refonte du site avec les couleurs de la charte existante',
      'Simplification du parcours utilisateur',
    ],
    img: 'novaskin.webp',
    projectImages: ['n1.webp', 'n2.webp', 'n3.webp', 'n4.webp', 'n5.webp'],
    link: 'https://novaskinclinic.be/',
    tags: ['UI Design', 'UX Design', 'Image de marque'],
    category: 'design',
  },
  {
    id: 2,
    name: 'Until App - Application mobile',
    subtitle:
      "Refonte de l'application Until qui est une application de rencontre basée sur les événements d'une region. ",
    description:
      "Until est une application de rencontre basée sur les événéments. On s'inscrit d'abord à un événément avant de pouvoir matcher qui que ce soit. Tâches réalisées : Refonte de l'application, simplification du parcours utilisateur",
    tasks: [
      "Refonte de l'application",
      'Simplification du parcours utilisateur',
    ],
    img: 'until.webp',
    link: '',
    tags: ['UI Design', 'UX Design', 'Image de marque'],
    category: 'design',
    projectImages: ['u1.webp', 'u2.webp', 'u3.webp'],
  },
  {
    id: 3,
    name: 'Repulsif pro - Site vitrine',
    subtitle:
      'Repulsif pro est un site pour un client qui vend des solutions ultrasons pour faire fuire les nuisibles. Refonte du site pour avoir plus de lisibilité sur les différents boitiers proposés et avoir un côté technologique et innovant.',
    description:
      "Refonte du site exisant de repulsif pro, la structure est restée, l'agencement des éléments dans les pages à été revu pour faire des blocs plus distincts et plus clairs à lire. Volonté de mettre en avant le côté technologique et innovant des solutions ultrasons",
    tasks: [
      'Refonte du site existant',
      'Adaptation de la charte pour avoir des couleurs plus dynamiques et cohérentes',
      "Création d'une bannière linkedin",
    ],
    img: 'repulsif.webp',
    link: 'https://repulsifpro.com/',
    tags: ['UI Design', 'UX Design', 'Bannière Linkedin'],
    category: 'design',
    projectImages: [
      'repulsif.webp',
      'r1.webp',
      'r2.webp',
      'r3.webp',
      'r4.webp',
      'r5.webp',
    ],
  },
  {
    id: 4,
    name: 'CPTS Sud métropole lilloise - Site vitrine',
    subtitle:
      'Créer un site internet pour une présence en ligne, faire connaître la CPTS à tous et permettre des soins de proximité.',
    description:
      "La CPTS Sud métropole Lilloise est une association qui a pour but de fournir des soins de proximité. La volonté première de la création de ce site était de créer un site vitrine qui permette de sensibiliser le public aux actions de la CPTS et de faire connaître l'association.",
    tasks: [
      'Création à partir du zéro',
      "création d'une charte graphique, d'un logo et de plusieurs pages",
      "creation d'un pdg de presentation",
    ],
    img: 'cpts.webp',
    link: '',
    tags: ['UI Design', 'logo'],
    category: 'design',
    projectImages: ['cpts.webp', 'c1.webp', 'c2.webp'],
  },
  {
    id: 5,
    name: 'La tambouille végétale - Site de recette',
    subtitle:
      'Un pense bête personnel pour garder des recettes que je fais de manière instinctive. Le site est la pour partager mes recettes.',
    description:
      'La tambouille végétale est un site de recettes végétales. Sans spécifiquement de recettes. Il me fallait un outil qui me permette de rajouter rapidement des recettes, je suis donc partie sur une base de donnée airtable, un front en reactJS déployé sur Netlify.',
    img: 'tambouille.webp',
    tasks: ['Création du site de zéro', 'Création du design'],
    link: 'https://latambouillevegetale.fr',
    tags: ['Netlify', 'ReactJS', 'Airtable', 'UI Design', 'OVH'],
    category: 'dev',
    projectImages: ['tambouille.webp'],
    githubLink: 'https://github.com/natacharome/la-tambouille-vegetale',
  },
  {
    id: 6,
    name: 'Mon portfolio  - Site vitrine',
    subtitle:
      'Site vitrine pour présenter mes différents travaux, que ce soit du design ou du développement',
    description:
      'Création du design du site puis développement from scratch avec le framework Angular',
    img: 'portfolio.webp',
    tasks: ['Création du site de zéro', 'Création du design'],
    link: 'https://natacharome.fr',
    tags: ['Netlify', 'Angular 17', 'UI Design'],
    category: 'dev',
    projectImages: ['portfolio.webp'],
    githubLink: 'https://github.com/natacharome/portfolio',
  },
];
