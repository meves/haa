import styles from './DesktopMenu.module.scss'
// временно мокаю до настройки стора:
import { russianText } from '@/store/appText/russianText'
import { LangSwitcher } from '../../LangSwitcher/LangSwitcher'
import { LinkButton } from '../../../common/UIKIT/Buttons/LinkButton/LinkButton'
import { AuthBlock } from '../AuthBlock'

const { faq } = russianText.header

export const DesktopMenu = () => {
  return (
    <nav className={styles.menu}>
      <LinkButton href="/faq" text={faq} isLight={true} />

      <div className={styles.rigthWrapper}>
        
        <LangSwitcher/>
        
        <div className={styles.buttons}>
          <AuthBlock/>
        </div>
      </div>
    </nav>
  )
}