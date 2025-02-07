import styled from "styled-components";
import mistWatch from '../../assets/img/mist-watch.png';

export const StyledMist = styled.section`
    background-image: url(${mistWatch});
    background-size: cover;
    background-position: 50% 25%;
    background-repeat: no-repeat;
    background-attachment: fixed;
  
    height: 100dvh;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-family: 'Magra';
        font-weight: 600;
        font-size: 40px;
        line-height: 48.6px;
        width: 40%;
    }
`;

