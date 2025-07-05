import { useEffect, useRef } from 'react'
import { Button, Typography, useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Header } from '../header'
import { Footer } from '../footer'
import { Resume } from 'components/modules/resume'
import { PAGES } from 'constants/pages'
import styles from './layout.module.css'
import { Chatbot } from 'components/atoms/chatbot'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const isDesktop = useMediaQuery('(min-width:768px)')
  const router = useRouter()
  const intl = useIntl()
  const sectionsRef = useRef<HTMLDivElement>(null)

  const isResumePage = router.route === '/resume'

  useEffect(() => {
    if (isResumePage) return

    const ctx = gsap.context(() => {
      if (sectionsRef.current) {
        const buttons = sectionsRef.current.querySelectorAll('button')

        // Animación de entrada más simple sin ScrollTrigger
        gsap.fromTo(
          buttons,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.2,
          },
        )

        buttons.forEach((button) => {
          button.addEventListener('mouseenter', () => {
            gsap.to(button, {
              scale: 1.03,
              y: -2,
              duration: 0.2,
              ease: 'power2.out',
            })
          })

          button.addEventListener('mouseleave', () => {
            gsap.to(button, {
              scale: 1,
              y: 0,
              duration: 0.2,
              ease: 'power2.out',
            })
          })
        })
      }
    }, sectionsRef)

    return () => ctx.revert()
  }, [isResumePage, router.route])

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
        <div ref={sectionsRef} className={styles.sections}>
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
        </div>
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
