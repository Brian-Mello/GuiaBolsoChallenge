import styled from 'styled-components';

export const MainComponent = styled.main `
    width: 100%;
    min-width: 300px;
    min-height: 100vh;
    padding: 20px;
    background-color: #d8d8d8;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 450px){
        padding: 0;
        min-height: 80vh;
    }
`

export const StyledH1 = styled.h1 `
    color: black;
    font-family: 'Fontdiner Swanky', cursive;
    @media (max-width: 450px){
        font-size: 18px;
    }
`

export const StyledP = styled.p `
    color: black;
`

export const StyledH2 = styled.h2 `
    color: black;
`