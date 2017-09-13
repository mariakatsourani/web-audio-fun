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
      masterGainNode: null,
      waveform : {
        value: 'sine',
        options: [
          { name: 'Sine', value: 'sine' },
          { name: 'Square', value: 'square' },
          { name: 'Sawtooth', value: 'sawtooth' },
          { name: 'Triangle', value: 'triangle' },
          { name: 'Custom', value: 'custom' },
        ]
      }
    }

    const wavePicker = document.querySelector('select[name="waveform"]'); 
  
    let customWaveform = null;
    let sineTerms = null;
    let cosineTerms = null;

    this.state.masterGainNode = this.state.audioContext.createGain();
    this.state.masterGainNode.connect(this.state.audioContext.destination);
    this.state.masterGainNode.gain.value = 0.2;    
    
    sineTerms = new Float32Array([0, 0, 1, 0, 1]);
    cosineTerms = new Float32Array(sineTerms.length);
    customWaveform = this.state.audioContext.createPeriodicWave(cosineTerms, sineTerms);  
  }
  
  setVolume = vol => {
    let newMasterGainNode = this.state.masterGainNode;
    newMasterGainNode.gain.value = vol;
    this.setState({masterGainNode: newMasterGainNode});
  }

  setWaveform = val => {
    let newWaveform = this.state.waveform;
    newWaveform.value = val;
    this.setState({waveform: newWaveform});
  }

  render() {
    return (
      <div className="App">
        <Keyboard audioContext={this.state.audioContext} masterGainNode={this.state.masterGainNode} waveform={this.state.waveform.value} />
        <div className="settingsBar">
          <Volume setVolume={this.setVolume} />
          <Waveform setWaveform={this.setWaveform} waveform={this.state.waveform} />
        </div>
      </div>
    );
  }
}

export default App;
