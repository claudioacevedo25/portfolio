import { useState, useMemo, createContext, useContext } from 'react'
import { Inter } from '@next/font/google'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { IntlProvider } from 'react-intl'
import messages from 'translations'
import { Language } from 'components/atoms/selectLang/selectLang.component'
import { ContextProps } from './context.module'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

type Props = {
  children: React.ReactNode
}

const defaultValues: ContextProps = {
  toggleColorMode: () => {},
  toggleLanguage: () => {},
  language: 'en' as Language['value'],
  mode: 'dark',
}

const AppContext = createContext(defaultValues)

export const Context = ({ children }: Props) => {
  const [appState, setAppState] = useState<ContextProps>(defaultValues)

  const toggleLanguage = (language: ContextProps['language']) => {
    setAppState((prevState) => ({ ...prevState, language }))
  }

  const toggleColorMode = () => {
    setAppState((prevState) => ({
      ...prevState,
      mode: prevState.mode === 'dark' ? 'light' : 'dark',
    }))
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: appState.mode,
          ...(appState.mode === 'dark'
            ? {
                primary: {
                  main: '#ff9f2d',
                },
              }
            : {
                primary: {
                  main: '#f98600',
                },
              }),
        },
        typography: { fontFamily: inter.style.fontFamily },
      }),
    [appState.mode],
  )

  const contextValue = useMemo(() => ({ ...appState, toggleLanguage, toggleColorMode }), [appState])

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IntlProvider locale={contextValue.language} messages={messages[contextValue.language]}>
          {children}
        </IntlProvider>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
