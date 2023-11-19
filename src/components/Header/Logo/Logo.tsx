import Link from 'next/link'
import styles from './Logo.module.scss'


export const Logo = () => {
  return (
    <Link href="/" className={styles.logoWrapper}>
      <p className={styles.logoWord}>talk</p>
      <p className={styles.logoWord}>about</p>
      <p className={styles.logoWord}>hire</p>
    </Link>
  )
}