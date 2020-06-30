const initialState = {
    allCategories: [],
    selectedJoke: {}
}

const jokes = ( state = initialState, action) => {
    switch(action.type) {
        case "SET_CATEGORIES":
            const categories = action.payload.categories;
            return { ...state, allCategories: categories};

        case "SET_A_JOKE":
            const joke = action.payload.joke;
            return { ...state, selectedJoke: joke}
            
        default:
            return state;
    }
}

export default jokes;