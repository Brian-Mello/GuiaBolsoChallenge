import React from 'react'
import { connect } from 'react-redux';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { getAJoke } from '../../actions';

class CategoryPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    
    componentDidMount = () => {
        const category = window.localStorage.getItem("category")

        if(category){
            this.props.getAJoke(category)
            
        } else {
            const { backToHomePage } = this.props
            backToHomePage()
        }
    }

    handleGetANewJoke = () => {
        const getCategory = window.localStorage.getItem("category")
        const { getAJoke } = this.props
        getAJoke(getCategory)
    }

    render() { 
        const { backToHomePage, selectedJoke } = this.props

        return ( 
            <div>
                <p>{selectedJoke.value}</p>
                <p>{selectedJoke.created_at}</p>
                <p>{selectedJoke.id}</p>
                <p>{selectedJoke.updated_at}</p>
                <p>{selectedJoke.url}</p>
                <p>{selectedJoke.categories}</p>
                <img src={selectedJoke.icon_url} alt=""/>
                <button onClick={this.handleGetANewJoke}>New Joke</button>
                <button onClick={backToHomePage}>back</button>
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    selectedCategory: state.jokes.selectedCategory,
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
)(CategoryPage);