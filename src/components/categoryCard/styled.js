import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const CardComponent = styled.div `
    width: 220px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: all 0.5s;
    :hover {
        cursor: pointer;
        padding: 0;
    }
    @media (max-width: 450px){
        width: 90%;
        height: 290px;
        padding: 15px;
    }
`

export const CardBody = styled.div `
    width: 100%;
    height: 100%;
    box-shadow: 0 0 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
`

export const CardHeader = styled.div `
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 450px){
        height: 80%;
    }
`

export const CardFooter = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #250048;
    border-radius: 0 0 5px 5px;
    padding: 10px 40px;
    @media (max-width: 450px){
        height: 20%;
        padding: 10px 100px;
    }
`

export const CardTitle = styled.p `
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: bolder;
`


export const StyledImg = styled.img `
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: 5px 5px 0 0;
`

export const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon) `
    color: white;
`