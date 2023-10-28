'use client'
import React from "react";
import {useGetTrendingCoinsQuery} from "@/6_shared/api";

export const CoinsTrending: React.FC = () => {
    const {data} = useGetTrendingCoinsQuery(4)
    return (
        <div className={"CoinsTrending"}>
            <h2>Trending Coins</h2>
            <div className={"trending-coins_container"}>
                {
                    data?.map(coin => (
                        <div key={coin.id}>
                            <h2>{coin.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}