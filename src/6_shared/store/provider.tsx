'use client'
import React from "react";
import {Provider} from "react-redux";
import {store, persist} from "@/6_shared/store/store";
import {PersistGate} from "redux-persist/integration/react";

export const ProviderRedux = ({children}: { children: React.ReactNode }) => {
    return <Provider store={store}>
        <PersistGate persistor={persist}>
            {children}
        </PersistGate>
    </Provider>
}