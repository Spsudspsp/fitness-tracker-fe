import {Link, useNavigate} from "react-router-dom";
import { type SubmitEvent, useState} from "react";
import { useAuth } from '../auth/useAuth'
import { login } from '../api/auth'


export default function LoginPage() {
    const navigate = useNavigate()
    const { onLogin } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        setError('')

        try {
            await login({ email, password })
            onLogin()
            navigate('/')
        } catch {
            setError('Invalid username or password')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
                <button type="submit">Login</button>{error && <p>{error}</p>}
            </form>
            <Link to="/register">Don't have an account?</Link>
        </>
    )
}
