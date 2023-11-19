import { NewPasswordForm } from '@/components/Auth/Forms/NewPassword/NewPasswordForm'
import styles from './../page.module.scss'

const NewPassword = () => {
    return (
        <section className={styles.formPagemWrapper}>
            <NewPasswordForm/>
        </section>
    )
}

export default NewPassword