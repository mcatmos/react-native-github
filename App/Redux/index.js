// @flow

import { combineReducers } from 'redux'
import createStore from './createStore'
import login from '../Features/Login/Reducer/'
import repos from '../Redux/Repos/Reducer/'
import pull_requests from '../Redux/PullRequest/Reducer/'
import feed from '../Redux/Feed/Reducer/'


export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const appReducer = combineReducers({
    login,
    repos,
    pull_requests,
    feed
  })

  return createStore(appReducer)
}
