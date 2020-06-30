import React from 'react';
import { StyledButton } from './styled';

function Button(props) {
    return (
        <StyledButton onClick={props.onClick}>{props.text}{props.icon}</StyledButton>
    )
}

export default Button;