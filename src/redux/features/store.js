import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import appStateReducer from './appStateSlice'

const reducer = combineReducers({
  appState: appStateReducer,
})

export default configureStore({
  reducer, 
});