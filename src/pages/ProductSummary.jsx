import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Registered from '../components/cart/registered';
import Slip from '../components/cart/slip';
import Voucher from '../components/cart/voucher';
import Shipping from '../components/cart/Shipping';
import {Link} from 'react-router-dom'

//redux connection
import {connect} from 'react-redux'
import {  fetchProducts ,IncreamentProduct ,decreaseQuantityOfProduct ,
    deleteProductFromCart  } from '../redux/actions/productsaction'

class ProductSummary extends Component {

    render() { 
        
        return ( 
            <div>
                <Header />
                <div id="mainBody">
                    <div className="container">
                        <div className="row">
                        <Sidebar {...this.props} />
                            <div className="span9">
                                <div>
                                    <ul className="breadcrumb">
                                        <li><Link to="/">Home</Link> <span className="divider">/</span></li>
                                        <li className="active"> SHOPPING CART</li>
                                    </ul>
                                <h3>  SHOPPING CART [{this.props.cart.length}]<Link to="/products" className="btn btn-large pull-right">
                                    <i className="icon-arrow-left" /> Continue Shopping </Link></h3>	
                                    {/* <small>{this.state.Items} {this.state.Items >1 ?'Items':'Item' }</small> */}
                                    <hr className="soft" />
                                    <Registered />
                                    <Slip {...this.props} />
                                    <Voucher />
                                    <Shipping />
                                    <Link to="/products" className="btn btn-large"><i className="icon-arrow-left"></i> Continue Shopping </Link>
	                                <Link to="/login" className="btn btn-large pull-right">Next <i className="icon-arrow-right"></i></Link>
	
                                </div>
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


  export default connect(MapStateToProps,{fetchProducts,IncreamentProduct,decreaseQuantityOfProduct,
    deleteProductFromCart})(ProductSummary);