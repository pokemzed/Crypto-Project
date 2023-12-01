import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {setupListeners} from "@reduxjs/toolkit/query";
// Reducers
import {coinsApi} from "@/6_shared/api/api-list/coingeckoApi";
import userReducer from '@/6_shared/store/slices/createUserSlice'


//combine reducer
const rootReducer = combineReducers({
    createUser: userReducer,
    [coinsApi.reducerPath]: coinsApi.reducer
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['createUser']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(coinsApi.middleware)
})
export const persist = persistStore(store)

setupListeners(store.dispatch)


// eslint-disable-next-line import/no-anonymous-default-export
export default null


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch