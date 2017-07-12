import PricesEs from './api/prices_es'

const startup = (store, action) => {
    // fetch initial data
    return PricesEs.onMessage((message) => {
        store.dispatch(action(message))
    })
};

export default startup
