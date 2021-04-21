import { Carousel } from '@bbllc/reactlib';
import React from 'react';

const LandingPageCarousel = (): React.ReactElement => {
  return (
    <Carousel secondsToChange={5} hideCircles hideArrows>
      <div title="Irina Turkova Photography" className="item-1"></div>
      <div title="Kaitlynn Tucker Photography" className="item-2"></div>
      <div title="Weddings by Scott and Dana" className="item-3"></div>
      <div className="item-4"></div>
      <div className="item-5"></div>
    </Carousel>
  );
};

export default LandingPageCarousel;
