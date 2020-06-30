import styled from 'styled-components';
import ChuckNorris from '../../images/ChuckNorris.jpg'

export const JokeCardContainer = styled.div `
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${ChuckNorris});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50% 100%;
    margin: 10px 0;
    @media (max-width: 450px) {
        height: 40vh;
        background-size: 90% 300px ;
    }
`

export const JokeBalloon = styled.div `
    min-width: 250px;
    max-width: 350px;
    min-height: 40px;
    border-radius: 25px 25px 25px 0;
    background-color: #ffffff;
    box-shadow: 0 0 10px;
    text-align: start;
    padding: 10px;
    position: absolute;
    top: 45%;
    left: 42%;
    font-weight: bolder;
    font-size: 15px;
    @media (max-width: 450px) {
        top: 28%;
        left: 36%;
        min-width: 150px;
        max-width: 200px;
    }
`

// export const 