import { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material'
import { MOTION_PROPS } from 'constants/motion'
import styles from './contentPanel.module.css'

type Props = {
  title: string
  company: string
  url: string
  actions: { id: number; description: string }[]
}

export const ContentPanel = ({ title, actions, company, url }: Props) => {
  const { palette } = useTheme()
  const customStyles = {
    '--anchorColor': palette.primary.main,
    '--listStyle': palette.primary.main,
  } as CSSProperties
  return (
    <div className={styles.container} style={customStyles}>
      <motion.p className={styles.title}>
        <a href={url} target="_blank">
          {company}
        </a>
        {title}
      </motion.p>
      <ul className={styles.actions}>
        {actions.map(({ description, id }) => (
          <motion.li
            key={id}
            className={styles.items}
            {...MOTION_PROPS}
            transition={{ duration: 0.4 + id }}>
            {description}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
