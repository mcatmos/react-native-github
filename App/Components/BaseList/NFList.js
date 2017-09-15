import React, { Component } from 'react'
import {
  FlatList,
  Text,
  View,
  StyleSheet
} from 'react-native'
import { Colors } from '../../Themes/'
import styles from './Styles/Styles'

class NFList extends Component {
  render() {
    return (
      <FlatList
        ListHeaderComponent={this.props.ListHeaderComponent}
        data={this.props.data}
        renderItem={(item) => this.props.card(item)}
      />
    )
  }
}

export default NFList