export type CardProps = {
  id: number
  name: string
  urls: URLs
  description: Message
  technologies: Technology[]
  projectType: ProjectType
  featured: boolean
}

export type Message = {
  id: string
  defaultMessage: string
}

export type ProjectType = 'freelance' | 'personal' | 'collaborative'

export type URLs = {
  picture: string
  site: string
  github: string
}

export type Technology = {
  id: number
  name: string
  icon?: string
  color?: string
}

export type Project = {
  id: number
  name: string
  urls: URLs
  description: Message
  technologies: Technology[]
  projectType: ProjectType
  featured: boolean
  isHidden?: boolean
}
