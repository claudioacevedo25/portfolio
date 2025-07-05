import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@mui/material/styles'
import { gsap } from 'gsap'
import { ThemeSwitch } from 'components/atoms/switch'
import styles from './header.module.css'
import { SelectLang } from 'components/atoms/selectLang'
import { useAppContext } from '../context/context.component'

export const Header = () => {
  const { toggleColorMode, toggleLanguage, language } = useAppContext()
  const { palette } = useTheme()
  const logoRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        logoRef.current,
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
        },
      ).fromTo(
        navRef.current,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4',
      )

      if (logoRef.current) {
        logoRef.current.addEventListener('mouseenter', () => {
          gsap.to(logoRef.current, {
            scale: 1.1,
            rotation: 10,
            duration: 0.3,
            ease: 'power2.out',
          })
        })

        logoRef.current.addEventListener('mouseleave', () => {
          gsap.to(logoRef.current, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out',
          })
        })
      }

      gsap.to(logoRef.current, {
        y: -5,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, logoRef)

    return () => ctx.revert()
  }, [])

  return (
    <header className={styles.container} role="banner">
      <Link href="/" aria-label="Go to home page">
        <div
          ref={logoRef}
          className={`${styles.logo} ${palette.mode === 'dark' ? styles.invert : ''}`}
          role="img"
          aria-label="Logo - Icon representing the portfolio of Maximiliano Pezzotta">
          <Image
            src="/code.svg"
            alt="Logo - Icon representing the portfolio of Maximiliano Pezzotta"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1080px) 50vw, 33vw"
            priority
          />
        </div>
      </Link>

      <nav
        ref={navRef}
        className={styles.selectors}
        role="navigation"
        aria-label="Theme and language selector">
        <ThemeSwitch
          onClick={toggleColorMode}
          aria-label={`Change to ${palette.mode === 'dark' ? 'light' : 'dark'} theme`}
        />
        <SelectLang
          onClick={toggleLanguage}
          selectedLang={language}
          aria-label="Language selector"
        />
      </nav>
    </header>
  )
}
