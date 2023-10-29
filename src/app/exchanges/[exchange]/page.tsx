import React from "react";
import {Container} from "react-bootstrap";
import AboutExchange from "@/4_features/exchange-inside-page/AboutExchange";

const Exchange: React.FC = () => {
    return (
        <Container className={"ExchangePage"}>
            <AboutExchange/>
        </Container>
    )
}
export default Exchange