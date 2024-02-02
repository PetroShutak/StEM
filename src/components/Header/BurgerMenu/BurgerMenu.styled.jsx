import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import valves from '../../../images/valves.jpg';

export const BurgerMenuContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 400px;
  height: 100vh;
  background-color: var(--text-color-secondary-grey);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${valves}');
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  z-index: 1000;
  padding: 20px;
  .close {
    color: rgba(255, 255, 255, 1);
    float: right;
    font-size: 36px;
    font-weight: bold;
    &:hover,
    &:focus {
      color: #000;
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
  background-color: var(--bg-backdrop);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

export const BurgerNav = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-top: 40px;
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    &:hover,
    &:focus {
      color: var(--text-color-primary-orange);
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-family-secondary);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.43;
  color: var(--text-color-primary-black);
  &.active {
    color: var(--text-color-primary-orange);
  }
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: var(--shadow-item);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  width: 280px;
`;

export const LogoWrapperBurger = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px;
  box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  background-color: rgba(255, 255, 255, 0.3);
  span {
    font-family: var(--font-family-secondary);
    font-size: 14px;
    font-weight: 400;
    color: var(--text-color-secondary-grey);
  }
`;

export const LogoTitleBurger = styled.h1`
  font-family: var(--font-bold);
  color: var(--bg-secondary);
  font-size: 52px;
  font-weight: 700;
  text-decoration: none;
  transition: var(--transition-default);
  a {
    text-decoration: none;
  }
`;
