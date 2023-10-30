import React from "react";
import AboutNft from "@/4_features/nft-inside-page/AboutNft";
import {Container} from "react-bootstrap";

const NftInsidePage: React.FC = () => {
    return (
        <Container className={"NftInsidePage"}>
            <AboutNft/>
        </Container>
    )
}
export default NftInsidePage