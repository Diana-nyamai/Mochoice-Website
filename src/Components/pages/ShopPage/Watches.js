import React, { Component } from 'react'
import WatchData from './Data/WatchData';
import {Link} from 'react-router-dom';

export class Watches extends Component {
    render() {
        return (
            <div className="content">
            <ul className="products">
                {
                WatchData.products.map(product => 
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
}

export default Watches
