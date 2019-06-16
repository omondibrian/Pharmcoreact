import React, { Component } from 'react';
class Collapsable extends Component {
    state = { quizname:this.props.quiz,
    answer:this.props.answer,
    id:this.props.id

}
    render() { 
        const ref= '#'+ this.state.answer;
        const re = this.state.answer;
        const {id}=this.state;
            return (
                 <div>
                    <div className="accordion-group">
                         <div className="accordion-heading">
                             <h4><a className="accordion-toggle collapsed" data-toggle="collapse"  data-parent="#accordion2" href={'#'+id} >
                                {this.state.quizname}
                             </a></h4>
                        </div>
                        <div id={id} className="accordion-body collapse">
                            <div className="accordion-inner">
                               {this.state.answer} 
                             </div>
                        </div>
                    </div>
                  </div>
                 );


    }
}
 
export default Collapsable;