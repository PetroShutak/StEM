import styled from 'styled-components';

export const WorkSheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
  justify-content: center;
  svg {
    color: #ff6b09;
  }
  p {
    font-size: 14px;
    font-weight: 700;
    color: #333333;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SheduleHead = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #ff6b09;
`;
