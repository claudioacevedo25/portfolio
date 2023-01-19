import { motion } from 'framer-motion'
import styles from './home.module.css'

export const Home = () => {
  const motionProps = {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 },
  }

  return (
    <section className={styles.container}>
      <motion.p {...motionProps}>Hi, my name is</motion.p>
      <motion.h1 className={styles.title} {...motionProps} transition={{ duration: 0.6 }}>
        <span />
        <span className={styles.name}>Maximiliano</span>
        <span className={styles.lastName}>Pezzotta.</span>
      </motion.h1>

      <motion.h2 className={styles.subtitle} {...motionProps} transition={{ duration: 0.65 }}>
        I build digital solutions for the web.
      </motion.h2>

      <motion.p className={styles.description} {...motionProps} transition={{ duration: 0.7 }}>
        I’m a software engineer (specializing Frontend) passionate in building exceptional digital
        experiences. Currently, I’m focused on building accessible, human-centered products.
      </motion.p>
    </section>
  )
}
