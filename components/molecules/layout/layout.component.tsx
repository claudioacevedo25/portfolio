import { Button, Typography, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Header } from '../header'
import { Resume } from 'components/modules/resume'
import { PAGES } from 'constants/pages'
import { MOTION_PROPS } from 'constants/motion'
import { ToggleColorMode } from '../context'
import styles from './layout.module.css'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const isDesktop = useMediaQuery('(min-width:768px)')
  const router = useRouter()

  const isResumePage = router.route === '/resume'

  const navigateTo = (href: string) => {
    if (href === '/resume') return window.open('/resume', '_ blank')
    router.push(href)
  }

  if (isResumePage) return <Resume />

  return (
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
  )
}
