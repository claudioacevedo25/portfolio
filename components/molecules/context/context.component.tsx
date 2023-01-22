import { useState, useMemo } from 'react'
import { Inter } from '@next/font/google'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ColorModeContext } from 'components/molecules/header/header.component'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

type Props = {
  children: React.ReactNode
}

export const ToggleColorMode = ({ children }: Props) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
      },
    }),
    [],
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
                background: {
                  default: '#0a192f', // 62C290
                  paper: '#0a192f',
                },
                primary: {
                  main: '#82D47B',
                },
              }
            : {
                primary: {
                  main: '#3991F9',
                },
              }),
        },
        typography: { fontFamily: inter.style.fontFamily },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
