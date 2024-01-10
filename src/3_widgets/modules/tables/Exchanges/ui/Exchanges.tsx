'use client'
import React, { useState } from 'react'
import Loader from '@/6_shared/ui/Loader'
import CoinsTable from '@/4_features/modules/tables/CoinsTable'
import PaginationTable from '@/4_features/modules/PaginationTable'
import { useGetExchangesMarketsQuery } from '@/6_shared/api'
import ExchangesTable from '@/4_features/modules/tables/ExchangesTable'

export const Exchanges: React.FC = () => {
    const [page, setPage] = useState<number>(1)
    const { data, isLoading, isFetching } = useGetExchangesMarketsQuery(page)
    return (
        <div className={'Exchanges'}>
            {isLoading && <Loader />}
            {data && (
                <div className={'table-container'}>
                    <ExchangesTable exchanges={data} />
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
