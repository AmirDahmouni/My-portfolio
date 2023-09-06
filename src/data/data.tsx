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
import porfolioImage1 from "../images/portfolio/portfolio-1.PNG"
import porfolioImage2 from '../images/portfolio/portfolio-2.PNG';
import porfolioImage3 from '../images/portfolio/portfolio-3.PNG';
import porfolioImage4 from '../images/portfolio/portfolio-4.PNG';
import porfolioImage5 from '../images/portfolio/portfolio-5.PNG';
import porfolioImage6 from '../images/portfolio/portfolio-6.PNG';
import porfolioImage7 from '../images/portfolio/portfolio-7.PNG';
import porfolioImage8 from '../images/portfolio/portfolio-8.PNG';
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
  title: 'Welcome - Portfolio Amir Dahmouni',
  description: "Portfolio Amir Dahmouni Full-stack Web developer",
};


export const SectionId = {
  Hero: 'hero',
  About: 'About',
  Contact: 'Contact',
  Portfolio: 'Portfolio',
  Resume: 'Resume',
  Skills: 'Skills'
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];


export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Amir Dahmouni`,
  description: (
    <>
      <p className="text-white sm:prose-base lg:prose-lg" style={{ fontSize: "20px" }}>
        I am a highly motivated  <strong className="text-stone-100">Front-End Developer</strong>,
        enthusiastic about embracing new challenges and livering <strong className="text-stone-100">Awesome UI </strong>
        With a strong team-oriented mindset and a passion for problem-solving
      </p>
      <p className="text-white sm:prose-base lg:prose-lg" style={{ fontSize: "20px" }}>
        In my free time time, I try Enhancing both <strong className="text-stone-100" style={{ color: "rgb(251 146 60)" }}>Soft </strong>
        & <strong className="text-stone-100" style={{ color: "rgb(251 146 60)" }}>Technical</strong> Skills
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Amir CV.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};


export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Enthusiastic and results-driven Front-End Developer, I am energized by taking on new challenges and continuously
  expanding my skill set and I am passionate about crafting engaging and user-centric web experiences.
  Collaboration is at the heart of my approach, and I take immense pleasure in working harmoniously with cross-functional teams
  to achieve common objectives .`,
  aboutItems: [
    {
      label: 'Location', text: "Provence-Alpes-Côte d'Azur", Icon: MapIcon
    },
    { label: 'Age', text: '25', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Tunisian', Icon: FlagIcon },
    { label: 'Interests', text: 'Devops, Checkers', Icon: SparklesIcon },
    { label: 'Study', text: 'Software engineering', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Genext Factory', Icon: BuildingOffice2Icon },
  ],
};


export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'French',
        level: 8,
      },
      {
        name: 'English',
        level: 6,
      },
      {
        name: 'Arabic',
        level: 9,
      }
    ],
  },
  {
    name: 'Programming Languages',
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
    name: 'Frontend development',
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
    name: 'Backend development',
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
    name: 'Databases',
    skills: [
      {
        name: 'MongoDB',
        level: 6,
      },
      {
        name: 'Mysql',
        level: 6,
      }
    ],
  },
  {
    name: 'Deploiement',
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
    name: 'Testing',
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
    name: 'Methodologies',
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
    title: 'Games library',
    description: 'Main page of my personnal project.',
    url: 'https://game-library-roan.vercel.app/',
    image: porfolioImage1,
  },
  {
    title: 'Games library',
    description: 'Details game page of my personnal project',
    url: 'https://game-library-roan.vercel.app/',
    image: porfolioImage2,
  },
  {
    title: 'Edumonde',
    description: 'Home page of Edumonde website.',
    url: 'https://dev.edumonde.tn/',
    image: porfolioImage3,
  },
  {
    title: 'Fabulous consulting',
    description: 'Home page of fabulous consulting website',
    url: 'https://dev-training-center.odesco.education/',
    image: porfolioImage4,
  },
  {
    title: 'genextfactory website',
    description: 'Why choose us section',
    url: 'https://www.genextfactory.com',
    image: porfolioImage5,
  },
  {
    title: 'genextfactory website',
    description: 'Shortcut of home page',
    url: 'https://www.genextfactory.com',
    image: porfolioImage6,
  },
  {
    title: 'Fleet website',
    description: 'Blog page that i created',
    url: 'https://fleet.co/',
    image: porfolioImage7,
  },
  {
    title: 'Weather app',
    description: 'Weather delivers a comprehensive weekly weather forecast ',
    url: 'https://weather-app-snowy-sigma.vercel.app/',
    image: porfolioImage8,
  },

];

export const education: TimelineItem[] = [
  {
    date: 'September 2017 – June 2019',
    location: 'Higher Institute of Applied Sciences and Technology of Sousse, Tunisia',
    title: 'Integrated Preparatory Cycle',
    content: <p>Applied Mathematics, Physics, Algorithm, Computer Architecture and Linux System</p>
  },
  {
    date: 'September 2019 – June 2022',
    location: 'Higher Institute of Applied Sciences and Technology of Sousse, Tunisia',
    title: 'National Diploma in Computer Engineering',
    content: <p>Software Architecture, Advanced Algorithms, and Database Management. Web Development and Software Development using Java, Python, and JavaScript.</p>
  },
];

