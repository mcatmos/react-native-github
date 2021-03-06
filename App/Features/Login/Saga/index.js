import { 
  call, 
  put, 
  takeLatest, 
  all 
} from 'redux-saga/effects'
import { 
  successLogin, 
  failureLogin 
} from '../Actions'
import { Actions as NavigationActions } from 'react-native-router-flux'

export function* requestLogin(api, action) {
  const { 
    username, 
    password 
  } = action.payload
  NavigationActions.tabBar()
  const response = yield call(api.requestLogin, username, password)

  if (response.ok) {
    
    yield put(successLogin(response))
    NavigationActions.tabBar()
  } else {
    yield put(failureLogin())
    NavigationActions.tabBar()
  }
}