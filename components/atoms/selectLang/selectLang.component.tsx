import { Typography } from '@mui/material'
import React from 'react'
import styles from './selectLang.module.css'

export const LANGUAGES: Language[] = [
  { id: 1, value: 'en' },
  { id: 2, value: 'es' },
]

export type Language = { id: number; value: 'es' | 'en' }
type Props = {
  onClick: (value: Language['value']) => void
  selectedLang: Language['value']
}

export const SelectLang = ({ onClick, selectedLang }: Props) => {
  return (
    <div className={styles.container}>
      {LANGUAGES.map(({ id, value }) => (
        <button key={id} className={styles.langButton} onClick={() => onClick(value)}>
          <Typography
            variant="button"
            className={`${styles.addPiped} ${
              selectedLang === value ? styles.langButton__active : ''
            }`}>
            {value}
          </Typography>
        </button>
      ))}
    </div>
  )
}
