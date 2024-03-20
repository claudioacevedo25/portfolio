import { PROJECTS_MSN } from 'components/modules/projects/projects.messages'

const PROJECTS = {
  title: PROJECTS_MSN.title,
  subtitle: PROJECTS_MSN.subtitle,
  projects: [
    {
      id: 0,
      name: 'Psychology Web',
      urls: {
        picture: '/psychology.webp',
        site: 'https://psicologa-rominagambino.vercel.app/',
        github: 'https://github.com/claudioacevedo25/psicologa-rominagambino',
      },
      description: PROJECTS_MSN.projects.psychology,
      technologies: [
        {
          id: 0,
          name: ' React -',
        },
        {
          id: 1,
          name: ' Next -',
        },
        {
          id: 2,
          name: ' Material UI -',
        },
        {
          id: 3,
          name: ' Vercel ',
        },
      ],
    },
    {
      id: 1,
      name: 'Travel Company',
      urls: {
        picture: 'tourism.webp',
        site: 'https://annapurna.tur.ar/',
        github: 'https://github.com/claudioacevedo25/annapurna',
      },
      description: PROJECTS_MSN.projects.travel,
      technologies: [
        {
          id: 0,
          name: ' React -',
        },
        {
          id: 1,
          name: ' Next -',
        },
        {
          id: 2,
          name: ' CSS - TypeScript ',
        },
      ],
    },
    {
      id: 2,
      name: 'Maxi Pezzotta',
      urls: {
        picture: '/ownSite.webp',
        site: '/',
        github: 'https://github.com/claudioacevedo25/portfolio',
      },
      description: PROJECTS_MSN.projects.own,
      technologies: [
        {
          id: 0,
          name: ' React -',
        },
        {
          id: 1,
          name: ' Next -',
        },
        {
          id: 2,
          name: ' TypeScript -',
        },
        {
          id: 3,
          name: ' Vercel -',
        },
        {
          id: 4,
          name: ' Material UI ',
        },
        {
          id: 5,
          name: ' React-Intl ',
        },
      ],
    },
    {
      id: 3,
      name: 'Ichoose',
      urls: {
        picture: '/gpt.webp',
        site: 'https://ichoose.vercel.app/question-answer',
        github: 'https://github.com/claudioacevedo25/ichoose',
      },
      description: PROJECTS_MSN.projects.ichoose,
      technologies: [
        {
          id: 0,
          name: ' React -',
        },
        {
          id: 1,
          name: ' Next -',
        },
        {
          id: 2,
          name: ' TypeScript -',
        },
        {
          id: 3,
          name: ' SWR -',
        },
        {
          id: 4,
          name: ' Firebase -',
        },
        {
          id: 5,
          name: ' OpenAI ',
        },
      ],
    },
    {
      id: 4,
      name: 'Pokedex',
      urls: {
        picture: '/pokedex.webp',
        site: 'https://poke-adsmurai.vercel.app/',
        github: 'https://github.com/claudioacevedo25/poke-adsmurai',
      },
      description: PROJECTS_MSN.projects.pokedex,
      technologies: [
        {
          id: 0,
          name: ' React -',
        },
        {
          id: 1,
          name: ' Next -',
        },
        {
          id: 2,
          name: ' TypeScript -',
        },
        {
          id: 3,
          name: ' SWR -',
        },
        {
          id: 4,
          name: ' Axios -',
        },
        {
          id: 5,
          name: ' Eslint - ',
        },
        {
          id: 6,
          name: ' Material UI ',
        },
      ],
    },
    {
      id: 5,
      name: 'Apple Podcast',
      urls: {
        picture: '/podcast.webp',
        site: 'https://podcast-inditex.vercel.app/',
        github: 'https://github.com/claudioacevedo25/podcast-inditex',
      },
      description: PROJECTS_MSN.projects.podcast,
      technologies: [
        {
          id: 0,
          name: ' React -',
        },
        {
          id: 1,
          name: ' Next -',
        },
        {
          id: 2,
          name: ' TypeScript -',
        },
        {
          id: 3,
          name: ' SWR -',
        },
        {
          id: 4,
          name: ' Axios -',
        },
        {
          id: 5,
          name: ' Eslint - ',
        },
        {
          id: 6,
          name: ' Material UI ',
        },
      ],
    },
  ],
}

export { PROJECTS }
