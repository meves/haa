import { ChangePasswordForm } from '@/components/Auth/Forms/ChangePassword/ChangePasswordForm'
import styles from './../page.module.scss'

const ChangePassword = () => {
    return (
        <section className={styles.formPagemWrapper}>
            <ChangePasswordForm/>
        </section>
    )
}

export default ChangePassword