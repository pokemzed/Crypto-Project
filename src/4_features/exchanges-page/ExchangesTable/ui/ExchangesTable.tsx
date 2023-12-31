import React from "react";
import {IExchangesMarketsApi} from "@/6_shared/types/api-types";
import Image from "next/image";
import {useRouter} from "next/navigation";

export const ExchangesTable: React.FC<{exchanges: IExchangesMarketsApi[]}> = ({exchanges}) => {
    const router = useRouter()
    return (
        <div className={"ExchangesTable"}>
            <div className={"container-row container-label"}>
                <div className={"coin-info"}>
                    <div className={"item-col item-center"}>
                        <label>ST</label>
                    </div>
                    <div className={"item-col item-long item-left"}>
                        <label>Exchange</label>
                    </div>
                </div>
                <div className={"coin-stats"}>
                    <div className={"item-col item-right"}>
                        <label>Volume 24h (btc)</label>
                    </div>
                    <div className={"item-col item-right"}>
                        <label>Volume <br/> 24h-normalized (btc)</label>
                    </div>
                    <div className={"item-col item-right"}>
                        <label>Link to Exchange</label>
                    </div>
                    <div className={"item-col item-right"}>
                        <label>Trust score</label>
                    </div>
                    <div className={"item-col item-right"}>
                        <label>Country</label>
                    </div>
                </div>
            </div>
            {
                exchanges.map((exchange) => (
                    <div onClick={() => router.push(`exchanges/${exchange.id}`)} key={exchange.id} className={"container-row"}>
                        <div className={"coin-info"}>
                            <div className={"item-col item-center"}>
                                <label>{exchange.trust_score_rank}</label>
                            </div>
                            <div className={"item-col item-long item-left"}>
                                <img src={exchange.image} alt={exchange.name}/>
                                <label>{exchange.name} ({exchange.year_established} - year established)</label>
                            </div>
                        </div>
                        <div className={"coin-stats"}>
                            <div className={"item-col item-right"}>
                                <label>{exchange.trade_volume_24h_btc.toLocaleString('en-IN')}</label>
                            </div>
                            <div className={"item-col item-right"}>
                                <label>{exchange.trade_volume_24h_btc_normalized.toLocaleString('en-IN')}</label>
                            </div>
                            <div className={"item-col item-right"}>
                                <label>{exchange.url.replace('https://', '').slice(0, 10)}...</label>
                            </div>
                            <div className={"item-col item-right"}>
                                <label>{exchange.trust_score}</label>
                            </div>
                            <div className={"item-col item-right"}>
                                <label>{exchange.country}</label>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}