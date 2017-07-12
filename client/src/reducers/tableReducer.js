import {PRICES_UPDATE} from '../constants/actionTypes';
import {SORT_RESULTS} from '../constants/actionTypes';


const initialState = {
    exampleData: [],
    bla: true,
    sortType: '',
    sortField: ''
};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {

        case SORT_RESULTS:
            return { ...state, sortField: action.sortField, sortType: action.sortType };

        case PRICES_UPDATE:
            return { ...state, exampleData: action.example };

        default:
            return state;
    }
};

export default tableReducer;