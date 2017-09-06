import React, { Component } from 'react';

class Volume extends Component {

  render() {
    return (
        <div className="left">
            <span>Volume:</span>
            <input type="range" min="0.0" max="1.0" step="0.01" value="0.5" list="volumes" name="volume" />
            <datalist id="volumes">
                <option value="0.0" label="Mute"/>
                <option value="1.0" label="100%"/>
            </datalist>
        </div>
    );
  }
}

export default Volume;
