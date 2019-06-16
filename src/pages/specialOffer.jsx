import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Products from '../pages/jsonstorage/products.json';
import CurrentProducts from '../components/productsComponent';
class Specialoffer extends Component {
    state = { productlist:Products.products }
    
    
  
    render() { 
        const DiscountedProducts = this.state.productlist.filter(
            product =>product.discount >=200)
        return ( 
            <div>
                <Header />
                <div id="mainBody">
                    <div className="container">
                        <div className="row">
                            <Sidebar {...Products} />
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
 
export default Specialoffer;