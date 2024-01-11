import React from 'react'
import { IUserResponse } from '@/6_shared/types/user-types'

export const ProfileAboutCategory: React.FC<{ user: IUserResponse }> = ({
    user,
}) => {
    const userEmail = user.proactiveRefresh.user.email
    const userEmailVerified = user.proactiveRefresh.user.emailVerified
    const userCreated = new Date(
        user.proactiveRefresh.user.createdAt
    ).toLocaleDateString('en-US')

    const lastLoginUser = new Date(
        user.proactiveRefresh.user.lastLoginAt
    ).toLocaleDateString('en-US')
    return (
        <div className={'ProfileAboutCategory'}>
            <div className={'user'}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5em',
                    }}
                    className={'email'}
                >
                    <span>User E-Mail: {userEmail}</span>
                    <div
                        style={{
                            width: 15,
                            height: 15,
                            borderRadius: '50%',
                            background: userEmailVerified ? 'green' : 'red',
                        }}
                    ></div>
                </div>
                <span>Account create: {userCreated}</span>
                <span>Last LogIn system: {lastLoginUser}</span>
            </div>
            <div className={'user2'}></div>
        </div>
    )
}
