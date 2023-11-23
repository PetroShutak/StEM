import styled from 'styled-components';

export const ContactsWrappper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  p {
    font-size: 16px;
    font-weight: 500;
  }
  a {
    font-size: 12px;
    font-weight: 500;
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
