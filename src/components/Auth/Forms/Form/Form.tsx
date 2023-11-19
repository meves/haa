'use client'

import { FC, FormEvent, ReactNode } from 'react'
import styles from './Forms.module.scss'
import { AccountCreated } from '../../Widgets/AccountCreated/AccountCreated'

type FormType = {
    legend: string
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    isAccountCreated?: boolean
    children: ReactNode
}

export const Form: FC<FormType> = ({legend, onSubmit, isAccountCreated, children}) => {
    return (
        <form
            className={styles.form}
            onSubmit={onSubmit}
        >
            <fieldset className={styles.fieldset}>
                { isAccountCreated 
                    ? <AccountCreated/>
                    : <legend className={styles.legend}>{legend}</legend>
                }
                {children}
            </fieldset>
        </form>
    )
}