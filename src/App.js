import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard';
import Volume from './Volume';
import Waveform from './Waveform';

class App extends Component {
  constructor() {
    super();
    
    let audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let oscList = [];
    let masterGainNode = null;
  }

  render() {
    return (
      <div className="App">
        <Keyboard />
        <div className="settingsBar">
          <Volume />
          <Waveform />
        </div>
      </div>
    );
  }
}

export default App;
