import {createSlice} from "@reduxjs/toolkit";
import {changePathSlice} from "@/6_shared/store/slices/changePathSlice";

const initialState: {email: null | string, uId: null | string, token: null | string} = {
    email: null,
    uId: null,
    token: localStorage.getItem('token')
}

const createUserSlice = createSlice({
    name: "createUserSlice",
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.email = action.payload.email
            state.uId = action.payload.uId
            state.token = action.payload.token
        },
        removeUser: (state) => {
            state.email = null
            state.uId = null
            state.token = null
        }
    }
})
export const {createUser, removeUser} = createUserSlice.actions
export default createUserSlice.reducer