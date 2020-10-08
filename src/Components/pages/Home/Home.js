import React, { Component } from 'react';
import Shoes from '../ShopPage/Shoes';
import Carouselimage from './Carouselimage';



export class Home extends Component {
    render() {
        return (
            <div>
               <div> <Carouselimage/></div>
               <div>
                   <Shoes/>
               </div>
            </div>
        )
    }
}

export default Home
