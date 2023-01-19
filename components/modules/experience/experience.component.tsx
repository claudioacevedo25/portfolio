import { motion } from 'framer-motion'
import { ExperienceTabs } from './components/tabs'
import { EXPERIENCE } from 'constants/content'
import { MOTION_PROPS } from 'constants/motion'
import styles from './experience.module.css'

const { title, subtitle } = EXPERIENCE

export const Experience = () => (
  <section className={styles.container}>
    <motion.h1 className={styles.title} {...MOTION_PROPS} animate={{ opacity: 1, scale: 1 }}>
      {title}
    </motion.h1>
    <motion.p className={styles.subtitle} {...MOTION_PROPS} transition={{ duration: 0.65 }}>
      {subtitle}
    </motion.p>
    <motion.div className={styles.tabContent} {...MOTION_PROPS} transition={{ duration: 0.7 }}>
      <ExperienceTabs />
    </motion.div>
  </section>
)
