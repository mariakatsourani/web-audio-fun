import React, { Component } from 'react';
import PlayIcon from './iconComponents/PlayIcon'

class Play extends Component {
  render() {
    return (
      <div className="play">
        <button>
          <PlayIcon />
        </button>
      </div>
    )
  }
}

export default Play;