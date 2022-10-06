import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'questions',
  initialState: {},
  reducers: {
    ADD_QUESTIONS: (state, action) => {
      state[action.payload.title] = action.payload.data
    }
  }
})

export const { ADD_QUESTIONS } = slice.actions
export default slice.reducer
