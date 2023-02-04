import { motion } from 'framer-motion'
import { useIntl } from 'react-intl'
import { MOTION_PROPS } from 'constants/motion'
import styles from './projects.module.css'
import { PROJECTS } from 'constants/projects'
import { Card } from './components'

const { projects, title, subtitle } = PROJECTS

export const Projects = () => {
  const intl = useIntl()
  return (
    <section className={styles.container}>
      <motion.h1 className={styles.title} {...MOTION_PROPS} animate={{ opacity: 1, scale: 1 }}>
        {intl.formatMessage(title)}
      </motion.h1>
      <motion.p className={styles.subtitle} {...MOTION_PROPS} transition={{ duration: 0.65 }}>
        {intl.formatMessage(subtitle)}
      </motion.p>
      <div className={styles.cardContainer}>
        {projects.map((project) => (
          <motion.div key={project.id} className={styles.card} {...MOTION_PROPS}>
            <Card {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
