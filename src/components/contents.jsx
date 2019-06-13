import React, { Component } from 'react';
import FeaturedProducts from './featured';
import Sidebar from '../components/sidebar';
import LatestProducts from './latestProducts';
class Contents extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Sidebar />
            <FeaturedProducts />
            <LatestProducts />
            </div>
    
         );
    }
}
 
export default Contents;