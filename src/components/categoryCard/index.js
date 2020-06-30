import React from 'react'

import { CardComponent, StyledImg, CardBody, CardTitle, CardHeader, CardFooter, StyledArrowForwardIosIcon } from './styled';
function CategoryCard(props) {
    return(
        <CardComponent onClick={props.onClick}>
            <CardBody>
                <CardHeader>
                    {props.img && <StyledImg src={props.img} alt={props.alt}/>}
                </CardHeader>
                <CardFooter>
                    <CardTitle>{props.category}</CardTitle>
                    <StyledArrowForwardIosIcon/>
                </CardFooter>
            </CardBody>
        </CardComponent>
    )
}

export default CategoryCard;