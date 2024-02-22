import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TopProductsListWrapper = styled.div`
  font-family: var(--font-family-secondary);
  font-size: 14px;
  .slick-dots li button:before {
    color: var(--text-color-primary-black);
  }
  .slick-dots li.slick-active button:before {
    color: var(--text-color-primary-orange);
  }
  .slick-prev:before,
  .slick-next:before {
    color: var(--text-color-primary-orange);
  }
  .slick-prev {
    left: 10px;
    z-index: 100;
  }
  .slick-next {
    right: 10px;
    z-index: 100;
  }
`;

export const TopItemLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  text-decoration: none;
  color: var(--text-color-primary-black);
  transition: color 0.3s;
  &:hover {
    color: var(--text-color-primary-orange);
  }
`;

export const TopItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopItemImg = styled.img`
  width: 230px;
  height: fit-content;
  border-radius: 10px;
`;

export const TopItemName = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

export const TopItemBrand = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

export const TopItemPrice = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;
