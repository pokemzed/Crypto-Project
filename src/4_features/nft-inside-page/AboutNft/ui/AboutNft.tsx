'use client'
import React from 'react'
import { useGetNftQuery } from '@/6_shared/api'
import { useParams } from 'next/navigation'
import Loader from '../../../../6_shared/ui/Loader'

export const AboutNft: React.FC = () => {
    const { 'nft-inside': idNft } = useParams()
    console.log(idNft)
    const { data: nft, isLoading } = useGetNftQuery(String(idNft))
    console.log(nft)
    return (
        <div className={'AboutNft'}>
            {isLoading && <Loader />}
            {nft && (
                <div className={'about-nft-container'}>
                    <div className={'nft-info'}>
                        <span className={'rank'}>
                            Total supply {nft.total_supply}
                        </span>
                        <div className={'nft'}>
                            <img
                                src={nft.image.small}
                                alt={`${nft.name}-image`}
                            />
                            <h1>{nft.name}</h1>
                        </div>
                        <p>{nft.description}</p>
                    </div>
                    <div className={'cards-info'}>
                        <div className={'card'}>
                            <span>Market Cup Price</span>
                            <h4>${nft.market_cap.usd.toLocaleString('en')}</h4>
                        </div>
                        <div className={'card'}>
                            <span>Price Change 24h</span>
                            <h4
                                style={{
                                    color: `${
                                        nft.floor_price_24h_percentage_change
                                            .usd > 0
                                            ? '#8AFF34'
                                            : '#FF3232'
                                    }`,
                                }}
                            >
                                {nft.floor_price_24h_percentage_change.usd.toFixed(
                                    3
                                )}{' '}
                                %
                            </h4>
                        </div>
                        <div className={'card'}>
                            <span>Price Change 7d</span>
                            <h4
                                style={{
                                    color: `${
                                        nft.floor_price_7d_percentage_change
                                            .usd > 0
                                            ? '#8AFF34'
                                            : '#FF3232'
                                    }`,
                                }}
                            >
                                {nft.floor_price_7d_percentage_change.usd.toFixed(
                                    3
                                )}{' '}
                                %
                            </h4>
                        </div>
                        <div className={'card'}>
                            <span>Price Change 30d</span>
                            <h4
                                style={{
                                    color: `${
                                        nft.floor_price_30d_percentage_change
                                            .usd > 0
                                            ? '#8AFF34'
                                            : '#FF3232'
                                    }`,
                                }}
                            >
                                {nft.floor_price_30d_percentage_change.usd.toFixed(
                                    3
                                )}{' '}
                                %
                            </h4>
                        </div>
                        <div onClick={() => {}} className={'card'}>
                            <span>Price Change 1y</span>
                            <h4
                                style={{
                                    color: `${
                                        nft.floor_price_1y_percentage_change
                                            .usd > 0
                                            ? '#8AFF34'
                                            : '#FF3232'
                                    }`,
                                }}
                            >
                                {nft.floor_price_1y_percentage_change.usd.toFixed(
                                    3
                                )}{' '}
                                %
                            </h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
