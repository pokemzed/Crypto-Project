'use client'
import { Container } from 'react-bootstrap'
import NavigationLinks from '@/5_entities/NavigationLinks'
import { useAppDispatch } from '@/6_shared/helpers/hooks/hooks'
import { changePath } from '@/6_shared/store/slices/changePathSlice'
import CoinsWidget from '@/3_widgets/modules/tables/Coins'
import { useEffect } from 'react'

export default function Home() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(changePath('/'))
    }, [dispatch])

    return (
        <Container className={'HomePage'}>
            <NavigationLinks />
            <CoinsWidget />
        </Container>
    )
}
