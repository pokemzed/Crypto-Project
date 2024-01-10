import React from 'react'
import { IDerivatives } from '@/6_shared/types/api-types'
import { useRouter } from 'next/navigation'

export const DerivativeTable: React.FC<{ derivative: IDerivatives }> = ({
    derivative,
}) => {
    const router = useRouter()
    const handleNavigateDerivative = () =>
        router.push(`derivative/${derivative.id}`)
    return (
        <div onClick={handleNavigateDerivative} className={'DerivativeTable'}>
            <div className={'derivative-info'}>
                <div className={'item-col item-long item-left'}>
                    <img src={derivative.image} alt={derivative.name} />
                    <label>{derivative.name}</label>
                </div>
                <div className={'item-col item-left'}>
                    <label>{derivative.year_established || '-'}</label>
                </div>
            </div>
            <div className={'derivative-stats'}>
                <div className={'item-col item-right'}>
                    <label>
                        {Number(derivative.trade_volume_24h_btc).toLocaleString(
                            'en'
                        )}
                    </label>
                </div>
                <div className={'item-col item-right'}>
                    <label>{derivative.url}</label>
                </div>
            </div>
        </div>
    )
}
