import React from "react";
import { Loading, Triangle, LoadingContainer, StyledSVG } from "./styled";

function Loader ( ) {
    return (
        <LoadingContainer>   
            <StyledSVG viewBox="5 0 20 40">
                <Triangle 
                    fill="none" 
                    stroke="black" 
                    stroke-width="1"
                    points="16,1 32,32 1,32"
                />
            </StyledSVG>
            <Loading>Loading</Loading>
        </LoadingContainer>
    )
}

export default Loader;