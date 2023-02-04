import { createContext, useContext } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@mui/material/styles'
import { MOTION_PROPS } from 'constants/motion'
import { ThemeSwitch } from 'components/atoms/switch'
import styles from './header.module.css'
import { SelectLang } from 'components/atoms/selectLang'
import { Language } from 'components/atoms/selectLang/selectLang.component'

const motionProps = {
  ...MOTION_PROPS,
  transition: { duration: 0.2 },
}

const LANGUAGES: Language[] = [
  { id: 1, language: 'en' },
  { id: 2, language: 'es' },
]

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const Header = () => {
  const colorMode = useContext(ColorModeContext)
  const { palette } = useTheme()

  return (
    <div className={styles.container}>
      <Link href="/">
        <motion.div
          className={`${styles.logo} ${palette.mode === 'dark' ? styles.invert : ''}`}
          {...motionProps}>
          <Image
            src="/code.svg"
            alt="code"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1080px) 50vw,
              33vw"
          />
        </motion.div>
      </Link>
      <motion.div {...motionProps} transition={{ duration: 0.4 }} className={styles.selectors}>
        <SelectLang
          languages={LANGUAGES}
          onClick={() => {}}
          selectedLang={{ id: 1, language: 'es' }}
        />
        <ThemeSwitch onClick={colorMode.toggleColorMode} />
      </motion.div>
    </div>
  )
}
