'use client'

import { Tooltip } from '@/components/common/SVG/Tooltip'
import styles from './FormIcons.module.scss'
import { Tick } from '@/components/common/SVG/Tick'

export const EmailFormIcon = ({
    isValidated
} : {
    isValidated: boolean
}) => {
    return (
        <div className={styles.wrapper}>
            <div>
                {isValidated ? <Tooltip/> : <Tick  />}
            </div>
        </div>
    )
}