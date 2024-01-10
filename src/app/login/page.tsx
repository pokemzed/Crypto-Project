import React from 'react'
import { Container } from 'react-bootstrap'
import LoginAuth from '../../3_widgets/modules/auth/LoginAuth'

const LoginPage: React.FC = () => {
    return (
        <Container className={'LoginPage'}>
            <LoginAuth />
        </Container>
    )
}
export default LoginPage
