// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'motion/react';
import styled from 'styled-components';
import iceWatch from '../../assets/img/ice-watch.png';

// Style du composant
const StyledIce = styled(motion.section)`
    background-image: url(${iceWatch});
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
    height: 100dvh;
    max-width: 100%;
`;

const Ice = () => {
    return (
        <StyledIce
            initial={{ opacity: 0.5 }} // Taille initiale
            whileInView={{ opacity: 1 }} // Zoom progressif
            transition={{ duration: 1.5, ease: 'easeInOut' }} // Animation fluide
        />
    );
};

export default Ice;
