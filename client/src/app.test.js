import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import * as types from './constants/actionTypes'
import * as tableActions from './actions/tableActions';
import * as modalActions from './actions/modalActions';

import tableReducer from './reducers/tableReducer';
import modalReducer from './reducers/modalReducer';
import weatherReducer from './reducers/weatherReducer';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
});

describe('actions: ', () => {
    describe('table actions', () => {
        it('should create an action to sort the results', () => {
            const sortType = 'lifo';
            const sortField = 'price';
            const expectedAction = {
                type: types.SORT_RESULTS,
                sortType,
                sortField
            };

            expect(tableActions.sortResults(sortType, sortField)).toEqual(expectedAction)
        });


        it('should create an action to update the prices', () => {
            const newPrices = {
                example: []
            };
            const expectedAction = {
                type: types.PRICES_UPDATE,
                example: []
            };

            expect(tableActions.updatePrices(newPrices)).toEqual(expectedAction)
        });
    });

    describe('modal actions', () => {
        it('should create an action to open modal window', () => {
            const expectedAction = {
                type: types.OPEN_MODAL
            };

            expect(modalActions.openModal()).toEqual(expectedAction)
        });

        it('should create an action to open modal close', () => {
            const expectedAction = {
                type: types.CLOSE_MODAL
            };

            expect(modalActions.closeModal()).toEqual(expectedAction)
        });
    })
});

describe('reducers: ', () => {
    describe('table reducer', () => {
        it('should return the initial state', () => {
            const expectedState = {
                exampleData: [],
                bla: true,
                sortType: '',
                sortField: ''
            };
            expect(tableReducer(undefined, {})).toEqual(expectedState)
        });

        it('should handle SORT_RESULTS', () => {
            const action = {
                type: types.SORT_RESULTS,
                sortType: 'lifo',
                sortField: 'price'
            };
            const expectedState = {
                sortField: 'price',
                sortType: 'lifo'
            };
            expect(tableReducer([], action)).toEqual(expectedState);
        });

        it('should handle PRICES_UPDATE', () => {
            const action = {
                type: types.PRICES_UPDATE,
                example: []
            };
            const expectedState = {
                exampleData: []
            };
            expect(tableReducer([], action)).toEqual(expectedState);
        })
    });

    describe('modal reducer', () => {
        it('should return the initial state', () => {
            const expectedState = {
                open: false
            };
            expect(modalReducer(undefined, {})).toEqual(expectedState)
        });

        it('should handle OPEN_MODAL', () => {
            const action = {
                type: types.OPEN_MODAL
            };
            const expectedState = {
                open: true
            };
            expect(modalReducer([], action)).toEqual(expectedState);
        });

        it('should handle CLOSE_MODAL', () => {
            const action = {
                type: types.CLOSE_MODAL
            };
            const expectedState = {
                open: false
            };
            expect(modalReducer([], action)).toEqual(expectedState);
        })
    });

    describe('weather reducer', () => {
        it('should return the initial state', () => {
            const expectedState = {
                temperature: '-',
                location: 'London',
                fetching: false
            };
            expect(weatherReducer(undefined, {})).toEqual(expectedState)
        });

        it('should handle GET_WEATHER_REQUEST', () => {
            const action = {
                type: types.GET_WEATHER_REQUEST
            };
            const expectedState = {
                fetching: true
            };
            expect(weatherReducer([], action)).toEqual(expectedState);
        });

        it('should handle GET_WEATHER_SUCCESS', () => {
            const action = {
                type: types.GET_WEATHER_SUCCESS,
                temperature: '1',
                location: 'London'
            };
            const expectedState = {
                temperature: '1',
                location: 'London',
                fetching: false
            };
            expect(weatherReducer([], action)).toEqual(expectedState);
        });

        it('should handle GET_WEATHER_FAIL', () => {
            const action = {
                type: types.GET_WEATHER_FAIL,
                temperature: '1',
                location: 'London'
            };
            const expectedState = {
                temperature: '-',
                fetching: false
            };
            expect(weatherReducer([], action)).toEqual(expectedState);
        });

    })
});


