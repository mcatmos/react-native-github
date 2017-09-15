import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../Themes/'


const NFPullRequesCardtyles = StyleSheet.create({
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
    paddingLeft: 2
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  language: {
    textAlign: 'right',
    color: Colors.grey,
    fontWeight: '100'
  },
  rowContainer: {
    paddingTop: 10, 
    flexDirection: 'row',
    flex: 1, 
    justifyContent: 'space-between'
  },
  rowSmallContainer: {
    flexDirection: 'row', 
    paddingTop: 10
  },
  topContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start'
  }
})

export default NFPullRequesCardtyles