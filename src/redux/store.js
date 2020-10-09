import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ShoppingCartReducer from './shoppingCartDuck';
import thunk from 'redux-thunk';

const store = createStore(
  ShoppingCartReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
