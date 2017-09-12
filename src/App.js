import React, { Component } from 'react';
import './styles/css/App.css';
import Keyboard from './Keyboard';
import Volume from './Volume';
import Waveform from './Waveform';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      audioContext: new (window.AudioContext || window.webkitAudioContext)(),
      masterGainNode: null
    }

    const wavePicker = document.querySelector('select[name="waveform"]'); 
  
    let customWaveform = null;
    let sineTerms = null;
    let cosineTerms = null;

    this.state.masterGainNode = this.state.audioContext.createGain();
    this.state.masterGainNode.connect(this.state.audioContext.destination);
    this.state.masterGainNode.gain.value = 0.5;    
    
    sineTerms = new Float32Array([0, 0, 1, 0, 1]);
    cosineTerms = new Float32Array(sineTerms.length);
    customWaveform = this.state.audioContext.createPeriodicWave(cosineTerms, sineTerms);  
  }
  
  setVolume = vol => {
    let newMasterGainNode = this.state.masterGainNode;
    newMasterGainNode.gain.value = vol;
    this.setState({masterGainNode: newMasterGainNode});
  }

  render() {
    return (
      <div className="App">
        <Keyboard audioContext={this.state.audioContext} masterGainNode={this.state.masterGainNode} />
        <div className="settingsBar">
          <Volume setVolume={this.setVolume} />
          <Waveform />
        </div>
      </div>
    );
  }
}

export default App;
