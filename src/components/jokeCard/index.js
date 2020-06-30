import React from 'react';
import { JokeCardContainer, JokeBalloon } from './styled'

export function JokeCard (props) {
    return (
        <JokeCardContainer>
            <JokeBalloon>{props.joke}</JokeBalloon>
        </JokeCardContainer>
    )
}

export default JokeCard;