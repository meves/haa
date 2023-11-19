'use client'

import styles from './SubmitButton.module.scss'

export const SubmitButton = ({
    text,
    isDisabled
} : {
    text: string
    isDisabled?: boolean
}) => {
    return (
        <div className={styles.wrapper}>
            <button
                className={styles.button}
                type='submit'
                disabled={isDisabled}
            >
                {text}
            </button>
        </div>
    )
}