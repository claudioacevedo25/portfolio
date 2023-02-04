import { useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { useIntl } from 'react-intl'
import { MOTION_PROPS } from 'constants/motion'
import { messages } from './home.messages'
import styles from './home.module.css'

const { greeting, subtitle, title } = messages

export const Home = () => {
  const { palette } = useTheme()
  const intl = useIntl()
  return (
    <section className={styles.container}>
      <motion.p {...MOTION_PROPS} style={{ color: palette.primary.main }}>
        {intl.formatMessage(greeting)}
      </motion.p>
      <motion.h1 className={styles.title} {...MOTION_PROPS} transition={{ duration: 0.6 }}>
        <span />
        <span className={styles.name}>Maximiliano</span>
        <span className={styles.lastName}>Pezzotta.</span>
      </motion.h1>

      <motion.h2 className={styles.subtitle} {...MOTION_PROPS} transition={{ duration: 0.65 }}>
        {intl.formatMessage(title)}
      </motion.h2>

      <motion.p className={styles.description} {...MOTION_PROPS} transition={{ duration: 0.7 }}>
        {intl.formatMessage(subtitle)}
      </motion.p>
    </section>
  )
}
