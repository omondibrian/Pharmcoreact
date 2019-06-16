import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Products from '../pages/jsonstorage/products.json';
import Compaireproduct from '../components/compaireproduct';
import Carossel from '../components/carossel';

class Compareproducts extends Component {
    state = { 
        products:null
     }
     componentWillMount(){
         
         this.setState({
             products:Products.products,
             electronics:Products.electronics,
             healthbeuty:Products.healthbeuty
         })
     }
    render() { 
        return ( 
        <div>
            <Header />
            <div id="mainBody">
                <div className="container">
                    <div className="row">
                        <Carossel />
                        <Sidebar {...this.state} />
                       <div className="span9">
                            <ul className="breadcrumb">
                                <li><a href="index.html">Home</a> <span className="divider">/</span></li>
                                <li className="active">Products Comparizon</li>
                            </ul>
                            <h3> Products Compairizon <small className="pull-right"> 2 products are compaired </small></h3>	
                            <hr className="soft" />
                            <Compaireproduct />
                            <a href="/products" class="btn btn-large pull-right">Back Products Page</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div> );
    }
}
 
export default Compareproducts;