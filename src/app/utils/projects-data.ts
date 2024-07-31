import { Project } from './interfaces/project';

export const projects_data: Project[] = [
  {
    id: 1,
    name: 'Novaskin Clinic, Site vitrine',
    subtitle:
      'Volonté d’attirer plus de prospets qualitatifs et d’avoir une approche plus médicale',
    description:
      "Novaskin Clinik est une clinique Belge spécialisée dans les soins ésthétique comme l'épilation définitive, l'éléctrostimulation et les soins de peau. Tâches réalisées : analyse du site existant, analyse des améliorations UX possibles, reprise des couleurs du client. Fortes conversions sur le nouveau site. On amène plus facilement le client à prendre rendez vous, il est guidé dans ses choix, les prix sont plus clairs. ",
    img: 'novaskin.png',
    projectImages: ['n1.png', 'n2.png', 'n3.png', 'n4.png', 'n5.png'],
    link: 'https://novaskinclinic.be/',
    tags: ['Branding', 'Design', 'UX'],
    category: 'design',
  },
  {
    id: 2,
    name: 'Until App',
    subtitle:
      "Refonte de l'application Until qui est une application de rencontre basée sur les événements d'une region. ",
    description:
      "Until est une application de rencontre basée sur les événéments. On s'inscrit d'abord à un événément avant de pouvoir matcher qui que ce soit. Tâches réalisées : Refonte de l'application, simplification du parcours utilisateur",
    img: 'until.png',
    link: '',
    tags: ['UX/UI', 'Branding', 'Design'],
    category: 'design',
    projectImages: ['u1.png', 'u2.png', 'u3.png'],
  },
  {
    id: 3,
    name: 'Repulsif pro',
    subtitle:
      'Repulsif pro est un site pour un client qui vend des solutions ultrasons pour faire fuire les nuisibles. Refonte du site pour avoir plus de lisibilité sur les différents boitiers proposés et avoir un côté technologique et innovant.',
    description:
      "Refonte du site exisant de repulsif pro, la structure est restée, l'agencement des éléments dans les pages à été revu pour faire des blocs plus distincts et plus clairs à lire. Volonté de mettre en avant le côté technologique et innovant des solutions ultrasons",
    img: 'repulsif.png',
    link: 'https://repulsifpro.com/',
    tags: ['UI', 'Branding', 'Design'],
    category: 'design',
    projectImages: [
      'repulsif.png',
      'r1.png',
      'r2.png',
      'r3.png',
      'r4.png',
      'r5.png',
    ],
  },
  {
    id: 4,
    name: 'CPTS Sud métropole lilloise',
    subtitle:
      'Créer un site internet pour une présence en ligne, faire connaître la CPTS à tous et permettre des soins de proximité.',
    description:
      "La CPTS Sud metropole lilloise est une médicalité qui a pour but de fournir des soins de proximite. Tâches spécifiques : création à partir du zéro, création d'une charte graphique, d'un logo et de plusieurs pages pour le site qui a pour but d'être un site vitrine",
    img: 'cpts.png',
    link: 'https://cpts.com/',
    tags: ['UI', 'Branding', 'Design'],
    category: 'design',
    projectImages: [
      'cpts.png',
      'r1.png',
      'r2.png',
      'r3.png',
      'r4.png',
      'r5.png',
    ],
  },
  {
    id: 5,
    name: 'La tambouille végétale',
    subtitle:
      'Un pense bête personnel pour garder des recettes que je fais de manière instinctive. Le site est la pour partager mes recettes.',
    description:
      'La tambouille végétale est un site de recettes végétales. Sans spécifiquement de recettes. Il me fallait un outil qui me permette de rajouter rapidement des recettes, je suis donc partie sur une base de donnée airtable, un front en reactJS déployé sur Netlify.',
    img: 'tambouille.png',
    link: 'https://latambouillevegetale.fr',
    tags: ['Netlify', 'ReactJS', 'Design', 'UX'],
    category: 'dev',
    projectImages: ['tambouille.png'],
  },
];
