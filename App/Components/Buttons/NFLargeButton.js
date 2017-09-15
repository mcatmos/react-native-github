import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  Text
} from 'react-native'
import NFLargeButtonStyles from './Styles/NFLargeButtonStyles'

const NFLargeButton = ({
  label,
  action
}) => {
  return (
    <TouchableOpacity 
      style={NFLargeButtonStyles.container} 
      onPress={action}>
      <Text style={NFLargeButtonStyles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

NFLargeButton.proptypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default NFLargeButton