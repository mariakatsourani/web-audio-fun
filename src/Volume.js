import React, { Component } from 'react';

class Volume extends Component {
  constructor() {
    super();
    
    this.state = {value: ''}
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className="volume">
        <label>Volume:
          <input onChange={this.handleChange} type="range" min="0.0" max="1.0" step="0.01" 
            defaultValue="0.5" list="volumes" name="volume" id="volume-slider" />
          <datalist id="volumes">
            <option value="0.0" label="Mute" />
            <option value="1.0" label="100%" />
          </datalist>
        </label>
      </div>
    );
  }
}

export default Volume;
