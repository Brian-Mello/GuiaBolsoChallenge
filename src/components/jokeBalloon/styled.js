import styled from 'styled-components';

export const Balloon = styled.div `
    min-width: 250px;
    max-width: 350px;
    min-height: 40px;
    border-radius: 25px 25px 25px 0;
    background-color: #ffffff;
    box-shadow: 0 0 10px;
    text-align: start;
    padding: 10px;
    font-weight: bolder;
    font-size: 15px;
    @media (max-width: 1100px) {
        top: 28%;
        left: 36%;
        min-width: 150px;
        max-width: 280px;
        border-radius: 0 25px 25px 25px;
    }
`
