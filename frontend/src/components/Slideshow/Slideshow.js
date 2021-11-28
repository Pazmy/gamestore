import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
  }
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const SlideImage = styled.div`
  &.slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  &.slide.active {
    opacity: 1;
    transition-duration: 1s ease;
  }
`;
const ThumbnailBottom = styled.div`
  max-width: 700px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  .cursor {
    cursor: pointer;
  }

  .demo {
    opacity: 0.6;
  }

  .active,
  .demo:hover {
    opacity: 1;
  }
`;
const ImagesContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

const Slideshow = ({ images }) => {
  let [slideIndex, setSlideIndex] = useState(0);
  const length = images.length;
  const url = "http://localhost:3001/";

  function nextSlide() {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
    console.log(slideIndex);
  }
  function prevSlide() {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
    console.log(slideIndex);
  }
  function ThumbnailClick(index) {
    setSlideIndex(index);
  }
  if (!Array.isArray(images) || length <= 0) {
    return null;
  }

  return (
    <Container>
      <ImagesContainer>
        {images.map((image, index) => {
          return (
            <SlideImage
              className={index === slideIndex ? "slide active" : "slide"}
              key={index}
            >
              {/* slideshow note how to */}
              {index === slideIndex && (
                <img src={url + image.path} alt={image.name} width="100%" />
              )}
            </SlideImage>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </ImagesContainer>

      <ThumbnailBottom className="row">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={url + image.path}
              alt={image.name}
              className="demo cursor inline"
              width="20%"
              onClick={() => ThumbnailClick(index)}
            />
          );
        })}
      </ThumbnailBottom>
    </Container>
  );
};

export default Slideshow;
