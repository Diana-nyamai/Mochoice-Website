import { CART_ADD_ITEM } from "../constants/CartConstants";

function CartReducer(state={cartItems:[]}, action){
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x=> x.product === item.product);
            if(product){
               return{
                   
                    cartItems: state.cartItems.map(x=>x.product === product.product?product: x)
                };
            }
            return{

                cartItems: [...state.cartItems, item]
            };
            default:

                return state
    }
}
export {CartReducer}