import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// Combina los reducers para mandarlos a una store
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp