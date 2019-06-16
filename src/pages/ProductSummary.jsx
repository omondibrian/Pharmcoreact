import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Registered from '../components/cart/registered';
import Slip from '../components/cart/slip';
import Products from '../pages/jsonstorage/products.json';
import Voucher from '../components/cart/voucher';
import Shipping from '../components/cart/Shipping';
class ProductSummary extends Component {
    state = { 
                 products:{}
               
            }
            componentDidMount(){
                this.setState({...Products})
            }
    render() { 
        return ( 
            <div>
                <Header />
                <div id="mainBody">
                    <div className="container">
                        <div className="row">
                        <Sidebar {...Products} />
                            <div class="span9">
                                <div>
                                    <ul className="breadcrumb">
                                        <li><a href="/">Home</a> <span className="divider">/</span></li>
                                        <li className="active"> SHOPPING CART</li>
                                    </ul>
                                <h3>  SHOPPING CART [ <small>{this.state.Items} {this.state.Items >1 ?'Items':'Item' }</small>]<a href="/products" className="btn btn-large pull-right"><i className="icon-arrow-left" /> Continue Shopping </a></h3>	
                                    <hr className="soft" />
                                    <Registered />
                                    <Slip />
                                    <Voucher />
                                    <Shipping />
                                    <a href="/products" class="btn btn-large"><i class="icon-arrow-left"></i> Continue Shopping </a>
	                                <a href="/login" class="btn btn-large pull-right">Next <i class="icon-arrow-right"></i></a>
	
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
 
export default ProductSummary;