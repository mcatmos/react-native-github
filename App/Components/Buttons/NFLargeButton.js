import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  Text,
  ActivityIndicator
} from 'react-native'
import NFLargeButtonStyles from './Styles/NFLargeButtonStyles'

const NFLargeButton = ({
  label,
  action,
  isFetching
}) => {

  const child = isFetching ? <ActivityIndicator /> : <Text style={NFLargeButtonStyles.label}>{label}</Text>

  return (
    <TouchableOpacity 
      style={NFLargeButtonStyles.container} 
      onPress={action}>
      {child}
    </TouchableOpacity>
  )
}

NFLargeButton.proptypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default NFLargeButton