export const personnalProjects: TimelineItem[] = [
  {
    date: '',
    location: '',
    title: '',
    content: (
      <>
        <p>
          <a href="https://game-library-roan.vercel.app" style={{ color: "rgb(251 146 60)" }}>
            <span className="text-center font-bold">Game Library</span>
            <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Next.js, React.js, Redux-Sagas, ChakraUi </span>
          </a>
          <br></br>
          <span style={{ color: "rgb(80 80 200)", fontWeight: "bold", fontSize: "14px" }}>username: Amir password: root</span>
          <br></br>
          My project, Game Library, was designed using Chakra UI for the user interface components. It allows users to browse and
          display games fetched from a RAWG API. The application features various filters, such as searching by game name,
          filtering games by their availability on different platforms, selecting specific game genres, and sorting games by date.
          To efficiently manage the data flow and handle asynchronous operations, I have implemented Redux-Sagas. This powerful middleware
          allows for seamless data management. Library includes a login page .
          The pagination functionality divides the game results into multiple pages, providing a user-friendly browsing experience.
        </p>
        <p style={{ marginTop: "20px" }}>
          <a href="https://cinema-library.vercel.app" style={{ color: "rgb(251 146 60)" }}>
            <span className="text-center font-bold">Cinema Library</span>
            <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : React.js, Redux-Sagas, ChakraUi </span>
          </a>
          <br></br>
          My project utilizes Chakra UI for UI components, enabling users to explore and showcase movies sourced from the TMDb API.
          The app offers diverse filters like name-based search, genre-based filtering, and language selection, while sorting options include release date.
          Developed with Next.js, the project optimizes data handling through Redux-Sagas for asynchronous tasks. The robust middleware ensures smooth data
          flow. Enhanced by pagination, the app ensures seamless navigation across multiple pages, enhancing user interaction.
        </p>
        <p style={{ marginTop: "20px" }}>
          <a href="https://weather-app-snowy-sigma.vercel.app" style={{ color: "rgb(251 146 60)" }}>
            <span className="text-center font-bold">Weather- Intuitive Weather Forecast App</span>
            <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Node.js, Express.js, Mongodb, React.js, context hooks </span>
          </a>
          <br></br>
          My project is an interface-focused project crafted using CSS to present user components. Powered by OpenWeatherMap API, it delivers a comprehensive
          weekly weather forecast. Leveraging OpenCageData API, the app features geolocation detection. Users can curate favorites for quick access
          to weather in chosen cities. This project showcases my UI/UX skills, API integration, and commitment to enhancing daily experiences.
        </p>
      </>
    ),
  },

]


export const internships: TimelineItem[] = [
  {
    date: 'July 2021 - August 2021',
    location: 'Proxym-IT, Sousse',
    title: 'Software Engineer',
    content: (
      <p>
        <a href="" style={{ color: "rgb(251 146 60)" }}><span className="text-center font-bold">Feedback</span></a>
        <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Node.js, Express.js, Mongodb, React.js</span>
        <br></br>
        Participated in the development of a web application which serves as a platform for connecting students and professors to gather student opinions about the progress of courses.
        <br></br>● implemented RESTful web services using Node.js and Express.js to enable CRUD operations and seamless communication between the front-end, database, and backend system.
        <br></br>● Manage authentication and authorization using JWT
        <br></br>● Integrating a reusable React components and consuming the API using Axios at the React level.
        <br></br>● Integrate Joi to optimize modal schema validation and ensure data format validation when users fill forms on the frontend.
        <br></br>● Co-worked with the development team in an Agile Environment (Scrum).
        <br></br>● Made pull requests for branches Opening Issues (+20 commit, +5 branches).
      </p>
    ),
  },
  {
    date: 'June 2022 - December 2022',
    location: 'Fleet, Paris',
    title: 'Software Engineer',
    content: (
      <p>
        <a href="https://fleet.co/" style={{ color: "rgb(251 146 60)" }}><span className="text-center font-bold">Fleet</span></a>
        <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Node.js, Express.js, PostgresQL, React.js, context hooks, Cypress.io </span>
        <br></br> I worked in a fleet's solution for IT park management, catering specifically to startups and SMEs.
        <br></br>● Implemented new website pages and enhanced existing ones using Next.js and Contentful (CMS) to fetch data, utilizing the Fleet design system
        <br></br>● Participated in the Implementation of Locize API to maintain the website comprehensive in 4 languages (English, French, Spanish, German)
        <br></br>● Improved the filters in the equipment catalog and enhanced the search functionality with react components from the Fleet design system.
        <br></br>● Fixed design system component issues and republished a new version of the package in the NPM repository.
        <br></br>● Contributed to developing a decision support algorithm that predicts the likelihood of a bank accepting financing requests for IT equipment for each client. This algorithm was designed for backoffice administrators and utilized data from a PostgreSQL production database. The development process involved collaboration with a data analyst using Python and Node.js.
        <br></br>● Participated in implementing end-to-end tests within CI/CD pipelines on GitHub Actions. These tests were aimed at safeguarding our solution in production and ensuring its continuous functionality using Cypress.io
        <br></br>● Co-worked with the development team in an Agile Environment (Scrum) using Notion.io for sprint ticket management.
        <br></br>● Gain insights into clean code best practices and fundamentals through code reviews
        <br></br>● Made pull requests for branches Opening Issues and new features (+70 commit).
      </p>
    ),
  },
];


