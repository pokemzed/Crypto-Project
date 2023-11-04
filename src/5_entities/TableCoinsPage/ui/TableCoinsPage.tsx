import React from "react";
import CoinsTable from "@/4_features/home-page/CoinsTable";
import {useGetCoinsMarketsQuery} from "@/6_shared/api";
import EmptyLoader from "next/dist/build/webpack/loaders/empty-loader";
import {Button} from "react-bootstrap";
import Loader from "@/4_features/Loader";

export const TableCoinsPage: React.FC = () => {
    const [page, setPage] = React.useState<number>(1)
    const {data, isLoading, isFetching} = useGetCoinsMarketsQuery(page)
    return (
        <div className={"TableCoinsPage"}>
            {isLoading && <Loader/>}

            {data && (
                <div className={"table-container"}>
                    <CoinsTable coins={data}/>
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