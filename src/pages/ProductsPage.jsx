import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import CurrentProducts from '../components/productsComponent';
import Products from '../pages/jsonstorage/products.json';
class ProductsPage extends Component {
    state = { 
       products:null,
       cart:[
        {   
            id:1,
            productimage:"themes/images/products/3.jpg",
            title:" techno",
            description:"  I'm a paragraph. Click here ",
            price:222.00,
            qtyinstock:100,
            discount:25,
             tax:15,
             category:"electronics",
             subcategory:"mobile phone",
             unit:1
        }
       ]
    }
    componentWillMount(){
        
        this.setState({
            products:Products.products,
            electronics:Products.electronics,
            healthbeuty:Products.healthbeuty
        })
    }
    render() { 
        console.log(this.state);
        return ( 
        <div>
          <Header />
            <div id="mainBody">
                <div className="container">
                    <div className="row">
                    <Sidebar {...this.state} />
                    <CurrentProducts {...this.state} />
                    </div>
                </div>
            </div>
          <Footer />  
        </div> 
        );
    }
}
 
export default ProductsPage;