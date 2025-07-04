import { useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { useIntl } from 'react-intl'
import { HOME_MSN } from './home.messages'
import styles from './home.module.css'
import { useRouter } from 'next/router'

const { greeting, subtitle, title, cta } = HOME_MSN

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const Home = () => {
  const { palette } = useTheme()
  const intl = useIntl()
  const router = useRouter()

  const handleToNavigation = () => {
    router.push('/projects')
  }

  return (
    <motion.section
      className={styles.container}
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      role="main"
      aria-label="home-section">
      <motion.p
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={styles.greeting}
        role="text"
        aria-label="home-greeting">
        {intl.formatMessage(greeting)}
      </motion.p>

      <motion.h1
        className={styles.title}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        role="heading"
        aria-level={1}
        aria-label="home-title">
        <span aria-hidden="true" />
        <span className={styles.name} aria-label="Maximiliano">
          Maximiliano
        </span>
        <span className={styles.lastName} aria-label="Pezzotta">
          Pezzotta.
        </span>
      </motion.h1>

      <motion.h2
        className={styles.subtitle}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        role="heading"
        aria-level={2}
        aria-label="home-subtitle">
        {intl.formatMessage(title)}
      </motion.h2>

      <motion.p
        className={styles.description}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        role="text"
        aria-label="home-description">
        {intl.formatMessage(subtitle)}
      </motion.p>

      <motion.div
        className={styles.ctaContainer}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        role="region"
        aria-label="home-actions">
        <button
          onClick={handleToNavigation}
          className={styles.ctaButton}
          aria-label="home-cta"
          style={{
            backgroundColor: palette.primary.main,
            color: palette.mode === 'dark' ? '#000' : '#fff',
          }}>
          {intl.formatMessage(cta)}
        </button>
      </motion.div>
    </motion.section>
  )
}
