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
  SlideShowDots,
  SlideShowDot,
  Text,
} from "./Carousel.style";

const Carousel = () => {
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
      <h2 className="text-xl font-medium mb-2">Now Available</h2>

      <SlideShowSlider
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <Slide image={bf2042}>
          <Text>
            <h3 className="text-lg">Battlefield™ 2042</h3>
            <p>
              Battlefield™ 2042 is a first-person shooter that marks the return
              to the iconic all-out warfare of the franchise. In a near-future
              world transformed by disorder, adapt and overcome
              dynamically-changing battlegrounds with the help of your squad and
              a cutting-edge arsenal.
            </p>
          </Text>
        </Slide>
        <Slide image={ds}>
          <Text>
            <h3>DEATH STRANDING</h3>
            <p>
              From legendary game creator Hideo Kojima comes an all-new,
              genre-defying experience. Sam Bridges must brave a world utterly
              transformed by the Death Stranding. Carrying the disconnected
              remnants of our future in his hands, he embarks on a journey to
              reconnect the shattered world one step at a time.
            </p>
          </Text>
        </Slide>
        <Slide image={forza5}>
          <Text>
            <h3>Forza Horizon 5</h3>
            <p>
              Your Ultimate Horizon Adventure awaits! Explore the vibrant and
              ever-evolving open world landscapes of Mexico with limitless, fun
              driving action in hundreds of the world’s greatest cars. Begin
              Your Horizon Adventure today and add to your Wishlist!
            </p>
          </Text>
        </Slide>
        <Slide image={fs2022}>
          <Text>
            <h3>Farming Simulator 22</h3>
            <p>
              Create your farm and let the good times grow! Harvest crops, tend
              to animals, manage productions, and take on seasonal challenges.
            </p>
          </Text>
        </Slide>
        <Slide image={horizonzd}>
          <Text>
            <h3>Horizon Zero Dawn™ Complete Edition</h3>
            <p>
              Experience Aloy’s legendary quest to unravel the mysteries of a
              future Earth ruled by Machines. Use devastating tactical attacks
              against your prey and explore a majestic open world in this
              award-winning action RPG!
            </p>
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

export default Carousel;
