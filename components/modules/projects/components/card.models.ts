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
  title: string
  type: ProjectType
  typeConfig: ProjectTypeConfig
}

export interface ActionButtonProps {
  href: string
  icon: React.ComponentType
  label: string
  palette: MaterialUIPalette
}

export interface ProjectActionsProps {
  urls: ProjectUrls
  palette: MaterialUIPalette
}

export interface FeaturedBadgeProps {
  isFeatured?: boolean
}

export type ProjectTypeConfigMap = Record<ProjectType, ProjectTypeConfig>
export type TechColorMap = Record<string, TechColorConfig>

export interface ChipStylesReturn {
  borderColor?: string
  color?: string
  backgroundColor?: string
}
