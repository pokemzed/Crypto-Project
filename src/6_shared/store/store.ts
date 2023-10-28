import {configureStore} from "@reduxjs/toolkit";
import changePath from './slices/changePathSlice'
import {coinsApi} from "@/6_shared/api/api-list/coingeckoApi";

export const store = configureStore({
    reducer: {
        counter: changePath,
        [coinsApi.reducerPath]: coinsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinsApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch