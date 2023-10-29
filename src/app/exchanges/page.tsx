import React from "react";
import NavigationLinks from "@/5_entities/NavigationLinks";
import {Container} from "react-bootstrap";
import TableExchangesPage from "@/5_entities/TableExchangesPage";

const Exchanges: React.FC = () => {
    return (
        <Container className={"ExchangesPage"}>
            <NavigationLinks/>
            <TableExchangesPage/>
        </Container>
    )
}
export default Exchanges