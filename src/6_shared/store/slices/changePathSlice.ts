import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/6_shared/store/store";

const initialState = {
    path: '/'
}

export const changePathSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changePath: (state, action) => {
            state.path = action.payload
        }
    }
})
export const {changePath} = changePathSlice.actions
export const selectPath = (state: RootState) => state.counter.path
export default changePathSlice.reducer