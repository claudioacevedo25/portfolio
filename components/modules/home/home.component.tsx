import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { CSSProperties } from 'react'
import styles from './home.module.css'

export const Home = () => {
  const isDesktop = useMediaQuery('(min-width:600px)')

  return (
    <>
      <Typography variant={`${isDesktop ? 'h1' : 'h2'}`} className={styles.title}>
        <span>Hi! I'm</span>
        <span className={styles.name}>Maxi</span>
        <span className={styles.lastName}>Pezzotta.</span>
      </Typography>
      <Typography variant={`${isDesktop ? 'h2' : 'h3'}`} className={styles.title}>
        I'm Front End Developer.
      </Typography>
    </>
  )
}
