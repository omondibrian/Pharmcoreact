import React from 'react';
const SlipContent = ({title,description,price,decreaseQuantityOfProduct,deleteProductFromCart,IncreamentProduct,id,qty,discount,tax,productimage}) => {
    const total= qty * ((price-discount) + tax);
    return ( 
        <tr>
        <td> <img width={60} src={productimage} alt={Math.random()} /></td>
        <td>{title}<br />{description}</td>
        <td>
          <div className="input-append"><input className="span1"  style={{maxWidth: 34}}  value={qty}  size={16} type="text" />
          <button onClick={()=>decreaseQuantityOfProduct(id)} className="btn" type="button"><i className="icon-minus" /></button>
          <button  onClick={()=>IncreamentProduct(id)} className="btn" type="button"><i className="icon-plus" /></button>
          <button onClick={()=>deleteProductFromCart(id)} className="btn btn-danger" type="button">
              <i className="icon-remove icon-white" />
        </button>
          </div>
        </td>
        <td>${price}</td>
        <td>${discount}</td>
        <td>${tax}</td>
        <td>${total}</td>
      </tr>
      
      
     );
}
 
export default SlipContent;