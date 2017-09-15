import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native'
import _ from 'lodash'
import { connect } from 'react-redux'
import { 
  NFFilterBar, 
  NFList, 
  NFCommentCard 
} from '../../Components/'
import { BaseStyles } from '../../Themes/'
import { requestReviews } from '../../Redux/PullRequest/Actions/'
import { selectReviews } from '../../Redux/PullRequest/Selectors/'
import { Actions as NavigationActions } from 'react-native-router-flux'


class PullRequestScreen extends Component {

  componentDidMount() {
    const { 
      repo, 
      owner, 
      id, 
      pullrequestId 
    } = this.props
    this.props.requestReviews(owner, repo, id, pullrequestId)
  }

  _renderCell({item, index}) {
    const { 
      state, 
      user, 
      html_url 
    } = item

    return (
      <NFCommentCard
        key={index} 
        status={state} 
        user={user}
        url={html_url}
      />
    )
  }

  render() {
    const { isFetching } = this.props

    if (isFetching) {
      return (
        <View style={BaseStyles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={BaseStyles.container}>
        <NFList
          data={this.props.reviews}
          card={(item) => this._renderCell(item)} 
        />
      </View>
    )
  }
}

const mapStateToProps = (state, props) => ({
  reviews: selectReviews(state, props.pullrequestId),
  isFetching: state.pull_requests.isFetching
})

export default connect(mapStateToProps, { 
  requestReviews
})(PullRequestScreen)
