import styled from 'styled-components';

export const AboutThePageSection = styled.section `
    width: 100%;
    min-width: 300px;
    min-height: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #aeacaf;
    font-size: 25px;
    @media (max-width: 450px){
        padding: 20px 40px;
    }
`

export const JokesCategoryContainer = styled.section `
    width: 100%;
    min-width: 300px;
    min-height: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    background-color: #d8d8d8;
    @media (max-width: 1300px) {
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        grid-template-rows: 1fr 1fr 1fr 1fr ;
        grid-gap: 10px;
    }
    @media (max-width: 870px) {
        grid-template-columns: 1fr 1fr 1fr ;
        grid-template-rows: 1fr ;
    }
    @media (max-width: 650px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
    @media (max-width: 450px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`