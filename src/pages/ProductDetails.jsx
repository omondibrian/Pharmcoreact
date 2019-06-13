import React, { Component } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import CurrentProducts from '../components/productsComponent';
class ProductsDetails extends Component {
    state = {
        
         productimage:'themes/images/products/3.jpg',
         title:'Fujifilm FinePix S2950 Digital Camera',
         frontview:"themes/images/products/large/f1.jpg",
         leftview:'',
         rightview:'themes/images/products/large/f2.jpg',
         rareview:'themes/images/products/large/f3.jpg',
         price:222,
         description:"14 Megapixels. 18.0 x Optical Zoom. 3.0-inch LCD Screen."+
         " Full HD photos and 1280 x 720p HD movie capture. ISO sensitivity ISO6400 at reduced resolution. " ,
         qty:100,
         detaileddescription:{brand:'Fujifilm',Model:'FinePix S2950HD',Releasedon:"2011-01-28",
         Dimensions:'"5.50" h x 5.50" w x 2.00" l70 pounds',Displaysize:"3"}
          }
    render() { 
        const {frontview,leftview,rightview,rareview,price,description,qty,title} =this.state;
        const{brand,Model,Releasedon,Dimensions,Displaysize}=this.state.detaileddescription
        return ( 
        <div>
             <Header />
            <div id="mainBody">
                <div className="container">
                      <div className="row">
                      <Sidebar />
        <div className="span9">
  <ul className="breadcrumb">
    <li><a href="/">Home</a> <span className="divider">/</span></li>
    <li><a href="/products">Products</a> <span className="divider">/</span></li>
    <li className="active">product Details</li>
  </ul>	
  <div className="row">	  
    <div id="gallery" className="span3">
      <a href={frontview} title={title}>
        <img src={frontview} style={{width: '100%'}} alt={title} />
      </a>
      <div id="differentview" className="moreOptopm carousel slide">
        <div className="carousel-inner">
          <div className="item active">
            <a href={frontview}> <img style={{width: '29%'}} src={frontview} alt={title} /></a>
        <a href={rightview}> <img style={{width: '29%'}} src={rightview} alt={title} /></a>
            <a href={rareview}> <img style={{width: '29%'}} src={rareview} alt={title} /></a>
          </div>
          <div className="item">
           {rareview?<a href={rareview}> <img style={{width: '29%'}} src={rareview}alt={title}  /></a>:null} 
            {frontview?<a href={frontview}> <img style={{width: '29%'}} src={frontview} alt={title}  /></a>:null}
            {rightview?<a href={rightview}> <img style={{width: '29%'}} src={rightview} alt={title}  /></a>:null}
           {leftview? <a href={leftview}> <img style={{width: '29%'}} src={leftview} alt={title}  /></a>:null}
          </div>
        </div>
      </div>
      <div className="btn-toolbar">
        <div className="btn-group">
          <span className="btn"><i className="icon-envelope" /></span>
          <span className="btn"><i className="icon-print" /></span>
          <span className="btn"><i className="icon-zoom-in" /></span>
          <span className="btn"><i className="icon-star" /></span>
          <span className="btn"><i className=" icon-thumbs-up" /></span>
          <span className="btn"><i className="icon-thumbs-down" /></span>
        </div>
      </div>
    </div>
    <div className="span6">
      <h3>{title}</h3>
      <small>- (14MP, 18x Optical Zoom) 3-inch LCD</small>
      <hr className="soft" />
      <form className="form-horizontal qtyFrm">
        <div className="control-group">
          <label className="control-label"><span>${price}</span></label>
          <div className="controls">
            <input type="number" className="span1" placeholder="Qty." />
            <button type="submit" className="btn btn-large btn-primary pull-right"> Add to cart <i className=" icon-shopping-cart" /></button>
          </div>
        </div>
      </form>
      <hr className="soft" />
      <h4>{qty} items in stock</h4>
      <form className="form-horizontal qtyFrm pull-right">
        <div className="control-group">
          <label className="control-label"><span>Color</span></label>
          <div className="controls">
            <select className="span2">
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Brown</option>
            </select>
          </div>
        </div>
      </form>
      <hr className="soft clr" />
      <p>{description}</p>
      <a className="btn btn-small pull-right" href="#detail">More Details</a>
      <br className="clr" />
      <a href="#" name="detail" />
      <hr className="soft" />
    </div>
    <div className="span9">
      <ul id="productDetail" className="nav nav-tabs">
        <li className="active"><a href="#home" data-toggle="tab">Product Details</a></li>
        <li><a href="#profile" data-toggle="tab">Related Products</a></li>
      </ul>
      <div id="myTabContent" className="tab-content">
        <div className="tab-pane fade active in" id="home">
          <h4>Product Information</h4>
          <table className="table table-bordered">
            <tbody>
              <tr className="techSpecRow"><th colSpan={2}>Product Details</th></tr>
              <tr className="techSpecRow"><td className="techSpecTD1">Brand: </td><td className="techSpecTD2">{brand}</td></tr>
              <tr className="techSpecRow"><td className="techSpecTD1">Model:</td><td className="techSpecTD2">{Model}</td></tr>
              <tr className="techSpecRow"><td className="techSpecTD1">Released on:</td><td className="techSpecTD2">{Releasedon}</td></tr>
              <tr className="techSpecRow"><td className="techSpecTD1">Dimensions:</td><td className="techSpecTD2">{Dimensions}</td></tr>
              <tr className="techSpecRow"><td className="techSpecTD1">Display size:</td><td className="techSpecTD2">{Displaysize}</td></tr>
            </tbody>
          </table>
        </div>
            <div class="tab-pane fade" id="profile">
            <CurrentProducts {...this.state} />
        </div>
      </div>
      </div>
      </div>
      </div>
     
     </div>
        </div>
            </div>
            <Footer />
        </div>
         );
    }
}
 
export default ProductsDetails;