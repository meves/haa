'use client'

import styles from './../BigSmall.module.scss'

export const OpenEye = () => {
    return (
        <>
        <div className={styles.small}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M0.667969 8.00033C0.667969 8.00033 3.33464 2.66699 8.0013 2.66699C12.668 2.66699 15.3346 8.00033 15.3346 8.00033C15.3346 8.00033 12.668 13.3337 8.0013 13.3337C3.33464 13.3337 0.667969 8.00033 0.667969 8.00033Z" stroke="#0E0E42" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#0E0E42" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className={styles.big}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#0E0E42" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#0E0E42" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        </>
    )
}