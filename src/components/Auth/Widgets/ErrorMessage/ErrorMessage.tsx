'use client'

import styles from './ErrorMessage.module.scss'

export const ErrorMessage = ({
    error,
    isPasswordMatch
} : {
    error: string
    isPasswordMatch?: boolean
}) => {
    
    return (
        <div className={styles.errorMessage}>
            { error !== '' ? error : (error === '' && isPasswordMatch === false) ? 'Пароль пе совпадает' : '' }
        </div>
    )
}