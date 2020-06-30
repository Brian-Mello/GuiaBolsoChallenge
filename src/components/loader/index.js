import React from "react";
import { Loading, Triangle, LoadingContainer } from "./styled";

function Loader ( ) {
    return (
        <LoadingContainer>   
            <svg width="50" height="50" viewBox="5 0 20 40">
                <Triangle 
                    fill="none" 
                    stroke="black" 
                    stroke-width="1"
                    points="16,1 32,32 1,32"
                />
            </svg>
            <Loading>Loading</Loading>
        </LoadingContainer>
    )
}

export default Loader;