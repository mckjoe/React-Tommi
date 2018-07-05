import React from 'react'
import PropTypes from 'prop-types'


function Buttons(props) {
  return(
    <div>
      <button onClick={props.onFeedClicked}>Feed Me!</button>
      <button onClick={props.onSleepClicked}>Sleep Me!</button>
      <button onClick={props.onPlayClicked}>Play With Me!</button>
    </div>
  )
}

Buttons.propTypes = {
  onFeedClicked: PropTypes.func,
  onSleepClicked: PropTypes.func,
  onPlayClicked: PropTypes.func,
}

export default Buttons;
