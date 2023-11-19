'use client'

import { Tooltip } from '@/components/common/SVG/Tooltip'
import styles from './FormIcons.module.scss'
import { OpenEye } from '@/components/common/SVG/Eyes/OpenEye'
import { ClosedEye } from '@/components/common/SVG/Eyes/ClosedEye'
import { Tick } from '@/components/common/SVG/Tick'
import { Dispatch, SetStateAction, useCallback } from 'react'

export const PasswordFormIcon = ({
    showPassword,
    setShowPassword,
    isPasswordMatch
} : {
    showPassword: boolean
    setShowPassword: Dispatch<SetStateAction<boolean>>
    isPasswordMatch?: boolean
}) => {
    
    const handleShowPassword = useCallback(() => {
        setShowPassword(prev => !prev)
    }, [setShowPassword])

    return (
        <div className={styles.wrapper}>
            <div onClick={handleShowPassword}>
                {showPassword ? <OpenEye/> : <ClosedEye/>}
            </div>
            <div>
                {isPasswordMatch ? <Tick/> : <Tooltip/>}
            </div>
        </div>
    )
}