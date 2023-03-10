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
        <ThemeSwitch onClick={toggleColorMode} />
        <SelectLang onClick={toggleLanguage} selectedLang={language} />
      </motion.div>
    </div>
  )
}
