import {combineReducers, createStore,applyMiddleware} from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';



const initialState = {};
const reducer =  combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer
})



const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
      
export default store;