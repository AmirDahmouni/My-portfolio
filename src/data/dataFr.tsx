import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import porfolioImage8 from '../images/portfolio/portfolio-8.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';


export const homePageMeta: HomepageMeta = {
  title: 'Portfolio Amir Dahmouni',
  description: "Portfolio Amir Full-Stack web developer",
};


export const SectionIdFr = {
  Hero: 'hero',
  About: 'À propos',
  Contact: 'Contact',
  Portfolio: 'Portfolio',
  Resume: 'Parcours',
  Skills: 'Compétences'
} as const;

export type SectionIdFr = typeof SectionIdFr[keyof typeof SectionIdFr];


export const heroDataFr: Hero = {
  imageSrc: heroImage,
  name: `Amir Dahmouni`,
  description: (
    <>
      <p className="text-white sm:prose-base lg:prose-lg" style={{ fontSize: "20px" }}>
        Je suis un <strong className="text-stone-100">Développeur Front-End</strong>,
        très motivé, passionné par les nouveaux défis et déterminé à fournir des résultats exceptionnels.
        Mon approche de travail est centrée sur <strong className="text-stone-100">l'esprit d'équipe </strong>.
        <br></br>J'ai une forte passion pour résoudre des problèmes complexes. En dehors de mes heures de travail.
        <br></br>
        Je m'efforce constamment d'améliorer à la fois mes compétences <strong className="text-stone-100" style={{ color: "rgb(251 146 60)" }}>techniques </strong>
        et mes aptitudes <strong className="text-stone-100" style={{ color: "rgb(251 146 60)" }}> interpersonnelles </strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/CV-Amir.pdf',
      text: 'CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionIdFr.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};


export const aboutDataFr: About = {
  profileImageSrc: profilepic,
  description: `Enthousiaste et axé sur les résultats en tant que développeur Front-End, je suis dynamisé par la prise de nouveaux
    défis et l'expansion continue de mes compétences. Je suis passionné par la création d'expériences web captivantes et centrées sur l'utilisateur.
    La collaboration est au cœur de ma démarche, et je prends un immense plaisir à travailler harmonieusement avec des équipes pluridisciplinaires
    pour atteindre des objectifs communs.`,
  aboutItems: [
    {
      label: 'Localisation', text: "Provence-Alpes-Côte d'Azur", Icon: MapIcon
    },
    { label: 'Age', text: '25', Icon: CalendarIcon },
    { label: 'Nationalité', text: 'Tunisienne', Icon: FlagIcon },
    { label: "Centres d'intérêt", text: 'Devops', Icon: SparklesIcon },
    { label: "Études", text: 'Ingénieur informatique', Icon: AcademicCapIcon },
    { label: 'Employeur actuel', text: 'Genext Factory', Icon: BuildingOffice2Icon },
  ],
};


export const skillsFr: SkillGroup[] = [
  {
    name: 'Langues parlées',
    skills: [
      {
        name: 'Francais',
        level: 8,
      },
      {
        name: 'Anglais',
        level: 6,
      },
      {
        name: 'Arabe',
        level: 8,
      }
    ],
  },
  {
    name: 'Langages de programmation',
    skills: [
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Javascript',
        level: 7,
      },
      {
        name: 'Python',
        level: 5,
      }
    ],
  },
  {
    name: 'Développement Frontend',
    skills: [
      {
        name: 'React.js',
        level: 8,
      },
      {
        name: 'Redux-Saga',
        level: 8,
      },
      {
        name: 'Next.js',
        level: 7,
      },
      {
        name: 'React Native',
        level: 4,
      },
      {
        name: 'Angular',
        level: 3,
      },
      {
        name: 'Apollo Client',
        level: 3
      }
    ],
  },
  {
    name: 'Développement Backend',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Express.js',
        level: 8,
      },
      {
        name: 'Strapi',
        level: 7,
      },
      {
        name: 'Nest.js',
        level: 5,
      },
      {
        name: 'Socket.IO',
        level: 5,
      },
      {
        name: 'GraphQL',
        level: 5,
      }
    ],
  },
  {
    name: 'Base des données',
    skills: [
      {
        name: 'MongoDB',
        level: 5,
      },
      {
        name: 'Mysql',
        level: 5,
      }
    ],
  },
  {
    name: 'Déploiement',
    skills: [
      {
        name: 'Git',
        level: 5,
      },
      {
        name: 'Docker',
        level: 5,
      }
    ],
  },
  {
    name: 'Test',
    skills: [
      {
        name: 'Cypress.io',
        level: 6,
      },
      {
        name: 'React Testing Library',
        level: 5,
      }
    ],
  },
  {
    name: 'Méthodologies',
    skills: [
      {
        name: 'Agile Scrum',
        level: 6,
      },
      {
        name: 'Kanban',
        level: 5,
      }
    ],
  }
];


