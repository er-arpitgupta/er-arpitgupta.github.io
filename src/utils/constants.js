import { handleImagesImport } from './helper';

export const PORTFOLIO_OWNER = 'Arpit Gupta';

export const IMAGE_LIST = handleImagesImport();
export const PHOTOFOLIO_IMAGE_LIST = handleImagesImport('photofolio');
export const PHOTOFOLIO_COMPRESSED = handleImagesImport('compressed');

export const SKILLS = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  jquery: 'jQuery',
  bootstrap: 'Bootstrap',
  react: 'React.JS',
  git: 'Git',
  api: 'Rest API',
};

export const TOOLS = {
  vscode: 'VS Code',
  github: 'GitHub',
  postman: 'Postman',
  jira: 'Jira',
  confluence: 'Confluence',
};

export const NAVBAR = {
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  work: 'Work',
  contact: 'Contact',
};

export const INTRO = {
  gmail: 'Gmail',
  linkedin: 'LinkedIn',
  github: 'GitHub',
};

export const TEMPLATES = {
  dropdown: 'Dropdown',
  toggle: 'Toggle',
  hamburger: 'Hamburger',
};

export const WORK_PROJECTS = {
  lms: [
    'Library Management System',
    'React, Spring Boot',
    'A platform for all the students to issue and request books online.',
    'Faculty members can add, modify, delete and track the status of the book requests.',
  ],
  photofolio: [
    'PhotoFolio',
    'HTML, CSS, React',
    'A website to showcase my photography and editing skills.',
    'This website is the depiction of my creativity using technology.',
  ],
  templates: [
    'CSS Templates',
    'HTML, CSS, JS',
    'A place where I added my custom made various templates using HTML, CSS and JS.',
    'It is also an open source meaning you can find useful templates and can use on the go.',
  ],
};

export const MENU_ITEM = [
  'Chrome',
  'Safari',
  'Mozilla',
  'Microsoft Edge',
  'Opera',
];

export const PORTFOLIO_OPTIONS = {
  all: 'All',
  mandala: 'Mandala',
  sunset: 'Sunset',
  nature: 'Nature',
  editing: 'Editing',
  wildlife: 'Wildlife',
};

export const MAIL_ID = 'er.gupta.arpit@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/er-arpit-gupta';
export const GITHUB = 'https://github.com/er-arpitgupta';
export const LOGIN_USER = 'Admin';
export const LOGIN_PWD = 'falcon12345';
