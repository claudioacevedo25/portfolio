import { motion } from 'framer-motion'
import { Button, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useRouter } from 'next/router'
import { PAGES } from 'constants/pages'
import styles from './home.module.css'

export const Home = () => {
  const isDesktop = useMediaQuery('(min-width:768px)')
  const router = useRouter()

  const motionProps = {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 },
  }

  const navigateTo = (href: string) => router.push(href)

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
      <motion.div {...motionProps} transition={{ duration: 0.8 }} className={styles.sections}>
        {PAGES.map(({ href, title, id }) => (
          <Button
            key={id}
            onClick={() => navigateTo(href)}
            variant="outlined"
            size={`${isDesktop ? 'large' : 'small'}`}>
            <Typography>{title}</Typography>
          </Button>
        ))}
      </motion.div>
    </section>
  )
}
