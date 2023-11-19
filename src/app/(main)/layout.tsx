import { Footer } from "@/components/Footer/Footer"

const MainLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
    return (
        <>
            <main>
                { children }
            </main>
            <Footer/>
        </>
    )
}

export default MainLayout