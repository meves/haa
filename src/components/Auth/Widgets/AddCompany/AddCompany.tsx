'use client'

import { Plus } from "@/components/common/SVG/Plus"
import styles from './AddCompany.module.scss'

export const AddCompany = () => {
    return (
        <div className={styles.wrapper}>
            <Plus/>
            <p className={styles.text}>Добавить компанию</p>
        </div>
    )
}