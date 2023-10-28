import React from "react";
import {useGetCoinsMarketsQuery} from "@/6_shared/api";
import {ICoinApi} from "@/6_shared/types/api-types";
import Link from "next/link";

export const InfoCoin: React.FC<{ coinData: ICoinApi }> = ({coinData}) => {
    console.log(coinData)
    return (
        <div className={"InfoCoin"}>
            <div className={"buttons-container"}>
                <Link href={'/'}>Buy/Sell</Link>
                <Link href={'/'}>Long/Short</Link>
                <Link href={'/'}>Earn Crypto</Link>
            </div>
            <div className={"info-container"}>
                <h2>Info</h2>
                <div className={"info-row"}>
                    <h4>Blockchain Website</h4>
                    <div className={"buttons-row"}>
                        {coinData.links.blockchain_site.map((link, index) =>
                            link.length > 3 && <a key={link} href={link}>
                                {link.replace('https://', '').slice(0, 10)}...
                                </a>
                        )}
                    </div>
                </div>
                <div className={"info-row"}>
                    <h4>Home Website</h4>
                    <div className={"buttons-row"}>
                        {coinData.links.homepage.map((link, index) =>
                            link.length > 3 && <a key={link} href={link}>
                                {link.replace('https://', '').slice(0, 10)}...
                                </a>
                        )}
                    </div>
                </div>
                <div className={"info-row"}>
                    <h4>GitHub</h4>
                    <div className={"buttons-row"}>
                        {coinData.links.repos_url.github.map((link, index) =>
                            link.length > 3 && <a key={link} href={link}>
                                {link.replace('https://', '').slice(0, 10)}...
                                </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}