'use client'
import React from "react";
import {useGetDerivativesQuery} from "@/6_shared/api";
import CoinsTable from "@/4_features/home-page/CoinsTable";
import {Button} from "react-bootstrap";
import Loader from "@/4_features/Loader";
import DerivativeTable from "@/4_features/derivative-page/DerivativeTable";

export const TableDerivativePage: React.FC = () => {
    const [page, setPage] = React.useState<number>(1)
    const {data: derivatives, isLoading, isFetching} = useGetDerivativesQuery(page)
    return (
        <div className={"TableDerivativePage"}>
            {isLoading && <Loader/>}

            {derivatives && (
                <div className={"table-container"}>
                    <DerivativeTable derivatives={derivatives}/>
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