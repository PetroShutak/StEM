import styled from 'styled-components';

export const StyledPagination = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 20px;
    margin-bottom: 20px;
    justify-content: center;
  }

  li {
    margin-right: 5px;
  }

  .page-link {
    text-decoration: none;
    color: var(--text-color-primary-black);
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 3px;

    &:hover {
      background-color: var(--bg-secondary);
      color: var(--text-color-primary-white);
    }
  }
`;
