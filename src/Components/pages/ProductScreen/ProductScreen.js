import React,{ useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {MDBIcon} from 'mdbreact'
import {useDispatch, useSelector} from 'react-redux';
import { detailsProduct } from '../../../actions/productActions';


function ProductScreen(props) {
   const [qty, setQty] = useState(1);
   const productDetails = useSelector(state => state.productDetails);
   const {product, loading, error} = productDetails
   const dispatch = useDispatch();

   useEffect(() => {
       dispatch(detailsProduct(props.match.params.id));
       return () => {
           //
       };
   }, [])
       return(
       
       <div>
       <div className="back-to-result"> 
               <Link to="/">Back to result</Link>
           </div>
        {
            loading? <div>please wait...</div>:
            error? <div>{error}</div>:
            (
                <div className="details">
               <div className="details-image">
                   <img src={product.images} alt="product"/>
               </div>
               <div className="details-info">
                 <ul>
                     <li>
                         <h4>{product.name}</h4>
                     </li>
                     <li>
                         {product.rating} Stars ({product.numReviews} Reviews)
                     </li>
                     <li>
                       Price:<b>Ksh.{product.price}</b>
                     </li>
                     <li>
                         Description:
                         <div>
                             {product.description}
                         </div>
                     </li>
                 </ul>
               </div>
           <div className="details-action">
               <ul>
                   <li>
                       price: {product.price}
                   </li>
                   <li>
                       status: {product.status}
                   </li>
                   <li>
                       Qty:<select value={qty} onChange={(e) =>{setQty(e.target.value)}}>
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           <option>5</option>
                       </select>
                   </li>
                   <li>
                       <button className="button">Add to cart <MDBIcon icon="cart-plus"/></button>
                   </li>
               </ul>
           </div>
           </div>
        )
        }
</div>
           
 )   
}

export default ProductScreen
