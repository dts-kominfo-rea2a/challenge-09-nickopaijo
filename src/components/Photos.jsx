import React from "react";

class Photos extends React.Component {
    render() {
      return (
        <img
          className="photos"
          src={this.props.photo}
          alt={this.props.avatar}
        ></img>
      );
    }
  }
  
  export default Photos;