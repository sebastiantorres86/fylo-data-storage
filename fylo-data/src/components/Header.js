import React from "react";
import "../index.css";
import Logo from "../images/logo.svg";
import IconDocument from "../images/icon-document.svg";
import IconFolder from "../images/icon-folder.svg";
import IconUpload from "../images/icon-upload.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} alt="Fylo Logo" />
        <div className="folders">
          <div className="icons">
            <img src={IconDocument} alt="Icon Document" />
          </div>
          <div className="icons">
            <img src={IconFolder} alt="Icon Folder" />
          </div>
          <div className="icons">
            <img src={IconUpload} alt="Icon Upload" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
