export type CardProps = {
  id: number
  name: string
  urls: URLs
  description: string
  technologies: Technology[]
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
