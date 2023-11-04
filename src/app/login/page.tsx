import React from "react";
import {Container} from "react-bootstrap";
import LoginForm from "@/4_features/auth/LoginForm";

const LoginPage: React.FC = () => {

    return (
        <Container className={"LoginPage"}>
            <LoginForm/>
        </Container>
    )
}
export default LoginPage