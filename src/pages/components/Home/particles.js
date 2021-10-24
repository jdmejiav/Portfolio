import React from "react";

import Particles from "react-tsparticles";

export default function ParticlesComponent() {
  const particlesInit = (main) => {};

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="container-particles">
      <div className="child z-index">
        <h1 className="titulo-particles">Juan Diego Mejía Vargas</h1>
      </div>

      <Particles
        className="child particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#212529",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.4,
                size: 10,
              },
              push: {
                quantity: 20,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 150,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: false,
        }}
      />
    </div>
  );
}
