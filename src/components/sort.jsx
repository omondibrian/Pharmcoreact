import React, { Component } from 'react';
class Sort extends Component {
    state = {  }
    render() { 
        return ( 
     <form className="form-horizontal span6">
        <div className="control-group">
          <label className="control-label alignL">Sort By </label>
          <select>
            <option>Priduct name A - Z</option>
            <option>Priduct name Z - A</option>
            <option>Priduct Stoke</option>
            <option>Price Lowest first</option>
          </select>
        </div>
      </form> );
    }
}
 
export default Sort;