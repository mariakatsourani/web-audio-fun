import React, { Component } from 'react';

class Volume extends Component {
  constructor() {
    super();
    
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className="left">
        <span>Volume:</span>
        <input onChange={this.handleChange} type="range" min="0.0" max="1.0" step="0.01" value="0.5" list="volumes" name="volume" />
        <p>Current volume:{this.state.value}</p>
        <datalist id="volumes">
          <option value="0.0" label="Mute" />
          <option value="1.0" label="100%" />
        </datalist>
      </div>
    );
  }
}

export default Volume;