export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  }
];

export const educationFr: TimelineItem[] = [
  {
    date: 'Septembre 2017 – Juin 2019',
    location: 'Institut supérieur des sciences appliqués et technologies de Sousse, Tunisia',
    title: 'Cycle Préparatoire Intégré',
    content: <p>Mathématiques Appliquées, Physique, Algorithmes, Architecture Informatique et Systèmes Linux</p>
  },
  {
    date: 'Septembre 2019 – Juin 2022',
    location: 'Institut supérieur des sciences appliqués et technologies de Sousse, Tunisia',
    title: 'Diplôme National en Ingénierie Informatique',
    content: <p>Architecture Logicielle, Algorithmes Avancés et Gestion de Base de Données. Développement Web et Développement Logiciel en utilisant Java, Python et JavaScript.</p>
  },
];

export const personnalProjectsFr: TimelineItem[] = [
  {
    date: 'January 2022 - Present',
    location: 'Proxym-IT, Sousse',
    title: 'Ingénieur génie logiciel',
    content: (
      <>
        <p>
          <a href="https://game-library-roan.vercel.app" style={{ color: "rgb(251 146 60)" }}><span className="text-center font-bold">Game Library</span></a>
          <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Next.js, React.js, Redux-Sagas, ChakraUi </span>
          <br></br>
          <span style={{ color: "rgb(80 80 200)", fontWeight: "bold", fontSize: "14px" }}>username: Amir password: root</span>
          <br></br>
          Mon projet, Game Library, a été conçu en utilisant Chakra UI pour les composants de l'interface utilisateur. Il permet aux utilisateurs
          de parcourir et d'afficher des jeux récupérés à partir d'une API RAWG. L'application propose divers filtres, tels que la recherche par
          nom de jeu, le filtrage des jeux par leur disponibilité sur différentes plateformes, la sélection de genres de jeux spécifiques et le tri
          des jeux par date. Pour gérer efficacement le flux de données et gérer les opérations asynchrones, j'ai implémenté Redux-Sagas. Ce middleware
          puissant permet une gestion transparente des données. La bibliothèque comprend une page de connexion. La fonctionnalité de pagination divise
          les résultats des jeux en plusieurs pages, offrant une expérience de navigation conviviale.
        </p>
        <p style={{ marginTop: "20px" }}>
          <a href="https://cinema-library.vercel.app" style={{ color: "rgb(251 146 60)" }}>
            <span className="text-center font-bold">Cinema Library</span>
            <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : React.js, Redux-Sagas, ChakraUi </span>
          </a>
          <br></br>
          Mon projet utilise Chakra UI pour les composants de l'interface utilisateur, permettant aux utilisateurs d'explorer et de présenter des films
          provenant de l'API TMDb. L'application propose divers filtres tels que la recherche par nom, le filtrage par genre et la sélection de langue,
          tandis que les options de tri incluent la date de sortie. Développé avec Next.js, le projet optimise la gestion des données grâce à Redux-Sagas
          pour les tâches asynchrones. Ce middleware robuste garantit un flux de données fluide. Améliorée par la pagination, l'application assure une
          navigation sans heurts sur plusieurs pages, améliorant l'interaction avec l'utilisateur.
        </p>
        <p style={{ marginTop: "20px" }}>
          <a href="https://weather-app-snowy-sigma.vercel.app" style={{ color: "rgb(251 146 60)" }}>
            <span className="text-center font-bold">Weather - Application Intuitive de Prévisions Météo</span>
            <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Node.js, Express.js, Mongodb, React.js, context hooks </span>
          </a>
          <br></br>
          C'est un projet axé sur l'interface conçu en utilisant CSS pour présenter les composants utilisateur. Alimentée par l'API OpenWeatherMap,
          elle offre des prévisions météo hebdomadaires complètes. En exploitant l'API OpenCageData, l'application intègre une détection de géolocalisation.
          Les utilisateurs peuvent personnaliser leurs favoris pour un accès rapide aux prévisions des villes sélectionnées. Ce projet met en avant mes
          compétences en conception d'interface utilisateur, en intégration d'API et mon engagement à améliorer les expériences quotidiennes.
        </p>
      </>
    ),
  },

]


