import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import {
  Text
} from 'react-native'

import moment from 'moment'
import TimerMixin from 'react-timer-mixin'

export default class TimeAgo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      updated: false
    }
  }

  componentDidMount() {
    const { interval } = this.props
    TimerMixin.setInterval(() => this.update(), interval)
  }

  update() {
    this.setState({
      updated: !this.state.updated
    })
  }

  render() {
    return (
      <Text {...this.props}>{moment(this.props.time).fromNow(this.props.hideAgo)}</Text>
    )
  }
}

TimeAgo.propTypes = {
  time: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.instanceOf(Date)
    ]).isRequired,
  interval: PropTypes.number,
  hideAgo: PropTypes.bool
}

TimeAgo.defaultProps = {
  hideAgo: false,
  interval: 60000
}