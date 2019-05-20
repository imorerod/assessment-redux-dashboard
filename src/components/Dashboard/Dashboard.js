import React, { Component } from 'react';
import SpeedControl from '../SpeedControl/SpeedControl';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import Passengers from '../Passengers/Passengers';


// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        
        <p>SPEED: {this.props.reduxState.speedReducer} </p>
        <p>PASSENGER COUNT: {Passengers} </p>
      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(Dashboard);
