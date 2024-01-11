import React from 'react'
import { Metadata } from 'next'
import ProfileNavigation from '@/5_entities/ProfileNavigation'
import { Container } from 'react-bootstrap'
import ProfileNavbar from '@/3_widgets/modules/profile/ProfileNavbar'

export const metadata: Metadata = {
    title: 'User Profile',
    description: "It's user profile page",
}

const Profile: React.FC = () => {
    return (
        <Container>
            <ProfileNavbar />
        </Container>
    )
}
export default Profile
