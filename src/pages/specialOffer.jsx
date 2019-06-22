import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

import CurrentProducts from '../components/productsComponent';

//redux connection
import {connect} from 'react-redux'
import {  fetchProducts} from '../redux/actions/productsaction'

class Specialoffer extends Component {
    state = { productlist:this.props.products }
    componentWillMount(){
        this.props.fetchProducts();
     }
    render() { 
        const DiscountedProducts = this.state.productlist.filter(
            product =>product.discount >=200)
        return ( 
            <div>
                <Header />
                <div id="mainBody">
                    <div className="container">
                        <div className="row">
                        <Sidebar {...this.props} />
                            <div className="span9">
                                <ul className="breadcrumb">
                                    <li><a href="index.html">Home</a> <span className="divider">/</span></li>
                                    <li className="active">Special offers</li>
                                </ul>
                                <h4> 20% Discount Special offer</h4>	
                                <hr className="soft" />
                             
                                <CurrentProducts products={DiscountedProducts} />
                            </div>
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
  export default connect(MapStateToProps,{ fetchProducts}) (Specialoffer);