import React from 'react';
import { ScrollToTopContainer, StyledExpandLessIcon } from './styled';

export class ScrollToTop extends React.Component{

    handleScrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };

    render(){
        return(
            <>
                <ScrollToTopContainer>
                  <StyledExpandLessIcon onClick={this.handleScrollToTop}/>
                </ScrollToTopContainer>
            </>
        )
    }  
}

export default ScrollToTop;