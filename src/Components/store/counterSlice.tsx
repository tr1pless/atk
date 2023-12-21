import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    mobileData: true,
  },
  reducers: {
    mobile: (state, action) => {
      state.mobileData = action.payload
      console.log(action.payload, state.mobileData)
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

export const { mobile, language } = counterSlice.actions
export default counterSlice.reducer
