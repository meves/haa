import Link from 'next/link'
import { Logo } from '../Header/Logo/Logo'
import styles from './Footer.module.scss'

// временно мокаю до настройки стора:
import { russianText } from '@/store/appText/russianText'
import { DecoreLine } from '../common/DecoreLine/DecoreLine'

const { privacy, terms } = russianText.footer

export const Footer = () => {
  return (
    <>
    <DecoreLine/>
    <footer className={`${styles.footer} main-container`}>
      <div className={styles.logoWrapper}>
        <Logo />
        <p className={styles.copyright}>
          All Rights Reserved, 2023
        </p>
      </div>
      <div className={styles.legalLinksWrapper}>
        <Link href="/privacy" className={styles.link}>{ privacy }</Link>
        <Link href="/terms" className={styles.link}>{ terms }</Link>
      </div>
    </footer>
    </>
  )
}