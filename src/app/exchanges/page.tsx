import React from 'react'
import NavigationLinks from '@/5_entities/NavigationLinks'
import { Container } from 'react-bootstrap'
import TableExchangesPage from '@/5_entities/TableExchangesPage'
import Head from 'next/head'

const Exchanges: React.FC = () => {
    return (
        <Container className={'ExchangesPage'}>
            <Head>
                <title>CryptoQuick | Exchanges</title>
            </Head>
            <NavigationLinks />
            <TableExchangesPage />
        </Container>
    )
}
export default Exchanges
