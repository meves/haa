import { Burger } from './Burger/Burger'
import { Logo } from './Logo/Logo'
import { DecoreLine } from '../common/DecoreLine/DecoreLine'
import { DesktopMenu } from './Menu/DesktopMenu/DesktopMenu'
import { MobileMenu } from './Menu/MobileMenu/MobileMenu'
import styles from './Header.module.scss'


export const Header = () => {
  return (
    <>
      <header className={`${styles.header} main-container`}>
        <Logo/>
        <DesktopMenu/>
        <Burger/>
        <MobileMenu/>
      </header>
      <DecoreLine/>
    </>
  )
}