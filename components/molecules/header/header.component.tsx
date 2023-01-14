import { createContext, useContext } from 'react'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'

import { ThemeSwitch } from 'components/atoms/switch'
import styles from './header.module.css'
import Link from 'next/link'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const Header = () => {
  const colorMode = useContext(ColorModeContext)
  const { palette } = useTheme()

  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={`${styles.logo} ${palette.mode === 'dark' ? styles.invert : ''}`}>
          <Image src="/code.svg" alt="code" fill />
        </div>
      </Link>
      <ThemeSwitch onClick={colorMode.toggleColorMode} />
    </div>
  )
}
