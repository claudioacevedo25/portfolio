import { motion } from 'framer-motion'
import { EXPERIENCE } from 'constants/content'
import styles from './experience.module.css'
import { ExperienceTabs } from './components/tabs'

const { title, subtitle } = EXPERIENCE

export const Experience = () => {
  const motionProps = {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 0.8, scale: 1 },
    transition: { duration: 0.4 },
  }

  return (
    <section className={styles.container}>
      <motion.h1 className={styles.title} {...motionProps} animate={{ opacity: 1, scale: 1 }}>
        {title}
      </motion.h1>
      <motion.p className={styles.subtitle} {...motionProps} transition={{ duration: 0.65 }}>
        {subtitle}
      </motion.p>
      <motion.div className={styles.tabContent} {...motionProps} transition={{ duration: 0.7 }}>
        <ExperienceTabs />
      </motion.div>
    </section>
  )
}
