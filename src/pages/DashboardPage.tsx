import {useAuth} from "../auth/useAuth.ts";
import {useNavigate} from "react-router-dom";

export default function DashboardPage() {
    const navigate = useNavigate()
    const { isAuthenticated, logout } = useAuth()


    async function handleLogout() {
        await logout()
        navigate('/login', {replace: true})
    }

    return (
        <nav>
            <h1>Dashboard</h1>
            {isAuthenticated && (<button onClick={handleLogout}>Logout</button>)}
        </nav>
    )
}