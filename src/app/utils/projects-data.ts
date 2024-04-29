import { Project } from './interfaces/project';

export const projects_data: Project[] = [
  {
    id: 1,
    name: 'Novaskin clinic',
    description:
      'Vous avez très probablement déjà vu passer dans le cadre de votre travail des maquettes de sites, de magazines ou même des présentations marketing dont le texte commençait par le fameux Lorem ipsum. Ce type de texte, qui est en réalité une suite de mots à la consonance latine sans aucune signification, permet ainsi de créer une mise en page, et ce sans pour autant disposer d’un texte définitif.',
    img: 'https://images.unsplash.com/photo-1712086353403-54a24887e74f?q=80&w=2954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    projectImages: ['1.jpg', '2.jpg', '3.jpg'],
    link: 'https://www.google.com',
    tags: ['Amélioration', 'Design', 'UX'],
    category: 'dev',
  },
  {
    id: 2,
    name: 'Until App',
    description: 'Description du projet 2',
    img: 'https://images.unsplash.com/photo-1712135596173-2bb522bcfd88?q=80&w=3038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.google.com',
    tags: ['UX/UI', 'ReBranding', 'Design'],
    category: 'design',
    projectImages: ['1.jpg', '2.jpg', '3.jpg'],
  },
  {
    id: 3,
    name: 'Until App',
    description: 'Description du projet 2',
    img: 'https://images.unsplash.com/photo-1712238523530-72e984d0e736?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.google.com',
    tags: ['UX/UI', 'ReBranding', 'Design'],
    category: 'dev',
    projectImages: ['1.jpg', '2.jpg', '3.jpg'],
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