export const internshipsFr: TimelineItem[] = [
  {
    date: 'Juillet 2021 - Août 2021',
    location: 'Proxym-IT, Sousse',
    title: 'Ingénieur logiciel',
    content: (
      <p>
        <a href="" style={{ color: "rgb(251 146 60)" }}><span className="text-center font-bold">Feedback</span></a>
        <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Node.js, Express.js, Mongodb, React.js</span>
        <br></br>
        Participer au développement d'une application web qui sert de plateforme pour connecter les étudiants et les professeurs afin de recueillir les opinions des étudiants sur l'avancement des cours.
        <br></br>● Mis en œuvre des services web RESTful en utilisant Node.js et Express.js pour permettre des opérations CRUD et une communication fluide entre le front-end, la base de données et le système backend.
        <br></br>● Gérer l'authentification et l'autorisation en utilisant JWT (JSON Web Tokens).
        <br></br>● Intégration d'un modèle dans des composants React réutilisables et consommation de l'API en utilisant Axios au niveau de React.
        <br></br>● Intégrer Joi pour optimiser la validation du schéma du formulaire et garantir la validation du format des données lorsque les utilisateurs remplissent des formulaires côté frontend.
        <br></br>● travailler en collaboration avec l'équipe de développement dans un environnement Agile (Scrum).
        <br></br>● Soumission des demandes d'extraction (pull requests) pour les branches, ouvrant des problèmes (+20 commits, +5 branches).
      </p>
    ),
  },
  {
    date: 'Juin 2022 - Decembre 2022',
    location: 'Fleet, Paris',
    title: 'Ingénieur logiciel',
    content: (
      <p>
        <a href="https://fleet.co/" style={{ color: "rgb(251 146 60)" }}><span className="text-center font-bold">Fleet</span></a>
        <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Node.js, Express.js, PostgresQL, React.js, context hooks, Cypress.io </span>
        <br></br> travailler sur une solution de gestion de parc informatique pour les parcs technologiques, en mettant l'accent sur les startups et les PME.
        <br></br>● Mis en place de nouvelles pages de site web et amélioré celles déjà existantes en utilisant Next.js et Contentful (CMS) pour récupérer les données, en utilisant le système de conception Fleet.
        <br></br>● Participer à la mise en œuvre de l'API Locize pour maintenir le site web complet dans 4 langues (anglais, français, espagnol, allemand).
        <br></br>● Améliorer les filtres dans le catalogue d'équipements et renforcé la fonction de recherche avec des composants React issus du système de conception Fleet.
        <br></br>● Corriger des problèmes de composants du système de conception et republié une nouvelle version du package dans le référentiel NPM.
        <br></br>● Contribuer au développement d'un algorithme d'aide à la décision qui prédit la probabilité qu'une banque accepte les demandes de financement d'équipements informatiques pour chaque client. Cet algorithme a été conçu pour les administrateurs en backoffice et utilise des données provenant d'une base de données de production PostgreSQL. Le processus de développement a impliqué une collaboration avec un analyste de données en utilisant Python et Node.js.
        <br></br>● Participer à la mise en œuvre de tests de bout en bout au sein des pipelines CI/CD sur GitHub Actions. Ces tests visaient à protéger notre solution en production et à garantir sa fonctionnement continue en utilisant Cypress.io.
        <br></br>● Travailler en collaboration avec l'équipe de développement dans un environnement Agile (Scrum).
        <br></br>● Acquérir des connaissances sur les meilleures pratiques et les fondamentaux du code propre grâce aux revues de code.
        <br></br>● Soumission des demandes d'extraction (pull requests) pour les branches ouvrant des problèmes et pour de nouvelles fonctionnalités (+70 commits).
      </p>
    ),
  },
];


