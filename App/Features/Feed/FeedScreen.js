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
      isRefreshing: false,
      feed: null
    }
  }

  componentDidMount() {
    this.props.requestFeed('fuseit')
    TimerMixin.setInterval(() => this.update(), 60000);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({feed: nextProps.feed})
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

  _onFilter({text}) {
    const { feed } = this.props
    let filterText = text.toLowerCase()
    const filteredAssets = feed.filter(item => item.actor.login.toLowerCase().indexOf(filterText) !== -1);
    this.setState({
      feed: _.values(filteredAssets)
    })
  }

  render() {
    const { 
      isFetching, 
      error
    } = this.props
    
    const {
      feed
    } = this.state

    if (isFetching && !feed) {
      return (
        <View style={BaseStyles.container}>
          <NFFilterBar onFilter={(text) => this._onFilter(text)}/>
          <ActivityIndicator />
        </View>
      )
    }

    if (error) {
      return (
        <View style={BaseStyles.container}>
          <NFFilterBar onFilter={(text) => this._onFilter(text)}/>
          <Text>Oooops!</Text>
        </View>
      )
    }

    return (
      <View style={BaseStyles.container}>
        <NFFilterBar onFilter={(text) => this._onFilter(text)}/>
        <NFList
          data={feed}
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
  isFetching: state.feed.isFetching,
  error: state.feed.error
})

export default connect(mapStateToProps, { 
  requestFeed
})(FeedScreen)
