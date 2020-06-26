import styled from 'styled-components';

export const MainComponent = styled.main `
    width: 100%;
    min-width: 300px;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    padding: 20px;
    background-color: #d8d8d8;
    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 400px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
`