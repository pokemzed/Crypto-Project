import React from "react";
import {Container, Form} from 'react-bootstrap'
import Link from "next/link";

export const Header: React.FC = () => {
    return (
        <Container className={"Header"}>
            <div className={'left-container'}>
                <Link href={'/'}>
                    <img src="/images/elements/logo.svg" alt="logo-header"/>
                </Link>
                <nav>
                    <Link href={'/cryptocurrencies'}>Cryptocurrencies</Link>
                    <Link href={'/exchanges'}>Exchanges</Link>
                    <Link href={'/nft'}>NFT</Link>
                    <Link href={'/blog'}>Learn Crypto</Link>
                    <Link href={'/products'}>Products</Link>
                </nav>
            </div>
            <div className={'right-container'}>
                <div className={'auth-container'}>
                    <Link className={"sign-in"} href={'/'}>Login</Link>
                    <Link className={"sign-up"} href={'/'}>Sign Up</Link>
                </div>
                <Form.Control placeholder={"search"}/>
            </div>
        </Container>
    )
}