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
    color: var(--text-color-primary-white);
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover,
    &:focus {
      color: var(--text-color-primary-black);
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
  background-color: var(bg-backdrop);
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
    color: var(--text-color-primary-white);
    font-size: 20px;
    margin: 20px;
    &:hover,
    &:focus {
      color: var(--text-color-primary-orange);
    }
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: var(--font-family-secondary);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.43;
  color: var(--text-color-primary-black);
  &.active {
    color: var(--text-color-primary-orange);
  }
`;
