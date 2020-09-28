import React, { useState, useEffect } from 'react'; 
import {Link} from 'react-router-dom';
import axios from 'axios';


 function Bags(props) {
      const [products, setProduct] = useState([]);
      useEffect(() => {
          const fetchData = async () =>{
              const {data} = await axios.get("/api/products");
              setProduct(data)

          }
          fetchData();
          return () => {
              //
          }
      }, [])
        return (
            <div className="content">
                <ul className="products">
                    {
                    products.map(product => 
                    <li key={product._id}>
                        <div className="product">
                        <Link to={'/Product/' + product._id}>
                            <img className="product-image" src ={product.images} alt="bag"/>
                            </Link>
                            <div className="product-name"><Link to={'/Product/' + product._id}>{product.name}</Link></div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">Ksh.{product.price}</div>
                            <div className="product-rating">4.5 stars ({product.numReviews})</div>
                         </div>

                    </li>    
                    )
                     }
                   
                </ul>
            </div>
            
        )
    
}

export default Bags
