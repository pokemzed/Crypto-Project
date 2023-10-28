import React from "react";
import {INftMarkets} from "@/6_shared/types/api-types";

export const NftTable: React.FC<{ nfts: INftMarkets[] }> = ({nfts}) => {
    return (
        <div className={"NftTable"}>
            <div className={"container-row"}>
                <div className={"coin-info"}>
                    <div className={"item-col item-long item-left"}>
                        <label>Nft</label>
                    </div>
                </div>
                <div className={"coin-stats"}>
                    <div className={"item-col item-right"}>
                        <label>Platform</label>
                    </div>
                    <div className={"item-col item-right"}>
                        <label>Contract adres</label>
                    </div>
                </div>
            </div>
            {
                nfts.map((nft) => (
                    <div key={nft.id} className={"container-row"}>
                        <div className={"coin-info"}>
                            <div className={"item-col item-long item-left"}>
                                <label>{nft.name} (symbol: {nft.symbol})</label>
                            </div>
                        </div>
                        <div className={"coin-stats"}>
                            <div className={"item-col item-right"}>
                                <label>{nft.asset_platform_id}</label>
                            </div>
                            <div className={"item-col item-right"}>
                                <label>{nft.contract_address}</label>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}