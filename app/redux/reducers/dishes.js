import { ADD_TO_FAVOURITIES, LOAD_DISHES, REMOVE_FAVOURITIE } from "../actions/types";

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
        case REMOVE_FAVOURITIE: 
            return {
                ...state,
                favourites: state.favourites.filter(item=> item.id !== action.payload)
            }
        default:
            return state;
    };
};

export default reducers;