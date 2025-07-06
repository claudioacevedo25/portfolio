import { createContext, useContext, useEffect, useRef } from 'react'
import { useTheme } from '@mui/material/styles'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SOCIAL_NETWORK } from 'constants/footer'
import styles from './footer.module.css'

gsap.registerPlugin(ScrollTrigger)

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const socialListRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (socialListRef.current) {
        const socialItems = socialListRef.current.querySelectorAll('li')

        gsap.fromTo(
          socialItems,
          {
            y: 20,
            opacity: 1,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          },
        )

        socialItems.forEach((item) => {
          const icon = item.querySelector('a')
          if (icon) {
            icon.addEventListener('mouseenter', () => {
              gsap.to(item, {
                scale: 1.2,
                rotation: 10,
                y: -5,
                duration: 0.3,
                ease: 'back.out(1.7)',
              })
            })

            icon.addEventListener('mouseleave', () => {
              gsap.to(item, {
                scale: 1,
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease: 'back.out(1.7)',
              })
            })
          }
        })

        gsap.to(socialItems, {
          y: -3,
          duration: 2,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.2,
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      <ul ref={socialListRef} className={styles.socialList}>
        {SOCIAL_NETWORK.map(({ id, icon: Icon, href }) => (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read more in ${href}`}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
