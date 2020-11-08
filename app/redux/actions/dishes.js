import axios from 'axios';
import { LOAD_DISHES } from "./types";

export const loadDishes = dishes => {
    return {
        type: LOAD_DISHES,
        payload: dishes
    }
};

export const getDishes = () => dispatch => {
    axios.get("https://restaurantapp-220c9.firebaseio.com/dishes.json")
        .then(response => dispatch(loadDishes(response.data)) ) 
        .catch(err=> console.log(err))
};