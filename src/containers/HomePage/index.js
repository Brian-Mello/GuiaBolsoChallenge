import React from "react";
import { connect } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { AboutThePageSection, JokesCategoryContainer, MainHomePage } from './styled';
import { getCategories } from '../../actions';
import { push } from 'connected-react-router';
import CategoryCard from '../../components/categoryCard';
import Loader from '../../components/loader';
import { imagesObject } from '../../images/imagesObject';
import { StyledP, StyledH2, StyledH1 } from "../../style/globalStyles";
import ScrollToTop from "../../components/ScrollToTop";
import { routes } from "../Router";

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    
    componentDidMount() {
        this.props.getCategories()
    }

    handleJokeCategoryPage = (category) => {
        this.props.goToCategoryPage(category)
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
    }

    render() {

        const { categories, goToHomePage } = this.props

        let orderedCategories = categories.sort((a,b) => (a.categories > b.categories ? -1 : 1));

        let showCategories

        if(categories.length === 0 ){
            showCategories = (<Loader/>)
        } else if (orderedCategories.length > 0) {
            showCategories = orderedCategories.map((category) => 
                <CategoryCard
                    key={category}
                    img={imagesObject[category]}
                    alt={category}
                    category={category}
                    onClick={() => this.handleJokeCategoryPage(category)}
                />
            )
        }
        return(
          <>
            <Header onClick={goToHomePage}/>
            <MainHomePage>
                <AboutThePageSection>
                    <StyledH1>Do you want to read a Chuck Norries joke?</StyledH1>
                    <StyledP>Choose a category!</StyledP>
                </AboutThePageSection>
                    <StyledH2>Joke Norries Categories</StyledH2>
                <JokesCategoryContainer>
                    {showCategories}
                </JokesCategoryContainer>
                <ScrollToTop/>
            </MainHomePage>
            <Footer/>
          </>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.jokes.allCategories
})

const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(getCategories()),
    goToCategoryPage: (category) => dispatch(push (process.env.PUBLIC_URL + `/categories/${category}`)),
    goToHomePage: () => dispatch(push(routes.home))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);