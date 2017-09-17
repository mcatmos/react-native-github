import { 
  call, 
  put, 
  takeLatest, 
  all 
} from 'redux-saga/effects'
import { 
  successPullRequests,
  successReviews
} from '../../Redux/PullRequest/Actions/'

export function* requestPullRequests(api, action) {
  const { 
    repo, 
    owner,
    id
  } = action.payload
  const response = yield call(api.requestPullRequests, repo, owner)
  console.log(response)
  if (response.ok) {
    yield put(successPullRequests(response, id))
  }
}

export function* requestReviews(api, action) {
  console.log(action)
  const { 
    repo, 
    owner,
    id,
    pullrequestId
  } = action.payload

  const response = yield call(api.requestReviews, repo, owner, id)
  if (response.ok) {
    yield put(successReviews(response, repo, pullrequestId))
  }
}