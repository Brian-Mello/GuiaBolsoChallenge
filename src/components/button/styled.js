import styled from 'styled-components';

export const StyledButton = styled.button `
    width: 110px;
    height: 40px;
    padding: 0;
    border: 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #250048;
    color: white;
    outline: 0;
    box-shadow: 0 0 10px black;
    transition: all 0.5s;
    :hover {
        cursor: pointer;
        background-color: #1c0038;
        padding: 10px;
    }
    @media (max-width: 450px){
        width: 100px;
        height: 30px;
    }
`