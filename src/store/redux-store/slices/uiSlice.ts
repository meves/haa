import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../redux-store"

interface UiState {
  mobileMenuIsOpen: boolean
}

const initialState: UiState = {
  mobileMenuIsOpen: false,
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction) => {
      state.mobileMenuIsOpen = true
    },
    setMobileMenuClosed: (state, action: PayloadAction) => {
      state.mobileMenuIsOpen = false
    }
  }
})

export const {
  setMobileMenuOpen,
  setMobileMenuClosed
} = uiSlice.actions

export default uiSlice.reducer

export const selectMobileMenuIsOpen = (state: RootState) => state.ui.mobileMenuIsOpen