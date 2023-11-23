import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BurgerMenuContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 400px;
  height: 100vh;
  background-color: #aaa;
  z-index: 1000;
  padding: 20px;
  .close {
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover,
    &:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  transition: transform 0.3s ease-in-out;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  margin-bottom: 50px;
  a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    margin: 20px;
    &:hover,
    &:focus {
      color: white;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.43;
  color: black;
  &.active {
    color: #ff6b09;
  }
`;
