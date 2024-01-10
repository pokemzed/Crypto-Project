'use client'
import React, { useState } from 'react'
import Loader from '@/6_shared/ui/Loader'
import PaginationTable from '@/4_features/modules/PaginationTable'
import { useGetNftMarketsQuery } from '@/6_shared/api'
import NftsTable from '@/4_features/modules/tables/NftsTable'

export const Nft: React.FC = () => {
    const [page, setPage] = useState<number>(1)
    const { data, isLoading, isFetching } = useGetNftMarketsQuery(page)
    return (
        <div className={'Nft'}>
            {isLoading && <Loader />}
            {data && (
                <div className={'table-container'}>
                    <NftsTable nfts={data} />
                    <PaginationTable
                        page={page}
                        changePage={setPage}
                        isFetching={isFetching}
                    />
                </div>
            )}
        </div>
    )
}
