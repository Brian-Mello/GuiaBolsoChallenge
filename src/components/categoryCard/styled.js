import styled from 'styled-components';

export const CardComponent = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 5px;
    background-color: #ad5215;
    font-family: 'Manrope', sans-serif;
    font-weight: bolder;
    font-size: 18px;
    transition: all 0.7s;
    :hover {
        cursor: pointer;
        background-color: #a34d13;
        box-shadow: 0 0 10px;
    }
    @media (max-width: 780){
        
    }
`