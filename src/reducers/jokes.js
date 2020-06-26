const initialState = {
    allCategories: [],
    selectedCategory: "",
    selectedJoke: {}
}

const jokes = ( state = initialState, action) => {
    switch(action.type) {
        case "SET_CATEGORIES":
            const categories = action.payload.categories;
            return { ...state, allCategories: categories};
        
        case "SET_CATEGORY": 
            const jokeCategory = action.payload.category;
            return { ...state, selectedCategory: jokeCategory}

        case "SET_A_JOKE":
            const joke = action.payload.joke;
            return { ...state, selectedJoke: joke}
            
        default:
            return state;
    }
}

export default jokes;