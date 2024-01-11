export interface IUserResponse {
    providerId: string
    proactiveRefresh: ProactiveRefresh
    reloadUserInfo: ReloadUserInfo
    reloadListener: any
    uid: string
    auth: Auth
    stsTokenManager: StsTokenManager3
    accessToken: string
    displayName: any
    email: string
    emailVerified: boolean
    phoneNumber: any
    photoURL: any
    isAnonymous: boolean
    tenantId: any
    providerData: ProviderDaum3[]
    metadata: Metadata
}

export interface ProactiveRefresh {
    user: IUser
    isRunning: boolean
    timerId: any
    errorBackoff: number
}

export interface IUser {
    uid: string
    email: string
    emailVerified: boolean
    isAnonymous: boolean
    providerData: ProviderDaum[]
    stsTokenManager: StsTokenManager
    createdAt: string
    lastLoginAt: string
    apiKey: string
    appName: string
}

export interface ProviderDaum {
    providerId: string
    uid: string
    displayName: any
    email: string
    phoneNumber: any
    photoURL: any
}

export interface StsTokenManager {
    refreshToken: string
    accessToken: string
    expirationTime: number
}

export interface ReloadUserInfo {
    localId: string
    email: string
    passwordHash: string
    emailVerified: boolean
    passwordUpdatedAt: number
    providerUserInfo: ProviderUserInfo[]
    validSince: string
    lastLoginAt: string
    createdAt: string
    lastRefreshAt: string
}

export interface ProviderUserInfo {
    providerId: string
    federatedId: string
    email: string
    rawId: string
}

export interface Auth {
    apiKey: string
    authDomain: string
    appName: string
    currentUser: CurrentUser
}

export interface CurrentUser {
    uid: string
    email: string
    emailVerified: boolean
    isAnonymous: boolean
    providerData: ProviderDaum2[]
    stsTokenManager: StsTokenManager2
    createdAt: string
    lastLoginAt: string
    apiKey: string
    appName: string
}

export interface ProviderDaum2 {
    providerId: string
    uid: string
    displayName: any
    email: string
    phoneNumber: any
    photoURL: any
}

export interface StsTokenManager2 {
    refreshToken: string
    accessToken: string
    expirationTime: number
}

export interface StsTokenManager3 {
    refreshToken: string
    accessToken: string
    expirationTime: number
}

export interface ProviderDaum3 {
    providerId: string
    uid: string
    displayName: any
    email: string
    phoneNumber: any
    photoURL: any
}

export interface Metadata {
    createdAt: string
    lastLoginAt: string
}
