import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    SAVE_CATEGORIES: (state, action) => {
      state = action.payload.data
    }
  }
})

export const { SAVE_CATEGORIES } = slice.actions
export default slice.reducer
