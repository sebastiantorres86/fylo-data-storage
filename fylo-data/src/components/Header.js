import React from "react";
import "./index.css";
import Logo from '../images/logo.svg'

class Header extends React.Component {
  render() {
    return (
      <div>
        <img src={Logo} alt="Fylo Logo" />
      </div>
    )
  }
}

export default Header;