import React from "react";
import {ICoinApi} from "@/6_shared/types/api-types";

export const CardsChangePrice: React.FC<{coinData: ICoinApi}> = ({coinData}) => {
    return (
        <div className={"CardsChangePrice"}>
            <div className={"card"}>
                <span>Change price 24H</span>
                <h4
                    style={{color: `${coinData.market_data.price_change_percentage_24h > 0 ? '#8AFF34' : '#FF3232'}`}}
                >
                    {coinData.market_data.price_change_percentage_24h.toFixed(3)} %
                </h4>
            </div>
            <div className={"card"}>
                <span>Change price 7D</span>
                <h4
                    style={{color: `${coinData.market_data.price_change_percentage_7d > 0 ? '#8AFF34' : '#FF3232'}`}}
                >
                    {coinData.market_data.price_change_percentage_7d.toFixed(3)} %
                </h4>
            </div>
            <div className={"card"}>
                <span>Change price 14D</span>
                <h4
                    style={{color: `${coinData.market_data.price_change_percentage_14d > 0 ? '#8AFF34' : '#FF3232'}`}}
                >
                    {coinData.market_data.price_change_percentage_14d.toFixed(3)} %
                </h4>
            </div>
            <div className={"card"}>
                <span>Change price 1M</span>
                <h4
                    style={{color: `${coinData.market_data.price_change_percentage_30d > 0 ? '#8AFF34' : '#FF3232'}`}}
                >
                    {coinData.market_data.price_change_percentage_30d.toFixed(3)} %
                </h4>
            </div>
            <div className={"card"}>
                <span>Change price 6M</span>
                <h4
                    style={{color: `${coinData.market_data.price_change_percentage_200d > 0 ? '#8AFF34' : '#FF3232'}`}}
                >
                    {coinData.market_data.price_change_percentage_200d.toFixed(3)} %
                </h4>
            </div>
            <div className={"card"}>
                <span>Change price 1Y</span>
                <h4
                    style={{color: `${coinData.market_data.price_change_percentage_1y > 0 ? '#8AFF34' : '#FF3232'}`}}
                >
                    {coinData.market_data.price_change_percentage_1y.toFixed(3)} %
                </h4>
            </div>
        </div>
    )
}