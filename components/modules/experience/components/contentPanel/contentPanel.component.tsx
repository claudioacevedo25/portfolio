import { motion } from 'framer-motion'
import { MOTION_PROPS } from 'constants/motion'
import styles from './contentPanel.module.css'

type Props = {
  title: string
  actions: { id: number; description: string }[]
}

export const ContentPanel = ({ title, actions }: Props) => (
  <div className={styles.container}>
    <motion.p className={title}>{title}</motion.p>
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