export const experienceFr: TimelineItem[] = [
  {
    date: 'Janvier 2023 - Août 2023',
    location: 'Genext Factory, Paris',
    title: 'Ingénieur logiciel',
    content: (
      <>
        <p>
          <a href="https://www.genextfactory.com/" style={{ color: "rgb(251 146 60)" }}><span className="text-center font-bold">Genext Factory website</span></a>
          <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Strapi , React.js, Next.js, i18-next, Reactstrap</span>
          <br></br>● Mis en place de nouvelles pages de site web en utilisant React.js, Next.js et l'API Strapi (CMS) pour récupérer les données, tout en utilisant Reactstrap pour la conception et les composants d'interface utilisateur.
          <br></br>● Intégration de la traduction en utilisant react-i18next, le plugin i18n de Strapi et un dictionnaire local.
          <br></br>● Mis en place plus de 5 tests unitaires en utilisant Jest et React Testing Library pour un composant React complexe.
          <br></br>● Collaborer avec l'équipe de développement dans un environnement Agile (Scrum).
        </p>
        <p style={{ marginTop: "20px" }}>
          <a href="https://dev.edumonde.tn/" style={{ color: "rgb(251 146 60)" }}><span className="text-center font-bold"> Edumonde </span></a>
          <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Strapi , React.js, Next.js, i18-next, Tailwind</span>
          <br></br>● Mis en œuvre de nouvelles pages de site web en utilisant React.js, Next.js et l'API Strapi (CMS) pour récupérer les données, en utilisant Reactstrap pour la conception et les composants d'interface utilisateur.
          <br></br>● Utilisation de Strapi pour développer des types de contenu dans le back office et mise en œuvre de crochets de cycle de vie pour partager des cours sur notre solution Saas, Odesco.
          <br></br>● Intégration de la traduction en utilisant le plugin i18n de Strapi dans le back office et la traduction i18next comme dictionnaire local pour la traduction côté front-end.
        </p>
        <p style={{ marginTop: "20px" }}>
          <a href="https://dev-training-center.odesco.education/" style={{ color: "rgb(251 146 60)" }}><span className="text-center font-bold"> Fabulous consulting </span></a>
          <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Strapi , React.js, Next.js, Tailwind</span>
          <br></br>● Mis en œuvre de nouvelles pages de site web en utilisant React.js, Next.js et l'API Strapi (CMS) pour récupérer les données, en utilisant Reactstrap pour la conception et les composants d'interface utilisateur.
          <br></br>● Utilisation de Strapi pour développer des types de contenu dans le back-office et intégration du plugin Strapi Stripe pour proposer des paiements en ligne via différents modes.
          <br></br>● Intégration de la traduction en utilisant le plugin i18n de Strapi dans le back office et la traduction i18next comme dictionnaire local pour la traduction côté front-end.
        </p>
        <p style={{ marginTop: "20px" }}>
          <span className="text-center font-bold"> ClickStore (soldx) </span>
          <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Node.js ,Express.js, React.js, Redux-sagas, Reactstrapi</span>
          <br></br>● Mise en place de nouveaux filtres dans le module de produits des points de vente dans le back office.
          <br></br>● Répliquer la configuration au niveau de la catégorie de produits dans le back office.
          <br></br>● Mise en place d'un nouveau point de terminaison pour récupérer les commentaires sur les produits et les magasins en utilisant Node.js, Express.js et MongoDB.
          <br></br>● Mise en place d'une nouvelle interface backoffice manager en utilisant Angular qui affiche les commentaires et les produits favoris.
          <br></br>● Mise en place d'un nouveau point de terminaison pour récupérer les gagnants des coupons par boutique en utilisant Node.js, Express.js et MongoDB.
          <br></br>● Mise en place d'une nouvelle interface backoffice manager pour afficher les gagnants des coupons.
          <br></br>● Résoudre le bug de pagination dans les listes du back office.
          <br></br>● Résoudre les bugs de jointure et d'authentification dans l'API Node.js.
          <br></br>● Résoudre le problème dans le panier d'achat qui se produit lors du paiement de produits avec des réductions sur le site web.
        </p>
      </>
    ),
  },

]

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};



export const contactFr: ContactSection = {
  headerText: 'Contact',
  description: 'Je suis joignable aux coordonnées suivantes.',
  items: [
    {
      type: ContactType.Email,
      text: 'dahmouni.amir@gmail.com',
      href: 'dahmouni.amir@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+33 7 56 84 59 97',
      href: 'tel:+33 7 56 84 59 97',
    },
    {
      type: ContactType.Location,
      text: "Provence-Alpes-Côte d'Azur, France",
      href: 'https://www.google.ca/maps/place/Sousse/@35.8285312,10.616832,14z/data=!4m6!3m5!1s0x130275759ac9d10d:0x698e3915682cef7d!8m2!3d35.8245029!4d10.634584!16zL20vMDN5djZy?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: 'Github',
      href: 'https://github.com/AmirDahmouni',
    },
  ],
};


export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/AmirDahmouni' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/amir-dahmouni/' }
];
