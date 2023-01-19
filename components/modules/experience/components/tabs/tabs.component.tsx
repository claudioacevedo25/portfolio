import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useMediaQuery } from '@mui/material'
import { ContentPanel } from '../contentPanel'
import { EXPERIENCE } from 'constants/content'
import styles from './tabs.module.css'

const { companies, tasks } = EXPERIENCE

type Props = {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: Props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className={styles.tabPanel}
      {...other}>
      {value === index && <>{children}</>}
    </div>
  )
}

function generateId(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export const ExperienceTabs = () => {
  const [value, setValue] = useState(0)
  const matches = useMediaQuery('(min-width:768px)')

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={styles.container}>
      <Tabs
        orientation={matches ? 'vertical' : 'horizontal'}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Experience tabs"
        sx={{ ...(matches && { borderRight: 1 }), borderColor: 'divider' }}>
        {companies.map(({ id, name }) => (
          <Tab key={id} label={name} {...generateId(id)} />
        ))}
      </Tabs>
      {tasks.map(({ id, title, actions }) => (
        <TabPanel value={value} index={id} key={id}>
          <ContentPanel actions={actions} title={title} />
        </TabPanel>
      ))}
    </div>
  )
}
