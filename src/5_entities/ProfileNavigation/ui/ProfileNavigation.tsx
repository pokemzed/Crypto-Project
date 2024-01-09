'use client'
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import { useUserAuth } from '@/6_shared/hooks/useUserAuth'

enum EShowProfileSection {
    PROFILE_ABOUT = 'about',
    PROFILE_SETTINGS = 'settings',
    PROFILE_FEEDBACK = 'feedback',
}

export const ProfileNavigation: React.FC = () => {
    const router = useRouter()
    const { isAuth } = useUserAuth()
    const { infoUser } = useUserAuth()
    const [showSection, setShowSection] = useState<string>(
        EShowProfileSection.PROFILE_ABOUT
    )

    console.log(infoUser)

    useEffect(() => {
        if (!isAuth) {
            router.push('/login')
        }
    }, [isAuth, router])

    return (
        <Container className={'ProfileNavigation'}>
            <Button
                disabled={showSection === EShowProfileSection.PROFILE_ABOUT}
                onClick={() =>
                    setShowSection(EShowProfileSection.PROFILE_ABOUT)
                }
            >
                About
            </Button>
            <Button
                disabled={showSection === EShowProfileSection.PROFILE_SETTINGS}
                onClick={() =>
                    setShowSection(EShowProfileSection.PROFILE_SETTINGS)
                }
            >
                Settings
            </Button>
            <Button
                disabled={showSection === EShowProfileSection.PROFILE_FEEDBACK}
                onClick={() =>
                    setShowSection(EShowProfileSection.PROFILE_FEEDBACK)
                }
            >
                Feedback
            </Button>
            <div className={'content-profile'}>
                {showSection === EShowProfileSection.PROFILE_ABOUT && (
                    <>zalupa</>
                )}
            </div>
        </Container>
    )
}
