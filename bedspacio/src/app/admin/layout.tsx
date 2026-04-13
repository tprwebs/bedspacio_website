"use client"

import AdminNavBar from "@/components/admin/AdminNavBar"

export default function WithNavigation({ children }: { children: React.ReactNode }) {

    return (
        <div className="w-full min-h-screen">
            <AdminNavBar />
            <main>{children}</main>
        </div>
    )   
}