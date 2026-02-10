import aluraFixImg from '../assets/alura fix.png';
import ecommerceImg from '../assets/ecomerce.png';
import cuarsoImg from '../assets/cuarso.png';
import businessImg from '../assets/bussines.png';
import taskListImg from '../assets/task list.png';
import encriptadorImg from '../assets/encriptador.png';
import organigramaImg from '../assets/organizacion.png';

export const CATEGORIES = [
  { id: 'all', labelKey: 'portfolio.categories.all' },
  { id: 'landing', labelKey: 'portfolio.categories.landing' },
  { id: 'web_apps', labelKey: 'portfolio.categories.platform' },
  { id: 'mobile', labelKey: 'portfolio.categories.ecommerce' },
  { id: 'tools', labelKey: 'portfolio.categories.tasks' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Alura Fix',
    category: 'web_apps',
    descriptionKey: 'portfolio.projects.p1_desc',
    img: aluraFixImg,
    techStack: ['React', 'Tailwind'],
    links: {
      repo: 'https://github.com/miguelsotelo01/...',
      demo: 'https://...',
    },
  },
  {
    id: 2,
    title: 'Alura Geek',
    category: 'web_apps',
    descriptionKey: 'portfolio.projects.p2_desc',
    img: ecommerceImg,
    techStack: ['JavaScript', 'HTML', 'CSS'],
    links: { repo: '#', demo: '#' },
  },
  {
    id: 3,
    title: 'Cuarso',
    category: 'landing',
    descriptionKey: 'portfolio.projects.p3_desc',
    img: cuarsoImg,
    techStack: ['React', 'Vite'],
    links: { repo: '#', demo: '#' },
  },
  {
    id: 4,
    title: 'Admin Business',
    category: 'landing',
    descriptionKey: 'portfolio.projects.p4_desc',
    img: businessImg,
    techStack: ['React', 'Node.js'],
    links: { repo: '#', demo: '#' },
  },
  {
    id: 5,
    title: 'Task List',
    category: 'tools',
    descriptionKey: 'portfolio.projects.p5_desc',
    img: taskListImg,
    techStack: ['JavaScript'],
    links: { repo: '#', demo: '#' },
  },
  {
    id: 6,
    title: 'Encriptador',
    category: 'tools',
    descriptionKey: 'portfolio.projects.p6_desc',
    img: encriptadorImg,
    techStack: ['JavaScript', 'RegEx'],
    links: { repo: '#', demo: '#' },
  },
  {
    id: 7,
    title: 'Organigrama',
    category: 'tools',
    descriptionKey: 'portfolio.projects.p7_desc',
    img: organigramaImg,
    techStack: ['React'],
    links: { repo: '#', demo: '#' },
  },
];
