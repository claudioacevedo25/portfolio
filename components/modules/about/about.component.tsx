import { CSSProperties, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useIntl } from 'react-intl'
import { useTheme } from '@mui/material'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { ABOUT_ME, SKILLS } from 'constants/content'
import styles from './about.module.css'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const { title, content } = ABOUT_ME

export const About = () => {
  const { palette } = useTheme()
  const intl = useIntl()

  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const paragraphsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  const isDark = palette.mode === 'dark'
  const listColor = isDark ? '#ff9f2d' : '#f98600'
  const hoverColor = isDark ? '#ff9f2d' : '#2196F3'

  const customStyles = {
    '--listStyle': listColor,
  } as CSSProperties

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(backgroundRef.current, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      titleTimeline
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'back.out(1.7)',
          },
        )
        .to(
          titleRef.current,
          {
            backgroundPosition: '200% center',
            duration: 2,
            ease: 'power2.inOut',
          },
          '-=0.5',
        )

      if (paragraphsRef.current) {
        const paragraphs = paragraphsRef.current.children
        gsap.fromTo(
          paragraphs,
          {
            opacity: 0,
            y: 30,
            x: -20,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: paragraphsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      }

      if (skillsRef.current) {
        const skills = skillsRef.current.querySelectorAll('li')
        gsap.fromTo(
          skills,
          {
            opacity: 0,
            scale: 0,
            rotation: -180,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        )

        skills.forEach((skill) => {
          skill.addEventListener('mouseenter', () => {
            gsap.to(skill, {
              scale: 1.1,
              color: hoverColor,
              y: -5,
              duration: 0.3,
              ease: 'back.out(1.7)',
            })
          })

          skill.addEventListener('mouseleave', () => {
            gsap.to(skill, {
              scale: 1,
              color: 'inherit',
              y: 0,
              duration: 0.3,
              ease: 'back.out(1.7)',
            })
          })
        })
      }

      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      imageTimeline
        .fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.5,
            rotationY: 45,
            z: -100,
          },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 1.2,
            ease: 'back.out(1.7)',
          },
        )
        .to(
          imageRef.current,
          {
            rotationY: 360,
            duration: 1,
            ease: 'power2.inOut',
          },
          '-=0.3',
        )

      gsap.to(imageRef.current, {
        y: -10,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      })

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const x = (clientX / window.innerWidth - 0.5) * 20
        const y = (clientY / window.innerHeight - 0.5) * 20

        gsap.to(imageRef.current, {
          x: x,
          y: y + -10, // Add floating offset
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }, containerRef)

    return () => ctx.revert()
  }, [hoverColor, intl])

  return (
    <section
      ref={containerRef}
      className={styles.container}
      style={customStyles}
      aria-labelledby="about-title">
      <div ref={backgroundRef} className={styles.animatedBackground}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
      </div>

      <div className={styles.content}>
        <h1 ref={titleRef} id="about-title" className={styles.title}>
          {intl.formatMessage(title)}
        </h1>

        <div ref={paragraphsRef} role="region" aria-label="Personal information">
          {content.map(({ id, content }) => (
            <p className={styles.description} key={id}>
              {intl.formatMessage(content)}
            </p>
          ))}
        </div>

        <div ref={skillsRef} role="region" aria-label="Technical skills">
          <ul className={styles.skills} role="list" aria-label="List of technologies">
            {SKILLS.map(({ id, name }) => (
              <li key={id} role="listitem">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        ref={imageRef}
        className={styles.picture}
        role="img"
        aria-label="Profile picture section">
        <Image
          src="/profile.webp"
          alt="Profile picture of Maximiliano Pezzotta, Frontend Developer specialized in React and TypeScript"
          sizes="(max-width: 768px) 16rem, (max-width: 1080px) 16rem, 18rem"
          fill
          loading="lazy"
          priority={false}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}
