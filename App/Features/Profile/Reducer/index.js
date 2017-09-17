import Immutable from 'seamless-immutable'
import {
  REQUEST_PROFILE,
  SUCCESS_PROFILE,
  ERROR_PROFILE
} from '../Actions/'

const INITIAL_STATE = Immutable({
  fetching: false,
  results: [],
  page: 0,
  error: false
})

const profile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PROFILE:
      return {
        ...state,
        fetching: true,
        error: false
      }
    break
    case SUCCESS_PROFILE: 
      return {
        ...state,
        fetching: false,
        results: action.payload.results
      }
    break
    case ERROR_PROFILE:
      return {
        ...state,
        fetching: false,
        error: true
      }
    default:
      return state
  }
}

export default profile