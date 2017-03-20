import { combineReducers } from 'redux'
import { RootStackState } from './navigation'
import { LoaderState } from './loader'

export default combineReducers({
  RootStackState,
  LoaderState
})