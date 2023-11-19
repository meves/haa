import { LinkButton } from '@/components/common/UIKIT/Buttons/LinkButton/LinkButton'
import { LogoText } from '@/components/Header/Logo/LogoText/LogoText'
import styles from './Banner.module.scss'


export const Banner = () => {
  return (
    <section className={`${styles.wings}`}>
      <div className={`${styles.wrapper} main-container`}>
        <LogoText />
        <h1 className={styles.title}>
          Незаменимый помощник в{`\u00A0`}мире рекрутинга
        </h1>
        <p className={styles.text}>
          Автоматизация и оптимизация процессов найма, идеальный инструмент для рекрутеров в любой сфере
        </p>
        <LinkButton href='/registration' text='Начать' className={styles.link} />
      </div>
    </section>
  )
}