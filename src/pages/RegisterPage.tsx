import {Link, useNavigate} from "react-router-dom";
import { type SubmitEvent, useState} from "react";
import { register, login } from '../api/auth'
import { useAuth } from '../auth/useAuth'


export default function RegisterPage() {
    const navigate = useNavigate()
    const { onLogin } = useAuth()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        setError('')

        if (password !== passwordConfirm) {
            setError('Passwords do not match')
            return
        }

        try {
            await register(
                {
                    username,
                    email,
                    password,
                    password_confirmation: passwordConfirm,
                }
            )
        } catch {
            setError('Registration failed')
            return
        }

        try {
            await login(
                {
                    email,
                    password
                }
            )
            onLogin()
            navigate('/')
        } catch {
            setError('Account created, but automatic login failed')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />

                <input
                    type="password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    placeholder="Confirm password"
                />

                <button type="submit">
                    Register
                </button>

                {error && <p>{error}</p>}
            </form>
            <Link to="/login">Already have an account?</Link>
        </>
    )
}