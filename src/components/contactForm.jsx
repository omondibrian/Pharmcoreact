import React, { Component } from 'react';
class ContactForm extends Component {
    state = { name:"",email:'',subject:'',message:'' }
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
                    <div className="span4">
                        <h4>Email Us</h4>
                        <form className="form-horizontal" onSubmit={this.handleSubmit}>
                            <fieldset>
                            <div className="control-group">
                                <input type="text" onChange={this.Handlechange} name='name'  placeholder="name" className="input-xlarge" />
                            </div>
                            <div className="control-group">
                                <input type="text" onChange={this.Handlechange} name='email' placeholder="email" className="input-xlarge" />
                            </div>
                            <div className="control-group">
                                <input type="text" onChange={this.Handlechange} name='subject' placeholder="subject" className="input-xlarge" />
                            </div>
                            <div className="control-group">
                                <textarea rows={3} id="textarea" onChange={this.Handlechange} name='message' className="input-xlarge" placeholder="enter your query" />
                            </div>
                            <button className="btn btn-large" type="submit">Send Messages</button>
                            </fieldset>
                        </form>
                    </div>
                    );
             }
}
 
export default ContactForm;