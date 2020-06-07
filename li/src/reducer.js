import { combineReducers } from 'redux';
import appData from './App/reducer/reducer.js'
const finalReducer = combineReducers({
    appData
})

export default finalReducer;