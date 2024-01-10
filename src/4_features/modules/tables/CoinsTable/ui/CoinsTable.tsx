'use client'
import React from 'react'
import { useGetCoinsMarketsQuery } from '@/6_shared/api'
import { ICoinMarketsApi } from '@/6_shared/types/api-types'
import { useRouter } from 'next/navigation'
import CoinTable from '@/5_entities/modules/CoinTable'

export const CoinsTable: React.FC<{ coins: ICoinMarketsApi[] }> = ({
    coins,
}) => {
    return (
        <div className={'CoinsTable'}>
            <div className={'container-row container-label'}>
                <div className={'coin-info'}>
                    <div className={'item-col item-center'}>
                        <label>ST</label>
                    </div>
                    <div className={'item-col item-long item-left'}>
                        <label>Coin</label>
                    </div>
                </div>
                <div className={'coin-stats'}>
                    <div className={'item-col item-right'}>
                        <label>Price</label>
                    </div>
                    <div className={'item-col item-right'}>
                        <label>Low 24h</label>
                    </div>
                    <div className={'item-col item-right'}>
                        <label>High 24h</label>
                    </div>
                    <div className={'item-col item-right'}>
                        <label>24h Volume</label>
                    </div>
                    <div className={'item-col item-right'}>
                        <label>MKT Cap</label>
                    </div>
                </div>
            </div>
            {coins.map((coin) => (
                <CoinTable key={coin.id} coin={coin} />
            ))}
        </div>
    )
}
