import React, { Component } from 'react';

class Waveform extends Component {
  constructor() {
    super();

    this.options = [
      { name: 'Sine', value: 'sine' },
      { name: 'Square', value: 'square' },
      { name: 'Sawtooth', value: 'sawtooth' },
      { name: 'Triangle', value: 'triangle' },
    ]
  }
  
  handleChange = e => {
    this.props.setWaveform(e.target.value);
  }

  render() {
    return (
      <div className="waveform">
        <label>Current Waveform:
          <select name="waveform" value={this.props.waveform.value} onChange={this.handleChange}>
            {this.options.map((i, k) => {
              return <option value={i.value} key={k}>{i.name}</option>
            })}
          </select>
        </label>
      </div>
    );
  }
}

export default Waveform;
