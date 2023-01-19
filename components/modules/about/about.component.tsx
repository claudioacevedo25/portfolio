import { motion } from 'framer-motion'
import Image from 'next/image'
import { ABOUT_ME, SKILLS } from 'constants/content'
import { MOTION_PROPS } from 'constants/motion'
import styles from './about.module.css'

export const About = () => (
  <section className={styles.container}>
    <div className={styles.content}>
      <motion.h1 className={styles.title} {...MOTION_PROPS} animate={{ opacity: 1, scale: 1 }}>
        About Me
      </motion.h1>
      {ABOUT_ME.map(({ id, content }) => (
        <motion.p
          {...MOTION_PROPS}
          transition={{ duration: 0.4 + id }}
          className={styles.description}
          key={id}>
          {content}
        </motion.p>
      ))}
      <ul className={styles.skills}>
        {SKILLS.map(({ id, name }) => (
          <motion.li key={id} {...MOTION_PROPS} transition={{ duration: 0.5 + id }}>
            {name}
          </motion.li>
        ))}
      </ul>
    </div>
    <motion.div className={styles.picture} {...MOTION_PROPS}>
      <Image src="/profile-pic.png" alt="profile-pic" fill />
    </motion.div>
  </section>
)
