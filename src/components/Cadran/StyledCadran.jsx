import styled from "styled-components";
import cadranWatch from '../../assets/img/cadran-watch.png';

export const StyledCadran = styled.section`
    background-image: url(${cadranWatch});
    background-size: cover;
    background-position: 50% 25%;
    background-repeat: no-repeat;
    background-attachment: fixed;
  
    min-height: 100dvh;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10%;
    

    p {
        font-family: 'Magra';
        font-weight: 600;
        font-size: 40px;
        line-height: 48.6px;
        width: 40%;
        margin: 0 auto;
    }

    @media (max-width: 900px) {
        p {
            width: 80%;
            font-size: 28px;
        }
    }
`;

