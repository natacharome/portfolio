import { Project } from './interfaces/project';

export const projects_data: Project[] = [
  {
    id: 1,
    name: 'Novaskin clinic',
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
    description: "Until est une application de rencontre basée sur les événéments. On s'inscrit d'abord à un événément avant de pouvoir matcher qui que ce soit. Tâches réalisées : Refonte de l'application, simplification du parcours utilisateur",
    img: 'until.png',
    link: '',
    tags: ['UX/UI', 'Branding', 'Design'],
    category: 'design',
    projectImages: ['u1.png', 'u2.png', 'u3.png'],
  },
  {
    id: 3,
    name: 'Repulsif pro',
    description: 'Repulsif pro est un site pour un client qui vend des solutions ultrasons pour faire fuire les nuisibles. Tâches réalisées: refonte du site, mise en avant du côté technologique et innovant du boitier.',
    img: 'repulsif.png',
    link: 'https://repulsifpro.com/',
    tags: ['UI', 'Branding', 'Design'],
    category: 'design',
    projectImages: ['repulsif.png','r1.png', 'r2.png', 'r3.png', 'r4.png', 'r5.png'],
  },
  {
    id: 4,
    name: 'Until App',
    description: 'Description du projet 2',
    img: 'baggi.jpg',
    link: 'https://www.google.com',
    tags: ['UX/UI', 'ReBranding', 'Design'],
    category: 'dev',
    projectImages: ['1.jpg', '2.jpg', '3.jpg'],
  },
];
