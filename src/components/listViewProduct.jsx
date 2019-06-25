import React from 'react';
import{Link} from 'react-router-dom';
const ListVeiwProduct = (props) => {
  const {productimage,title,description,price,id} = props;
  if(!id){
    return null
  }
  return (  
        
  <div data-test = "listview">
    <div className="row">	  
      <div className="span2">
        <img src={productimage} data-test='imgTest' alt={title} />
      </div>
      <div className="span4">
          <h3>New | Available</h3>				
          <hr className="soft" />
          <h5 data-test="title">{title} </h5>
          <p data-test='desc'>
            {description}
          </p>
         <Link className="btn btn-small pull-right"to="/productsdetails">View Details</Link>
          <br className="clr" />
      </div>
      <div className="span3 alignR">
          <form className="form-horizontal qtyFrm">
            <h3 data-test='price'> $ {price}</h3>
            <label className="checkbox">
              <input type="checkbox" />  Adds product to compair
            </label><br />
          </form>
           <button onClick={()=>props.addtocart(props)} className="btn btn-large btn-primary"> Add to cart <i className=" icon-shopping-cart" /></button>
        </div>
      </div>
      <hr className="soft" />
      </div>  );
}
 
export default ListVeiwProduct;