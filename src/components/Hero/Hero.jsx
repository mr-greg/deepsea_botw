// eslint-disable-next-line no-unused-vars
import React from "react";
import { StyledHero } from "./StyledHero";

const Hero = () => {
  return (
    <StyledHero>
      <h1>DEEPSEA</h1>
      <h2>L’excelence des profondeurs</h2>
      <span>Montre conçue pour l’exploration extrême</span>
      <div className="btn">
        <span>Explorer la montre</span>
      </div>
    </StyledHero>
  );
};

export default Hero;
