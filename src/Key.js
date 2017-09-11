import React, { Component } from 'react';

class Key extends Component {
  render() {
    return (
      <div className="key">
        {this.props.note}
        <div>{this.props.note}</div>
        <sub>{this.props.octave}</sub>
      </div>
    );
  }
}

export default Key;
