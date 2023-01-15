import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ABOUT_ME, SKILLS } from 'constants/content'
import Image from 'next/image'
import styles from './about.module.css'

export const About = () => {
  const isDesktop = useMediaQuery('(min-width:600px)')

  return (
    <>
      <Typography variant="h5" component="h1" className={styles.title}>
        About Me
      </Typography>
      <section className={styles.container}>
        {ABOUT_ME.map(({ id, content }) => (
          <Typography variant="body1" className={styles.description} key={id}>
            {content}
          </Typography>
        ))}
        <ul className={styles.skills}>
          {SKILLS.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <div className={styles.picture}>
          <Image
            src="/personal.png"
            alt="Selfie"
            fill
            placeholder="blur"
            blurDataURL="L%Oo-e%M_NI:l9M{xasorrflNFtR"
          />
        </div>
      </section>
    </>
  )
}
