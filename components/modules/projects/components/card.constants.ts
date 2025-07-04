import { ProjectTypeConfigMap, TechColorMap } from './card.models'

export const PROJECT_TYPE_CONFIG: ProjectTypeConfigMap = {
  freelance: { color: '#FF6B35', label: 'Freelance' },
  personal: { color: '#4CAF50', label: 'Personal' },
  collaborative: { color: '#2196F3', label: 'Collaborative' },
} as const

export const TECH_COLOR_MAP: TechColorMap = {
  '#61DAFB': { light: '#1976d2', dark: '#61DAFB' }, // React
  '#000000': { light: '#1976d2', dark: '#ffffff' }, // Next.js/Negro
  '#3178C6': { light: '#1565c0', dark: '#42a5f5' }, // TypeScript
  '#007FFF': { light: '#1976d2', dark: '#64b5f6' }, // Material UI
  '#1572B6': { light: '#1565c0', dark: '#42a5f5' }, // CSS
  '#412991': { light: '#673ab7', dark: '#9c27b0' }, // OpenAI
  '#FFCA28': { light: '#f57c00', dark: '#ffb74d' }, // Firebase
  '#06B6D4': { light: '#0288d1', dark: '#4fc3f7' }, // SWR/Tailwind
  '#339933': { light: '#2e7d32', dark: '#66bb6a' }, // Node.js
} as const

export const DEFAULT_PROJECT_CONFIG = {
  color: '#9E9E9E',
  label: 'Project',
} as const

export const MAX_VISIBLE_TECHNOLOGIES = 4 as const
