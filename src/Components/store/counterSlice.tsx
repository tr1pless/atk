import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    // width: 0,
  },
  reducers: {
    // changeWidth: (state, action) => {
    // state.width = action.payload
    // },
    language: (state) => {
      if (state.value !== 2) {
        ++state.value
      } else {
        state.value = 0
      }
      console.log(state.value)
    },
  },
})

export const { language } = counterSlice.actions
export default counterSlice.reducer
