import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatter } from "../../helper/formatter";
import Loader from "../Loader/Loader";
const Container = styled.div`
  padding: 0 40px;
`;
const ListCart = styled.div``;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Price = styled.div`
  display: flex;

  flex-wrap: wrap;
  padding: 18px;
  .line {
    text-decoration: line-through;
  }
`;
const Content = styled.div``;
const Checkout = styled.div`
  padding: 8 16px;
`;
const Cart = () => {
  const [loading, setLoading] = useState(false);
  const products = useSelector((state) => state.cart.products);
  let totalPrice = 0;
  const url = "http://localhost:3001/";
  function handleClick() {
    setLoading(!loading);
  }
  return (
    <Container>
      <h1 className="font-bold text-4xl mb-2">Your Cart</h1>
      <Content className="flex justify-between">
        <ListCart>
          {products.map((product, i) => {
            let discount = product.discount ? product.discount.slice(0, 2) : "";
            const calc = discount ? (product.price * discount) / 100 : false;
            if (calc) {
              totalPrice += calc;
            } else {
              totalPrice += product.price;
            }
            return (
              <Product
                key={i}
                className="rounded border-4 border-black border-opacity-25"
              >
                <div className="flex">
                  <img
                    src={url + product.images[0].path}
                    alt={product.name}
                    width="200"
                  />
                  <div className="my-auto px-2">{product.name}</div>
                </div>
                <Price>
                  <div className="flex items-center px-4 ">
                    {product.discount ? (
                      <span className="bg-black text-white p-2 rounded">
                        {product.discount}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className={calc ? "line" : "font-bold"}>
                      {formatter.format(product.price)}
                    </div>
                    {calc ? (
                      <div className="font-bold">{formatter.format(calc)} </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Price>
              </Product>
            );
          })}
        </ListCart>

        <Checkout>
          <div className="shadow-2xl rounded p-4 w-96">
            <h3 className="text-xl font-semibold">Cart Summary</h3>
            <div className="flex justify-between">
              <p>TOTAL:</p>
              <span className="font-bold text-4xl">
                {formatter.format(totalPrice)}
              </span>
            </div>
            <button
              className="bg-black text-white w-full rounded p-2 mt-4 h-10"
              onClick={handleClick}
            >
              {loading ? <Loader /> : "PROCCEED TO CHECKOUT"}
            </button>
          </div>
        </Checkout>
      </Content>
    </Container>
  );
};

export default Cart;
