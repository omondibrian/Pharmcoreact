import React, { Component } from 'react';
import ListVeiwProduct from './listViewProduct';

class Listveiw extends Component {
    state = { 
        productimage:this.props.productimage,
        title:this.props.title,
        description:this.props.description,
        price:this.props.price
    }
    componentDidMount(){
        console.log("listview mounted on the dom")
    }
    render() { 

        return ( 
            <div className="tab-pane active" >
                <ListVeiwProduct {...this.state}/>
                <ListVeiwProduct {...this.state}/>
                <ListVeiwProduct {...this.state}/>
                <ListVeiwProduct {...this.state}/>
                <ListVeiwProduct {...this.state}/>
                <ListVeiwProduct {...this.state}/>
                
            </div>
         );
    }
}
 
export default Listveiw;