export const experience: TimelineItem[] = [
  {
    date: 'January 2023 - August 2023',
    location: 'Genext Factory, Sousse',
    title: 'Software Engineer',
    content: (
      <>
        <p>
          <a href="https://www.genextfactory.com/" style={{ color: "rgb(251 146 60)" }}><span className="text-center font-bold">Genext Factory website</span></a>
          <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Strapi , React.js, Next.js, i18-next, Reactstrap</span>
          <br></br>● Implemented new website pages using React.js, Next.js and Strapi API (CMS) to fetch data, while leveraging Reactstrap for design and UI components.
          <br></br>● Integration of translation using react-i18next, the Strapi i18n plugin, and a local dictionary.
          <br></br>● Implemented +5 unit tests using Jest and React Testing Library for a complex React component
          <br></br>● Co-worked with the development team in an Agile Environment (Scrum).
        </p>
        <p style={{ marginTop: "20px" }}>
          <a href="https://dev.edumonde.tn/" style={{ color: "rgb(251 146 60)" }}><span className="text-center font-bold"> Edumonde </span></a>
          <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Strapi , React.js, Next.js, i18-next, Tailwind</span>
          <br></br>● Implemented new website pages using React.js, Next.js and Strapi API (CMS) to fetch data, while leveraging Tailwind for design and UI components.
          <br></br>● Use of Strapi for developing content types in the back office and implementing lifecycles hooks for sharing courses on our Saas solution, Odesco.
          <br></br>● Integrate translation using the Strapi i18n plugin in the back office and i18next translation as local dictionnary for front-end translation
        </p>
        <p style={{ marginTop: "20px" }}>
          <a href="https://dev-training-center.odesco.education/" style={{ color: "rgb(251 146 60)" }}><span className="text-center font-bold"> Fabulous consulting </span></a>
          <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Strapi , React.js, Next.js, Tailwind</span>
          <br></br>● Implemented web pages in React.js, Next.js and Strapi API (CMS) to fetch data, while leveraging Tailwind for design and UI components.
          <br></br>● Utilization of Strapi to create content types within the back office, coupled with the integration of the Strapi Stripe plugin to facilitate online payments through various modes.
          <br></br>● Integrate translation using the Strapi i18n plugin in the back office and i18next translation as local dictionnary for front-end translation
        </p>
        <p style={{ marginTop: "20px" }}>
          <span className="text-center font-bold"> ClickStore (soldx) </span>
          <span style={{ color: "gray", fontWeight: "bold", fontSize: "14px" }}> : Node.js ,Express.js, React.js, Redux-sagas, Reactstrapi</span>
          <br></br>● Implement new filters in the product module of the outlets in the back office.
          <br></br>● Replicate the product category level configuration in the back office.
          <br></br>● Implement new endpoint to fetch products and stores comments using Node.js,Express.js, MongoDB.
          <br></br>● Setting up a new backoffice manager interface using Angular to display comments and favorite products.
          <br></br>● Implementation of a new endpoint to retrieve coupon winners per store using Node.js, Express.js, and MongoDB.
          <br></br>● Setting up a new back office manager interface to display prizes winners.
          <br></br>● Fix the pagination bug in the lists of the back office.
          <br></br>● Fix join and authentication bugs in the Node.js API.
          <br></br>● Fix the issue in the shopping cart that occurs during the payment of discounted products on the website.
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



export const contact: ContactSection = {
  headerText: 'Contact',
  description: 'I can be reached at the following contact details',
  items: [
    {
      type: ContactType.Email,
      text: 'dahmouni.amir@gmail.com',
      href: 'dahmouni.amir@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+216 26 580 724',
      href: '',
    },
    {
      type: ContactType.Location,
      text: "Provence-Alpes-Côte d'Azur",
      href: "https://www.google.com/maps/place/Nice,+France/@43.7032898,7.1704112,12z/data=!3m1!4b1!4m15!1m8!3m7!1s0x12b668198af953ad:0xb71690263d16d1a7!2sProvence-Alpes-C%C3%B4te+d'Azur,+France!3b1!8m2!3d43.9351691!4d6.0679194!16zL20vMDFjN250!3m5!1s0x12cdd0106a852d31:0x40819a5fd979a70!8m2!3d43.7101728!4d7.2619532!16zL20vMGNwNnc?entry=ttu",
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
