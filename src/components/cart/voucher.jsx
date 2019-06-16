import React, { Component } from 'react';
class Voucher extends Component {
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
  <tbody>
    <tr>
      <td> 
        <form  onSubmit={this.handleSubmit} className="form-horizontal">
          <div className="control-group">
            <label className="control-label"><strong> VOUCHERS CODE: </strong> </label>
            <div className="controls">
              <input type="text" onChange={this.Handlechange} className="input-medium" placeholder="CODE" />
              <button type="submit" className="btn"> ADD </button>
            </div>
          </div>
        </form>
      </td>
    </tr>
  </tbody>
</table>

         );
    }
}
 
export default Voucher;