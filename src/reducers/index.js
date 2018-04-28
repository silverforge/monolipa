
import { UPDATE_IAMHOME } from '../constants/index';

const initialState = {
    iamhome: false
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_IAMHOME:
            return { iamhome: action.payload };
        default:
            return state;
    }
};

export default rootReducer;