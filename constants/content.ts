import { messages } from 'components/modules/about/about.messages'

const ABOUT_ME = {
  content: [
    {
      id: 0.1,
      content: messages.description.first,
    },
    {
      id: 0.2,
      content: messages.description.second,
    },
    {
      id: 0.3,
      content: messages.description.third,
    },
    {
      id: 0.4,
      content: messages.description.fourth,
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
export { ABOUT_ME, SKILLS, EXPERIENCE }
