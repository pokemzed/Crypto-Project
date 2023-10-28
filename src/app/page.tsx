'use client'
import {Container} from "react-bootstrap";
import NavigationLinks from "@/5_entities/NavigationLinks";
import {TableCoinsPage} from "../5_entities/TableCoinsPage/ui/TableCoinsPage";

export default function Home() {
    return (
        <Container className={"HomePage"}>
            <NavigationLinks/>
            <TableCoinsPage/>
        </Container>
    )
}
