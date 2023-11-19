import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../redux-store"

interface AuthState {
    isAuth: boolean
}

const initialState: AuthState = {
    isAuth: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    }
})

export const {
    setIsAuth

} = authSlice.actions

export default authSlice.reducer

export const selectIsAuth = (state: RootState) => state.auth.isAuth

