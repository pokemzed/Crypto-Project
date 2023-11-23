import React from "react";
import {Container} from "react-bootstrap";
import AuthLoginPage from "@/5_entities/AuthLoginPage";

const LoginPage: React.FC = () => {

    return (
        <Container className={"LoginPage"}>
            <AuthLoginPage/>
        </Container>
    )
}
export default LoginPage