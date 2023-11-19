'use client'

import Link from "next/link"
import styles from './AcceptCheck.module.scss'
import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from "react"
import classNames from "classnames"

export const AcceptCheck = ({
    setIsChecked,
    isChecked
} : {
    setIsChecked: Dispatch<SetStateAction<boolean>>
    isChecked: boolean
}) => {
    //const [isChecked, setIsChecked] = useState(false)

    const handleIsCheckedOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.currentTarget.checked)
    }, [setIsChecked])

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.checkbox}
                type="checkbox"
                id="acquainted"
                name="acquainted"
                checked={isChecked}
                onChange={handleIsCheckedOnChange}
            />
            <label 
                className={styles.label}
                htmlFor="acquainted"
            >
                <span className={styles.text}>{`Я ознакомился с `}</span>
                <Link  
                    className={classNames(styles.text, styles.link)} 
                    href="/terms"
                >Пользовательским соглашением
                </Link>
                <span className={styles.text}>{` и `}</span>
                <Link 
                    className={classNames(styles.text, styles.link)} 
                    href="/privacy"
                >Политикой конфиденциальности
                </Link>
            </label>
        </div>
    )
}