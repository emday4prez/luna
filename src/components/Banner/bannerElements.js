import styled from 'styled-components';

export const LogoBanner = styled.img`
    width: 100%;
    margin-top: 30px;
    padding-right: 0;
`;

export const BannerContainer = styled.div`
    color: #e0eeff;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;

    z-index: 1;
    padding-top: 2rem;

    ${
        '' /* @media screen and (max-width: 768px) {
        padding: 100px 0;
    } */
    }
`;
