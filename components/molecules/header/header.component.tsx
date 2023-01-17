import { createContext, useContext } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'

import { ThemeSwitch } from 'components/atoms/switch'
import styles from './header.module.css'
import Link from 'next/link'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const Header = () => {
  const colorMode = useContext(ColorModeContext)
  const { palette } = useTheme()

  const motionProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.2 },
  }

  return (
    <div className={styles.container}>
      <Link href="/">
        <motion.div
          className={`${styles.logo} ${palette.mode === 'dark' ? styles.invert : ''}`}
          {...motionProps}>
          <Image src="/code.svg" alt="code" fill />
        </motion.div>
      </Link>
      <motion.div {...motionProps} transition={{ duration: 0.4 }}>
        <ThemeSwitch onClick={colorMode.toggleColorMode} />
      </motion.div>
    </div>
  )
}
