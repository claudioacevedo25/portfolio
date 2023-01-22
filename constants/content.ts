const ABOUT_ME = [
  {
    id: 0.1,
    content: `Hello! My name is Maximiliano and I enjoy thinking about solutions that live on the internet. My interest in web development started in 2018 when I decided to try learning how to create a website. That intrigued me a lot. Thanks to this, I learned a lot about HTML and CSS! Then came JavaScript... The rest is history.`,
  },
  {
    id: 0.2,
    content: `Fast-forward to today, and I had the privilege of working at some software companies, huge corporations with wonderful people. My main focus these days is creating accessible and inclusive products and digital experiences for a variety of customers.`,
  },
  {
    id: 0.3,
    content: `I have also participated in the creation of a course on Next Js, API rest, React js, Material UI, which users of the Folcademy platform can purchase. Also, I like to participate in skills mentoring whenever I can.`,
  },
  {
    id: 0.4,
    content: ` Here are a few technologies I’ve been working with recently:`,
  },
]

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
  subtitle: `In this section you can see some work experiences in which I have been working recently.`,
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
export { ABOUT_ME, SKILLS, EXPERIENCE }
