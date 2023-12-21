import styled from 'styled-components';
import { GrFavorite } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: var(--shadow-item);
  background-color: var(--bg-cart-item);
  color: var(--text-color-primary-black);
`;

export const ProductImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border: 0.5px solid #ccc;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
`;

export const ProductName = styled.h2`
  position: relative;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

export const FavoriteButton = styled(GrFavorite)`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  color: var(--bg-secondary);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const FavoriteButtonActive = styled(MdFavorite)`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  color: var(--bg-secondary);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ButtonAdd = styled(IoCartOutline)`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  color: var(--bg-secondary);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  bottom: 60px;
  right: 0px;
  background-color: #aaa;
  color: var(--text-color-primary-black);
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
`;

export const TitleLinkContainer = styled.div`
  position: relative;
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color-primary-black);
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const TooltipDetails = styled.span`
  position: absolute;
  bottom: 20px;
  right: 60px;
  background-color: #aaa;
  color: var(--text-color-primary-black);
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
`;

export const TooltipQuantity = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
`;
