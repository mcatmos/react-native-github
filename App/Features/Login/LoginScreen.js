import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Octicons'
import { SearchBar, NFList, NFLargeButton } from '../../Components/'
import NFLoginForm from './Components/NFLoginForm'
import NFLogo from './Components/NFLogo'
import { BaseStyles } from '../../Themes/'
import {
  requestLogin
} from './Actions/'
import { Actions as NavigatorActions } from 'react-native-router-flux'
import OAuth from '../../Config/OAuth'

class LoginScreen extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      password: "FiaT-1991",
      username: "mcatmos"
    }
  }

  _validateForm(username, password) {
    if (username.length > 0 && password.length > 0) {
      this.props.requestLogin(username, password)
    }
  }

  _renderError() {
    return (
      <View style={BaseStyles.errorContainer}>
        <Text style={BaseStyles.label}>Ooops! Check your credentials mate..</Text>
      </View>
    )
  }

  render() {
    const { username, password } = this.state
    const { error, isFetching } = this.props
    return (
      <View style={[BaseStyles.container]}>
        <NFLogo image={'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'} />
        <NFLoginForm 
          action={() => this._validateForm(username, password)}
          isFetching={isFetching}
          setUserName={(username) => this.setState({username: username})}
          setPassword={(password) => this.setState({password: password})}
        />
        {error && this._renderError()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.login.error,
  isFetching: state.login.isFetching
})

export default connect(mapStateToProps, { 
  requestLogin
})(LoginScreen)
