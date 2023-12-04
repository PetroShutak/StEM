import styled from 'styled-components';
import { GrFavorite } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';

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
  box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  background-color: rgba(255, 255, 255, 0.75);
  color: var(--text-color-primary-black);
`;

export const ProductImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

export const ProductName = styled.h2`
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

// export const ProductButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   border: none;
//   border-radius: 4px;
//   background-color: var(--color-primary);
//   color: var(--text-color-primary-white);
//   font-size: 16px;
//   font-weight: 700;
//   cursor: pointer;
//   transition: all 250ms ease-in-out;

//   &:hover,
//   &:focus {
//     background-color: var(--color-primary-dark);
//   }
// `;

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

//
export const ModalQuantity = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 20px;
  border: 1px solid var(--bg-secondary);
  border-radius: 4px;
  background-color: var(--bg-secondary);
  transform: translate(-50%, -50%);
  color: var(--text-color-primary-black);
  z-index: 1100;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;

  border-radius: 4px;
  background-color: var(--color-primary);
  color: var(--text-color-primary-white);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--color-primary-dark);
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
    transform: scale(1.1);
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
