import { combineReducers } from 'redux'
import tableReducer from './tableReducer'
import weatherReducer from './weatherReducer'
import modalReducer from './modalReducer'

export default combineReducers({
    tableReducer,
    modalReducer,
    weatherReducer
})