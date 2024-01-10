import React from 'react'
import { INftMarkets } from '@/6_shared/types/api-types'
import NftTable from '@/5_entities/modules/NftTable'

export const NftsTable: React.FC<{ nfts: INftMarkets[] }> = ({ nfts }) => {
    return (
        <div className={'NftsTable'}>
            <div className={'container-row container-label'}>
                <div className={'nft-info'}>
                    <div className={'item-col item-long item-left'}>
                        <label>Nft</label>
                    </div>
                </div>
                <div className={'nft-stats'}>
                    <div className={'item-col item-right'}>
                        <label>Platform</label>
                    </div>
                    <div className={'item-col item-right'}>
                        <label>Contract address</label>
                    </div>
                </div>
            </div>
            {nfts.map((nft) => (
                <NftTable key={nft.id} nft={nft} />
            ))}
        </div>
    )
}
