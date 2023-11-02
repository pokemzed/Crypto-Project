import React from "react";
import NavigationLinks from "@/5_entities/NavigationLinks";
import {Container} from "react-bootstrap";
import TableDerivativePage from "@/5_entities/TableDerivativePage";

const Derivative: React.FC = () => {
    return (
        <Container className={"DerivativePage"}>
            <NavigationLinks/>
            <TableDerivativePage/>
        </Container>
    )
}
export default Derivative