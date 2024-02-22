import React from 'react';
import { useSelector } from 'react-redux';
import { selectTopProducts } from 'redux/products/selectors';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  TopItemLink,
  TopProductsListWrapper,
  TopItemContainer,
  TopItemImg,
  TopItemName,
  TopItemBrand,
  TopItemPrice,
  TopItemModel,
} from './TopProductsList.styled';

const TopProductsList = () => {
  const products = useSelector(selectTopProducts);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <TopProductsListWrapper>
      <Slider {...sliderSettings}>
        {products.map(product => (
          <TopItemLink to={`/catalog/${product._id}`} key={product._id}>
            <TopItemContainer>
              <TopItemName>{product.name}</TopItemName>
              <TopItemImg
                src={product.image}
                alt={product.name}
                width="100"
                height="100"
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TopItemBrand>{product.brand}</TopItemBrand>
                <TopItemModel> : {product.model}</TopItemModel>
              </div>
              <TopItemPrice>{product.price} грн.</TopItemPrice>
            </TopItemContainer>
          </TopItemLink>
        ))}
      </Slider>
    </TopProductsListWrapper>
  );
};

export default TopProductsList;
