import styled from 'styled-components';

// containers

export const StyledHeader = styled.header`
    width: 100%;
    min-width: 300px;
    height: 80px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #250048;
    font-family: 'Fontdiner Swanky', cursive;
    font-size: 20px;
    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 15px;
    }
`

export const PageName = styled.h1 `
    color: white;
    transition: color 0.5s;
    :hover {
        cursor: pointer;
    }
`