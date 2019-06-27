import React from 'react';
import{Link} from 'react-router-dom';
/*testing the block products orientation */
const BlockProduct = (props) => {
  if(!props.id)return null;
  return (
<li className="span3" data-test="blockproduct">
  <div className="thumbnail">
   <Link to="/productsdetails"><img src={props.productimage} data-test='productimage' alt={props.title}/></Link>
    <div className="caption">
      <h5 data-test='title'>{props.title}</h5>
      <p data-test='desc'> 
      {props.description}
      </p>
      <h4 style={{textAlign: 'center'}}><Link className="btn"
       to="/productdetails"> <i className="icon-zoom-in" /></Link><button className="btn" onClick={()=>props.addToCart(props)} >Add to <i className="icon-shopping-cart" /></button>
       <button className="btn btn-primary" data-test='price'>€{props.price}</button></h4>
    </div>
  </div>
</li> 
);
}
 
export default BlockProduct;
    
       
  