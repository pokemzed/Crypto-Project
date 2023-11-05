'use client'
import React from "react";
import {Button, Container, Form} from 'react-bootstrap'
import Link from "next/link";
import {IsAuth} from "@/6_shared/hooks/isAuth";
import {useAppDispatch} from "@/6_shared/hooks/hooks";
import {removeUser} from "@/6_shared/store/slices/createUserSlice";

export const Header: React.FC = () => {
    const dispatch = useAppDispatch()
    const auth = IsAuth().isAuth

    const handleLogout = () => {
        dispatch(removeUser())
        localStorage.removeItem('token')
    }

    return (
        <Container className={"Header"}>
            <div className={'left-container'}>
                <Link href={'/'}>
                    <img src="/images/elements/logo.svg" alt="logo-header"/>
                </Link>
                <nav>
                    <Link href={'/'}>Cryptocurrencies</Link>
                    <Link href={'/exchanges'}>Exchanges</Link>
                    <Link href={'/nft'}>NFT</Link>
                    <Link href={'/blog'}>Learn Crypto</Link>
                    <Link href={'/products'}>Products</Link>
                </nav>
            </div>
            <div className={'right-container'}>
                {
                    !auth && (
                        <div className={'auth-container'}>
                            <Link className={"sign-in"} href={'/login'}>Login</Link>
                            <Link className={"sign-up"} href={'/registration'}>Sign Up</Link>
                        </div>
                    )
                }
                <Form.Control placeholder={"search"}/>
                {
                    auth && (
                        <Button onClick={handleLogout} className="btn btn-danger">Log out</Button>
                    )
                }
            </div>
        </Container>
    )
}