import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/HTTPServices/Api'
import {
  REQUEST_LOGIN
} from '../Features/Login/Actions/'
import { 
  REQUEST_REPOS
} from '../Redux/Repos/Actions/'
import {
  REQUEST_PULLREQUEST, 
  REQUEST_REVIEWS
} from '../Redux/PullRequest/Actions/'
import {
  REQUEST_FEED
} from '../Redux/Feed/Actions/'
import { 
  requestLogin 
} from '../Features/Login/Saga/'
import { 
  requestRepos, 
} from './Repos/'
import {
  requestPullRequests, 
  requestReviews 
} from './PullRequest'
import {
  requestFeed
} from './Feed'

const api = API.initializeAPI()

export default function* root() {
  yield all([
    takeLatest(REQUEST_LOGIN, requestLogin, api),
    takeLatest(REQUEST_REPOS, requestRepos, api),
    takeLatest(REQUEST_PULLREQUEST, requestPullRequests, api),
    takeLatest(REQUEST_REVIEWS, requestReviews, api),
    takeLatest(REQUEST_FEED, requestFeed, api)
  ])
}
