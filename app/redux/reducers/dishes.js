import { ADD_TO_FAVOURITIES, LOAD_DISHES } from "../actions/types";

const initialState = {
    dishes: [],
    favourites:[]
};

const reducers = (state=initialState,action) => {
    switch(action.type) {
        case LOAD_DISHES: 
            return {
                ...state,
                dishes: action.payload
            }
        case ADD_TO_FAVOURITIES:
            return {
                ...state,
                favourites: state.favourites.concat(action.payload)
            }
        default:
            return state;
    };
};

export default reducers;