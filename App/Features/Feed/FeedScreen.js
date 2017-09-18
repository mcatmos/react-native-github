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
  NFEventCard
} from '../../Components/'
import { BaseStyles } from '../../Themes/'
import { requestFeed } from './Actions/'
import { selectFeed } from './Selectors/'
import { Actions as NavigationActions } from 'react-native-router-flux'
import TimerMixin from 'react-timer-mixin'


class FeedScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      updated: false,
      isRefreshing: false
    }
  }

  componentDidMount() {
    this.props.requestFeed('fuseit')
    TimerMixin.setInterval(() => this.update(), 60000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.updated !== this.state.updated) {
      this.props.requestFeed('fuseit')
    }
  }

  update() {
    this.setState({
      updated: !this.state.updated
    })
  }


  _renderCell({item, index}) {
    return (
      <NFEventCard {...item}/>
    )
  }

  _onRefresh() {
    this.props.requestFeed('fuseit')
  }

  render() {
    const { isFetching } = this.props
    if (isFetching && this.props.feed.length === 0) {
      return (
        <View style={BaseStyles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={BaseStyles.container}>
        <NFList
          data={this.props.feed}
          card={(item) => this._renderCell(item)} 
          onRefresh={() => this._onRefresh()}
          refreshing={this.state.isRefreshing}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  feed: selectFeed(state),
  isFetching: state.feed.isFetching
})

export default connect(mapStateToProps, { 
  requestFeed
})(FeedScreen)
