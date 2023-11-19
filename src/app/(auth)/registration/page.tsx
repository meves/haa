import { RegistrationForm } from "@/components/Auth/Forms/Registration/RegistrationForm"
import styles from './../page.module.scss'

const Registration = () => {
    return (
        <section className={styles.formPagemWrapper}>
            <RegistrationForm/>
        </section>
    )
}

export default Registration