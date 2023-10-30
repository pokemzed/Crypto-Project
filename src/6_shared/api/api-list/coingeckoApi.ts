import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {HYDRATE} from "next-redux-wrapper";
import {
    ALL_EXCHANGES_API,
    COIN_API, EXCHANGE_API,
    GLOBAL_API_URL,
    MARKETS_API,
    NFT_API,
    NFT_LIST_API,
} from "@/6_shared/constants/api";
import {
    ICoinApi,
    ICoinMarketsApi,
    IExchangeApi,
    IExchangesMarketsApi,
    INftApi,
    INftMarkets
} from "@/6_shared/types/api-types";

export const coinsApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: GLOBAL_API_URL}),
    extractRehydrationInfo(action, {reducerPath}){
        if(action.type === HYDRATE){
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        getCoinsMarkets: build.query<ICoinMarketsApi[], number>({
            query: (page) => MARKETS_API(page, 25)
        }),
        getCoin: build.query<ICoinApi, string | string[]>({
            query: (id) => COIN_API(id.toString())
        }),
        getExchangesMarkets: build.query<IExchangesMarketsApi[], number>({
            query: (page) => ALL_EXCHANGES_API(page, 25)
        }),
        getExchange: build.query<IExchangeApi, string>({
            query: (id) => EXCHANGE_API(id)
        }),
        getNftMarkets: build.query<INftMarkets[], number>({
            query: (page) => NFT_LIST_API(page, 25)
        }),
        getNft: build.query<INftApi, string>({
            query: (id) => NFT_API(id)
        })
    })
})