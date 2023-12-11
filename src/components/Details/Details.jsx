import React from 'react';
import {
  DetailsFavoriteBtnWrapper,
  DetailsContainer,
  DetailsImageWrapper,
  DetailsImage,
  DescriptionWrapper,
  BuyButton,
} from './Details.styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from 'redux/products/operations';
import { selectProductById } from 'redux/products/selectors';
import { GrFavorite } from 'react-icons/gr';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(state => selectProductById(state, id));

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <DetailsContainer>
        <DetailsImageWrapper>
          <DetailsImage src={product?.image} alt={product?.name} />
        </DetailsImageWrapper>
        <DescriptionWrapper>
          <DetailsFavoriteBtnWrapper>
            <GrFavorite size={30} />
          </DetailsFavoriteBtnWrapper>
          <h2>
            {product?.name} - {product?.brand}
          </h2>
          <p>Виробник: {product?.brand}</p>
          <p>Модель: {product?.model}</p>
          <p>Опис: {product?.description}</p>
          <p>Ціна: {product?.price}</p>
          <p>Категорія: {product?.category}</p>
          <p>Підкатегорія: {product?.subcategory}</p>
          <p>Рейтинг: {product?.raiting}</p>
          <p>Країна-виробник: {product?.country}</p>
          <BuyButton>Додати в кошик</BuyButton>
        </DescriptionWrapper>
      </DetailsContainer>
    </div>
  );
};

export default Details;
