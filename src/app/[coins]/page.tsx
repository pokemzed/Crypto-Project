import React from "react";
import {Container} from "react-bootstrap";
import AboutCoin from "@/4_features/coin-inside-page/AboutCoin";

const CoinInsidePage: React.FC = () => {
    return(
        <div className={"CoinInsidePage"}>
            <Container>
                <AboutCoin/>
            </Container>
        </div>
    )
}
export default CoinInsidePage