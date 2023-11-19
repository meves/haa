import Link from 'next/link'
import styles from './LinkButton.module.scss'
import classNames from 'classnames'


export const LinkButton = ({
  text,
  className,
  isLight,
  href
}: {
  text: string
  className?: string
  isLight?: boolean
  href: string
}) => {
  
  const resultingClassName = isLight ? `${styles.link} ${styles.link_light}` : styles.link

  return (
    <Link href={href} className={classNames(resultingClassName, className)}>
      {text}
    </Link>
  )
}