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
  NFPullRequestCard 
} from '../../Components/'
import { BaseStyles } from '../../Themes/'
import { requestPullRequests } from '../../Redux/PullRequest/Actions/'
import { selectPullRequests } from '../../Redux/PullRequest/Selectors/'
import { Actions as NavigationActions } from 'react-native-router-flux'


class PullRequestScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pullRequests: null
    }
  }

  componentDidMount() {
    const { id, repo, owner } = this.props
    this.props.requestPullRequests(id, repo, owner)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({pullRequests: nextProps.pullRequests})
  }

  _onFilter({text}) {
    const { pullRequests } = this.props
    const filteredAssets = pullRequests.filter(repo => repo.title.toLowerCase().indexOf(text) !== -1);
    this.setState({
      pullRequests: _.values(filteredAssets)
    })
  }

  _renderCell({item, index}) {
    return (
      <NFPullRequestCard 
        {...item}
        key={index} 
        requestRepo={() => NavigationActions.reviewspullrequests({
          repo: this.props.repo,
          owner: this.props.owner,
          id: item.number,
          pullrequestId: item.id
          })
        }
      />
    )
  }

  render() {
    const { isFetching } = this.props
    const { pullRequests } = this.state

    if (isFetching) {
      return (
        <View style={BaseStyles.container}>
          <ActivityIndicator />
        </View>
      )
    }
    
    return (
      <View style={BaseStyles.container}>
        <NFFilterBar onFilter={(text) => this._onFilter(text)}/>
        <NFList
          data={pullRequests}
          card={(item) => this._renderCell(item)} 
        />
      </View>
    )
  }
}

const mapStateToProps = (state, props) => ({
  pullRequests: selectPullRequests(state, props.pullRequestId),
  isFetching: state.pull_requests.isFetching
})

export default connect(mapStateToProps, { 
  requestPullRequests
})(PullRequestScreen)
