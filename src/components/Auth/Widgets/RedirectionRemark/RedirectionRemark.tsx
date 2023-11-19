'use client'

import Link from "next/link"
import styles from './RedirectionRemark.module.scss'
import classNames from "classnames"

export const RedirectionRemark = ({
    isLogin
} : {
    isLogin?: boolean
}) => {
    return (
        <div className={styles.wrapper}>
            <span
                className={styles.text}
            >{`Если вы ${isLogin ? 'не' : 'уже'} зарегистрированы, перейдите на страницу `}</span>
            <Link 
                className={classNames(styles.text, styles.link)}
                href={isLogin ? '/registration' : '/login'}
            >{isLogin ? 'регистрации' : 'входа'}
            </Link>
        </div>
    )
}