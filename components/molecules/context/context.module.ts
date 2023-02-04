import { Language } from 'components/atoms/selectLang/selectLang.component'

export type ContextProps = {
  language: Language['value']
  mode: 'dark' | 'light'
  toggleLanguage: (value: Language['value']) => void
  toggleColorMode: () => void
}
