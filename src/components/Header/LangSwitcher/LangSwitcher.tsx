'use client'

import { useAppDispatch, useAppSelector } from '@/store/redux-store/libs/hooks'
import styles from './LangSwitcher.module.scss'
import { MouseEvent, useCallback } from 'react'
import { selectLanguage, setCurrentLanguageThunk } from '@/store/redux-store/slices/langSlice'
import { Languages } from '@/store/redux-store/libs/enums'


export const LangSwitcher = () => { 
  const dispatch = useAppDispatch()
  const currentLanguage = useAppSelector(selectLanguage)
  
  const toggleCurrentLanguageOnClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const currentLanguage = event.currentTarget.textContent as Languages    
    dispatch(setCurrentLanguageThunk(currentLanguage))
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <LanguageItem
        language={Languages.RU}
        currentLanguage={currentLanguage}
        toggleCurrentLanguageOnClick={toggleCurrentLanguageOnClick}
      />
      <LanguageItem
        language={Languages.EN}
        currentLanguage={currentLanguage}
        toggleCurrentLanguageOnClick={toggleCurrentLanguageOnClick}
      />
  </div>
  )
}

const LanguageItem = ({
  language,
  currentLanguage,
  toggleCurrentLanguageOnClick
} : {
  language: Languages
  currentLanguage: Languages
  toggleCurrentLanguageOnClick: (event: MouseEvent<HTMLDivElement>) => void
}) => {
  return (
    <div 
      className={`${styles.langItem} ${currentLanguage === language ? styles.langItem_selected : ''}`}
      onClick={toggleCurrentLanguageOnClick}
    >
      { language }
    </div>
  )
}