import React from 'react'
import Buttons from './Buttons'

class Friend extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hunger: 100,
      fun: 100,
      awake: true,
    }
    this.handleFeedClicked = this.handleFeedClicked.bind(this)
    this.handlePlayClicked = this.handlePlayClicked.bind(this)
    this.handleSleepClicked = this.handleSleepClicked.bind(this)
  }

  handleFeedClicked() {
    var newHunger = this.state.hunger += 10
    this.setState({hunger: newHunger})
    console.log(this.state.hunger)
  }

  handlePlayClicked() {
    var newFun = this.state.fun += 10
    this.setState({fun: newFun})
    console.log(this.state.fun)
  }

  handleSleepClicked() {
    this.setState({awake: false})
    console.log(this.state.awake)
  }

  render() {
    var awakeness = null;
    if (this.state.awake) {
      awakeness = "I'm up!"
    } else {
      awakeness = "zzzzzzzzz"
    }
    return(
      <div>
        <ul>
          <li>{this.state.hunger}</li>
          <li>{this.state.fun}</li>
          <li>{awakeness}</li>
        </ul>
        <Buttons onFeedClicked={this.handleFeedClicked} onSleepClicked={this.handleSleepClicked} onPlayClicked={this.handlePlayClicked} />
      </div>
    )
  }
}
export default Friend
