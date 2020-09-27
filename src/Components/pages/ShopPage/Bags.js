import React, { Component } from 'react';
import data from './Data/data';
import {Link} from 'react-router-dom';


 class Bags extends Component {
    render() {
        return (
            
                
            <div className="content">
                <ul className="products">
                    {
                    data.products.map(product => 
                    <li>
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
}

export default Bags
