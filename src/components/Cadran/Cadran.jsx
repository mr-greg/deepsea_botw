// eslint-disable-next-line no-unused-vars
import React from 'react';
import { StyledCadran } from './StyledCadran';
import { motion } from "motion/react";


const Cadran = () => {
  return (
    <StyledCadran
      as={motion.section}
      initial={{ scale: 1 }}
      whileInView={{ scale: 1.1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 }}}>
        <p>
            Son cadran, inspiré des abysses marins, arbore des teintes profondes et sophistiquées, offrant une lisibilité optimale grâce à l’affichage Chromalight, qui émet une luminescence bleue longue durée. Son boîtier en acier Oystersteel et sa lunette en Cerachrom confèrent à la montre une résistance exceptionnelle aux rayures et à la corrosion.
        </p>
      </motion.div>

    </StyledCadran>
  )
}

export default Cadran;