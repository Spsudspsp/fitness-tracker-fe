import axios from 'axios';

const api = axios.create(
    {
        baseURL: import.meta.env.VITE_API_URL,
        withCredentials: true,
        withXSRFToken: true,
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        headers: {
            'Content-Type': 'application/json',
        }
    }
)

const refreshApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        const authEndpoints = [
            '/users/login/',
            '/users/refresh/',
            '/users/logout/',
        ]

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !authEndpoints.includes(originalRequest.url)
        ) {
            originalRequest._retry = true

            await refreshApi.post('/users/refresh/')

            return api(originalRequest)
        }

        return Promise.reject(error)
    },
)

export default api