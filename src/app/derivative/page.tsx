import React from 'react'
import NavigationLinks from '@/5_entities/NavigationLinks'
import { Container } from 'react-bootstrap'
import DerivativeWidget from '@/3_widgets/modules/tables/Derivatives'

const Derivative: React.FC = () => {
    return (
        <Container className={'DerivativePage'}>
            <NavigationLinks />
            <DerivativeWidget />
        </Container>
    )
}
export default Derivative
