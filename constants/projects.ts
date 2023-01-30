const PROJECTS = {
  title: 'Projects',
  subtitle:
    'Here, you will find a collection of my work. To give you a complete understanding of my capabilities, I have made both the live websites and the corresponding source code available on GitHub.',
  projects: [
    {
      id: 0,
      name: 'Psychology Web',
      urls: {
        picture: '/psychology.webp',
        site: 'https://psicologa-rominagambino.vercel.app/',
        github: 'https://github.com/claudioacevedo25/psicologa-rominagambino',
      },
      description:
        'Site for the psychology professional. Contact, information, data are some of the sections.',
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
      description: 'Landing page for a tourism company. With relevant and contact information.',
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
      description: 'My own web site.',
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
      ],
    },
  ],
}

export { PROJECTS }
