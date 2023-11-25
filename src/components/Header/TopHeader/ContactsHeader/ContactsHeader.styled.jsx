import styled from 'styled-components';

export const ContactsWrappper = styled.div`
font-family: var(--font-family-primary);
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  svg {
    color: var(--text-color-primary-black);
  }
  p {
    color: var(--text-color-primary-black);
    font-size: 16px;
    font-weight: 500;
  }
  a {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-color-primary-black);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
