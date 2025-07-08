export interface Member {
    id: string
    dateOfBirth: string
    imageUrl?: string
    displayName: string
    created: string
    lastActive: string
    gender: string
    description?: string
    city: string
    country: string
}

export interface Image {
    id: number
    url: string
    publicId?: string
    memberId: string
}
