'use client'
import React, { useState } from 'react'
import { useGetDerivativesQuery } from '@/6_shared/api'
import Loader from '@/6_shared/ui/Loader'
import PaginationTable from '@/4_features/modules/PaginationTable'
import DerivativesTable from '@/4_features/modules/tables/DerivativesTable'

export const Derivatives: React.FC = () => {
    const [page, setPage] = useState<number>(1)
    const { data, isLoading, isFetching } = useGetDerivativesQuery(page)
    return (
        <div className={'Derivatives'}>
            {isLoading && <Loader />}
            {data && (
                <div className={'table-container'}>
                    <DerivativesTable derivatives={data} />
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
