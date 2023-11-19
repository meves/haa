import { ForgetPasswordForm } from '@/components/Auth/Forms/ForgetPassword/ForgetPasswordForm'
import styles from './../page.module.scss'

const ForgetPassword = () => {
    return (
        <section className={styles.formPagemWrapper}>
            <ForgetPasswordForm/>
        </section>
    )
}

export default ForgetPassword