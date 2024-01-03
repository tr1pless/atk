import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    mobileData: true,
    sdData: true,
  },
  reducers: {
    mobile: (state, action) => {
      state.mobileData = action.payload
    },
    smallDevice: (state, action) => {
      state.sdData = action.payload
    },
    language: (state) => {
      if (state.value !== 2) {
        ++state.value
      } else {
        state.value = 0
      }
    },
  },
})

export const { mobile, language, smallDevice } = counterSlice.actions
export default counterSlice.reducer
