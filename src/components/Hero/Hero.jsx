// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { StyledHero } from "./StyledHero";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScrollAnimation = () => {
      // Déclencher l'animation seulement si la page a chargé
      setIsVisible(true);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll vers le haut en douceur
    };

    // Déclencher l'animation après un petit délai pour s'assurer que la page est rendue
    setTimeout(handleScrollAnimation, 100); // Ajuster le délai selon tes besoins
  }, []);

  return (
    <StyledHero className={isVisible ? "visible" : ""}>
      <h1>DEEPSEA</h1>
      <h2>L’excellence des profondeurs</h2>
      <span>Montre conçue pour l’exploration extrême</span>
      <div className="btn">
        <span>Explorer la montre</span>
      </div>
    </StyledHero>
  );
};

export default Hero;
