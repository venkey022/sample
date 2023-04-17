import {createStore, applyMiddleware} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extensions';

import thunk from 'redux-thunk';

import reducer  from './ reducer';

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...thunk))
);


export default store;