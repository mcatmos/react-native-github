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
  NFReposCard 
} from '../../Components/'
import { BaseStyles } from '../../Themes/'
import { requestRepos, requestRepo } from './Actions/'
import { selectRepos } from './Selectors/'
import { Actions as NavigationActions } from 'react-native-router-flux'


class ReposScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: null
    }
  }

  componentDidMount() {
    this.props.requestRepos()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({repos: nextProps.repos})
  }

  _onFilter({text}) {
    const { repos } = this.props
    const filteredAssets = repos.filter(repo => repo.full_name.toLowerCase().indexOf(text) !== -1);
    this.setState({
      repos: _.values(filteredAssets)
    })
  }

  _renderCell({item, index}) {
    return (
      <NFReposCard 
        {...item} 
        key={index}
        requestRepo={
          () => NavigationActions.reviewspullrequests({id: item.id, repo: item.name, owner: item.owner.login})
        }
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
        <NFFilterBar onFilter={(text) => this._onFilter(text)}/>
        <NFList
          data={this.state.repos}
          card={(item) => this._renderCell(item)} 
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  repos: selectRepos(state),
  isFetching: state.repos.isFetching
})

export default connect(mapStateToProps, { 
  requestRepos,
  requestRepo
})(ReposScreen)
