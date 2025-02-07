// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from "styled-components";
import iceWatch from '../../assets/img/ice-watch.png';

const Ice = () => {
    const StyledIce = styled.section`
        background-image: url(${iceWatch});
        background-size: 80%;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        
        height: 100dvh;
        max-width: 100%;
    `;
    return (
        <StyledIce></StyledIce>
    )
}

export default Ice;