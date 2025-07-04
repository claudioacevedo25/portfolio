import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@mui/material/styles'
import { MOTION_PROPS } from 'constants/motion'
import { ThemeSwitch } from 'components/atoms/switch'
import styles from './header.module.css'
import { SelectLang } from 'components/atoms/selectLang'
import { useAppContext } from '../context/context.component'

const motionProps = {
  ...MOTION_PROPS,
  transition: { duration: 0.2 },
}

export const Header = () => {
  const { toggleColorMode, toggleLanguage, language } = useAppContext()
  const { palette } = useTheme()

  return (
    <header className={styles.container} role="banner">
      <Link href="/" aria-label="Go to home page">
        <motion.div
          className={`${styles.logo} ${palette.mode === 'dark' ? styles.invert : ''}`}
          {...motionProps}
          role="img"
          aria-label="Logo - Icon representing the portfolio of Maximiliano Pezzotta">
          <Image
            src="/code.svg"
            alt="Logo - Icon representing the portfolio of Maximiliano Pezzotta"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1080px) 50vw, 33vw"
            priority
          />
        </motion.div>
      </Link>

      <motion.nav
        {...motionProps}
        transition={{ duration: 0.4 }}
        className={styles.selectors}
        role="navigation"
        aria-label="Theme and language selector">
        <ThemeSwitch
          onClick={toggleColorMode}
          aria-label={`Change to ${palette.mode === 'dark' ? 'light' : 'dark'} theme`}
        />
        <SelectLang
          onClick={toggleLanguage}
          selectedLang={language}
          aria-label="Language selector"
        />
      </motion.nav>
    </header>
  )
}
