import React, { Component } from 'react';

class AddIcon extends Component {
  render() {
    return (
      <div className="add-to-melody">
        <svg className="icons add-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
          <polygon fill={this.props.fill} points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 "/>
        </svg>
      </div>
    )
  }
}

AddIcon.defaultProps = {
 fill: '#fff'
};

export default AddIcon;