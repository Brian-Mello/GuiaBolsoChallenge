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
    color: white;
    font-family: 'Fontdiner Swanky', cursive;
    font-size: 20px;
    transition: color 0.5s;
    :hover {
        color: #ed4672;
        cursor: pointer;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`