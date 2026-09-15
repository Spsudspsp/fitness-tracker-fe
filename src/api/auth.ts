import api from './client'

export interface LoginData {
    email: string
    password: string
}

export interface RegisterData {
    username: string
    email: string
    password: string
    password_confirmation: string
}

export async function login(data: LoginData) {
    await api.post('/users/login/', data)
}

export async function register(data: RegisterData) {
    return await api.post('/users/register/', data)
}