import React, { Component } from 'react';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { connect } from 'react-redux';

// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: '',
    }
  }

  changeSpeed = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    this.setState({
      speed: inputValue,
    })
  }

  clickIncrease = (event) => {
    this.props.dispatch({
      type: 'SPEED_INCREASE',
    })
    console.log('INCREASE FIRING');

  }

  clickDecrease = (event) => {
    this.props.dispatch({
      type: 'SPEED_DECREASE',
    })
    console.log('DECREASE FIRING');
  }

  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.clickIncrease}>Increase Speed</button>
        <p>SPEED:{this.props.reduxState.speedReducer}</p>
        <button onClick={this.clickDecrease}>Decrease Speed</button>
      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(SpeedControl);
