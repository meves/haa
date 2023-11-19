'use client'

import styles from './AccountCreated.module.scss'

export const AccountCreated = () => {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>
                Ваша учетная запись подтверждена
            </h2>
            <p className={styles.text}>
                Для продолжения работы необходимо выполнить вход в личный кабинет
            </p>
        </section>
    )
}