import NavigationBar from "@/components/navigationBar"
import Footer from "@/components/Footer"

export default function About() {
    return (
        <div className="flex flex-col items-center justify-start min-h-scree w-auto">
            <NavigationBar />
            This is the About Us page

            <Footer />
        </div>
    )
}