import React, { Component } from 'react';

class Waveform extends Component {
  handleChange = e => {
    this.props.setWaveform(e.target.value);
  }

  render() {
    return (
      <div className="waveform">
        <label>Current Waveform:
          <select name="waveform" value={this.props.waveform.value} onChange={this.handleChange}>
            {this.props.waveform.options.map((i, k) => {
              return <option value={i.value} key={k}>{i.name}</option>
            })}
          </select>
        </label>
      </div>
    );
  }
}

export default Waveform;
