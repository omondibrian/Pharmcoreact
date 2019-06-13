import React, { Component } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
class ProductsDetails extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
             <Header />
            <div id="mainBody">
                <div className="container">
                      <div className="row">
                      <Sidebar />
                      </div>
                </div>
            </div>
            <Footer />
        </div>
         );
    }
}
 
export default ProductsDetails;