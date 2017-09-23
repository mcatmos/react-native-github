import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/HTTPServices/Api'
import {
  REQUEST_LOGIN
} from '../Features/Login/Actions/'
import {
  REQUEST_PROFILE
} from '../Features/Profile/Actions/'
import { 
  REQUEST_REPOS
} from '../Features/Repos/Actions/'
import {
  REQUEST_PULLREQUEST
} from '../Features/PullRequest/Actions/'
import {
  REQUEST_REVIEWS
} from '../Features/Reviews/Actions/'
import {
  REQUEST_FEED
} from '../Features/Feed/Actions/'
import { 
  requestLogin 
} from '../Features/Login/Saga/'
import { 
  requestProfile
} from '../Features/Profile/Saga/'
import { 
  requestRepos, 
} from '../Features/Repos/Saga/'
import {
  requestPullRequests
} from '../Features/PullRequest/Saga/'
import {
  requestFeed
} from '../Features/Feed/Saga/'
import {
  requestReviews
} from '../Features/Reviews/Saga/'

const api = API.initializeAPI()

export default function* root() {
  yield all([
    takeLatest(REQUEST_LOGIN, requestLogin, api),
    takeLatest(REQUEST_REPOS, requestRepos, api),
    takeLatest(REQUEST_PULLREQUEST, requestPullRequests, api),
    takeLatest(REQUEST_REVIEWS, requestReviews, api),
    takeLatest(REQUEST_FEED, requestFeed, api),
    takeLatest(REQUEST_PROFILE, requestProfile, api)
  ])
}
