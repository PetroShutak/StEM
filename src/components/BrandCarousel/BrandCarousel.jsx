import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const BrandCarousel = () => {
    // test slider
  const images = [
    {
      original:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/v1702923600/Redditech_IT_Networks_1_ilahhs.png',
      thumbnail:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/t_Thumbnail/v1702923600/Redditech_IT_Networks_1_ilahhs.png',
    },
    {
      original:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/v1702923599/Redditech_IT_Networks_xaqwkn.png',
      thumbnail:
        'https://res.cloudinary.com/dk0rzgyzj/image/upload/t_Thumbnail/v1702923599/Redditech_IT_Networks_xaqwkn.png',
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
