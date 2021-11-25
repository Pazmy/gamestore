import React, { useState, useEffect } from "react";
import bf2042 from "../../tesImage/bf2042.jpg";
import ds from "../../tesImage/ds.jpg";
import forza5 from "../../tesImage/forza5.jpg";
import fs2022 from "../../tesImage/fs2022.jpg";
import horizonzd from "../../tesImage/horizonzd.jpg";
import {
  SlideShowContainer,
  SlideShowSlider,
  Slide,
  // SlideShowDots,
  // SlideShowDot,
  Text,
} from "./Slider.styles";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const delay = 2500;
  useEffect(() => {
    const time = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === 5 - 1 ? 0 : prevIndex + 1)),
      delay
    );
    return () => clearTimeout(time);
  }, [index]);
  return (
    <SlideShowContainer>
      <SlideShowSlider
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <Slide image={bf2042}>
          <Text>
            <h1>tes</h1>
            <p>somedescription</p>
          </Text>
        </Slide>
        <Slide image={ds}>
          <Text>
            <h1>tes</h1>
            <p>somedescription</p>
          </Text>
        </Slide>
        <Slide image={forza5}>
          <Text>
            <h1>tes</h1>
            <p>somedescription</p>
          </Text>
        </Slide>
        <Slide image={fs2022}>
          <Text>
            <h1>tes</h1>
            <p>somedescription</p>
          </Text>
        </Slide>
        <Slide image={horizonzd}>
          <Text>
            <h1>tes</h1>
            <p>somedescription</p>
          </Text>
        </Slide>
      </SlideShowSlider>
      {/* <SlideShowDots>
        
          <SlideShowDot
            key={idx}
            bgColor={index === idx ? `#717171` : "#bbb"}
            onClick={() => {
              setIndex(idx);
            }}
          />
        
      </SlideShowDots> */}
    </SlideShowContainer>
  );
};

export default Slider;
