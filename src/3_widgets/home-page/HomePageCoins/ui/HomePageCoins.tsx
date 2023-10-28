import React from "react";
import CoinsTable from "../../../../4_features/home-page/CoinsTable";
import CoinsTrending from "../../../../4_features/home-page/CoinsTrending";

export const HomePageCoins: React.FC = () => {
    return (
        <div className={"HomePageCoins"}>
            <CoinsTable/>
            <CoinsTrending/>
        </div>
    )
}