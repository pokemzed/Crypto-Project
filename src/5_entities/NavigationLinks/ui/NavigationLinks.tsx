'use client'
import React from "react";
import {Container, Button} from "react-bootstrap";
import {useRouter} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/6_shared/hooks/hooks";
import {changePath, selectPath} from "@/6_shared/store/slices/changePathSlice";


enum EShowItems {
    CRYPTO_COINS = '/',
    CRYPTO_CATEGORIES = '/categories',
    CRYPTO_NFT = '/nft',
    CRYPTO_DEFI = '/defi',
    CRYPTO_DERIVATIVE = '/derivative',
    CRYPTO_TOP_COINS = '/top-coins',
    CRYPTO_EXCHANGES = '/exchanges',
}

export const NavigationLinks: React.FC = () => {
    const isAuth = false
    const router = useRouter()
    const dispatch = useAppDispatch()
    const pathPage = useAppSelector(selectPath)
    const handlePath = (path: EShowItems) => {
        dispatch(changePath(path))
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
                    disabled={pathPage == EShowItems.CRYPTO_COINS}
                    onClick={() => handlePath(EShowItems.CRYPTO_COINS)}
                >
                    Coins
                </Button>
                <Button
                    disabled={pathPage == EShowItems.CRYPTO_CATEGORIES}
                    onClick={() => handlePath(EShowItems.CRYPTO_CATEGORIES)}
                >
                    Categories
                </Button>
                <Button
                    disabled={pathPage == EShowItems.CRYPTO_NFT}
                    onClick={() => handlePath(EShowItems.CRYPTO_NFT)}
                >
                    NFT
                </Button>
                <Button
                    disabled={pathPage == EShowItems.CRYPTO_DEFI}
                    onClick={() => handlePath(EShowItems.CRYPTO_DEFI)}
                >
                    DeFi
                </Button>
                <Button
                    disabled={pathPage == EShowItems.CRYPTO_DERIVATIVE}
                    onClick={() => handlePath(EShowItems.CRYPTO_DERIVATIVE)}
                >
                    Derivative
                </Button>
                <Button
                    disabled={pathPage == EShowItems.CRYPTO_TOP_COINS}
                    onClick={() => handlePath(EShowItems.CRYPTO_TOP_COINS)}
                >
                    Top coins
                </Button>
                <Button
                    disabled={pathPage == EShowItems.CRYPTO_EXCHANGES}
                    onClick={() => handlePath(EShowItems.CRYPTO_EXCHANGES)}
                >
                    Exchanges
                </Button>
            </div>
        </Container>
    )
}