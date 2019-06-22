import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom'
import Sort from './sort';
import ListVeiw from './listview';
import BlockVeiwProducts from './BlockviewProducts';

import {connect} from 'react-redux'
import {  fetchProducts ,addToCart  } from '../redux/actions/productsaction'

class CurrentProducts extends Component {
    state = { 
       
       layoutblock:true
    }
    componentWillMount(){
      this.props.fetchProducts();
     
   }
    toggleLayout=()=>{
        this.setState({
            layoutblock:!this.state.layoutblock
        })
    }

    render() { 
       
        return ( 
<div>
   <div className="span9">
        
        <h3> Products Name <small className="pull-right"> {this.props.products.length} products are available </small></h3>	
        <hr className="soft" />
        <Sort />
        <div  className="pull-right">
            <button onClick={this.toggleLayout} ><span className="btn btn-large"><i className="icon-list" /></span></button>
        </div>
        <br className="clr" />
         <div className="tab-content">
      {
          this.state.layoutblock? <ListVeiw {...this.props} />:
            <BlockVeiwProducts {...this.props} />
      }
      <hr className="soft" />
  </div>
 <Link to="/compaireproducts" className="btn btn-large pull-right">Compair Product</Link>
  <div className="pagination">
    <ul>
      <li><NavLink to="#">‹</NavLink></li>
      <li><NavLink to="#">1</NavLink></li>
      <li><NavLink to="#">2</NavLink></li>
      <li><NavLink to="#">3</NavLink></li>
      <li><NavLink to="#">4</NavLink></li>
      <li><NavLink to="#">...</NavLink></li>
      <li><NavLink to="#">›</NavLink></li>
    </ul>
  </div>
  <br className="clr" />
</div>

        </div> 
        );
    }
}
const MapStateToProps = (state) =>({
  products:state.products.products,
  electronics:state.products.electronics,
   healthbeuty:state.products.healthbeuty,
   cart:state.products.cart
})
export default connect(MapStateToProps,{fetchProducts,addToCart})( CurrentProducts);
