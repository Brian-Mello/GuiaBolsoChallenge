import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CachedIcon from '@material-ui/icons/Cached';

export const MainCategoryPage = styled.main `
    width: 100%;
    min-width: 300px;
    height: 100%;
    min-height: 690px;
    padding: 0 20px;
    background-color: #d8d8d8;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    @media (max-width: 450px){
        padding: 0 20px;
    }
`

export const CategorySection = styled.section `
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BackButtonSection = styled.section `
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #aeacaf;
`

export const JokeSection = styled.section `
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 100px;
    transition: all 0.5s;
    @media (max-width: 1100px){
        flex-direction: column;
        padding: 0 60px;
    }
    @media (max-width: 450px){
        flex-direction: column;
        padding: 0;
        height: auto;
        min-height: 250px;
        justify-content: center;
    }
`

export const ChuckNorrisImage = styled.img `
    width: 70%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    transition: all 0.5s;
    @media (max-width: 1200px){
        width: 65%;        
    }
    @media (max-width: 1100px){
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 70%;
    }
    @media (max-width: 450px){
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 60%;
    }
`
export const JokeChat = styled.section `
    width: 30%;
    min-height: 100%;
    padding: 20px;
    border: 4px inset #442212;
    border-left: none;
    border-radius: 0 10px 10px 0;
    @media (max-width: 1200px){
        width: 35%;        
    }
    @media (max-width: 1100px){
        border-left: 4px inset #442212;
        height: 250px;
        border-top: none;
        border-radius: 0 0 10px 10px ;
        width: 100%;
        min-height: 10%;
    }
    @media (max-width: 450px){
        border-radius: 0 0 10px 10px ;
        width: 100%;
        min-height: 10%;
    }
`


export const NewJokeButtonSection = styled.section `
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledArrowBackIcon = styled(ArrowBackIcon)`
    width: 20px;
    height: 20px;
    color: white;
`

export const StyledCachedIcon = styled(CachedIcon)`
    width: 20px;
    height: 20px;
    color: white;
`