import React from "react";
import {Container} from "react-bootstrap";
import AuthRegPage from "@/5_entities/AuthRegPage";

const RegistrationPage: React.FC = () => {
    return (
        <Container className={"RegistrationPage"}>
            <AuthRegPage/>
        </Container>
    )
}
export default RegistrationPage