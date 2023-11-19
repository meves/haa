'use client'

import styles from './Asterisk.module.scss'

export const Asterisk = () => {
    return (
        <div className={styles.asterisk}>
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                <path d="M4.4502 0.363281L4.19043 3.07715L6.89062 2.29102L7.06836 3.4873L4.48438 3.75391L6.15234 5.97559L5.04492 6.58398L3.80762 4.15039L2.67285 6.58398L1.52441 5.97559L3.17871 3.75391L0.608398 3.4873L0.799805 2.29102L3.45898 3.07715L3.19238 0.363281H4.4502Z" fill="#DD06A1"/>
            </svg>
        </div>
    )
} 