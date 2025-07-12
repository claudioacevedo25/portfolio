import { useEffect, useRef } from 'react'
import { useIntl } from 'react-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './projects.module.css'
import { PROJECTS } from 'constants/projects'
import { Card } from './components'

gsap.registerPlugin(ScrollTrigger)

const { projects, title, subtitle } = PROJECTS

export const Projects = () => {
  const intl = useIntl()
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const cardContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 1 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        })

        tl.fromTo(
          titleRef.current,
          {
            y: 30,
            scale: 0.9,
          },
          {
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
          },
        )
      }

      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 1 })

        gsap.fromTo(
          subtitleRef.current,
          {
            y: 20,
          },
          {
            y: 0,
            duration: 0.4,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      }

      if (cardContainerRef.current) {
        const cards = cardContainerRef.current.querySelectorAll('.projects_card__pQcPB')

        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 80,
            scale: 0.8,
            rotation: 5,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: cardContainerRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className={styles.container} aria-labelledby="projects-title">
      <h1 ref={titleRef} id="projects-title" className={styles.title}>
        {intl.formatMessage(title)}
      </h1>

      <p ref={subtitleRef} className={styles.subtitle}>
        {intl.formatMessage(subtitle)}
      </p>

      <div
        ref={cardContainerRef}
        className={styles.cardContainer}
        role="region"
        aria-label="projects-list">
        {projects.map((project) => {
          if (project.isHidden) return null
          return (
            <div
              key={project.id}
              className={styles.card}
              role="article"
              aria-labelledby={`project-${project.id}-title`}>
              <Card {...project} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
