import styled from 'styled-components';
import { GrFavorite } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const StyledListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 2px 4px var(--shadow-item);
    }
  }
  p {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    font-family: var(--font-family-secondary);
    color: var(--text-color-primary-black);
  }
`;

const CategoryItemPageWrapper = styled.div`
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  font-family: var(--font-family-secondary);
  color: var(--text-color-primary-black);
  h2 {
    margin-bottom: 20px;
  }
`;

const StyledButton = styled.button`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${props => (props.selected ? '#ff6b09' : '#fff')};
  color: ${props => (props.selected ? '#fff' : '#000')};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => (props.selected ? '#ff6b09' : '#eee')};
  }
`;

const FavoriteButton = styled(GrFavorite)`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  color: var(--bg-secondary);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.2);
    // transform: rotate(360deg);
  }
`;

const FavoriteButtonActive = styled(MdFavorite)`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  color: var(--bg-secondary);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export {
  StyledList,
  StyledListItem,
  CategoryItemPageWrapper,
  StyledButton,
  FavoriteButton,
  FavoriteButtonActive,
};
