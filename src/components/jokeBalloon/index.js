import React from 'react';
import { Balloon } from './styled'

export function JokeBalloon (props) {
    return (
        <Balloon>{props.joke}</Balloon>
    )
}

export default JokeBalloon;