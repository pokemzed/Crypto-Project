import React from 'react'
import NavigationLinks from '@/5_entities/NavigationLinks'
import { Container } from 'react-bootstrap'
import ExchangesWidget from '@/3_widgets/modules/tables/Exchanges'

const Exchanges: React.FC = () => {
    return (
        <Container className={'ExchangesPage'}>
            <NavigationLinks />
            <ExchangesWidget />
        </Container>
    )
}
export default Exchanges
