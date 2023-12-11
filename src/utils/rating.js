import { FaStar, FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
`;

const Star = styled.div`
  margin-right: 3px;
`;

const generateStars = rating => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} size={15} color="var(--bg-secondary)" />);
  }

  if (hasHalfStar) {
    stars.push(
      <FaRegStar key={fullStars} size={15} color="var(--bg-secondary)" />
    );
  }

  return stars;
};

const Rating = ({ rating }) => {
  const stars = generateStars(rating);

  return (
    <RatingContainer>
      <p>Рейтинг: </p>
      {stars.map((star, index) => (
        <Star key={index}>{star}</Star>
      ))}
    </RatingContainer>
  );
};

export default Rating;
