import React, { Component } from 'react';
import Product from './Products';
class FeaturedProducts extends Component {
    state = {  }
    render() { 
        return (
<div className="span9">		
  <div className="well well-small">
    <h4>Featured Products <small className="pull-right">200+ featured products</small></h4>
    <div className="row-fluid">
      <div id="featured" className="carousel slide">
        <div className="carousel-inner">
          <div className="item active">
            <ul className="thumbnails">
             <Product />
            </ul>
          </div>
          <div className="item">
            <ul className="thumbnails">
            <Product />
            <Product />
            </ul>
          </div>
          <div className="item">
            <ul className="thumbnails">
            <Product />
            </ul>
          </div>
          <div className="item">
            <ul className="thumbnails">
            <Product />
            <Product />
            <Product />
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