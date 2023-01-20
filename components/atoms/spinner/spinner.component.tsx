import Image from 'next/image'
import styles from './spinner.module.css'

export const Spinner = () => (
  <div className={styles.container}>
    <div className={styles.image}>
      <Image
        src="/code-fork.webp"
        alt="spinner"
        fill
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </div>
  </div>
)
