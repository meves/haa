'use client'

import styles from './BigSmall.module.scss'

export const Plus = () => {
    return (
        <>
        <div className={styles.small}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3.33398V12.6673" stroke="#729DFB" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.33203 8.00098H12.6654" stroke="#729DFB" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className={styles.big}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 5.50098V19.501" stroke="#729DFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12.501H19" stroke="#729DFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>        
        </>
    )
} 