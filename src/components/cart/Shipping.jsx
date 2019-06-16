import React, { Component } from 'react';
class Shipping extends Component {
    state = {  }
    Handlechange = (e) => {
        const {name,value} = e.target;
        this.setState({
          [name]:value
        });
      };
        handleSubmit = (e) =>{
          e.preventDefault();
          console.log(this.state)
        }
    render() { 
        return ( 
          <table className="table table-bordered">
  <tbody><tr><th>ESTIMATE YOUR SHIPPING </th></tr>
    <tr> 
      <td>
        <form onSubmit={this.handleSubmit} className="form-horizontal">
          <div className="control-group">
            <label className="control-label" htmlFor="country">Country </label>
            <div className="controls">
              <input type="text" onChange={this.Handlechange} name="country" placeholder="Country" />
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="post">Post Code/ Zipcode </label>
            <div className="controls">
              <input type="text" onChange={this.Handlechange} name="post" placeholder="Postcode" />
            </div>
          </div>
          <div className="control-group">
            <div className="controls">
              <button type="submit" className="btn">ESTIMATE </button>
            </div>
          </div>
        </form>				  
      </td>
    </tr>
  </tbody></table>
		
         );
    }
}
 
export default Shipping;