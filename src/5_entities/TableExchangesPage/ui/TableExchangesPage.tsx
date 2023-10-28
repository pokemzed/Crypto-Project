'use client'
import React from "react";
import {useGetExchangesMarketsQuery} from "@/6_shared/api";
import CoinsTable from "@/4_features/home-page/CoinsTable";
import {Button} from "react-bootstrap";
import ExchangesTable from "@/4_features/exchanges-page/ExchangesTable";

export const TableExchangesPage: React.FC = () => {
    const [page, setPage] = React.useState<number>(1)
    const {data, isLoading, isFetching} = useGetExchangesMarketsQuery(page)
    return (
        <div className={"TableExchangesPage"}>
            {isLoading && <h3>Loading</h3>}

            {data && (
                <div className={"table-container"}>
                    <ExchangesTable exchanges={data}/>
                    <div className={"pagination-container"}>
                        <Button
                            onClick={() => setPage(page - 1)}
                            disabled={page == 1 || isFetching}
                        >
                            Back page
                        </Button>
                        <Button
                            onClick={() => setPage(page + 1)}
                            disabled={page == 100 || isFetching}
                        >
                            Next page
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}