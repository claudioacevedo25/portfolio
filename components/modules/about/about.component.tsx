import { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useIntl } from 'react-intl'
import { useTheme } from '@mui/material'
import { ABOUT_ME, SKILLS } from 'constants/content'
import { STAGGER_CONTAINER, STAGGER_ITEM } from 'constants/motion'
import styles from './about.module.css'

const { title, content } = ABOUT_ME

export const About = () => {
  const { palette } = useTheme()
  const intl = useIntl()

  const isDark = palette.mode === 'dark'
  const listColor = isDark ? '#ff9f2d' : '#f98600'
  const hoverColor = isDark ? '#ff9f2d' : '#2196F3'

  const customStyles = {
    '--listStyle': listColor,
  } as CSSProperties

  return (
    <section className={styles.container} style={customStyles} aria-labelledby="about-title">
      <div className={styles.content}>
        <motion.h1
          id="about-title"
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}>
          {intl.formatMessage(title)}
        </motion.h1>

        <motion.div
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          role="region"
          aria-label="Personal information">
          {content.map(({ id, content }) => (
            <motion.p variants={STAGGER_ITEM} className={styles.description} key={id}>
              {intl.formatMessage(content)}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          role="region"
          aria-label="Technical skills">
          <ul className={styles.skills} role="list" aria-label="List of technologies">
            {SKILLS.map(({ id, name }) => (
              <motion.li
                key={id}
                variants={STAGGER_ITEM}
                whileHover={{
                  scale: 1.05,
                  color: hoverColor,
                  transition: { duration: 0.2 },
                }}
                animate={{
                  color: 'inherit',
                }}
                role="listitem">
                {name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        className={styles.picture}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        whileHover={{ scale: 1.05 }}
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
      </motion.div>
    </section>
  )
}
