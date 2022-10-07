import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'subCategories',
  initialState: [],
  reducers: {
    SAVE_SUB_CATEGORIES: (state, action) => action.payload
  }
})

export const { SAVE_SUB_CATEGORIES } = slice.actions
export default slice.reducer
