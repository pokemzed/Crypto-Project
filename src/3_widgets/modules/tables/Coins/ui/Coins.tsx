'use client'
import React, { useState } from 'react'
import { useGetCoinsMarketsQuery } from '@/6_shared/api'
import CoinsTable from '../../../../../4_features/modules/tables/CoinsTable'
import Loader from '@/6_shared/ui/Loader'
import PaginationTable from '@/4_features/modules/PaginationTable'

export const Coins: React.FC = () => {
    const [page, setPage] = useState<number>(1)
    const { data, isLoading, isFetching } = useGetCoinsMarketsQuery(page)
    return (
        <div className={'Coins'}>
            {isLoading && <Loader />}
            {data && (
                <div className={'table-container'}>
                    <CoinsTable coins={data} />
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
