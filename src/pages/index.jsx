import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Carossel from '../components/carossel';
import Contents from '../components/contents';

//redux connection
import {connect} from 'react-redux'
import {  fetchProducts  } from '../redux/actions/productsaction'

class Index extends Component {
    componentWillMount(){
        this.props.fetchProducts();
     }
   
    render() { 
        return ( 
        <div>
             <Header />
            <div id="mainBody">
                <div className="container">
                    <div className="row">
                        <Carossel />
                        <Contents {...this.props} />
                    </div>
                </div>
            </div>
              <Footer />
         </div> );
    }
}
 

//all the required props are maped from the current state of the store
const MapStateToProps = (state) =>({
    products:state.products.products,
    electronics:state.products.electronics,
     healthbeuty:state.products.healthbeuty
})
export default connect(MapStateToProps,{fetchProducts})(Index);