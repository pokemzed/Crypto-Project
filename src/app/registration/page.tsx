import React from "react";
import {Container} from "react-bootstrap";
import RegForm from "@/4_features/auth/RegForm";

const RegistrationPage: React.FC = () => {
    return (
        <Container className={"RegistrationPage"}>
            <RegForm/>
        </Container>
    )
}
export default RegistrationPage