import styled from "styled-components";
import heroWatch from "../../assets/img/hero-watch.png";

export const StyledHero = styled.section`
  background-image: url(${heroWatch});
  background-size: cover;
  background-position: 50% 25%;
  background-repeat: no-repeat;
  background-attachment: fixed; 

  height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4%;

  h1 {
    font-size: 92px;
    font-weight: 400;
    line-height: 110.4px;
  }
  h2 {
    font-size: 64px;
    font-weight: 400;
    line-height: 76.8px;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
  }
  .btn {
    padding: 20px 15px;
    background-color: rgba(212, 175, 55, 1);
    gap: 8px;
    span {
      font-size: 36px;
      font-weight: 400;
      line-height: 43.2px;
      color: rgba(10, 10, 10, 1);
      ;
    }
  }
`;

