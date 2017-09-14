import React, { Component } from 'react';
import AddButton from './AddButton';

class Key extends Component {

  notePressed = () => {
    this.props.addNote(this.props.octave,
      this.props.note,
      this.props.frequency);
  }

  noteReleased = () => {
   this.props.removeNote(this.props.octave, this.props.note);
  }

  render() {
    return (
      <div className="key" onMouseDown={this.notePressed} onMouseUp={this.noteReleased}>
        <div className="key-details">
          {this.props.note}
          <sub>{this.props.octave}</sub>
        </div>
        <AddButton />
      </div>
    );
  }
}

export default Key;
