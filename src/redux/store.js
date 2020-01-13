import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(reducers,process.env.NODE_ENV === 'development'
? composeWithDevTools(applyMiddleware(thunk))
:applyMiddleware(thunk)
);