'use client'
import React from "react";
import {Container, Button} from "react-bootstrap";
import {usePathname, useRouter} from "next/navigation";


enum EShowItems {
    CRYPTO_COINS = '/',
    CRYPTO_NFT = '/nft',
    CRYPTO_DERIVATIVE = '/derivative',
    CRYPTO_EXCHANGES = '/exchanges',
}

export const NavigationLinks: React.FC = () => {
    const isAuth = false
    const pathname = usePathname()
    const router = useRouter()
    const handlePath = (path: EShowItems) => {
        router.push(path)
    }
    return (
        <Container className={"HomeEntities"}>
            {!isAuth && (
                <div className={"banner"}>

                </div>
            )}
            <div className={'navigation-container'}>
                <Button
                    disabled={pathname == EShowItems.CRYPTO_COINS}
                    onClick={() => handlePath(EShowItems.CRYPTO_COINS)}
                >
                    Coins
                </Button>
                <Button
                    disabled={pathname == EShowItems.CRYPTO_NFT}
                    onClick={() => handlePath(EShowItems.CRYPTO_NFT)}
                >
                    NFT
                </Button>
                <Button
                    disabled={pathname == EShowItems.CRYPTO_DERIVATIVE}
                    onClick={() => handlePath(EShowItems.CRYPTO_DERIVATIVE)}
                >
                    Derivative
                </Button>
                <Button
                    disabled={pathname == EShowItems.CRYPTO_EXCHANGES}
                    onClick={() => handlePath(EShowItems.CRYPTO_EXCHANGES)}
                >
                    Exchanges
                </Button>
            </div>
        </Container>
    )
}