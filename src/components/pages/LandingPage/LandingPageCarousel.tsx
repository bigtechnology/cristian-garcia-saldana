import { Carousel } from '@bbllc/reactlib';
import React from 'react';

const LandingPageCarousel = (): React.ReactElement => {
  return (
    <Carousel secondsToChange={5} hideCircles hideArrows>
      <div title="" className="item-1"></div>
      <div title="" className="item-2"></div>
      <div title="" className="item-3"></div>
      <div title="" className="item-4"></div>
    </Carousel>
  );
};

export default LandingPageCarousel;
