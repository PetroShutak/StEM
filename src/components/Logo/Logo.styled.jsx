import styled from 'styled-components';

export const LogoWrapper = styled.div`
    display: flex;

    flex-direction: column;
    text-align: center;
    max-width: 200px;
    span {
        font-family: 'Play Regular', sans-serif;
        font-size: 12px;
        color: #aaa;
    }

    `;

export const LogoTitle = styled.h1`
    font-family: 'Play Bold', sans-serif;
    color: #000;
    font-size: 36px;
    font-weight: 700;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        color: #ff6b09;
    }
    a {
        text-decoration: none;
    }
    `;