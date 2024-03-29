import styled from 'styled-components';
import { RiAdminLine } from 'react-icons/ri';

export const DetailsContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  color: var(--text-color-primary-black);
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DetailsImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: auto;
  text-align: center;
`;

export const DetailsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 5px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const BuyButton = styled.button`
  width: 300px;
  height: 50px;
  border: 0.5px solid var(--text-color-primary-white);
  border-radius: 5px;
  background-color: var(--bg-secondary);
  color: var(--text-color-primary-white);
  font-size: 16px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: var(--bg-secondary-hover);
  }
`;

export const DetailsFavoriteBtnWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 100;
  color: var(--text-color-primary-orange);
  &:hover {
    scale: 1.1;
  }
`;

export const UpdateWrapper = styled.div`
  color: var(--text-color-primary-black);
  font-size: 16px;
  font-family: var(--font-family-secondary);

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    resize: none;
  }

  button {
    padding: 8px 16px;
    margin-right: 8px;
    cursor: pointer;
  }
`;

export const UpdateButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  button {
    padding: 8px 16px;
    margin-right: 8px;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PseudoAdminButton = styled(RiAdminLine)`
  font-size: 20px;
  cursor: pointer;
  color: var(--text-color-primary-black);
  &:hover {
    scale: 1.1;
  }
`;
