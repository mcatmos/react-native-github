import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../Themes/'


const NFEventCard = StyleSheet.create({
  container: {
    padding: 14,
    borderColor: Colors.snow,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Colors.white,
    marginVertical: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column'
  }
})

export default NFEventCard