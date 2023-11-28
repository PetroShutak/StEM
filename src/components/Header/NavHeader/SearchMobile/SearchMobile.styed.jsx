import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

export const SearchMobileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  cursor: pointer;
`;

export const SearchMobileButton = styled(BiSearchAlt2)`
  color: var(--text-color-primary-black);
  font-size: 2rem;
  transition: 0.5s;
  &:hover {
    color: var(--text-color-primary-orange);
  }
`;
