import { PROJECTS_MSN } from 'components/modules/projects/projects.messages'
import { Project } from 'components/modules/projects/projects.model'

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
      projectType: 'freelance',
      featured: false,
      technologies: [
        {
          id: 0,
          name: 'React',
          icon: '⚛️',
          color: '#61DAFB',
        },
        {
          id: 1,
          name: 'Next.js',
          icon: '▲',
          color: '#000000',
        },
        {
          id: 2,
          name: 'Material UI',
          icon: '🎨',
          color: '#007FFF',
        },
        {
          id: 3,
          name: 'Vercel',
          icon: '▲',
          color: '#000000',
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
      projectType: 'freelance',
      featured: false,
      technologies: [
        {
          id: 0,
          name: 'React',
          icon: '⚛️',
          color: '#61DAFB',
        },
        {
          id: 1,
          name: 'Next.js',
          icon: '▲',
          color: '#000000',
        },
        {
          id: 2,
          name: 'TypeScript',
          icon: '📘',
          color: '#3178C6',
        },
        {
          id: 3,
          name: 'CSS',
          icon: '🎨',
          color: '#1572B6',
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
      projectType: 'personal',
      featured: false,
      technologies: [
        {
          id: 0,
          name: 'React',
          icon: '⚛️',
          color: '#61DAFB',
        },
        {
          id: 1,
          name: 'Next.js',
          icon: '▲',
          color: '#000000',
        },
        {
          id: 2,
          name: 'TypeScript',
          icon: '📘',
          color: '#3178C6',
        },
        {
          id: 3,
          name: 'Material UI',
          icon: '🎨',
          color: '#007FFF',
        },
      ],
    },
    {
      id: 3,
      name: 'Pokedex App',
      urls: {
        picture: '/pokedex.webp',
        site: 'https://poke-adsmurai.vercel.app/',
        github: 'https://github.com/claudioacevedo25/poke-adsmurai',
      },
      description: PROJECTS_MSN.projects.pokedex,
      projectType: 'personal',
      featured: false,
      technologies: [
        {
          id: 0,
          name: 'React',
          icon: '⚛️',
          color: '#61DAFB',
        },
        {
          id: 1,
          name: 'TypeScript',
          icon: '📘',
          color: '#3178C6',
        },
        {
          id: 2,
          name: 'SWR',
          icon: '🔄',
          color: '#000000',
        },
        {
          id: 3,
          name: 'Material UI',
          icon: '🎨',
          color: '#007FFF',
        },
      ],
    },
    {
      id: 4,
      name: 'iChoose AI',
      urls: {
        picture: '/gpt.webp',
        site: 'https://ichoose.vercel.app/question-answer',
        github: 'https://github.com/claudioacevedo25/ichoose',
      },
      description: PROJECTS_MSN.projects.ichoose,
      projectType: 'personal',
      featured: true,
      technologies: [
        {
          id: 0,
          name: 'React',
          icon: '⚛️',
          color: '#61DAFB',
        },
        {
          id: 1,
          name: 'Next.js',
          icon: '▲',
          color: '#000000',
        },
        {
          id: 2,
          name: 'OpenAI',
          icon: '🤖',
          color: '#412991',
        },
        {
          id: 3,
          name: 'Firebase',
          icon: '🔥',
          color: '#FFCA28',
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
      projectType: 'personal',
      featured: false,
      technologies: [
        {
          id: 0,
          name: 'React',
          icon: '⚛️',
          color: '#61DAFB',
        },
        {
          id: 1,
          name: 'Next.js',
          icon: '▲',
          color: '#000000',
        },
        {
          id: 2,
          name: 'TypeScript',
          icon: '📘',
          color: '#3178C6',
        },
        {
          id: 3,
          name: 'SWR',
          icon: '🔄',
          color: '#06B6D4',
        },
      ],
    },
  ] as Project[],
}

export { PROJECTS }
