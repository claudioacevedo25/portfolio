import { CSSProperties } from 'react'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material'
import { MOTION_PROPS } from 'constants/motion'
import styles from './contentPanel.module.css'

type Message = {
  id: string
  defaultMessage: string
}

type Props = {
  title: Message
  company: string
  url: string
  actions: { id: number; description: Message }[]
}

export const ContentPanel = ({ title, actions, company, url }: Props) => {
  const { palette } = useTheme()
  const intl = useIntl()
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
        {intl.formatMessage(title)}
      </motion.p>
      <ul className={styles.actions}>
        {actions.map(({ description, id }) => (
          <motion.li
            key={id}
            className={styles.items}
            {...MOTION_PROPS}
            transition={{ duration: 0.4 + id }}>
            {intl.formatMessage(description)}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
