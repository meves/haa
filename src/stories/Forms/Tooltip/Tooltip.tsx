import React from "react"

export const Tooltip = ({
    size='16'
} : {
    size?: string
}) => {
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2187_1999)">
            <path d="M7.9987 14.6663C11.6806 14.6663 14.6654 11.6816 14.6654 7.99967C14.6654 4.31778 11.6806 1.33301 7.9987 1.33301C4.3168 1.33301 1.33203 4.31778 1.33203 7.99967C1.33203 11.6816 4.3168 14.6663 7.9987 14.6663Z" stroke="#0E0E42" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 11.333H8.00667" stroke="#0E0E42" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.05859 6.00038C6.21533 5.55482 6.5247 5.17912 6.9319 4.9398C7.3391 4.70049 7.81786 4.61301 8.28338 4.69285C8.7489 4.7727 9.17114 5.01473 9.47531 5.37606C9.77949 5.7374 9.94596 6.19473 9.94526 6.66705C9.94526 8.00038 7.94526 8.66705 7.94526 8.66705" stroke="#0E0E42" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_2187_1999">
            <rect width={size} height={size} fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}