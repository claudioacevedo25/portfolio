import { Button, Typography, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header } from '../header'
import { ToggleColorMode } from '../context'
import { PAGES } from 'constants/pages'
import { MOTION_PROPS } from 'constants/motion'
import styles from './layout.module.css'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const isDesktop = useMediaQuery('(min-width:768px)')
  const router = useRouter()

  const navigateTo = (href: string) => router.push(href)

  return (
    <>
      <Head>
        <title>Maxi Pezzotta</title>
        <meta name="description" content="software developer" />
        <meta
          name="keywords"
          content="maximiliano pezzotta, javaScript, react,  next js, framework, github"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/code.svg" />
      </Head>
      <ToggleColorMode>
        <Header />
        <main className={styles.container}>
          {children}
          <motion.div {...MOTION_PROPS} transition={{ duration: 0.8 }} className={styles.sections}>
            {PAGES.map(({ href, title, id }) => {
              if (router.route === href) return null
              return (
                <Button
                  key={id}
                  onClick={() => navigateTo(href)}
                  variant="outlined"
                  size={`${isDesktop ? 'large' : 'small'}`}>
                  <Typography>{title}</Typography>
                </Button>
              )
            })}
          </motion.div>
        </main>
      </ToggleColorMode>
    </>
  )
}
