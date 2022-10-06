import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    SAVE_CATEGORIES: (state, action) => action.payload
  }
})

export const { SAVE_CATEGORIES } = slice.actions
export default slice.reducer
