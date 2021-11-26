import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatter } from "../../helper/formatter";

const Container = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 10px 14px 10px 0;
`;
// const Top = styled.div`
//   background: ${(props) => `url('${props.image}')`};
//   width: 350px;
//   height: 100px;
// `;
const Middle = styled.div`
  flex: 1;
  padding: 10px;
  font-weight: bold;
`;
const Bottom = styled.div`
  padding: 8px 10px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.div`
  display: flex;
  flex-direction: column;
  .line {
    text-decoration: line-through;
  }
`;
const Item = ({ product }) => {
  const primary = product.images.find((image) => image.primary);
  const path = "http://localhost:3001/" + primary.path;
  let discount = product.discount ? product.discount.slice(0, 2) : "";
  const calc = discount ? (product.price * discount) / 100 : false;

  return (
    <Container className="shadow-2xl">
      {/* <Top image={path} /> */}
      <Link to={`product/${product.id}`}>
        <img src={path} alt={product.name} />
      </Link>
      <Middle>{product.name}</Middle>
      <Bottom>
        <Price>
          <span className={calc ? "line" : "font-bold"}>
            {formatter.format(product.price)}
          </span>
          <span className="font-bold">
            {calc ? formatter.format(calc) : ""}
          </span>
        </Price>
        {product.discount ? (
          <span className="bg-black text-white p-2 rounded">
            {product.discount}
          </span>
        ) : (
          ""
        )}
      </Bottom>
    </Container>
  );
};

export default Item;
