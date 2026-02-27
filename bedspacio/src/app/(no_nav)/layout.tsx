import Footer from "@/components/Footer"
import NonNavigationBar from "@/components/navigationNoLink"

export default function NoNavigation({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NonNavigationBar />
            <main>{children}</main>
            <Footer />
        </div>
    )   
}