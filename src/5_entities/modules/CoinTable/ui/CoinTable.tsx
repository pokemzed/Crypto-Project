import React from 'react'
import { ICoinMarketsApi } from '@/6_shared/types/api-types'
import { useRouter } from 'next/navigation'

export const CoinTable: React.FC<{ coin: ICoinMarketsApi }> = ({ coin }) => {
    const router = useRouter()
    const handleNavigateCoinPage = () => router.push(coin.id)

    return (
        <div onClick={handleNavigateCoinPage} className={'CoinTable'}>
            <div className={'coin-info'}>
                <div className={'item-col item-center text-bold'}>
                    <label>{coin.market_cap_rank}</label>
                </div>
                <div className={'item-col item-long item-left text-bold'}>
                    <label>
                        {coin.name} ({coin.symbol})
                    </label>
                </div>
            </div>
            <div className={'coin-stats'}>
                <div className={'item-col item-right'}>
                    <label>${coin.current_price.toLocaleString('en-IN')}</label>
                </div>
                <div className={'item-col item-right'}>
                    <label>${coin.low_24h.toLocaleString('en-IN')}</label>
                </div>
                <div className={'item-col item-right'}>
                    <label>${coin.high_24h.toLocaleString('en-IN')}</label>
                </div>
                <div className={'item-col item-right'}>
                    <label>${coin.low_24h.toLocaleString('en-IN')}</label>
                </div>
                <div className={'item-col item-right'}>
                    <label>${coin.market_cap.toLocaleString()}</label>
                </div>
            </div>
        </div>
    )
}
