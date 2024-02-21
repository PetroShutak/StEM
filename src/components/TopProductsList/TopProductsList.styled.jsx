import styled from 'styled-components';

export const TopProductsListWrapper = styled.div`
  font-family: var(--font-family-secondary);
  font-size: 14px;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }
  .slick-dots {
    bottom: -54px;
  }
  .slick-dots li button:before {
    color: var(--text-color-primary-black);
  }
  .slick-dots li.slick-active button:before {
    color: var(--text-color-primary-orange);
  }
  .slick-next:before {
    display: none;
  }
  .slick-prev:before {
    display: none;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  img {
    width: 230px;
    height: fit-content;
    border-radius: 10px;
  p {
    color: var(--text-color-primary-black);
    margin: 0;
  }
`;
