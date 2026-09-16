import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import api from '../api/client'
import { AuthContext } from './authContext.ts'


interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider(props: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function checkAuth() {
            try {
                await api.get('/users/profile/')
                setIsAuthenticated(true)
            } catch {
                setIsAuthenticated(false)
            } finally {
                setIsLoading(false)
            }
        }

        checkAuth()
    }, [])

    async function logout() {
        await api.post('/users/logout/')
        setIsAuthenticated(false)
    }

    function onLogin() {
        setIsAuthenticated(true)
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isLoading,
                onLogin,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
