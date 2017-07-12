import { PRICES_UPDATE, SORT_RESULTS } from '../constants/actionTypes';


export const updatePrices = (newPrices) => {
    return {
        type: PRICES_UPDATE,
        example: newPrices.example
    }
};

export const sortResults = ( sortType, sortField ) => {
    return {
        type: SORT_RESULTS,
        sortType,
        sortField
    }
};

