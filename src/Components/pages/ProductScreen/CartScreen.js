import React,{useEffect} from 'react'

function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=") [1]):1;

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [])
    return <div>
            <h1>cart screen</h1>
        </div>
    
}

export default CartScreen
