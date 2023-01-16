import Image from 'next/image'
import styles from './spinner.module.css'

export const Spinner = () => (
  <div className={styles.container}>
    <div className={styles.image}>
      <Image src="/code-fork.gif" alt="spinner" fill />
    </div>
  </div>
)