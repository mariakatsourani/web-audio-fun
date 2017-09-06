import React, { Component } from 'react';

class Waveform extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      options: [
        { name: 'Select', value: null },
        { name: 'Sine', value: 'sine' },
        { name: 'Square', value: 'square' },
        { name: 'Sawtooth', value: 'sawtooth' },
        { name: 'Triangle', value: 'triangle' },
        { name: 'Custom', value: 'custom' },
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="right">
        <span>Current Waveform:</span>
        <select name="waveform" value={this.state.value} onChange={this.handleChange}>
          {this.state.options.map((i, k) => {
            return <option value={i.value} key={k}>{i.name}</option>
          })}
        </select>
      </div>
    );
  }
}

export default Waveform;
