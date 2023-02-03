import { createContext, useContext } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import { MOTION_PROPS } from 'constants/motion'
import { SOCIAL_NETWORK } from 'constants/footer'
import styles from './footer.module.css'

const motionProps = {
  ...MOTION_PROPS,
  transition: { duration: 0.2 },
}

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const Footer = () => {
  const colorMode = useContext(ColorModeContext)
  const { palette } = useTheme()

  return (
    <div className={styles.container}>
      <ul className={styles.socialList}>
        {SOCIAL_NETWORK.map(({ id, icon: Icon, href, title }) => (
          <motion.li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read more in ${href}`}>
              <Icon />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
