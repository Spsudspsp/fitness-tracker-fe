import { createContext } from 'react'


interface AuthContextValue {
    isAuthenticated: boolean
    isLoading: boolean
    onLogin: () => void
    logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | null>(null)
