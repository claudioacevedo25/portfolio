import { Typography } from '@mui/material'
import React from 'react'
import styles from './selectLang.module.css'

export type Language = { id: number; language: 'es' | 'en' }
type Props = {
  languages: Language[]
  onClick: (language: Language['language']) => void
  selectedLang: Language
}

export const SelectLang = ({ languages, onClick, selectedLang }: Props) => {
  return (
    <div className={styles.container}>
      {languages.map(({ id, language }) => (
        <button key={id} className={styles.langButton} onClick={() => onClick(language)}>
          <Typography
            variant="button"
            className={`${styles.addPiped} ${
              selectedLang.id === id ? styles.langButton__active : ''
            }`}>
            {language}
          </Typography>
        </button>
      ))}
    </div>
  )
}
