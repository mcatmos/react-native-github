import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

import { BaseStyles } from '../../Themes/'

const NFTabStats = ({
  reviews
}) => {
  
  const comments = reviews.filter(review => {
    return review.state === 'COMMENTED'
  })

  const request = reviews.filter(review => {
    return review.state === 'CHANGES_REQUESTED'
  })

  const approved = reviews.filter(review => {
    return review.state === 'APPROVED'
  })


  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text style={BaseStyles.cardTitle}>Comments</Text>
        <Text style={styles.number}>{comments.length}</Text>
      </View>
      <View style={styles.tab}>
        <Text style={BaseStyles.cardTitle}>Changes Requested</Text>
        <Text style={styles.number}>{request.length}</Text>
      </View>
      <View style={styles.tab}>
        <Text style={BaseStyles.cardTitle}>Approved</Text>
        <Text style={styles.number}>{approved.length}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10
  },
  number: {
    padding: 2
  }
})

export default NFTabStats