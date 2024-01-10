import React from 'react'
import NavigationLinks from '@/5_entities/NavigationLinks'
import { Container } from 'react-bootstrap'
import NftWidget from '@/3_widgets/modules/tables/Nft'

const Nft: React.FC = () => {
    return (
        <Container className={'NftPage'}>
            <NavigationLinks />
            <NftWidget />
        </Container>
    )
}
export default Nft
