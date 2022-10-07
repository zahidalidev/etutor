import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {
    SAVE_QUESTIONS: (state, action) => action.payload
  }
})

export const { SAVE_QUESTIONS } = slice.actions
export default slice.reducer
