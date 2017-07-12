import { OPEN_MODAL, CLOSE_MODAL } from '../constants/actionTypes';


const initialState = {
    open: false
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return { ...state, open: true };
        case CLOSE_MODAL:
            return { ...state, open: false };
        default:
            return state;
    }
};

export default modalReducer;