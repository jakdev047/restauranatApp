import axios from 'axios';
import { LOAD_DISHES } from "./types";

export const loadDishes = dishes => {
    return {
        type: LOAD_DISHES,
        payload: dishes
    }
};

export const getDishes = () => dispatch => {
    axios.get('')
        .then(res=>console.log(res.json()))
        .catch(err=> console.log(err))
};