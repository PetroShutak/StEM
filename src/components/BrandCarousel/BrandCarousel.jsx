import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const BrandCarousel = () => {
    // test slider
  const images = [
    {
      original:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/v1703062383/stem-screen_ybfq37.jpg',
      thumbnail:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/t_Thumbnail/v1703062383/stem-screen_ybfq37.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/v1703063540/stem-screen-1_vdedgs.jpg',
      thumbnail:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/t_Thumbnail/v1703063540/stem-screen-1_vdedgs.jpg',
    },
  ];

  return (
    <div>
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
  );
};

export default BrandCarousel;
