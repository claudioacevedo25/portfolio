import { motion } from 'framer-motion'
import { duration, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ABOUT_ME, SKILLS } from 'constants/content'
import Image from 'next/image'
import styles from './about.module.css'

export const About = () => {
  const isDesktop = useMediaQuery('(min-width:768px)')

  const motionProps = {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 0.8, scale: 1 },
    transition: { duration: 0.4 },
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <motion.h1 className={styles.title} {...motionProps} animate={{ opacity: 1, scale: 1 }}>
            About Me
          </motion.h1>
          {ABOUT_ME.map(({ id, content }) => (
            <motion.p
              {...motionProps}
              transition={{ duration: 0.4 + id }}
              className={styles.description}
              key={id}>
              {content}
            </motion.p>
          ))}
          <ul className={styles.skills}>
            {SKILLS.map(({ id, name }) => (
              <motion.li key={id} {...motionProps} transition={{ duration: 0.5 + id }}>
                {name}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div className={styles.picture} {...motionProps}>
          <Image src="/personal.png" alt="Selfie" fill />
        </motion.div>
      </section>
    </>
  )
}
