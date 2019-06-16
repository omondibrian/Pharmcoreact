import React, { Component } from 'react';
import Product from './Products';
class FeaturedProducts extends Component {
    state = { productslist:this.props.products }
    render() {
     
      
        return (
<div className="span9">		
  <div className="well well-small">
    <h4>Featured Products <small className="pull-right">{this.state.productslist.length}+ featured products</small></h4>
    <div className="row-fluid">
      <div id="featured" className="carousel slide">
        <div className="carousel-inner">
          <div className="item active">
            <ul className="thumbnails">
             <Product {...this.state.productslist[0]} />
            </ul>
          </div>
          <div className="item">
            <ul className="thumbnails">
            <Product  {...this.state.productslist[1]}  />
            <Product  {...this.state.productslist[2]}  />
            </ul>
          </div>
          <div className="item">
            <ul className="thumbnails">
            <Product  {...this.state.productslist[4]}  />
            </ul>
          </div>
          <div className="item">
            <ul className="thumbnails">
            <Product  {...this.state.productslist[5]}  />
            <Product  {...this.state.productslist[9]}  />
            <Product  {...this.state.productslist[7]}  />
            </ul>
          </div>
        </div>
        <a className="left carousel-control" href="#featured" data-slide="prev">‹</a>
        <a className="right carousel-control" href="#featured" data-slide="next">›</a>
      </div>
    </div>
  </div>
</div>
 );
    }
}
 
export default FeaturedProducts;