import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import { ProjectType } from '../projects.model'

export interface ProjectTypeConfig {
  color: string
  label: string
}

export interface TechColorConfig {
  light: string
  dark: string
}

export interface Technology {
  id: number
  name: string
  icon?: string
  color?: string
}

export interface ProjectUrls {
  site: string
  github: string
  picture: string
}

export interface MaterialUIPalette {
  mode: 'light' | 'dark'
  primary: {
    main: string
  }
  text: {
    primary: string
    secondary: string
  }
}

export interface TechChipProps {
  tech: Technology
  palette: MaterialUIPalette
}

export interface TechnologyStackProps {
  technologies: Technology[]
  palette: MaterialUIPalette
}

export interface ProjectHeaderProps {
  name: string
  projectType: ProjectType
}

export interface ActionButtonProps {
  href: string
  target: string
  ariaLabel: string
  color: string
  children: ReactNode
}

export interface ProjectActionsProps {
  name: string
  urls: Pick<ProjectUrls, 'site' | 'github'>
  palette: MaterialUIPalette
}

export interface FeaturedBadgeProps {
  palette: MaterialUIPalette
}

export type ProjectTypeConfigMap = Record<ProjectType, ProjectTypeConfig>
export type TechColorMap = Record<string, TechColorConfig>

export interface ChipStylesReturn {
  borderColor: string
  color: string
}
