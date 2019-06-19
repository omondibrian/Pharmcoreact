import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
// import CurrentProducts from '../components/productsComponent';
import {connect} from 'react-redux';
import { fetchProducts} from '../redux/actions/productsaction'

class ProductsPage extends Component {
    componentWillMount(){
        this.props.fetchProducts();
    }
    render() { 
        console.log("products component",this.props)
       
        return ( 
        <div>
          <Header />
            <div id="mainBody">
                <div className="container">
                    <div className="row">
                    <Sidebar {...this.props} />
                    {/* <CurrentProducts {...this.props} /> */}
                    </div>
                </div>
            </div>
          <Footer />  
        </div> 
        );
    }
}
const mapStateToProps = (state) =>({
    products:state.pharmco.products,
    electronics:state.pharmco.electronics,
    healthbeuty:state.pharmco.healthbeuty
  }
  )

 
export default connect(mapStateToProps,{ fetchProducts})( ProductsPage);