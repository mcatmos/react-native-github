import React, { Component } from 'react'
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Colors } from '../../Themes/'
import styles from './Styles/Styles'

class NFFilterBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.props.onFilter({text})}
          style={styles.textInput}
          placeholder={'Filter..'}
          autoCapitalize={'none'}
        />
      </View>
    )
  }
}

export default NFFilterBar