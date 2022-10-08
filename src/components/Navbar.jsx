import React from "react";
import airBNBLogo from "../images/airbnb-logo.svg";

export default function Navbar() {
  return (
    <nav>
      <img src={airBNBLogo} className="nav-logo"/>
    </nav>
  );
}
