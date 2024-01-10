'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useGetCoinQuery } from '@/6_shared/api'
import InfoCoin from '@/4_features/coin-inside-page/InfoCoin'
import CardsChangePrice from '@/4_features/coin-inside-page/CardsChangePrice'
import Loader from '../../../../6_shared/ui/Loader'

export const AboutCoin: React.FC = () => {
    const { coins: coinId } = useParams()
    const { data: coinInfo, isLoading } = useGetCoinQuery(coinId)

    return (
        <div className={'AboutCoin'}>
            {isLoading && <Loader />}
            {coinInfo && (
                <div className={'about-crypto_container'}>
                    <div className={'coin-info'}>
                        <span className={'rank'}>
                            Rank #{coinInfo.coingecko_rank}
                        </span>
                        <div className={'coin'}>
                            <img
                                src={coinInfo.image.small}
                                alt={coinInfo.name}
                            />
                            <h1>
                                {coinInfo.name} ({coinInfo.symbol.toUpperCase()}
                                )
                            </h1>
                        </div>
                    </div>
                    <div className={'price-info'}>
                        <div className={'price'}>
                            <h2>
                                $
                                {coinInfo.market_data.current_price.usd.toLocaleString(
                                    'en-IN'
                                )}
                            </h2>
                            <span>
                                1.00000000 {coinInfo.symbol.toUpperCase()}
                            </span>
                        </div>
                        <div className={'chart-price'}>
                            <div className={'chart'}>
                                <div
                                    className={'inside-line'}
                                    style={{
                                        width: `${coinInfo.coingecko_score}%`,
                                    }}
                                ></div>
                            </div>
                            <div className={'chart-stats'}>
                                <span>
                                    $
                                    {coinInfo.market_data.low_24h.usd.toLocaleString(
                                        'en-IN'
                                    )}
                                </span>
                                <span>24H Range</span>
                                <span>
                                    $
                                    {coinInfo.market_data.high_24h.usd.toLocaleString(
                                        'en-IN'
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                    <CardsChangePrice coinData={coinInfo} />
                </div>
            )}
            {coinInfo && <InfoCoin coinData={coinInfo} />}
        </div>
    )
}
