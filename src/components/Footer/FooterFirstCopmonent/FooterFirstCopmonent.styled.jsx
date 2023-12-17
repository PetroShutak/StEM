import styled from 'styled-components';

export const FooterFirstCopmonentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        margin: 0 auto;
        text-align: center;
        }
        @media screen and (min-width: 1440px) {
        max-width: 1400px;
    }
    `;

export const IconBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 300px;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        }
    `;