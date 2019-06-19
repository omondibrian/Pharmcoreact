import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Registered from '../components/cart/registered';
import Slip from '../components/cart/slip';
import Voucher from '../components/cart/voucher';
import Shipping from '../components/cart/Shipping';
import {connect} from 'react-redux';
import { fetchProducts} from '../redux/actions/productsaction'
class ProductSummary extends Component {
   
    componentWillMount(){
        this.props.fetchProducts();
        console.log("products summary props", this.props)
      }
    render() { 
        return ( 
            <div>
                <Header />
                <div id="mainBody">
                    <div className="container">
                        <div className="row">
                        <Sidebar />
                            <div className="span9">
                                <div>
                                    <ul className="breadcrumb">
                                        <li><a href="/">Home</a> <span className="divider">/</span></li>
                                        <li className="active"> SHOPPING CART</li>
                                    </ul>
                                <h3>  SHOPPING CART []<a href="/products" className="btn btn-large pull-right">
                                    <i className="icon-arrow-left" /> Continue Shopping </a></h3>	
                                    {/* <small>{this.state.Items} {this.state.Items >1 ?'Items':'Item' }</small> */}
                                    <hr className="soft" />
                                    <Registered />
                                    <Slip />
                                    <Voucher />
                                    <Shipping />
                                    <a href="/products" className="btn btn-large"><i className="icon-arrow-left"></i> Continue Shopping </a>
	                                <a href="/login" className="btn btn-large pull-right">Next <i className="icon-arrow-right"></i></a>
	
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
const mapStateToProps = (state) =>({
  
    electronics:state.pharmco.electronics,
    healthbeuty:state.pharmco.healthbeuty
  }
  )
export default connect(mapStateToProps,{fetchProducts})(ProductSummary);