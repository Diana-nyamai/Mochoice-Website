import React, { Component } from 'react'
import TrouserData from './Data/TrouserData'
import {Link} from 'react-router-dom';

export class Trouser extends Component {
    render() {
        return (
            <div className="content">
            <ul className="products">
                {
                TrouserData.products.map(product => 
                <li key={product._id}>       
                    <div className="product">
                    <Link to={'/Product/' + product._id}>
                        <img className="product-image" src ={product.images} alt="bag"/>
                        </Link>
                        <div className="product-name"><Link to={'/Product/' + product._id}>{product.name}</Link></div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">Ksh.{product.price}</div>
                        <div className="product-rating">3.5 stars ({product.numReviews})</div>
                        </div>
    
                </li>    
                )
                    }
                
            </ul>
        </div>
        )
    }
}

export default Trouser
