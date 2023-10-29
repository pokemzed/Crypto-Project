'use client'
import {Container} from "react-bootstrap";
import NavigationLinks from "@/5_entities/NavigationLinks";
import {TableCoinsPage} from "../5_entities/TableCoinsPage/ui/TableCoinsPage";
import {useAppDispatch} from "@/6_shared/hooks/hooks";
import {changePath} from "@/6_shared/store/slices/changePathSlice";

export default function Home() {
    const dispatch = useAppDispatch()
    dispatch(changePath('/'))
    return (
        <Container className={"HomePage"}>
            <NavigationLinks/>
            <TableCoinsPage/>
        </Container>
    )
}
