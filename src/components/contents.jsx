import React, { Component } from 'react';
import FeaturedProducts from './featured';
import Sidebar from '../components/sidebar';
import LatestProducts from './latestProducts';
//redux connection
import {connect} from 'react-redux'
import {  fetchProducts   } from '../redux/actions/productsaction'
class Contents extends Component {
    componentWillMount(){
        this.props.fetchProducts();
     }
    render() {
        return ( 
            <div>
            <Sidebar {...this.props} />
            <FeaturedProducts {...this.props} />
            <LatestProducts {...this.props}  />
            </div>
    
         );
    }
}

//all the required props are maped from the current state of the store
const MapStateToProps = (state) =>({
    products:state.products.products,
    electronics:state.products.electronics,
     healthbeuty:state.products.healthbeuty,
     cart:state.products.cart
  })
  export default connect(MapStateToProps,{fetchProducts,})(Contents);