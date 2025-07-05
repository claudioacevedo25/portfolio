import { Button, Typography, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useIntl } from 'react-intl'
import { Header } from '../header'
import { Footer } from '../footer'
import { Resume } from 'components/modules/resume'
import { PAGES } from 'constants/pages'
import { MOTION_PROPS } from 'constants/motion'
import styles from './layout.module.css'
import { Chatbot } from 'components/atoms/chatbot'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const isDesktop = useMediaQuery('(min-width:768px)')
  const router = useRouter()
  const intl = useIntl()

  const isResumePage = router.route === '/resume'

  const navigateTo = (href: string) => {
    if (href === '/resume') return window.open('/resume', '_ blank')
    router.push(href)
  }

  if (isResumePage) return <Resume />

  return (
    <>
      <Header />
      <main className={styles.container}>
        {children}
        <motion.div {...MOTION_PROPS} transition={{ duration: 0.8 }} className={styles.sections}>
          {PAGES.map(({ href, title, id }) => {
            if (router.route === href || (router.route === '/' && href === '/projects')) return null
            return (
              <Button
                key={id}
                onClick={() => navigateTo(href)}
                variant="outlined"
                size={`${isDesktop ? 'large' : 'small'}`}>
                <Typography>{intl.formatMessage(title)}</Typography>
              </Button>
            )
          })}
        </motion.div>
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
