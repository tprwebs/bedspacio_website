
import { getCurrentUser } from "../../../lib/user"
import { AuthProvider } from "@/context/AuthContext";
import AdminNavBar from "@/components/admin/AdminNavBar"

export default async function WithNavigation({ children }: { children: React.ReactNode }) {

    const current_user = await getCurrentUser();

    console.log('current user: ', current_user)

    return (
        <AuthProvider user={current_user}>
            <div className="w-full min-h-screen">
                <AdminNavBar/>
                <main>{children}</main>
            </div>
        </AuthProvider>
    )   
}