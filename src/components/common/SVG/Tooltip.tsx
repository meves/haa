'use client'

import styles from './BigSmall.module.scss'

export const Tooltip = () => {
    return (
        <>
        <div className={styles.small}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_2240_1868)">
                    <path d="M7.9987 14.6663C11.6806 14.6663 14.6654 11.6816 14.6654 7.99967C14.6654 4.31778 11.6806 1.33301 7.9987 1.33301C4.3168 1.33301 1.33203 4.31778 1.33203 7.99967C1.33203 11.6816 4.3168 14.6663 7.9987 14.6663Z" stroke="#0E0E42" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 11.333H8.00667" stroke="#0E0E42" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.05859 6.00038C6.21533 5.55482 6.5247 5.17912 6.9319 4.9398C7.3391 4.70049 7.81786 4.61301 8.28338 4.69285C8.7489 4.7727 9.17114 5.01473 9.47531 5.37606C9.77949 5.7374 9.94596 6.19473 9.94526 6.66705C9.94526 8.00038 7.94526 8.66705 7.94526 8.66705" stroke="#0E0E42" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_2240_1868">
                        <rect width="16" height="16" fill="white"/>
                    </clipPath>
                </defs>
            </svg> 
        </div>
        <div className={styles.big}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0E0E42" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="#0E0E42" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.08984 8.99959C9.32495 8.33126 9.789 7.7677 10.3998 7.40873C11.0106 7.04975 11.7287 6.91853 12.427 7.0383C13.1253 7.15808 13.7587 7.52112 14.2149 8.06312C14.6712 8.60512 14.9209 9.29112 14.9198 9.99959C14.9198 11.9996 11.9198 12.9996 11.9198 12.9996" stroke="#0E0E42" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>       
        </>
    )
}