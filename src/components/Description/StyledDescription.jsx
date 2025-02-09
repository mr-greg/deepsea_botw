import styled from "styled-components";

export const StyledDescription = styled.section`
    padding: 10% 5%;
    display: flex;
    justify-content: center;
    gap: 5%;

    .left {
        font-family: 'Magra';
        font-size: 40px;
        font-weight: 600;
        line-height: 48.6px;
    }
    .right {
        font-family: 'Magra';
        font-size: 32px;
        font-weight: 400;
        line-height: 38.88px;
    }

    @media (max-width: 500px) {
        padding: 35px 10%;
        .left {
            font-size: 28px;
        }
        .right {
            font-size: 22px;
        }
    }
`;

