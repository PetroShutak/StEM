import styled from 'styled-components';

export const NavBarHeaderWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    font-family: var(--font-family-secondary);
    color: var(--text-color-primary-black);
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: var(--transition-default);

    &:hover {
      color: var(--text-color-primary-orange);
    }
    &.active {
      color: var(--text-color-primary-orange);
    }
  }

  .dropdown {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  @media (max-width: 1024px) {
    a:nth-child(n+3) {
      display: none;
    }
    
    .more-link {
      display: flex;
      align-items: center;
      gap: 20px; 
      position: relative;

      &:before {
        content: 'Ще...';
        font-family: var(--font-family-secondary);
        color: var(--text-color-primary-black);
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        margin-right: 10px;
      }

      .dropdown {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color-secondary);
        padding: 10px;
        z-index: 1;
        gap: 20px; 

        a {
          display: block;
          width: 200px;
        }
      }

      &:hover .dropdown {
        display: flex;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
