import React, { Component } from 'react';

class Key extends Component {
  constructor(props) {
    super(props);
  }

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
      <div className="key" 
        onMouseDown={this.notePressed} onMouseUp={this.noteReleased}>
        <div>
          {this.props.note}
          <sub>{this.props.octave}</sub>
        </div>
      </div>
    );
  }
}

export default Key;
