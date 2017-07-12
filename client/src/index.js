import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import initialStore from './initialStore'
import startup from './startup'
import './index.css'

import {updatePrices} from './actions/tableActions'


const reactRender = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
};

reactRender();

initialStore.subscribe(() => {
        return reactRender()
    }
);

startup(initialStore, updatePrices);
