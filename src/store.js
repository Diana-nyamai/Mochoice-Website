import {combineReducers, createStore,applyMiddleware} from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {CartReducer} from './reducers/CartReducers'


const initialState = {};
const reducer =  combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:CartReducer
})



const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
      
export default store;