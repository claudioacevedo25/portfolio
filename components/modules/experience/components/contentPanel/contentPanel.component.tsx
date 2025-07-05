import { CSSProperties } from 'react'
import { useIntl } from 'react-intl'
import { useTheme } from '@mui/material'
import { Message } from 'components/modules/projects/projects.model'
import styles from './contentPanel.module.css'

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
      <p className={styles.title}>
        <a href={url} target="_blank">
          {company}
        </a>
        {intl.formatMessage(title)}
      </p>
      <ul className={styles.actions}>
        {actions.map(({ description, id }) => (
          <li key={id} className={styles.items}>
            {intl.formatMessage(description)}
          </li>
        ))}
      </ul>
    </div>
  )
}
