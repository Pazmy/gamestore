import React from "react";
import styled from "styled-components";
import FeaturedDeals from "../../FeaturedDeals/FeaturedDeals";

const Container = styled.div`
  padding: 0 40px;
`;
const Home = () => {
  return (
    <Container>
      <FeaturedDeals />
    </Container>
  );
};

export default Home;
