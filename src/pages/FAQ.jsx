import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Collapsable from '../components/collapsable';
import FAQjson from "../pages/jsonstorage/FAQ.json";
class FAQ extends Component {
    state = { faq:[]  }
  
// componentWillMount(){
//     this.setState{
//         faq:FAQjson.faq;
//     }
// }
  
    render() { 
        
        const faq =FAQjson.faq;
        console.log(faq)
        const questionsanswered = faq.map( qiuz =><Collapsable key={qiuz.id} {...qiuz} /> )
        return ( 
            <div>
                <Header />
             <div id="mainBody">
                 <div className="container">
                    <h1>FAQ</h1>
                    <hr className="soften" />	
                     <div className="accordion" id="accordion2">
                         {questionsanswered}
                     </div>
                 </div>
             </div>
                <Footer />
            </div>
         );
    }
}
 
export default FAQ;