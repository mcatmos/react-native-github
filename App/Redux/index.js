// @flow

import { combineReducers } from 'redux'
import createStore from './createStore'
import login from '../Features/Login/Reducer/'
import profile from '../Features/Profile/Reducer'
import repos from '../Features/Repos/Reducer/'
import pull_requests from '../Features/PullRequest/Reducer/'
import feed from '../Features/Feed/Reducer/'
import reviews from '../Features/Reviews/Reducer/'


export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const appReducer = combineReducers({
    login,
    repos,
    pull_requests,
    reviews,
    feed,
    profile
  })

  return createStore(appReducer)
}
