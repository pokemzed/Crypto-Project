'use client'
import {Container} from "react-bootstrap";
import NavigationLinks from "@/5_entities/NavigationLinks";
import {useAppDispatch} from "@/6_shared/hooks/hooks";
import {changePath} from "@/6_shared/store/slices/changePathSlice";
import TableCoinsPage from "@/5_entities/TableCoinsPage";

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
