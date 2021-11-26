import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { formatter } from "../../helper/formatter";
import { addProduct } from "../../redux/cartRedux";

const Container = styled.div`
  padding: 0 40px;
`;
const Content = styled.div`
  margin: 0 auto;
  width: 100%;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 400px;
  margin-right: 18px;
`;
const Right = styled.div`
  /* border: 1px solid black; */
  height: auto;
  padding-bottom: 12px;
`;
const Price = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 18px;
  .line {
    text-decoration: line-through;
  }
`;
const AddToCart = styled.div`
  padding: 18px;
  width: 100%;
`;
const Section1 = styled.div``;

const UserProduct = () => {
  const [product, setProduct] = useState();
  const [discount, setDiscount] = useState();
  const [calc, setCalc] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => {
        let data = res.data.product;
        setProduct(data);
        setDiscount(data.discount ? data.discount.slice(0, 2) : "");
        setCalc(discount ? (data.price * discount) / 100 : false);
      })
      .catch((err) => console.log(err.response));
  }, [id, discount]);
  function handleClick() {
    dispatch(
      addProduct({
        product,
        price: discount ? calc : product.price,
      })
    );
  }
  return (
    <Container>
      {product ? (
        <div>
          <h1 className="text-bold text-4xl mb-4">{product.name}</h1>
          <Content>
            <ContentWrapper>
              <Left></Left>
              <Right>
                <div className="shadow-2xl rounded">
                  <img
                    src={`http://localhost:3001/${product.images[0].path}`}
                    width="370"
                    height="auto"
                    alt={product.name}
                  />
                  <Price>
                    <span className={calc ? "line" : "font-bold"}>
                      {formatter.format(product.price)}
                    </span>
                    {calc ? (
                      <span className="font-bold ml-2">
                        {formatter.format(calc)}{" "}
                      </span>
                    ) : (
                      ""
                    )}

                    {product.discount ? (
                      <span className="bg-black text-white p-2 rounded mt-2">
                        {product.discount}
                      </span>
                    ) : (
                      ""
                    )}
                  </Price>

                  <AddToCart>
                    <button
                      className="bg-black text-white w-full rounded p-2"
                      onClick={handleClick}
                    >
                      Add to cart
                    </button>
                  </AddToCart>
                </div>
              </Right>
            </ContentWrapper>
          </Content>
          <Section1 className="rounded py-4">
            <h3 className="text-lg font-semibold">Description</h3>
            <p>{product.desc}</p>
            <h3 className="text-lg font-semibold">Publisher</h3>
            <p>{product.publisher}</p>
            <h3 className="text-lg font-semibold">Developer</h3>
            <p>{product.developer}</p>
            <h3 className="text-lg font-semibold">Genre</h3>
            <p>{product.genres.join(" ")}</p>
          </Section1>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default UserProduct;
