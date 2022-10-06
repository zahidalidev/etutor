import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'subCategories',
  initialState: {},
  reducers: {
    ADD_SUB_CATEGORIES: (state, action) => {
      state[action.payload.title] = action.payload.data
    }
  }
})

export const { ADD_SUB_CATEGORIES } = slice.actions
export default slice.reducer
