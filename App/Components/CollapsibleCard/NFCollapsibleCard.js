import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { NFSmallCard, NFDataCard } from '../index'

class NFCollapsibleCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: false
    }
  }
  
  render() {
    return (
      <TouchableOpacity onPress={() => this.setState({collapse: !this.state.collapse})}>
        <NFSmallCard {...this.props}/>
        {this.state.collapse && 
          <Text>In Progress</Text>
        }
      </TouchableOpacity>
    )
   
  }


}

export default NFCollapsibleCard