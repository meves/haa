import { configureStore } from "@reduxjs/toolkit"
import uiReducer from "./slices/uiSlice"
import langReducer from './slices/langSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    language: langReducer,
    auth: authReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type GetState = typeof store.getState