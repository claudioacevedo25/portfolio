import { useState, useMemo, createContext, useContext, useEffect } from 'react'
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

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  }

  return 'dark'
}

const getInitialLanguage = (): Language['value'] => {
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('language')
    if (savedLang === 'en' || savedLang === 'es') {
      return savedLang
    }

    const browserLang = navigator.language.toLowerCase()
    if (browserLang.includes('es')) {
      return 'es'
    }
  }

  return 'en'
}

const defaultValues: ContextProps = {
  toggleColorMode: () => {},
  toggleLanguage: () => {},
  language: 'en' as Language['value'],
  mode: 'dark',
}

const AppContext = createContext(defaultValues)

export const Context = ({ children }: Props) => {
  const [appState, setAppState] = useState<ContextProps>({
    ...defaultValues,
    mode: getInitialTheme(),
    language: getInitialLanguage(),
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    setAppState((prev) => ({
      ...prev,
      mode: getInitialTheme(),
      language: getInitialLanguage(),
    }))

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setAppState((prev) => ({
          ...prev,
          mode: e.matches ? 'dark' : 'light',
        }))
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleLanguage = (language: ContextProps['language']) => {
    setAppState((prevState) => ({ ...prevState, language }))
    localStorage.setItem('language', language)
  }

  const toggleColorMode = () => {
    setAppState((prevState) => {
      const newMode = prevState.mode === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', newMode)
      return {
        ...prevState,
        mode: newMode,
      }
    })
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
                background: {
                  default: '#0a0a0a',
                  paper: '#1a1a1a',
                },
              }
            : {
                primary: {
                  main: '#f98600',
                },
                background: {
                  default: '#ffffff',
                  paper: '#f8f9fa',
                },
              }),
        },
        typography: { fontFamily: inter.style.fontFamily },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '50px',
                textTransform: 'none',
                fontWeight: 600,
              },
            },
          },
        },
      }),
    [appState.mode],
  )

  const contextValue = useMemo(() => ({ ...appState, toggleLanguage, toggleColorMode }), [appState])

  if (!mounted) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IntlProvider locale="en" messages={messages['en']}>
          {children}
        </IntlProvider>
      </ThemeProvider>
    )
  }

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
