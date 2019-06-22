import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import CurrentProducts from '../components/productsComponent';

//redux connection
import {connect} from 'react-redux'
import {  fetchProducts ,addToCart  } from '../redux/actions/productsaction'

class ProductsPage extends Component {
  
  componentWillMount(){
    this.props.fetchProducts();
 }
    render() { 
       
        return ( 
        <div>
          <Header />
            <div id="mainBody">
                <div className="container">
                    <div className="row">
                    <Sidebar {...this.props} />
                    <CurrentProducts />
                    </div>
                </div>
            </div>
          <Footer />  
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
export default connect(MapStateToProps,{fetchProducts,addToCart})( ProductsPage);