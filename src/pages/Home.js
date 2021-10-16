import React from "react";
import NavBar from "./components/Home/Navbar";

export default class HomeComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
      </div>
    );
  }
}
