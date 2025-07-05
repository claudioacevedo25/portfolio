import { useIntl } from 'react-intl'
import { EXPERIENCE } from 'constants/content'
import { ExperienceTabs } from './components/tabs'
import styles from './experience.module.css'

const { title, subtitle } = EXPERIENCE

export const Experience = () => {
  const intl = useIntl()
  return (
    <section className={styles.container} aria-labelledby="experience-title">
      <h1 id="experience-title" className={styles.title}>
        {intl.formatMessage(title)}
      </h1>

      <p className={styles.subtitle}>{intl.formatMessage(subtitle)}</p>

      <div className={styles.tabsContainer} role="region" aria-label="work-experience">
        <ExperienceTabs />
      </div>
    </section>
  )
}
