import React from "react";
import { connect } from "react-redux";
import { getCategories, setCategory } from "../../actions";
import CategoryCard from "../../components/categoryCard";
import { MainComponent } from "./styled";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { push } from "connected-react-router";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this.props.getCategories()
  }

  handleJokeCategoryPage = (category) => {
    this.props.setCategory(category)
    this.props.goToCategoryPage(category)
    window.localStorage.setItem("category", category)
  }

  render() {

    const { categories } = this.props

    let orderedCategories = categories.sort((a,b) => (a.categories > b.categories ? -1 : 1));

    let showCategories = orderedCategories.map((category) => 
      <>
        <CategoryCard
          key={category}
          category={category}
          onClick={() => this.handleJokeCategoryPage(category)}
        />
      </>
    )
    return (
      <>
        <Header/>
        <MainComponent>
          {showCategories}
        </MainComponent>
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.jokes.allCategories
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  goToCategoryPage: (category) => dispatch(push (`/categories/${category}`)),
  setCategory: (category) => dispatch(setCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
