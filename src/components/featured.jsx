import React, { Component } from 'react';
import Product from './Products';
class FeaturedProducts extends Component {
  
    render() {
    
        return (
<div className="span9">		
  <div className="well well-small">
    <h4>Featured Products <small className="pull-right">{this.props.products.length}+ featured products</small></h4>
    <div className="row-fluid">
      <div id="featured" className="carousel slide">
        <div className="carousel-inner">
          <div className="item active">
            <ul className="thumbnails">
             <Product {...this.props.products[0]} />
            </ul>
          </div>
          <div className="item">
            <ul className="thumbnails">
            <Product  {...this.props.products[1]}/>
            <Product {...this.props.products[2]} />
            </ul>
          </div>
          <div className="item">
            <ul className="thumbnails">
            <Product {...this.props.products[3]}  />
            </ul>
          </div>
          <div className="item">
            <ul className="thumbnails">
            <Product  {...this.props.products[5]}  />
            <Product {...this.props.products[9]}/>
            <Product  {...this.props.products[7]}  />
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