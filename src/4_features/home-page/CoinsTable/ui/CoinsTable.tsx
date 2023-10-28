'use client'
import React from "react";
import {useGetCoinsMarketsQuery} from "@/6_shared/api";
import {ICoinMarketsApi} from "@/6_shared/types/api-types";
import {useRouter} from "next/navigation";

export const CoinsTable: React.FC<{ coins: ICoinMarketsApi[] }> = ({coins}) => {
    const router = useRouter()
    return (
        <div className={"CoinsTable"}>
            <div className={"container-row container-label"}>
                <div className={"coin-info"}>
                    <div className={"item-col item-center"}>
                        <label>ST</label>
                    </div>
                    <div className={"item-col item-long item-left"}>
                        <label>Coin</label>
                    </div>
                </div>
                <div className={"coin-stats"}>
                    <div className={"item-col item-right"}>
                        <label>Price</label>
                    </div>
                    <div className={"item-col item-right"}>
                        <label>Low 24h</label>
                    </div>
                    <div className={"item-col item-right"}>
                        <label>High 24h</label>
                    </div>
                    <div className={"item-col item-right"}>
                        <label>24h Volume</label>
                    </div>
                    <div className={"item-col item-right"}>
                        <label>MKT Cap</label>
                    </div>
                </div>
            </div>
            {
                coins.map((coin) => (
                    <div onClick={() => router.push(coin.id)} key={coin.id} className={"container-row"}>
                        <div className={"coin-info"}>
                            <div className={"item-col item-center text-bold"}>
                                <label>{coin.market_cap_rank}</label>
                            </div>
                            <div className={"item-col item-long item-left text-bold"}>
                                <label>{coin.name} ({coin.symbol})</label>
                            </div>
                        </div>
                        <div className={"coin-stats"}>
                            <div className={"item-col item-right"}>
                                <label>${coin.current_price.toLocaleString('en-IN')}</label>
                            </div>
                            <div className={"item-col item-right"}>
                                <label>${coin.low_24h.toLocaleString('en-IN')}</label>
                            </div>
                            <div className={"item-col item-right"}>
                                <label>${coin.high_24h.toLocaleString('en-IN')}</label>
                            </div>
                            <div className={"item-col item-right"}>
                                <label>${coin.low_24h.toLocaleString('en-IN')}</label>
                            </div>
                            <div className={"item-col item-right"}>
                                <label>${coin.market_cap.toLocaleString()}</label>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}