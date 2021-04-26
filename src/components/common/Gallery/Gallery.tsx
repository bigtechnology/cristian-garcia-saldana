import React from 'react';

const Gallery = (): React.ReactElement => {
  return (
    <div className="gallery-container">
      <div className="header">
        <h2>Gallery</h2>
      </div>

      <div className="gallery-content">
        <div className="video-wrapper">
          <div title="" className="item-1"></div>
        </div>

        <div className="images-wrapper">
          <div className="header">
            <h2>Testimonials</h2>
          </div>
          <div title="" className="item-1"></div>
          <div title="" className="item-2"></div>
          <div title="" className="item-3"></div>
          <div title="" className="item-4"></div>
          <div title="" className="item-5"></div>
          <div title="" className="item-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
