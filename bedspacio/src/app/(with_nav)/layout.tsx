import Footer from "@/components/Footer"
import NavigationBar from "@/components/navigationBar"

export default function WithNavigation({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavigationBar />
            <main>{children}</main>
            <Footer />
        </div>
    )   
}