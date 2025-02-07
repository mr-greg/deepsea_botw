// eslint-disable-next-line no-unused-vars
import React from 'react';
import { StyledMist } from './StyledMist';
import { motion } from 'motion/react';

const Mist = () => {
    return (
        <StyledMist
            as={motion.section}
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            >   
                <p>
                {"Équipée du mouvement Calibre 3235, un chef-d'œuvre de précision certifié Superlative Chronometer, la Rolex Deepsea offre une réserve de marche de 70 heures et une robustesse sans faille, même dans les conditions les plus extrêmes."}
                </p>
            </motion.div>
        </StyledMist>
    );
};

export default Mist;
