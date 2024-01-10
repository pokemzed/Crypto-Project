import React from 'react'
import { IExchangesMarketsApi } from '@/6_shared/types/api-types'
import ExchangeTable from '@/5_entities/modules/ExchangeTable'

export const ExchangesTable: React.FC<{
    exchanges: IExchangesMarketsApi[]
}> = ({ exchanges }) => {
    return (
        <div className={'ExchangesTable'}>
            <div className={'container-row container-label'}>
                <div className={'coin-info'}>
                    <div className={'item-col item-center'}>
                        <label>ST</label>
                    </div>
                    <div className={'item-col item-long item-left'}>
                        <label>Exchange</label>
                    </div>
                </div>
                <div className={'coin-stats'}>
                    <div className={'item-col item-right'}>
                        <label>Volume 24h (btc)</label>
                    </div>
                    <div className={'item-col item-right'}>
                        <label>
                            Volume <br /> 24h-normalized (btc)
                        </label>
                    </div>
                    <div className={'item-col item-right'}>
                        <label>Link to Exchange</label>
                    </div>
                    <div className={'item-col item-right'}>
                        <label>Trust score</label>
                    </div>
                    <div className={'item-col item-right'}>
                        <label>Country</label>
                    </div>
                </div>
            </div>
            {exchanges.map((exchange) => (
                <ExchangeTable key={exchange.id} exchange={exchange} />
            ))}
        </div>
    )
}
