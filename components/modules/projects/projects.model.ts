export type CardProps = {
  id: number
  name: string
  urls: URLs
  description: Message
  technologies: Technology[]
}

export type Message = {
  id: string
  defaultMessage: string
}

type URLs = {
  picture: string
  site: string
  github: string
}

type Technology = {
  id: number
  name: string
}
