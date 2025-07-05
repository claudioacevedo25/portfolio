import { ABOUT_MSN } from 'components/modules/about/about.messages'
import { EXPERIENCE_MSN } from 'components/modules/experience/experience.messages'

const ABOUT_ME = {
  title: ABOUT_MSN.title,
  content: [
    {
      id: 0.1,
      content: ABOUT_MSN.description.first,
    },
    {
      id: 0.2,
      content: ABOUT_MSN.description.second,
    },
    {
      id: 0.3,
      content: ABOUT_MSN.description.third,
    },
    {
      id: 0.4,
      content: ABOUT_MSN.description.fourth,
    },
    {
      id: 0.5,
      content: ABOUT_MSN.description.fifth,
    },
    {
      id: 0.6,
      content: ABOUT_MSN.description.sixth,
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
    name: 'React.js',
  },
  {
    id: 0.4,
    name: 'Next.js',
  },
  {
    id: 0.5,
    name: 'Vite',
  },
  {
    id: 0.6,
    name: 'Vitest',
  },
  {
    id: 0.7,
    name: 'Jest',
  },
  {
    id: 0.8,
    name: 'React Testing Library',
  },
  {
    id: 0.9,
    name: 'Cypress',
  },
  {
    id: 0.1,
    name: 'Storybook',
  },
  {
    id: 0.11,
    name: 'Keycloak',
  },
  {
    id: 0.12,
    name: 'Bit.io',
  },
  {
    id: 0.13,
    name: 'Sass',
  },
  {
    id: 0.14,
    name: 'Sentry',
  },
  {
    id: 0.15,
    name: 'CI/CD workflows',
  },
]

const EXPERIENCE = {
  title: EXPERIENCE_MSN.title,
  subtitle: EXPERIENCE_MSN.subtitle,
  companies: [
    {
      id: 0,
      name: 'Adsmurai',
    },
    {
      id: 1,
      name: 'Folcode',
    },
    {
      id: 2,
      name: 'Splight',
    },
    {
      id: 3,
      name: 'Bitlogic',
    },
  ],
  tasks: [
    {
      id: 0,
      company: 'Adsmurai',
      url: 'https://adsmurai.com/',
      title: EXPERIENCE_MSN.tasks.adsmurai.title,
      actions: [
        {
          id: 0.1,
          description: EXPERIENCE_MSN.tasks.adsmurai.one,
        },
        {
          id: 0.2,
          description: EXPERIENCE_MSN.tasks.adsmurai.two,
        },
      ],
    },
    {
      id: 1,
      company: 'Folcode',
      url: 'https://folcode.com/',
      title: EXPERIENCE_MSN.tasks.folcode.title,
      actions: [
        {
          id: 0.1,
          description: EXPERIENCE_MSN.tasks.folcode.one,
        },
        {
          id: 0.2,
          description: EXPERIENCE_MSN.tasks.folcode.two,
        },
        {
          id: 0.3,
          description: EXPERIENCE_MSN.tasks.folcode.tree,
        },
        {
          id: 0.4,
          description: EXPERIENCE_MSN.tasks.folcode.four,
        },
      ],
    },
    {
      id: 2,
      company: 'Splight',
      url: 'https://www.splight-ai.com/',
      title: EXPERIENCE_MSN.tasks.splight.title,
      actions: [
        {
          id: 0.1,
          description: EXPERIENCE_MSN.tasks.splight.one,
        },
        {
          id: 0.2,
          description: EXPERIENCE_MSN.tasks.splight.two,
        },
        {
          id: 0.3,
          description: EXPERIENCE_MSN.tasks.splight.tree,
        },
        {
          id: 0.4,
          description: EXPERIENCE_MSN.tasks.splight.four,
        },
      ],
    },
    {
      id: 3,
      company: 'Bitlogic',
      url: 'https://www.bitlogic.io/',
      title: EXPERIENCE_MSN.tasks.bitlogic.title,
      actions: [
        {
          id: 0.1,
          description: EXPERIENCE_MSN.tasks.bitlogic.one,
        },
        {
          id: 0.2,
          description: EXPERIENCE_MSN.tasks.bitlogic.two,
        },
        {
          id: 0.3,
          description: EXPERIENCE_MSN.tasks.bitlogic.tree,
        },
        {
          id: 0.4,
          description: EXPERIENCE_MSN.tasks.bitlogic.four,
        },
      ],
    },
  ],
}
export { ABOUT_ME, SKILLS, EXPERIENCE }
