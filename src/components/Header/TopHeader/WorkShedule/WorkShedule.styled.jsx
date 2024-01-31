import styled from 'styled-components';

export const WorkSheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
  justify-content: center;
  svg {
    color: var(bg-secondary);
  }
  p {
    font-family: var(--font-family-primary);
    font-size: 14px;
    font-weight: 700;
    color: var(--text-color-primary-black);
  }

  span {
    font-family: var(--font-family-primary);
    font-size: 14px;
    font-weight: 400;
    color: var(--text-color-primary-black);
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SheduleHead = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color-primary-orange);
`;
