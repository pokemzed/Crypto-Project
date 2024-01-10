import React from 'react'
import { Button } from 'react-bootstrap'

interface IPaginationTable {
    page: number
    changePage: (page: number) => void
    isFetching: boolean
}

export const PaginationTable: React.FC<IPaginationTable> = ({
    page,
    changePage,
    isFetching,
}) => {
    return (
        <div className={'PaginationTable'}>
            <Button
                onClick={() => changePage(page - 1)}
                disabled={page == 1 || isFetching}
            >
                Back page
            </Button>
            <Button
                onClick={() => changePage(page + 1)}
                disabled={page == 100 || isFetching}
            >
                Next page
            </Button>
        </div>
    )
}
