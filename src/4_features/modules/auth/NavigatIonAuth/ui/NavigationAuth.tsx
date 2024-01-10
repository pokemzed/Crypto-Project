import React from 'react'
import Link from 'next/link'

interface INavigationAuth {
    title: string
    titleLink: string
    link: string
}

export const NavigationAuth: React.FC<INavigationAuth> = ({
    title,
    titleLink,
    link,
}) => {
    return (
        <div className={'NavigationAuth'}>
            <h1>{title}</h1>
            <Link href={`/${link}`}>{titleLink}</Link>
        </div>
    )
}
