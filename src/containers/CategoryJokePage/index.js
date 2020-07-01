import React from 'react'
import { connect } from 'react-redux';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { getAJoke } from '../../actions';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { StyledH1 } from '../../style/globalStyles';
import { MainCategoryPage, CategorySection, BackButtonSection, StyledArrowBackIcon, StyledCachedIcon, JokeSection, NewJokeButtonSection, ChuckNorrisImage, JokeChat } from './styled';
import Button from '../../components/button';
import JokeBalloon from '../../components/jokeBalloon';
import ChuckNorris from '../../images/ChuckNorris.jpg'
import ScrollToTop from '../../components/ScrollToTop';

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

        return ( 
            <>
                <Header/>
                <MainCategoryPage>
                    <BackButtonSection>
                        <Button
                            text={"Back"}
                            icon={(<StyledArrowBackIcon/>)}
                            onClick={backToHomePage}
                        />
                    </BackButtonSection>
                    <CategorySection>
                        <StyledH1>Category: {categories}</StyledH1>
                    </CategorySection>
                    <JokeSection>
                        <ChuckNorrisImage src={ChuckNorris}/>
                        <JokeChat>
                            <JokeBalloon joke={value}/>
                        </JokeChat>
                    </JokeSection>
                    <NewJokeButtonSection>
                        <Button
                            text={"New Joke"}
                            icon={(<StyledCachedIcon/>)}
                            onClick={this.handleGetANewJoke}
                        />
                    </NewJokeButtonSection>
                </MainCategoryPage>
                <ScrollToTop/>
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