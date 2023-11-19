import { LoginForm } from "@/components/Auth/Forms/Login/LoginForm"
import styles from './../page.module.scss'

const Login = () => {
    return (
        <section className={styles.formPagemWrapper}>
            <LoginForm/>
        </section>
    )
}

export default Login