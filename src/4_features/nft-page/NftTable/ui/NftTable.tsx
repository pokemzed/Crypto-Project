import React from "react";
import {INftMarkets} from "@/6_shared/types/api-types";
import {useRouter} from "next/navigation";

export const NftTable: React.FC<{ nfts: INftMarkets[] }> = ({nfts}) => {
    const router = useRouter()
    return (
        <div className={"NftTable"}>
            <div className={"container-row container-label"}>
                <div className={"nft-info"}>
                    <div className={"item-col item-long item-left"}>
                        <label>Nft</label>
                    </div>
                </div>
                <div className={"nft-stats"}>
                    <div className={"item-col item-right"}>
                        <label>Platform</label>
                    </div>
                    <div className={"item-col item-right"}>
                        <label>Contract address</label>
                    </div>
                </div>
            </div>
            {
                nfts.map((nft) => (
                    <div onClick={() => router.push(`/nft/${nft.id}`)} key={nft.id} className={"container-row"}>
                        <div className={"nft-info"}>
                            <div className={"item-col item-long item-left"}>
                                <label>{nft.name} (symbol: {nft.symbol})</label>
                            </div>
                        </div>
                        <div className={"nft-stats"}>
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