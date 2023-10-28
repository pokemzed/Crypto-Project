import React from "react";
import NavigationLinks from "@/5_entities/NavigationLinks";
import {Container} from "react-bootstrap";
import TableNftPage from "@/5_entities/TableNftPage";

const Nft: React.FC = () => {
    return (
        <Container className={"NftPage"}>
            <NavigationLinks/>
            <TableNftPage/>
        </Container>
    )
}
export default Nft