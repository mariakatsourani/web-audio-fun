import React, { Component } from 'react';

class Key extends Component {
  constructor(props) {
    super(props);

    this.notePressed = this.notePressed.bind(this);
    this.noteReleased = this.noteReleased.bind(this);
    // this.props.playTone = this.props.playTone.bind(this);

    let oscList = [];
    for (let i = 0; i < 9; i++) {
      oscList[i] = [];
    }
  }

  notePressed() {
    this.props.playTone(25.4);    
  }

  noteReleased() {
    // this.oscList[4['A']] = 
    //   this.props.playTone(this.props.frequency);
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
