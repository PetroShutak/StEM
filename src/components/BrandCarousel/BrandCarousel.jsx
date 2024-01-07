import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const BrandCarousel = () => {
  // test slider
  const images = [
    {
      original:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/v1703694154/stem-screen_ybfq37_1_lhdti1.jpg',
      thumbnail:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/t_Thumbnail/v1703694154/stem-screen_ybfq37_1_lhdti1.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/v1703694154/stem-screen-1_vdedgs_1_i2h9z6.jpg',
      thumbnail:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/t_Thumbnail/v1703694154/stem-screen-1_vdedgs_1_i2h9z6.jpg',
    },
  ];

  const galleryStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <div style={galleryStyle}>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          showBullets={false}
          showNav={false}
          autoPlay={true}
          slideInterval={5000}
          lazyLoad={true}
          slideDuration={1000}
        />
      </div>
    </>
  );
};

export default BrandCarousel;
