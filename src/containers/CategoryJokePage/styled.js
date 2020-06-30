import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CachedIcon from '@material-ui/icons/Cached';

export const CategoryDiv = styled.div `
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #aeacaf;
    padding: 0 20px;
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