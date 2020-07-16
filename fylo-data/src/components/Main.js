import React from "react";
import "../index.css"
import Meter from './Meter'

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <p>You’ve used <b>815 GB</b> of your storage</p>
        <Meter />
        <div className="gigas">
          <p>0 GB</p>
          <p>1000 GB</p>
        </div>
        <div className="card">
          <h1 className="number">185</h1><span className="GB-left">GB left</span>
        </div>
      </div>
    )
  }
}

export default Main;