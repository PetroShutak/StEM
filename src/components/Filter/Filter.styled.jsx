import styled from 'styled-components';

export const FiterBrandContainer = styled.div`
  padding: 20px;
  font-family: var(--font-family-secondary);
  color: var(--text-color-primary-black);
`;

export const FilterTitle = styled.h3`
  margin-bottom: 20px;
  font-family: var(--font-family-secondary);
  color: var(--text-color-primary-black);
  text-transform: uppercase;
`;

export const BrandCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--font-family-secondary);
  color: var(--text-color-primary-black);
  margin-bottom: 10px;
  gap: 10px;
`;

export const BrandCheckboxInput = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
  appearance: none;
  border: 1px solid var(--bg-secondary);
  border-radius: 2px;
  outline: none;
  transition: 0.3s;
  position: relative;
  &:checked {
    border: 1px solid var(--bg-secondary);
    background-color: var(--bg-secondary);
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      background-color: var(--text-color-primary-white);
      border-radius: 2px;
    }
  }
`;

export const ApplyFilterButtton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--bg-secondary);
  color: var(--text-color-primary-white);

  &:hover {
    background-color: var(--bg-secondary-hover);
  }
`;
