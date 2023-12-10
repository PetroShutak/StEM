import React from 'react';
import { DetailsContainer } from './Details.styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from 'redux/products/operations';
import { selectProductById } from 'redux/products/selectors';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(state => selectProductById(state, id));

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  return (
    <DetailsContainer>
      <p>{product?.name}</p>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <img src={product?.image} alt={product?.name} />
      <p>{product?.category}</p>
      <p>{product?.subcategory}</p>
    </DetailsContainer>
  );
};

export default Details;
