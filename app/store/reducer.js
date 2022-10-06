import { combineReducers } from 'redux'

import categoriesReducer from './categories'
import subCategoriesReducer from './subCategories'
import questionsReducer from './questions'

export default combineReducers({
  categories: categoriesReducer,
  subCategories: subCategoriesReducer,
  questions: questionsReducer
})
