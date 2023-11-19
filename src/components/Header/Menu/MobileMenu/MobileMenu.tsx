'use client'

import { useAppDispatch, useAppSelector } from '@/store/redux-store/libs/hooks'
import { LangSwitcher } from '../../LangSwitcher/LangSwitcher'
import { Logo } from '@/components/Header/Logo/Logo'
import { LinkButton } from '@/components/common/UIKIT/Buttons/LinkButton/LinkButton'
import styles from './MobileMenu.module.scss'

import { russianText } from '@/store/appText/russianText'
import { selectMobileMenuIsOpen, setMobileMenuClosed } from '@/store/redux-store/slices/uiSlice'
import { useCallback, useRef } from 'react'

import { CSSTransition } from 'react-transition-group'
import { Crossicon } from '@/components/common/SVG/Crossicon'
import { AuthBlock } from '../AuthBlock'


const { faq, lk, login, register } = russianText.header

export const MobileMenu = () => {
  const isOpen: boolean = useAppSelector(selectMobileMenuIsOpen)
  const dispatch = useAppDispatch()

  const nodeRef = useRef(null)

  const handleCloseMenuOnClick = useCallback(() => {
    dispatch(setMobileMenuClosed())
  }, [dispatch])

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      unmountOnExit
      classNames={{
        enter: styles["mobile-enter"],
        enterActive: styles["mobile-enter-active"],
        exitActive: styles["mobile-exit-active"],
        exitDone: styles["mobile-exit-done"],
    }}
    >
      <nav className={styles.mobile} ref={nodeRef}>
        <div className={styles.mobile__top}>
          <Logo />
          <button 
            className={styles.mobile__close}
            onClick={handleCloseMenuOnClick}
          >
            <Crossicon/>
          </button>
        </div> 
        <div className={styles.mobile__buttons}>
          <LangSwitcher/>
          <LinkButton href="/faq" text={faq} isLight={true} className={styles.mobile__faq} />
          <AuthBlock className='mobile__login'/>
        </div>   
      </nav>
    </CSSTransition>
  )
}