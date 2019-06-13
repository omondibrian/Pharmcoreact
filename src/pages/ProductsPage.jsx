import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import CurrentProducts from '../components/productsComponent';
class ProductsPage extends Component {
    state = { 
        productimage:'themes/images/products/3.jpg',
        title:" techno",
        description:"  I'm a paragraph. Click here ",
        price:222.00,

    }
    render() { 
        return ( 
        <div>
          <Header />
            <div id="mainBody">
                <div className="container">
                    <div className="row">
                    <Sidebar />
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