import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { formatter } from "../../helper/formatter";
import axios from "axios";
import Loader from "../Loader/Loader";
import { clearCart, removeProduct } from "../../redux/cartRedux";

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
const Cart = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  let totalPrice = 0;
  const url = "http://localhost:3001/";
  function handleClick() {
    setLoading(true);
    try {
      const data = { products, total: totalPrice, user };
      axios.post(`${url}orders/add`, data).then((res) => {
        console.log(res.data);
        dispatch(clearCart());
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  function handleDeleteProduct(product, calc) {
    console.log("clik");

    dispatch(removeProduct({ product, price: calc }));
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
                </div>
                <div className="my-auto px-2 w-64">{product.name}</div>
                <Price className="flex items-center">
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
                  <div className="px-2">
                    <button onClick={() => handleDeleteProduct(product, calc)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z" />
                      </svg>
                    </button>
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
