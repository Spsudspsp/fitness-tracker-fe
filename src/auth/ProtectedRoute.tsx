import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth'
import type { ReactNode} from "react";

interface ProtectedRouteProps {
    children: ReactNode
}

export function ProtectedRoute(props: ProtectedRouteProps) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return null
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }

    return props.children
}