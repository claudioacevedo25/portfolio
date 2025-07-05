import { useState, useEffect, useRef } from 'react'
import { useIntl } from 'react-intl'
import { useTheme } from '@mui/material'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { EXPERIENCE } from 'constants/content'
import { EXPERIENCE_MSN } from '../../experience.messages'
import { ContentPanel } from '../contentPanel'
import styles from './tabs.module.css'

gsap.registerPlugin(ScrollTrigger)

const { companies, tasks } = EXPERIENCE

const WORK_COLORS = {
  0: '#ff9f2d',
  1: '#4CAF50',
  2: '#2196F3',
  3: '#9C27B0',
}

export const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const { palette } = useTheme()
  const intl = useIntl()

  const tabsRef = useRef<HTMLDivElement>(null)
  const activeIndicatorRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tabsRef.current) {
      const tabs = tabsRef.current.querySelectorAll('[data-tab]')

      gsap.fromTo(
        tabs,
        {
          opacity: 0,
          x: -50,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: tabsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }

    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        {
          scaleY: 0,
          transformOrigin: 'top center',
        },
        {
          scaleY: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }
  }, [])

  useEffect(() => {
    if (activeIndicatorRef.current && tabsRef.current) {
      const activeTabElement = tabsRef.current.querySelector(
        `[data-tab="${activeTab}"]`,
      ) as HTMLElement

      if (activeTabElement) {
        gsap.to(activeIndicatorRef.current, {
          y: activeTabElement.offsetTop,
          height: activeTabElement.offsetHeight,
          duration: 0.3,
          ease: 'power2.out',
        })

        gsap.to(activeIndicatorRef.current, {
          boxShadow: `0 0 20px ${WORK_COLORS[activeTab as keyof typeof WORK_COLORS]}`,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    if (contentRef.current) {
      const tl = gsap.timeline()

      tl.to(contentRef.current, {
        opacity: 0,
        x: 20,
        duration: 0.2,
        ease: 'power2.in',
      })
        .set(contentRef.current, {
          x: -20,
        })
        .to(contentRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: 'back.out(1.7)',
        })
    }
  }, [activeTab])

  const handleTabClick = (index: number) => {
    if (index === activeTab) return

    const tabElement = tabsRef.current?.querySelector(`[data-tab="${index}"]`)
    if (tabElement) {
      gsap.to(tabElement, {
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(tabElement, {
            scale: 1,
            duration: 0.1,
            ease: 'power2.out',
          })
        },
      })
    }

    setActiveTab(index)
  }

  const getPeriodForCompany = (companyName: string) => {
    const companyPeriods = {
      Adsmurai: EXPERIENCE_MSN.periods.adsmurai,
      Folcode: EXPERIENCE_MSN.periods.folcode,
      Splight: EXPERIENCE_MSN.periods.splight,
      Bitlogic: EXPERIENCE_MSN.periods.bitlogic,
    }
    return companyPeriods[companyName as keyof typeof companyPeriods]
  }

  return (
    <div className={styles.container}>
      <div ref={timelineRef} className={styles.timeline} />

      <div ref={tabsRef} className={styles.tabs}>
        <div
          ref={activeIndicatorRef}
          className={styles.activeIndicator}
          style={{
            backgroundColor: WORK_COLORS[activeTab as keyof typeof WORK_COLORS],
          }}
        />

        {companies.map((company, index) => {
          const isActive = index === activeTab
          const workColor = WORK_COLORS[index as keyof typeof WORK_COLORS]

          return (
            <button
              key={company.id}
              data-tab={index}
              className={`${styles.tab} ${isActive ? styles.active : ''}`}
              onClick={() => handleTabClick(index)}
              style={{
                color: isActive ? workColor : palette.text.primary,
                borderColor: isActive ? workColor : 'transparent',
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${index}`}
              id={`tab-${index}`}>
              <div className={styles.tabContent}>
                <span className={styles.company}>{company.name}</span>
                <span className={styles.period}>
                  {intl.formatMessage(getPeriodForCompany(company.name))}
                </span>
              </div>

              <div
                className={styles.tabDot}
                style={{
                  backgroundColor: isActive ? workColor : palette.text.secondary,
                }}
              />
            </button>
          )
        })}
      </div>

      <div ref={contentRef} className={styles.content}>
        <div
          key={activeTab}
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}>
          <ContentPanel {...tasks[activeTab]} />
        </div>
      </div>
    </div>
  )
}
