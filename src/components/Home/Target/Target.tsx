import styles from './Target.module.scss'
import { LogoText } from '@/components/Header/Logo/LogoText/LogoText'
import { v4 as uuidv4 } from 'uuid'

const targets = [
  'Наша цель — сделать процесс найма максимально простым и удобным, чтобы вы могли сосредоточиться на поиске идеального кандидата.',
  'Мы предлагаем инновационное решение, которое поможет вам экономить время, улучшить качество найма и повысить продуктивность работывашего HR-отдела',
  'Присоединяйтесь к TalkAboutHire и откройте для себя новый уровень результативности в IT-рекрутинге.'
]

export const Target = () => {
  return (
    <section className={`${styles.target} main-container`}>
      <ul className={styles.target__list}>
        { targets.map(target => (
          <li key={uuidv4()} className={styles.target__item}>{target}</li>  
        )) }
      </ul>      
      <div className={styles.target__answer}>
        <LogoText />
        <p className={styles.target__text}>
          это идеальное решение для рекрутеров. Наша платформа предлагает все необходимые
          инструменты для проведения эффективного отбора и найма кандидатов.
        </p>
      </div>
    </section>
  )
}