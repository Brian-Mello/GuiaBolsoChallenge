// Função de cadastro
import axios from 'axios';

const baseURL = "https://api.chucknorris.io/jokes"

export const setCategories = ( categories ) => ({
    type: "SET_CATEGORIES",
    payload: {
        categories
    }
})

export const getCategories = () => async (dispatch) => {
    try {

        const response = await axios.get(`${baseURL}/categories`)

        dispatch(setCategories(response.data))

    } catch (err) {
        window.alert("Categories not found!")
    }
}


export const setAJoke = (joke) => ({
    type: "SET_A_JOKE",
    payload: {
        joke
    }
})

export const getAJoke = (category) => async (dispatch) => {
    try{
        const response = await axios.get(`${baseURL}/random?category=${category}`)

        dispatch(setAJoke(response.data))

    } catch (err) {
        window.alert("Joke not found!")
    }
}