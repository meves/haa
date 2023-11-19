import classNames from 'classnames'
import styles from './LogoText.module.scss'


export const LogoText = ({
  className
} : {
  className?: string
}) => {
  return (
    <div className={classNames(styles.textLogo, className)}>
      <p className={styles.textLogo__word}>talk</p>
      <p className={styles.textLogo__word}>about</p>
      <p className={styles.textLogo__word}>hire</p>
    </div>
  )
}