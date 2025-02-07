// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero/Hero";
import Description from "./components/Description/Description";
import Cadran from "./components/Cadran/Cadran";
import Ice from "./components/Ice/Ice";
import Mist from "./components/Mist/Mist";
import Footer from "./components/Footer/Footer";

const StyledHome = styled.div`
  margin: 0;
  padding: 0;
`;

function Home() {
  return (
    <StyledHome>
      <Hero />
      <Description />
      <Cadran />
      <Ice />
      <Mist />
      <Footer />
    </StyledHome>
  );
}

export default Home;
