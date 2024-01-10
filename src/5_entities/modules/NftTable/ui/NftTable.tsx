import React from 'react'
import { useRouter } from 'next/navigation'
import { INftMarkets } from '@/6_shared/types/api-types'

export const NftTable: React.FC<{ nft: INftMarkets }> = ({ nft }) => {
    const router = useRouter()
    const handleNavigateNft = () => router.push(`/nft/${nft.id}`)
    return (
        <div onClick={handleNavigateNft} className={'NftTable'}>
            <div className={'nft-info'}>
                <div className={'item-col item-long item-left'}>
                    <label>
                        {nft.name} (symbol: {nft.symbol})
                    </label>
                </div>
            </div>
            <div className={'nft-stats'}>
                <div className={'item-col item-right'}>
                    <label>{nft.asset_platform_id}</label>
                </div>
                <div className={'item-col item-right'}>
                    <label>{nft.contract_address}</label>
                </div>
            </div>
        </div>
    )
}
