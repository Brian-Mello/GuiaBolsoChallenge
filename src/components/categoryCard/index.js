import React from 'react'
import { CardComponent } from './styled';
function CategoryCard(props) {
    return(
        <CardComponent onClick={props.onClick}>
            {props.category}
        </CardComponent>
    )
}

export default CategoryCard;