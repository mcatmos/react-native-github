import Immutable from 'seamless-immutable'
import {
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  ERROR_LOGIN
} from '../Actions/'

const INITIAL_STATE = Immutable({
  fetching: false,
  results: [],
  page: 0,
  error: false
})

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        isFetching: true,
        error: false
      }
    break
    case SUCCESS_LOGIN: 
      return {
        ...state,
        isFetching: false,
        results: action.payload.results
      }
    break
    case ERROR_LOGIN:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

export default login