// eslint-disable-next-line no-unused-vars
import React from "react";
import { StyledDescription } from "./StyledDescription";

const Description = () => {
  return (
    <StyledDescription>
      <div className="left">
        Conçue pour les explorateurs des abysses, la Rolex Deepsea incarne l’alliance ultime entre performance extrême, précision horlogère et robustesse inégalée. Véritable prouesse d’ingénierie, cette montre de plongée professionnelle est le fruit de décennies d’innovation et d’expertise Rolex.
      </div>
      <div className="right">
        Son cadran, inspiré des abysses marins, arbore des teintes profondes et sophistiquées, offrant une lisibilité optimale grâce à l’affichage Chromalight, qui émet une luminescence bleue longue durée. Son boîtier en acier Oystersteel et sa lunette en Cerachrom confèrent à la montre une résistance exceptionnelle aux rayures et à la corrosion.
      </div>
    </StyledDescription>
  );
};

export default Description;
