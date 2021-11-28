import React from "react";
import styled from "styled-components";
import FeaturedDeals from "../../FeaturedDeals/FeaturedDeals";
import Carousel from "../../Carousel/Carousel.js";
const Container = styled.div`
  padding: 0 40px;
`;
const Home = () => {
  return (
    <Container>
      <Carousel />
      <FeaturedDeals />
    </Container>
  );
};

export default Home;
