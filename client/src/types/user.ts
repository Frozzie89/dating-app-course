export interface User {
    id: string
    displayName: string
    email: string
    token: string
    imageUrl?: string
}

export interface LoginCredentials {
    email?: string
    password?: string
}

export interface RegisterCredentials {
    displayName: string
    email: string
    password: string
}