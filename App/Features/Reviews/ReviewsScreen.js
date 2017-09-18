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
  NFCommentCard,
  NFTabStats
} from '../../Components/'
import { BaseStyles } from '../../Themes/'
import { requestReviews } from './Actions/'
import { selectReviews } from './Selectors/'
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
    const { isFetching, reviews } = this.props

    if (isFetching) {
      return (
        <View style={BaseStyles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    if (reviews !== null && reviews.length === 0) {
      return (
        <View style={BaseStyles.container}>
          <Text style={BaseStyles.textCentered}>Ooops!! There's nothing to show =(</Text>
        </View>
      )
    }

    return (
      <View style={BaseStyles.container}>
        { reviews && reviews.length > 0 && <NFTabStats reviews={this.props.reviews} /> }
        <NFList
          data={reviews}
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
