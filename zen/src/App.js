import React, { Component } from 'react';
import './App.css';
import Bg from './Bg'
import Player from './Player'

class App extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Bg />
        <Player />
      </div>
    );
  }

}

export default App;
