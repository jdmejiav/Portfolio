import React from "react";
import NavBar from "./components/Home/Navbar";
import ParticlesComponent from "./components/Home/particles";

export default class HomeComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>

        <ParticlesComponent></ParticlesComponent>

      </div>
    );
  }
}
