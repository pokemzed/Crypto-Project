import { createSlice } from '@reduxjs/toolkit'
import { changePathSlice } from '@/6_shared/store/slices/changePathSlice'

const initialState: {
    email: null | string
    token: null | string
    userData: any
} = {
    email: null,
    token: null,
    userData: null,
}

const createUserSlice = createSlice({
    name: 'createUserSlice',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.email = action.payload.email || null
            state.token = action.payload.token || null
            state.userData = { ...action.payload.userData } || null
        },
        removeUser: (state) => {
            state.email = null
            state.token = null
            state.userData = null
        },
    },
})
export const { createUser, removeUser } = createUserSlice.actions
export default createUserSlice.reducer
