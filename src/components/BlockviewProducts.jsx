import React, { Component } from 'react';
import BlockProduct from './BlockProduct';
class BlockVeiwProducts extends Component {
    state = { 
        productimage:this.props.productimage,
        title:this.props.title,
        description:this.props.description,
        price:this.props.price
    }
    componentDidMount(){
        console.log("mounted on the dom");
    }
    render() { 
         return ( 
            <div className="tab-pane  active" id="blockView">
                <ul className="thumbnails">
                    <BlockProduct {...this.state} />
                    <BlockProduct {...this.state} />
                    <BlockProduct {...this.state} />
                    <BlockProduct {...this.state} />
                    <BlockProduct {...this.state} />
                    <BlockProduct {...this.state} />
                </ul>
            </div>
         );
    }
}
 
export default BlockVeiwProducts;