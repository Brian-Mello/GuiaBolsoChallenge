import styled from 'styled-components';

export const StyledButton = styled.button `
    width: 110px;
    height: 40px;
    padding: 0;
    border: 0;
    border-radius: 8px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #250048;
    color: white;
    font-family: 'Manrope', sans-serif;
    outline: 0;
    transition: all 0.5s;
    font-weight: bold;
    :hover {
        cursor: pointer;
        background-color: #ed4672;
        padding: 10px;
    }
    @media (max-width: 450px){
        width: 110px;
        height: 40px;
    }
`