import BrandCarousel from 'components/BrandCarousel/BrandCarousel';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const MainPage = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1021/1000/600/',
      thumbnail: 'https://picsum.photos/id/1021/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1022/1000/600/',
      thumbnail: 'https://picsum.photos/id/1022/250/150/',
    },
  ];
  return (
    <>
    <p style={{
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'var(--text-color-primary-black)',
      paddingTop: '40px',
      paddingBottom: '40px',
    }}
    >Тут будуть слайди основні, а поки такий слайдер</p>
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
      <BrandCarousel />
      {/* <div
      style={{
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      <h1 style={{
        color: 'var(--text-color-primary-black)'
      }}>Головна</h1>
    </div> */}
    </>
  );
};

export default MainPage;
