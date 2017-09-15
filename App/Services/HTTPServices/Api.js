import { create } from 'apisauce'
import Base64 from '../Base64'

const initializeAPI = () => {
  const api = create({
    baseURL: 'https://api.github.com',
    headers: {
      'Cache-Control': 'no-cache',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Host': 'api.github.com'
    },
    timeout: 20000
  })

  requestLogin = (username, password) => {
    api.setHeader('Authorization', 'Basic ' + Base64.btoa(`${username}:${password}`))
    return api.get('/user')
  }

  requestRepos = () => {
    return api.get('/user/repos')
  }

  requestPullRequests = (repo, owner) => {
    return api.get(`/repos/${owner}/${repo}/pulls`)
  }

  requestReviews = (repo, owner, pullRequestId) => {
    return api.get(`/repos/${owner}/${repo}/pulls/${pullRequestId}/reviews`)
  }

  return {
    requestLogin,
    requestRepos,
    requestPullRequests,
    requestReviews
  }
}

export default {
  initializeAPI
}