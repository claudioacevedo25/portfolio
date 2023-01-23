import styles from './pdf.module.css'
export const PDF = () => {
  return <iframe src="/resume.pdf" title="Maxi Pezzotta Resume" className={styles.content} />
}
