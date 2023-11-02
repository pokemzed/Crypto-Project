'use client'
import React from "react";
import {useParams} from "next/navigation";
import {useGetDerivativeExchangeQuery} from "@/6_shared/api";
import Loader from "@/4_features/Loader";
import Link from "next/link";

export const AboutDerivative: React.FC = () => {
    const {"derivative-inside": idDerivative} = useParams()
    const {data: derivativeInfo, isLoading} = useGetDerivativeExchangeQuery(String(idDerivative))
    return (
        <div className={"AboutDerivative"}>
            {isLoading && <Loader/>}
            {derivativeInfo && (
                <div className={"about-crypto_container"}>
                    <div className={"derivative-info"}>
                        <span className={"rank"}>Futures #{derivativeInfo.number_of_futures_pairs}</span>
                        <div className={"derivative"}>
                            <img src={derivativeInfo.image} alt={derivativeInfo.name}/>
                            <h1>{derivativeInfo.name}</h1>
                        </div>
                        {derivativeInfo.description && <p>{derivativeInfo.description}</p>}
                    </div>
                   <div className={"cards-container"}>
                       <div className={"card"}>
                           <span>Open interest (btc)</span>
                           <h4>{derivativeInfo.open_interest_btc}</h4>
                       </div>
                       <div className={"card"}>
                           <span>Trade volume 24h (btc)</span>
                           <h4>{derivativeInfo.trade_volume_24h_btc}</h4>
                       </div>
                       <div className={"card"}>
                           <span>Year established</span>
                           <h4>{derivativeInfo.year_established}</h4>
                       </div>
                       <div className={"card"}>
                           <span>Website</span>
                           <Link href={derivativeInfo.url}>{derivativeInfo.url.replace('https://', '')}</Link>
                       </div>
                   </div>
                </div>)
            }
        </div>
    )
}