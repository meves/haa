import styles from './Button.module.scss'
import classNames from 'classnames'


export const Button = ({
  buttonType,
  className,
  children
}: {
  buttonType?: 'button' | 'submit'
  className?: string
  children: React.ReactNode
}) => {
    return (
    <button className={classNames(styles.button, className)}>
      {children}
    </button>
  )
}