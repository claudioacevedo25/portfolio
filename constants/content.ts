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
  title: EXPERIENCE_MSN.title,
  subtitle: EXPERIENCE_MSN.subtitle,
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
      id: 1,
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
      id: 2,
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
