import { motion } from 'framer-motion'
import { useIntl } from 'react-intl'
import { STAGGER_CONTAINER, STAGGER_ITEM } from 'constants/motion'
import styles from './projects.module.css'
import { PROJECTS } from 'constants/projects'
import { Card } from './components'

const { projects, title, subtitle } = PROJECTS
const OWN_PROJECT_ID = 2

export const Projects = () => {
  const intl = useIntl()
  return (
    <section className={styles.container} aria-labelledby="projects-title">
      <motion.h1
        id="projects-title"
        className={styles.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}>
        {intl.formatMessage(title)}
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}>
        {intl.formatMessage(subtitle)}
      </motion.p>

      <motion.div
        className={styles.cardContainer}
        variants={STAGGER_CONTAINER}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        role="region"
        aria-label="projects-list">
        {projects.map((project) => {
          if (project.id === OWN_PROJECT_ID) return null
          return (
            <motion.div
              key={project.id}
              className={styles.card}
              variants={STAGGER_ITEM}
              role="article"
              aria-labelledby={`project-${project.id}-title`}>
              <Card {...project} />
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
