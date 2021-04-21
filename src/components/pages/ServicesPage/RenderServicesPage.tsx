import React from 'react';

const RenderServicesPage = (): React.ReactElement => {
  return (
    <div className="services-wrapper">
      <div className="services-container">
        <div className="services">
          <h2>Services</h2>
          <div className="service-item">
            <div>75 min Training Session</div>
            <div className="space"></div>
            <div>Contact for pricing</div>
          </div>
          <div className="service-item">
            <div>60 min Training Session</div>
            <div className="space"></div>
            <div>Contact for pricing</div>
          </div>
          <div className="service-item">
            <div>12 Week Training Program</div>
            <div className="space"></div>
            <div>Contact for pricing</div>
          </div>
          <div className="service-item">
            <div>8 Week Training Program</div>
            <div className="space"></div>
            <div>Contact for pricing</div>
          </div>
          <p>
            For other services and questions please contact us{' '}
            <a href="mailto:cgsaldanasbd@gmail.com">here</a>
          </p>
          {/* <p>*Includes </p>
          <p>**Per</p> */}
        </div>
      </div>
    </div>
  );
};

export default RenderServicesPage;
