import React, { Component } from 'react';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { connect } from 'react-redux';

// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passenger: '',
    }
  }

  changeName = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    this.setState({
        passenger: inputValue,
    })
}

addNewPassenger = (event) => {
  this.props.dispatch({
      type: 'PASSENGER',
      payload: this.state.passenger
  });
  console.log('PASSENGER ADD FIRING');
  console.log(this.state.passenger); // pulling name off input
}

  render() {
    const htmlArray = this.props.reduxState.passengerReducer.map((passenger, index) => {
      return (
          <div key={index}>
              <p>{passenger.passenger}</p>
          </div>
      )
  });

  return (
      <div>
        <h2>Passengers</h2>

        <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={this.changeName} />
        <button onClick={this.addNewPassenger}>Add Passenger</button>

        <ul>PASSENGER LIST: {this.props.reduxState.passengerReducer}</ul>
        {/* <ul>PASSENGER LIST: {htmlArray}</ul> */}

      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(Passengers);