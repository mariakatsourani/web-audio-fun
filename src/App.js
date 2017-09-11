import React, { Component } from 'react';
import './styles/css/App.css';
import Keyboard from './Keyboard';
import Volume from './Volume';
import Waveform from './Waveform';

class App extends Component {
  constructor() {
    super();
    
    let audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let oscList = [];
    let masterGainNode = null;
    let keyboard = document.getElementById('keyboard'); 
    let wavePicker = document.querySelector('select[name="waveform"]'); 
    let volumeControl = document.querySelector('input[name="volume"]'); 
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
