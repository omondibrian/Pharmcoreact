import React, { Component } from 'react';
import FeaturedProducts from './featured';
import Sidebar from '../components/sidebar';
import LatestProducts from './latestProducts';
import Products from '../pages/jsonstorage/products.json';
class Contents extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Sidebar {...Products} />
            <FeaturedProducts {...Products} />
            <LatestProducts {...Products}  />
            </div>
    
         );
    }
}
 
export default Contents;