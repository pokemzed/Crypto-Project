import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/6_shared/store/store";

const initialState = {
    path: typeof window !== "undefined" ? sessionStorage.getItem('pathPage') : '/'
}

export const changePathSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changePath: (state, action) => {
            const path = action.payload
            state.path = path
            typeof window !== "undefined" ? sessionStorage.setItem('pathPage', path) : false
        }
    }
})
export const {changePath} = changePathSlice.actions
export const selectPath = (state: RootState) => state.counter.path
export default changePathSlice.reducer