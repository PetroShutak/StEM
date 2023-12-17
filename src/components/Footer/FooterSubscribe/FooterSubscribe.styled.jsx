import styled from 'styled-components';

export const FooterSubscribeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 300px;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        margin: 0 auto;
        text-align: center;
        input {
            max-width: 100%;
        }
        button {
            max-width: 100%;
        }
    }

    `;
export const FooterSubscribeTitle = styled.h3`
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
    `;
    export const FooterSubscribeText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
    `;

    export const FooterSubscribeInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid var(--border-color-secondary);
    padding: 0 10px;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    transition: border-color 0.3s ease-in-out;
    &:focus {
        border-color: var(--text-color-primary-orange);
    }
    `;
    export const FooterSubscribeButton = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: var(--bg-secondary);
    color: var(--text-color-primary-white);
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: var(--bg-secondary-hover);
    }
    `;

