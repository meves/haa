'use client'

import styles from './CancelButton.module.scss'

export const CancelButton = ({
    text
} : {
    text: string
}) => {
    return (
        <div className={styles.wrapper}>
            <button
                className={styles.button}
                type='reset'
            >
                {text}
            </button>
        </div>
    )
}