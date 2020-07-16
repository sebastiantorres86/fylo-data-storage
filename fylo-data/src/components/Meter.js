import React from "react";
import "../index.css";

class Meter extends React.Component {
  render() {
    return (
      <div className="progress-bar">
        <div className="completed">
          <span className="circle"></span>
        </div>
      </div>
    );
  }
}

export default Meter;
