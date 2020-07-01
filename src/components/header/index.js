import React from 'react';
import { StyledHeader, PageName } from './styled';

export function Header (props) {
    
    return (
        <StyledHeader>
            <PageName onClick={props.onClick}>Chuck Jokes</PageName>
        </StyledHeader>
    )
}

export default Header;