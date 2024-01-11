'use client'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useGetInfoUser } from '@/6_shared/helpers/hooks/useGetInfoUser'
import { ProfileAboutCategory } from '@/5_entities/modules/profile/ProfileAboutCategory/ui/ProfileAboutCategory'

enum EProfileCategory {
    ABOUT_CATEGORY = 'About',
    SETTINGS_CATEGORY = 'Settings',
    FEEDBACK_CATEGORY = 'Feedback',
}

export const ProfileNavbar: React.FC = () => {
    const { userInfo: user } = useGetInfoUser()
    const [showCategory, setShowCategory] = useState(
        EProfileCategory.ABOUT_CATEGORY
    )
    return (
        <div className={'ProfileNavbar'}>
            <nav className={'navbar-container'}>
                <Button
                    disabled={showCategory === EProfileCategory.ABOUT_CATEGORY}
                    onClick={() =>
                        setShowCategory(EProfileCategory.ABOUT_CATEGORY)
                    }
                >
                    {EProfileCategory.ABOUT_CATEGORY}
                </Button>
                <Button
                    disabled={
                        showCategory === EProfileCategory.SETTINGS_CATEGORY
                    }
                    onClick={() =>
                        setShowCategory(EProfileCategory.SETTINGS_CATEGORY)
                    }
                >
                    {EProfileCategory.SETTINGS_CATEGORY}
                </Button>
                <Button
                    disabled={
                        showCategory === EProfileCategory.FEEDBACK_CATEGORY
                    }
                    onClick={() =>
                        setShowCategory(EProfileCategory.FEEDBACK_CATEGORY)
                    }
                >
                    {EProfileCategory.FEEDBACK_CATEGORY}
                </Button>
            </nav>
            <div className={'content-profile'}>
                {showCategory === EProfileCategory.ABOUT_CATEGORY && (
                    <ProfileAboutCategory user={user} />
                )}
                {showCategory === EProfileCategory.SETTINGS_CATEGORY && (
                    <h1>{showCategory}</h1>
                )}
                {showCategory === EProfileCategory.FEEDBACK_CATEGORY && (
                    <h1>{showCategory}</h1>
                )}
            </div>
        </div>
    )
}
