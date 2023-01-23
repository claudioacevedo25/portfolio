import { useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { MOTION_PROPS } from 'constants/motion'
import styles from './home.module.css'

export const Home = () => {
  const { palette } = useTheme()
  return (
    <section className={styles.container}>
      <motion.p {...MOTION_PROPS} style={{ color: palette.primary.main }}>
        Hi, my name is
      </motion.p>
      <motion.h1 className={styles.title} {...MOTION_PROPS} transition={{ duration: 0.6 }}>
        <span />
        <span className={styles.name}>Maximiliano</span>
        <span className={styles.lastName}>Pezzotta.</span>
      </motion.h1>

      <motion.h2 className={styles.subtitle} {...MOTION_PROPS} transition={{ duration: 0.65 }}>
        I build digital solutions for the web.
      </motion.h2>

      <motion.p className={styles.description} {...MOTION_PROPS} transition={{ duration: 0.7 }}>
        I’m a software engineer (specializing Frontend) passionate in building exceptional digital
        experiences. Currently, I’m focused on building accessible, human-centered products.
      </motion.p>
    </section>
  )
}
