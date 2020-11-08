import { LOAD_DISHES } from "../actions/types";

const initialState = {
    dishes: []
};

const reducers = (state=initialState,action) => {
    switch(action.type) {
        case LOAD_DISHES: 
            return {
                ...state,
                dishes: action.payload
            }
        default:
            return state;
    };
};

export default reducers;