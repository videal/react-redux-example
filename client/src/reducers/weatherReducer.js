import { GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from '../constants/actionTypes';


const initialState = {
    temperature: '-',
    location: 'London',
    fetching: false
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER_REQUEST:
            return { ...state, fetching: true };

        case GET_WEATHER_SUCCESS:
            return { temperature: action.temperature, location: action.location, fetching: false };

        case GET_WEATHER_FAIL:
            return { ...state, temperature: '-', fetching: false };

        default:
            return state;
    }
};

export default weatherReducer;