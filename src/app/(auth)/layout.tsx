import { Header } from "@/components/Header/Header"

const AuthLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
    return (
        <main>
            { children }
        </main>
    )
}

export default AuthLayout