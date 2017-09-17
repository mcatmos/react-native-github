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
  NFUserCard,
  NFSmallCard,
  NFCollapsibleCard
} from '../../Components/'
import { BaseStyles } from '../../Themes/'
import { requestProfile } from './Actions/'
import { selectProfile } from './Selectors/'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Octicons'


class ProfileScreen extends Component {


  render() {
    const { 
      profile 
    } = this.props
    
    return (
      <View style={[BaseStyles.container, {justifyContent: 'flex-start'}]}>
        <NFUserCard
          avatarUrl={profile.avatar_url}
          bio={profile.bio}
          email={profile.email}
          location={profile.location}
          login={profile.login}
          name={profile.name}
        />
        <NFSmallCard 
          icon={'repo'}
          label={'Repositories'}
          value={profile.public_repos}
        />
        <NFCollapsibleCard 
          icon={'organization'}
          label={'Followers'}
          value={profile.followers}
        />
        <NFCollapsibleCard 
          icon={'organization'}
          label={'Following'}
          value={profile.following}
        />
        <NFSmallCard 
          icon={'database'}
          label={'Disk Usage'}
          value={profile.disk_usage}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.login.results
})

export default connect(mapStateToProps, { 
  requestProfile
})(ProfileScreen)
