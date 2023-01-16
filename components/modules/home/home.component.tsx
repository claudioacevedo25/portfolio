import { Button, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useRouter } from 'next/router'
import { PAGES } from 'constants/pages'
import styles from './home.module.css'

export const Home = () => {
  const isDesktop = useMediaQuery('(min-width:768px)')
  const router = useRouter()

  const navigateTo = (href: string) => router.push(href)

  return (
    <section className={styles.container}>
      <Typography variant="body1" component="h3" color="primary">
        Hi, my name is
      </Typography>
      <Typography variant={`${isDesktop ? 'h1' : 'h3'}`} className={styles.title} component="h1">
        <span />
        <span className={styles.name}>Maximiliano</span>
        <span className={styles.lastName}>Pezzotta.</span>
      </Typography>
      <Typography variant={`${isDesktop ? 'h2' : 'h4'}`} sx={{ opacity: '0.8' }}>
        I build digital solutions for the web.
      </Typography>
      <Typography
        variant={`${isDesktop ? 'h5' : 'body1'}`}
        className={styles.description}
        component="p"
        sx={{ opacity: '0.7' }}>
        I’m a software engineer (specializing Frontend) passionate in building exceptional digital
        experiences. Currently, I’m focused on building accessible, human-centered products.
      </Typography>
      <div className={styles.sections}>
        {PAGES.map(({ href, title, id }) => (
          <Button
            key={id}
            onClick={() => navigateTo(href)}
            variant="outlined"
            size={`${isDesktop ? 'large' : 'small'}`}>
            <Typography>{title}</Typography>
          </Button>
        ))}
      </div>
    </section>
  )
}
