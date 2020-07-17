import { combineReducers } from 'redux'
import listReducer from './listReducer'
// import card

const rootReducer = combineReducers({
  list: listReducer,
})

export default rootReducer
