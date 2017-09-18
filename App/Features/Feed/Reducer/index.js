import Immutable from 'seamless-immutable'
import _ from 'lodash'
import {
  REQUEST_FEED,
  SUCCESS_FEED,
  FAILURE_FEED
} from '../Actions/'

const INITIAL_STATE = Immutable({
  isFetching: true,
  results: [],
  page: 0,
  error: false
})

const feed = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_FEED:
      return {
        ...state,
        isFetching: true
      }
    break
    case SUCCESS_FEED:
    const feedMap = _.mapKeys(action.payload.results, 'id')
      return {
        ...state,
        isFetching: false,
        results: _.merge({}, state.results, feedMap)
      }
    break
    case FAILURE_FEED:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    break
    default:
      return state
  }
}

export default feed