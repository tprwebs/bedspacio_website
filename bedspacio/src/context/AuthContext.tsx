"use client"

import { createContext, useContext } from "react"

type User = {
    id: number,
    fullname: string,
    username: string,
    contact: string,
    email: string,
    role: string,
    is_active: boolean
} | null;

interface AuthProviderProp {
    user: User;
    children: React.ReactNode;
}

const AuthContext = createContext<User>(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({
    user,
    children
}: AuthProviderProp) => {
    return (
        <AuthContext.Provider value={ user }>
            { children }
        </AuthContext.Provider>
    )
}