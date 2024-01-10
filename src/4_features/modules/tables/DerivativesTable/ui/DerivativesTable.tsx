import React from 'react'
import { IDerivatives } from '@/6_shared/types/api-types'
import DerivativeTable from '@/5_entities/modules/DerivativeTable'

export const DerivativesTable: React.FC<{ derivatives: IDerivatives[] }> = ({
    derivatives,
}) => {
    return (
        <div className={'DerivativesTable'}>
            <div className={'container-row container-label'}>
                <div className={'derivative-info'}>
                    <div className={'item-col item-long item-left'}>
                        <label>Derivative</label>
                    </div>
                    <div className={'item-col item-left'}>
                        <label>Year established</label>
                    </div>
                </div>
                <div className={'derivative-stats'}>
                    <div className={'item-col item-right'}>
                        <label>Trade volume 24h (btc)</label>
                    </div>
                    <div className={'item-col item-right'}>
                        <label>Url</label>
                    </div>
                </div>
            </div>
            {derivatives.map((derivative) => (
                <DerivativeTable key={derivative.id} derivative={derivative} />
            ))}
        </div>
    )
}
