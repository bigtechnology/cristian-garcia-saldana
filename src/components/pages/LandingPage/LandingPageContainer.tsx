import React from 'react';
import { About, ContactForm } from '../../common';
import ServicesPageContainer from '../ServicesPage/ServicesPageContainer';
import LandingPageCarousel from './LandingPageCarousel';

const LandingPageContainer = (): React.ReactElement => {
  return (
    <div className="landing-page-container">
      <LandingPageCarousel />
      <About headerOne={'About Business'} paragraphOne={''} />
      <ServicesPageContainer />
      <ContactForm />
    </div>
  );
};

export default LandingPageContainer;
