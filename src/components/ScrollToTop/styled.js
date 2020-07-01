import styled from 'styled-components';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export const ScrollToTopContainer = styled.div `
    width: 30px;
    height: 30px;
    position: fixed;
    bottom: 15px;
    right: 20px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px;
    @media (max-width: 700px){
        bottom: 8px;
        right: 8px;
    }
`
export const StyledExpandLessIcon = styled(ExpandLessIcon)`
    :hover{
        cursor: pointer;
        color: gray;
    }
`