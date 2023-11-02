import React from "react";
import {IDerivatives} from "@/6_shared/types/api-types";
import {useRouter} from "next/navigation";

export const DerivativeTable: React.FC <{derivatives: IDerivatives[]}> = ({derivatives}) => {
    const router = useRouter()
    return (
        <div className={"DerivativeTable"}>
            <div className={"container-row container-label"}>
                <div className={"derivative-info"}>
                    <div className={"item-col item-long item-left"}>
                        <label>Derivative</label>
                    </div>
                    <div className={"item-col item-left"}>
                        <label>Year established</label>
                    </div>
                </div>
                <div className={"derivative-stats"}>
                    <div className={"item-col item-right"}>
                        <label>Trade volume 24h (btc)</label>
                    </div>
                    <div className={"item-col item-right"}>
                        <label>Url</label>
                    </div>
                </div>
            </div>
            {
                derivatives.map((derivative) => (
                    <div onClick={() => router.push(`derivative/${derivative.id}`)} key={derivative.id} className={"container-row"}>
                        <div className={"derivative-info"}>
                            <div className={"item-col item-long item-left"}>
                                <img src={derivative.image} alt={derivative.name}/>
                                <label>{derivative.name}</label>
                            </div>
                            <div className={"item-col item-left"}>
                                <label>{derivative.year_established || '-'}</label>
                            </div>
                        </div>
                        <div className={"derivative-stats"}>
                            <div className={"item-col item-right"}>
                                <label>{Number(derivative.trade_volume_24h_btc).toLocaleString('en')}</label>
                            </div>
                            <div className={"item-col item-right"}>
                                <label>{derivative.url}</label>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}