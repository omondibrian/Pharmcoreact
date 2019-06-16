import React, { Component } from 'react';

import Sort from './sort';
import ListVeiw from './listview';
import BlockVeiwProducts from './BlockviewProducts';

class CurrentProducts extends Component {
    state = { 
       products:this.props.products,
       layoutblock:true
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
        
        <h3> Products Name <small className="pull-right"> {this.state.products.length} products are available </small></h3>	
        <hr className="soft" />
        <Sort />
        <div  className="pull-right">
            <button onClick={this.toggleLayout} ><span className="btn btn-large"><i className="icon-list" /></span></button>
        </div>
        <br className="clr" />
         <div className="tab-content">
      {
          this.state.layoutblock? <ListVeiw {...this.state} />:
            <BlockVeiwProducts {...this.state} />
      }
      <hr className="soft" />
  </div>
  <a href="/compaireproducts" className="btn btn-large pull-right">Compair Product</a>
  <div className="pagination">
    <ul>
      <li><a href="#">‹</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">...</a></li>
      <li><a href="#">›</a></li>
    </ul>
  </div>
  <br className="clr" />
</div>

        </div> 
        );
    }
}
 
export default CurrentProducts;
