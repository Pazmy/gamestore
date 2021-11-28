import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 14px 18px;
  justify-content: space-evenly;
  background-color: black;
  color: white;
  margin-top: 28px;
`;
const Footer = () => {
  return (
    <Container>
      <div className="flex flex-col">
        <h6 className="font-bold">Browse Categories</h6>
        <a href="/">Store</a>
        <a href="/">Bundles</a>
        <a href="/">Top Sellers</a>
        <a href="/">Lates Deals</a>
        <a href="/">New Release</a>
        <a href="/">VR Games</a>
        <a href="/">Game by Franchise</a>
        <a href="/">Game by Feature</a>
      </div>
      <div className="flex flex-col">
        <h6 className="font-bold">Games by Genres</h6>
        <a href="/">Action</a>
        <a href="/">Adventure</a>
        <a href="/">Anime</a>
        <a href="/">Casual</a>
        <a href="/">Shooter</a>
        <a href="/">Indie</a>
        <a href="/">RPG</a>
        <a href="/">Strategy</a>
        <a href="/">Simulation</a>
        <a href="/">View All</a>
      </div>
      <div className="flex flex-col">
        <h6 className="font-bold">Information</h6>
        <a href="/">About Gamestore</a>
        <a href="/">Support</a>
        <a href="/">Publishing Partners</a>
        <a href="/">Affiliate Partners</a>
        <a href="/">Reedem Code</a>
      </div>
      <div className="flex flex-col">
        <h6 className="font-bold">Connect With Us</h6>
        <div className="flex justify-between mt-2">
          <svg
            className="mx-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
          </svg>
          <svg
            className="mx-2 cursor-pointer"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z" />
          </svg>
          <svg
            className="mx-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" />
          </svg>
          <svg
            className="mx-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
