'use client'

import { ChangeEvent, Dispatch, FocusEvent, SetStateAction, forwardRef, useCallback, useEffect, useState } from 'react'
import styles from './Input.module.scss'
import { Asterisk } from '@/components/common/SVG/Asterisk/Asterisk'
import Link from 'next/link'
import { PasswordFormIcon } from '../Widgets/FormIcons/PasswordFormIcon'
import { NameFormIcon } from '../Widgets/FormIcons/NameFormIcon'
import { EmailFormIcon } from '../Widgets/FormIcons/EmailFormIcon'
import { ErrorMessages, InputNames } from '../libs/enums'
import { AddCompany } from '../Widgets/AddCompany/AddCompany'
import { validateValue } from '../libs/utils/validators'
import { ErrorMessage } from '../Widgets/ErrorMessage/ErrorMessage'
import { RequiredFields } from '../libs/types'

type InputProps = {
    name: string
    label: string
    type: 'text' | 'email' | 'password'
    placeholder: string
    autoComplete: string
    isPassword?: boolean
    isLogin?: boolean
    setPassword?: Dispatch<SetStateAction<string>>
    isPasswordMatch?: boolean
    setIsPasswordsMatch?: Dispatch<SetStateAction<boolean>>
    setFormError: Dispatch<SetStateAction<string>>
    setRequiredFields?: Dispatch<SetStateAction<RequiredFields>>
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {

    const { name, label, type, placeholder, autoComplete, isPassword, isLogin, 
        setPassword, setFormError, isPasswordMatch, setIsPasswordsMatch, setRequiredFields
    } = props

    const { INCORRECT_DATA, REQUIRED_FILED } = ErrorMessages

    const [value, setValue] = useState('')
    const [visited, setVisisted] = useState(false)
    const [error, setError] = useState(' ')
    
    const [showPassword, setShowPassword] = useState(false)

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        
        setValue(value)
        setVisisted(true)
        validateValue(type, value) ? setError('') : setError(INCORRECT_DATA)

        if (name === InputNames.Password || name === InputNames.SubmitPassword) {
            setPassword && setPassword(value)
            if (!value && setIsPasswordsMatch) setIsPasswordsMatch(false)
        }

        if(name === InputNames.FirstName || name === InputNames.LastName) {
            !value && setError('')
        } else {
            if (!value) {
                setError(REQUIRED_FILED)
                setRequiredFields && setRequiredFields(prev => ({...prev, [name]: true}))
            } else {
                setRequiredFields && setRequiredFields(prev => ({...prev, [name]: false}))
            }
        }

    }, [setPassword, type, INCORRECT_DATA, REQUIRED_FILED, setIsPasswordsMatch, setRequiredFields])

    const handleOnBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        if (type === 'text') {
            setValue(value ? value.trim() : value)
        }
    }, [type])

    useEffect(() => {
        setFormError(error)
    }, [error, setFormError])

    return (
        <>
        <div className={styles.inputWrapper}>
                <div className={styles.labelWrapper}>
                    <label className={styles.label} htmlFor={name}>{label}</label>
                    {(name !== InputNames.FirstName && name !== InputNames.LastName) ? <Asterisk/> : null}
                    {(isPassword && isLogin) ? <Link href="/forget_password">Забыли пароль</Link> : null}
                </div>

                <input 
                    className={`${styles.input} ${(visited && !error) ? styles.input_success : (visited && error) ? styles.input_error : ''}`}
                    type={isPassword ? (showPassword ? "text" : "password") : type}
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    autoComplete={autoComplete}
                    value={value}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    ref={ref}
                />

                { type === 'password' ?
                    <PasswordFormIcon
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        isPasswordMatch={isPasswordMatch}
                    />
                : type === 'text' ? 
                    <NameFormIcon/>
                : type === 'email' ?
                    <EmailFormIcon
                        isValidated={true}
                    />
                : null }
                
            </div>
            <ErrorMessage 
                error={error}
                isPasswordMatch={(name === InputNames.SubmitPassword) ? isPasswordMatch : undefined}
            />


            {name === InputNames.Company ? <AddCompany/> : null}

        </>
    )
})

Input.displayName = "Input"