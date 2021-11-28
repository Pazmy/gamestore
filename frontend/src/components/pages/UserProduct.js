import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatter } from "../../helper/formatter";
import { addProduct } from "../../redux/cartRedux";
import Slideshow from "../Slideshow/Slideshow";

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
  height: auto;
  margin-right: 18px;
`;
const Right = styled.div`
  height: auto;
  padding-bottom: 12px;
`;
const Price = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
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
  const [checkout, setCheckout] = useState(false);
  const [calc, setCalc] = useState();
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => {
        let data = res.data.product;
        setProduct(data);
        let alreadyInCart = products.find((item) => {
          return item.id === data.id;
        });
        if (alreadyInCart) setCheckout(true);
        let filterImg = data.images.filter((img) =>
          img.filename.includes("slide")
        );
        setImages(filterImg);

        setDiscount(data.discount ? data.discount.slice(0, 2) : "");
        setCalc(discount ? (data.price * discount) / 100 : false);
      })
      .catch((err) => console.log(err.response));
  }, [id, discount, products]);
  function handleClick() {
    dispatch(
      addProduct({
        product,
        price: discount ? calc : product.price,
      })
    );
    setCheckout(true);
  }
  return (
    <Container>
      {product ? (
        <div>
          <h1 className="text-bold text-4xl mb-4">{product.name}</h1>
          <Content>
            <ContentWrapper>
              <Left>
                <Slideshow images={images} />
              </Left>
              <Right>
                <div className="shadow-2xl rounded">
                  <img
                    src={`http://localhost:3001/${product.images[0].path}`}
                    width="370"
                    height="auto"
                    alt={product.name}
                  />
                  <Price>
                    <span className={`${calc ? "line" : "font-bold"} text-lg`}>
                      {formatter.format(product.price)}
                    </span>
                    {calc ? (
                      <span className="font-bold text-lg">
                        {formatter.format(calc)}
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
                    {checkout ? (
                      <Link
                        to="/cart"
                        className="bg-black text-white w-full flex justify-center  rounded p-2"
                      >
                        Checkout Now
                      </Link>
                    ) : (
                      <button
                        className="bg-black text-white w-full rounded p-2"
                        onClick={handleClick}
                      >
                        Add to cart
                      </button>
                    )}
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
