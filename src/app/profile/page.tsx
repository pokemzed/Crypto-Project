import React from 'react'
import { Metadata } from 'next'
import ProfileNavigation from '@/5_entities/ProfileNavigation'

export const metadata: Metadata = {
    title: 'User Profile',
    description: "It's user profile page",
}

const Profile: React.FC = () => {
    return <ProfileNavigation />
}
export default Profile
