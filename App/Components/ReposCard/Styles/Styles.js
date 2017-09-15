import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../Themes/'


const NFReposCardStyles = StyleSheet.create({
  container: {
    padding: 14,
    borderColor: Colors.snow,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Colors.white,
    marginVertical: 5
  },
  rightContainer: {
    flex: 2
  },
   leftContainer: {
    flex: 1, 
    justifyContent: 'flex-start'
  },
  description: {
    color: Colors.grey,
    fontWeight: '100',
    paddingLeft: 2,
    paddingTop: 5
  },
  row: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingTop: 5
  },
  language: {
    textAlign: 'right',
    color: Colors.grey,
    fontWeight: '100'
  },
  rowContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingBottom: 10
  }
})

export default NFReposCardStyles