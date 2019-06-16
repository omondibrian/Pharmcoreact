import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Carossel from '../components/carossel';
import Contents from '../components/contents';
class Index extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
             <Header />
            <div id="mainBody">
                <div className="container">
                    <div className="row">
                        <Carossel />
                        <Contents />
                    </div>
                </div>
            </div>
              <Footer />
         </div> );
    }
}
 
export default Index;