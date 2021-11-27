import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "./Item";

const Container = styled.div``;
const ListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const FeaturedDeals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/products/")
      .then((res) => {
        setProducts(res.data.results);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <Container>
      <h2 className="text-xl font-medium">Feature Deals</h2>
      <ListItem>
        {products.map((product, i) => {
          if (product.discount) {
            return <Item product={product} key={i} />;
          }
        })}
      </ListItem>
    </Container>
  );
};

export default FeaturedDeals;
