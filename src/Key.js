import React, { Component } from 'react';

class Key extends Component {
  render() {
    return (
      <div className="key">
        <div>
          {this.props.note}
          <sub>{this.props.octave}</sub>
        </div>
      </div>
    );
  }
}

export default Key;
