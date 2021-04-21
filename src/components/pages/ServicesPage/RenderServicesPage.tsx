import React from 'react';

const RenderServicesPage = (): React.ReactElement => {
  return (
    <div className="services-wrapper">
      <h1>Services</h1>
      <div className="services-container">
        <div className="services">
          <h2>Training Sessions</h2>
          <div className="service-item">
            <div>1 Session</div>
            <div className="space"></div>
            <div>$55</div>
          </div>
          <div className="service-item">
            <div>4 Sessions</div>
            <div className="space"></div>
            <div>$200</div>
          </div>
          <div className="service-item">
            <div>8 Sessions</div>
            <div className="space"></div>
            <div>$325</div>
          </div>
          <div className="service-item">
            <div>12 Sessions</div>
            <div className="space"></div>
            <div>$450</div>
          </div>

          <h2>Training Programs</h2>
          <div className="service-item">
            <div>8 Week Program</div>
            <div className="space"></div>
            <div>$180</div>
          </div>
          <div className="service-item">
            <div>Returning 12 Week Program</div>
            <div className="space"></div>
            <div>$200</div>
          </div>
          <div className="service-item">
            <div>12 Week Program</div>
            <div className="space"></div>
            <div>$230</div>
          </div>
          <p>
            For other services and questions please contact me{' '}
            <a href="mailto:cgsaldanasbd@gmail.com?subject=Contact Cristian Garcia Fitness">
              here
            </a>
          </p>
          {/* <p>*Includes </p>
          <p>**Per</p> */}
        </div>
      </div>
    </div>
  );
};

export default RenderServicesPage;
