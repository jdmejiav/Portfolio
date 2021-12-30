import React from "react";
import NavBar from "./components/Home/Navbar";
import ParticlesComponent from "./components/Home/particles";
import Moto from "./components/Models/Moto"



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
