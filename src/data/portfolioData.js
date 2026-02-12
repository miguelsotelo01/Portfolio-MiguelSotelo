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
    techStack: ['React', 'Typescript', 'Node.js'],
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
    techStack: ['React', 'Typescript', 'Node.js'],
    links: { repo: '#', demo: '#' },
  },
  {
    id: 3,
    title: 'Cuarso',
    category: 'landing',
    descriptionKey: 'portfolio.projects.p3_desc',
    img: cuarsoImg,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    links: { repo: '#', demo: '#' },
  },
  {
    id: 4,
    title: 'Admin Business',
    category: 'landing',
    descriptionKey: 'portfolio.projects.p4_desc',
    img: businessImg,
    techStack: ['html', 'css', 'javascript'],
    links: { repo: '#', demo: '#' },
  },
  {
    id: 5,
    title: 'Task List',
    category: 'tools',
    descriptionKey: 'portfolio.projects.p5_desc',
    img: taskListImg,
    techStack: ['React', 'JavaScript'],
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
    techStack: ['React', 'JavaScript'],
    links: { repo: '#', demo: '#' },
  },
];
export const EDUCATION = [
  {
    id: 1,
    yearkey: 'edu.inti.year',
    titleKey: 'edu.inti.title',
    institutionKey: 'edu.inti.institution',
    descriptionKey: 'edu.inti.desc',
  },
  {
    id: 2,
    yearkey: 'edu.argentina.year',
    titleKey: 'edu.argentina.title',
    institutionKey: 'edu.argentina.institution',
    descriptionKey: 'edu.argentina.desc',
  },
  {
    id: 3,
    yearkey: 'edu.alura.year',
    titleKey: 'edu.alura.title',
    institutionKey: 'edu.alura.institution',
    descriptionKey: 'edu.alura.desc',
  },
  {
    id: 4,
    yearkey: 'edu.utn.year',
    titleKey: 'edu.utn.title',
    institutionKey: 'edu.utn.institution',
    descriptionKey: 'edu.utn.desc',
  },
];
