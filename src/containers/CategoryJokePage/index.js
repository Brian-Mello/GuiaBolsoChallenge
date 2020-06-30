import React from 'react'
import { connect } from 'react-redux';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { getAJoke } from '../../actions';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { MainComponent, StyledH1 } from '../../style/globalStyles';
import { CategoryDiv, StyledArrowBackIcon, StyledCachedIcon } from './styled';
import Button from '../../components/button';
import Loader from '../../components/loader';
import JokeCard from '../../components/jokeCard';


class CategoryJokePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    
    componentDidMount = () => {
        const category = this.props.match.params.category

        if(category){
            this.props.getAJoke(category)
            
        } else {
            const { backToHomePage } = this.props
            backToHomePage()
        }
    }

    handleGetANewJoke = () => {
        const getCategory = this.props.match.params.category
        const { getAJoke } = this.props
        getAJoke(getCategory)
    }

    render() { 
        const { backToHomePage } = this.props
        
        const { value, categories } = this.props.selectedJoke

        let jokeIsReady

        if(this.props.selectedJoke === {}) {
            jokeIsReady = (<Loader/>)
        } else if (this.props.selectedJoke) {
            jokeIsReady = (
                <>
                    <CategoryDiv>
                        <StyledH1>Category: {categories}</StyledH1>
                        <Button
                            text={"Back"}
                            icon={(<StyledArrowBackIcon/>)}
                            onClick={backToHomePage}
                        />
                    </CategoryDiv>
                    <JokeCard
                        joke={value }
                    />
                    <Button
                        text={"New Joke"}
                        icon={(<StyledCachedIcon/>)}
                        onClick={this.handleGetANewJoke}
                    />
                </>
            )
        }
        return ( 
            <>
                <Header/>
                <MainComponent>
                    {jokeIsReady}
                </MainComponent>
                <Footer/>
            </>
         );
    }
}

const mapStateToProps = (state) => ({
    selectedJoke: state.jokes.selectedJoke
})

const mapDispatchToProps = (dispatch) => ({
    backToHomePage: () => dispatch(push(routes.home)),
    refreshJokePage: (category) => dispatch(push(`/categories/${category}`)),
    getAJoke: (category) => dispatch(getAJoke(category))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryJokePage);