import React from 'react'
import { useRouter } from 'next/navigation'
import { IExchangesMarketsApi } from '@/6_shared/types/api-types'

export const ExchangeTable: React.FC<{ exchange: IExchangesMarketsApi }> = ({
    exchange,
}) => {
    const router = useRouter()
    const handleNavigateExchange = () => router.push(`exchanges/${exchange.id}`)
    return (
        <div onClick={handleNavigateExchange} className={'ExchangeTable'}>
            <div className={'coin-info'}>
                <div className={'item-col item-center'}>
                    <label>{exchange.trust_score_rank}</label>
                </div>
                <div className={'item-col item-long item-left'}>
                    <img src={exchange.image} alt={exchange.name} />
                    <label>
                        {exchange.name} ({exchange.year_established} - year
                        established)
                    </label>
                </div>
            </div>
            <div className={'coin-stats'}>
                <div className={'item-col item-right'}>
                    <label>
                        {exchange.trade_volume_24h_btc.toLocaleString('en-IN')}
                    </label>
                </div>
                <div className={'item-col item-right'}>
                    <label>
                        {exchange.trade_volume_24h_btc_normalized.toLocaleString(
                            'en-IN'
                        )}
                    </label>
                </div>
                <div className={'item-col item-right'}>
                    <label>
                        {exchange.url.replace('https://', '').slice(0, 10)}...
                    </label>
                </div>
                <div className={'item-col item-right'}>
                    <label>{exchange.trust_score}</label>
                </div>
                <div className={'item-col item-right'}>
                    <label>{exchange.country}</label>
                </div>
            </div>
        </div>
    )
}
