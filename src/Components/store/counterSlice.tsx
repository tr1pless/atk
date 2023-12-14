import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    language: (state) => {
      if (state.value !== 2) {
        ++state.value
      } else {
        state.value = 0
      }
    },
  },
})

export const { language } = counterSlice.actions
export default counterSlice.reducer
