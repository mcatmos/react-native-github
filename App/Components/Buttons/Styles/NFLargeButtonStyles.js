import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../Themes/'

const NFLargeButtonStyles = StyleSheet.create({
  container: {
    padding: 14,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey
  },
  label: {
    color: Colors.white,
    fontWeight: 'bold'
  }
})

export default NFLargeButtonStyles