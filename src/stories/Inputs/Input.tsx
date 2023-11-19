import React from "react";
import './Input.scss'

interface InputProps {
    size?: 'smartphone' | 'tablet' | 'desktop'
}

export const Input = ({
    size='smartphone',

} : InputProps) => {
    return (
        <>
        <input 
            type="text"
            className={`input input-${size}`}    
        />

        <style jsx>{`
            input {
                
            }
        `}</style>
        </>
    )
}