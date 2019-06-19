import React, { Component } from 'react';
import FeaturedProducts from './featured';
import Sidebar from '../components/sidebar';
import LatestProducts from './latestProducts';
import Products from '../pages/jsonstorage/products.json';
import {connect} from 'react-redux';
import { fetchProducts} from '../redux/actions/productsaction'
class Contents extends Component {
    state = {  }
    render() {
        console.log("content log are",this.props) 
        return ( 
            <div>
            <Sidebar {...Products} />
            <FeaturedProducts {...Products} />
            <LatestProducts {...Products}  />
            </div>
    
         );
    }
}
const mapStateToProps = (state) =>({
    products:state.products.products,
    electronics:state.products.electronics,
    healthbeuty:state.products.healthbeuty
  }
  )
  const mapDispatchToProps = () =>({
   fetchProducts
  }
  )
export default connect(mapStateToProps,mapDispatchToProps) (Contents);