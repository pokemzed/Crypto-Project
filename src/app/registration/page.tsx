import React from 'react'
import { Container } from 'react-bootstrap'
import RegistrationAuth from '../../3_widgets/modules/auth/RegistrationAuth'

const RegistrationPage: React.FC = () => {
    return (
        <Container className={'RegistrationPage'}>
            <RegistrationAuth />
        </Container>
    )
}
export default RegistrationPage
