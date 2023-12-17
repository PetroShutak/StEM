import styled from 'styled-components';

export const FooterContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 300px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto; 
    text-align: center;
  }
`;
export const FooterContactTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const FooterContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
 
`;
export const FooterContactListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 10px;
  a {
    color: var(--text-color-primary-black);
    font-weight: 400;
    text-decoration: none;
    &:hover {
      color: var(--text-color-primary-black);
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 0 auto;
    text-align: center;
  }
`;
export const FooterContactMap = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 10px;
  overflow: hidden;
`;
export const FooterContactMapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;
