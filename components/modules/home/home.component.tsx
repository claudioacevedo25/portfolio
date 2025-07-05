import { useTheme } from '@mui/material'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { HOME_MSN } from './home.messages'
import styles from './home.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin, ScrollTrigger)
}

const { greeting, subtitle, title, cta } = HOME_MSN

export const Home = () => {
  const { palette } = useTheme()
  const intl = useIntl()
  const router = useRouter()
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const greetingRef = useRef<HTMLParagraphElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const lastNameRef = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  const handleToNavigation = () => {
    if (ctaRef.current) {
      gsap.to(ctaRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out',
        onComplete: () => {
          router.push('/projects')
        },
      })
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      tl.fromTo(
        greetingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' },
      )

      tl.fromTo(
        [nameRef.current, lastNameRef.current],
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.2,
        },
      )

      tl.to(subtitleRef.current, {
        text: intl.formatMessage(title),
        duration: 1.2,
        ease: 'none',
        onComplete: () => setIsTypingComplete(true),
      })

      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      )

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      )

      gsap.to(ctaRef.current, {
        y: -5,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      })

      if (containerRef.current) {
        gsap.to(containerRef.current, {
          y: -100,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }

      if (particlesRef.current) {
        const particles = particlesRef.current.children
        Array.from(particles).forEach((particle, index) => {
          gsap.to(particle, {
            y: -20,
            x: Math.random() * 40 - 20,
            rotation: Math.random() * 360,
            duration: 3 + Math.random() * 2,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1,
            delay: index * 0.5,
          })
        })
      }

      gsap.to(nameRef.current, {
        backgroundPosition: '200% center',
        duration: 1.5,
        ease: 'power2.inOut',
        repeat: -1,
        repeatDelay: 3,
      })

      gsap.to(lastNameRef.current, {
        backgroundPosition: '200% center',
        duration: 1.5,
        ease: 'power2.inOut',
        repeat: -1,
        repeatDelay: 3,
        delay: 1.5,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [intl, title])

  return (
    <div className={styles.heroContainer} ref={containerRef}>
      <div className={styles.animatedBackground} ref={backgroundRef}>
        <div className={styles.floatingShapes}>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
        </div>
      </div>

      <div className={styles.particles} ref={particlesRef}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={styles.particle} />
        ))}
      </div>

      <section className={styles.container} role="main" aria-label="home-section">
        <div className={styles.content}>
          <p ref={greetingRef} className={styles.greeting} role="text" aria-label="home-greeting">
            {intl.formatMessage(greeting)}
          </p>

          <h1 className={styles.title} role="heading" aria-level={1} aria-label="home-title">
            <span ref={nameRef} className={styles.name} aria-label="Maximiliano">
              Maximiliano
            </span>
            <span ref={lastNameRef} className={styles.lastName} aria-label="Pezzotta">
              Pezzotta.
            </span>
          </h1>

          <h2
            ref={subtitleRef}
            className={`${styles.subtitle} ${isTypingComplete ? styles.typingComplete : ''}`}
            role="heading"
            aria-level={2}
            aria-label="home-subtitle"></h2>

          <p
            ref={descriptionRef}
            className={styles.description}
            role="text"
            aria-label="home-description">
            {intl.formatMessage(subtitle)}
          </p>

          <div className={styles.ctaContainer} role="region" aria-label="home-actions">
            <button
              ref={ctaRef}
              onClick={handleToNavigation}
              className={styles.ctaButton}
              aria-label="home-cta"
              style={{
                backgroundColor: palette.primary.main,
                color: palette.mode === 'dark' ? '#000' : '#fff',
              }}>
              {intl.formatMessage(cta)}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
