import { createStore, compose, applyMiddleware } from 'redux';
import thunk from './thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;