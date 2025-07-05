export const PROJECT_TYPE_CONFIG = {
  freelance: {
    label: 'Freelance',
    color: '#ff9f2d',
  },
  personal: {
    label: 'Personal',
    color: '#4CAF50',
  },
  collaborative: {
    label: 'Colaborativo',
    color: '#2196F3',
  },
} as const

export const TECH_COLOR_MAP = {
  blue: {
    light: '#2196F3',
    dark: '#64B5F6',
  },
  green: {
    light: '#4CAF50',
    dark: '#81C784',
  },
  orange: {
    light: '#ff9f2d',
    dark: '#FFB74D',
  },
  red: {
    light: '#F44336',
    dark: '#E57373',
  },
  purple: {
    light: '#9C27B0',
    dark: '#BA68C8',
  },
  cyan: {
    light: '#00BCD4',
    dark: '#4DD0E1',
  },
  pink: {
    light: '#E91E63',
    dark: '#F06292',
  },
  yellow: {
    light: '#FFC107',
    dark: '#FFD54F',
  },
  indigo: {
    light: '#3F51B5',
    dark: '#7986CB',
  },
  teal: {
    light: '#009688',
    dark: '#4DB6AC',
  },
  lime: {
    light: '#8BC34A',
    dark: '#AED581',
  },
  amber: {
    light: '#FFC107',
    dark: '#FFCC02',
  },
  'deep-orange': {
    light: '#FF5722',
    dark: '#FF8A65',
  },
  'deep-purple': {
    light: '#673AB7',
    dark: '#9575CD',
  },
  'light-blue': {
    light: '#03A9F4',
    dark: '#4FC3F7',
  },
  'light-green': {
    light: '#8BC34A',
    dark: '#AED581',
  },
} as const

export const DEFAULT_PROJECT_CONFIG = {
  label: 'Proyecto',
  color: '#757575',
} as const

export const MAX_VISIBLE_TECHNOLOGIES = 5 as const
