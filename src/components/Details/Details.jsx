import React from 'react';
import { DetailsContainer } from './Details.styled';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();

  return (
    <DetailsContainer>
      <h1>Details</h1>
      <p>{id}</p>
    </DetailsContainer>
  );
};

export default Details;
