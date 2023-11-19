'use client'

import { selectMobileMenuIsOpen, setMobileMenuOpen } from '@/store/redux-store/slices/uiSlice'
import { useAppDispatch, useAppSelector } from '@/store/redux-store/libs/hooks'
import { useCallback } from 'react'
import styles from './Burger.module.scss'
import { BurgerIcon } from '@/components/common/SVG/BurgerIcon'


export const Burger = () => {
  const isOpen = useAppSelector(selectMobileMenuIsOpen)
  const dispatch = useAppDispatch()

  const handleMobileMenuOpen = useCallback(() => {
    dispatch(setMobileMenuOpen())
  }, [dispatch])

  return (
    <button 
      className={styles.burger}
      onClick={handleMobileMenuOpen}
    >
      <BurgerIcon/>
    </button>
  )
}