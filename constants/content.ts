const HOME = {
  greeting: `Hi, my name is`,
  title: `Building beautiful experiences for the web.`,
  subtitle: `As a frontend-focused software engineer, I am dedicated to bringing innovative and high-performing solutions to the digital landscape. Whether it's a complex web application or a simple landing page, I bring expertise, attention to detail, and a passion for crafting exceptional digital products.`,
}

const ABOUT_ME = {
  title: `About me`,
  content: [
    {
      id: 0.1,
      content: `Hello! I'm Maximiliano, a software developer with a passion for creating innovative solutions for the internet. My journey in software development began in 2018, when I discovered my love for crafting websites. Since then, I have honed my skills in HTML, CSS, and JavaScript, and have had the opportunity to work with some of the biggest software companies and corporations, where I have contributed to the creation of accessible and inclusive digital products.`,
    },
    {
      id: 0.2,
      content: `I continuously improve my skills and stay current with latest technologies to create user-centered digital solutions that are high-quality, reliable and meet client needs. I aim to create impactful and functional digital experiences.`,
    },
    {
      id: 0.3,
      content: `In addition to my professional experience, I am also a mentor and teacher, having participated in the creation of a comprehensive course on Next.js, API Rest, React.js, and Material UI. I am always seeking opportunities to share my knowledge and help others grow in their careers.`,
    },
    {
      id: 0.4,
      content: ` Here are a few technologies I’ve been working with recently:`,
    },
  ],
}

const SKILLS = [
  {
    id: 0.1,
    name: 'JavaScript (ES6+)',
  },
  {
    id: 0.2,
    name: 'TypeScript',
  },
  {
    id: 0.3,
    name: 'React Js',
  },
  {
    id: 0.4,
    name: 'Next Js',
  },
  {
    id: 0.5,
    name: 'Keycloak',
  },
  {
    id: 0.6,
    name: 'Bit.io',
  },
]

const EXPERIENCE = {
  title: `Experience`,
  subtitle: `Discover my recent professional journey in this section where I showcase my work experiences and achievements.`,
  companies: [
    {
      id: 0,
      name: 'Folcode',
    },
    {
      id: 1,
      name: 'Splight',
    },
    {
      id: 2,
      name: 'Bitlogic',
    },
  ],
  tasks: [
    {
      id: 0,
      company: 'Folcode',
      url: 'https://folcode.com/',
      title: ` is a software company. The headquarters in San Juan, Argentina. Some tasks here: `,
      actions: [
        {
          id: 0.1,
          description: `Component development and implementation of reusable UI library in BITCloud`,
        },
        {
          id: 0.2,
          description: `Implementing authentication and authorization with KeyCloak.`,
        },
        {
          id: 0.3,
          description: `Next js, React js, modular css projects with best practices implementing SOLID principles.`,
        },
        {
          id: 0.4,
          description: `Content creation and teaching in Folcademy's courses.`,
        },
      ],
    },
    {
      id: 1,
      company: 'Splight',
      url: 'https://www.splight-ai.com/',
      title: ` is an artificial intelligence company striving to achieve sustainability through technological innovation. Some tasks here:`,
      actions: [
        {
          id: 0.1,
          description: `Platform development based on data obtained from artificial intelligence and machine learning.`,
        },
        {
          id: 0.2,
          description: `Development of a library of reusable UI components in NPM with React Js.`,
        },
        {
          id: 0.3,
          description: `Implementing authentication and authorization with Auth0.`,
        },
      ],
    },
    {
      id: 2,
      company: 'Bitlogic',
      url: 'https://www.bitlogic.io/',
      title: ` is a software company. The headquarters in Córdoba, Argentina. Some tasks here:`,
      actions: [
        {
          id: 0.1,
          description: `Development and implementation of a Q&A section applied to sports science. .`,
        },
        {
          id: 0.2,
          description: `Authentication and authorization with Auth0.`,
        },
        {
          id: 0.3,
          description: `General SEO improvements.`,
        },
      ],
    },
  ],
}
export { HOME, ABOUT_ME, SKILLS, EXPERIENCE }
