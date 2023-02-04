import { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useIntl } from 'react-intl'
import { useTheme } from '@mui/material'
import { ABOUT_ME, SKILLS } from 'constants/content'
import { MOTION_PROPS } from 'constants/motion'
import { messages } from './about.messages'
import styles from './about.module.css'

const { content } = ABOUT_ME

export const About = () => {
  const { palette } = useTheme()
  const intl = useIntl()
  const customStyles = {
    '--listStyle': palette.primary.main,
  } as CSSProperties
  return (
    <section className={styles.container} style={customStyles}>
      <div className={styles.content}>
        <motion.h1 className={styles.title} {...MOTION_PROPS} animate={{ opacity: 1, scale: 1 }}>
          {intl.formatMessage(messages.title)}
        </motion.h1>
        {content.map(({ id, content }) => (
          <motion.p
            {...MOTION_PROPS}
            transition={{ duration: 0.4 + id }}
            className={styles.description}
            key={id}>
            {intl.formatMessage(content)}
          </motion.p>
        ))}
        <ul className={styles.skills}>
          {SKILLS.map(({ id, name }) => (
            <motion.li key={id} {...MOTION_PROPS} transition={{ duration: 0.5 + id }}>
              {name}
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div className={styles.picture} {...MOTION_PROPS}>
        <Image
          src="/profile.webp"
          alt="profile-pic"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1080px) 50vw,
              33vw"
          fill
        />
      </motion.div>
    </section>
  )
}
