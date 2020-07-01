import styled from 'styled-components';

export const StyledBody = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const StyledH1 = styled.h1 `
    color: black;
    @media (max-width: 450px){
        font-size: 20px;
    }
`

export const StyledP = styled.p `
    color: black;
    font-weight: bold;
    @media (max-width: 450px){
        font-size: 18px;
    }
`

export const StyledH2 = styled.h2 `
    color: black;
    font-weight: bold;
    @media (max-width: 450px){
        font-size: 18px;
    }
`