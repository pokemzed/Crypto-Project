'use client'
import React from "react";
import {Button} from "react-bootstrap";
import {useGetNftMarketsQuery} from "@/6_shared/api";
import NftTable from "@/4_features/nft-page/NftTable";

export const TableNftPage: React.FC = () => {
    const [page, setPage] = React.useState<number>(1)
    const {data, isLoading, isFetching} = useGetNftMarketsQuery(page)
    return (
        <div className={"TableNftPage"}>
            {isLoading && <h3>Loading</h3>}

            {data && (
                <div className={"table-container"}>
                    <NftTable nfts={data}/>
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