'use client'
import React from 'react'
import { useGetExchangeQuery } from '@/6_shared/api'
import { useParams } from 'next/navigation'
import Loader from '../../../../6_shared/ui/Loader'
import Link from 'next/link'

export const AboutExchange: React.FC = () => {
    const { exchange: exchangeName } = useParams()
    const { data: exchange, isLoading } = useGetExchangeQuery(
        String(exchangeName)
    )
    return (
        <div className={'AboutExchange'}>
            {isLoading && <Loader />}
            {exchange && (
                <div className={'about-exchange-container'}>
                    <div className={'exchange-info'}>
                        <span className={'rank'}>
                            Rank #{exchange.trust_score_rank}
                        </span>
                        <div className={'exchange'}>
                            <img
                                src={exchange.image}
                                alt={`${exchange.name}-image`}
                            />
                            <h1>{exchange.name}</h1>
                        </div>
                    </div>
                    <div className={'cards-info'}>
                        <div className={'card'}>
                            <span>Trading volume 24h</span>
                            <h4>
                                {exchange.trade_volume_24h_btc.toLocaleString(
                                    'en'
                                )}{' '}
                                (BTC)
                            </h4>
                        </div>
                        <div className={'card'}>
                            <span>Country of foundation</span>
                            <h4>{exchange.country}</h4>
                        </div>
                        <div className={'card'}>
                            <span>Year of foundation</span>
                            <h4>{exchange.year_established}</h4>
                        </div>
                        <div className={'card'}>
                            <span>Trust points</span>
                            <h4>{exchange.trust_score}</h4>
                        </div>
                        <div onClick={() => {}} className={'card'}>
                            <span>Official Site</span>
                            <h4>{exchange.url.replace('https://', '')}</h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
