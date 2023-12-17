import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterInfoBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
    text-align: center;
  }
`;

export const FooterInfoBlockTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const FooterInfoBlockList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
  @media screen and (max-width: 768px) {
    gap: 20px;
    margin: 0 auto;
    text-align: center;
  }
`;
export const FooterInfoBlockListItem = styled.li`
  font-size: 16px;
  line-height: 1.2;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const FooterInfoBlockListLink = styled(Link)`
  color: var(--text-color-primary-black);
  transition: color 0.3s ease-in-out;
  &:hover {
    color: var(--text-color-primary-orange);
  }
`;
