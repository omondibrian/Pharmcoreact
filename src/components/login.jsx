import React, { Component } from 'react';
class LoginForm extends Component {
    state = { email:"",password:""}

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
 <div>
  <div className="span1"> &nbsp;</div>
  <div className="span4">
    <div className="well">
      <h5>ALREADY REGISTERED ?</h5>
      <form onSubmit={this.handleSubmit}>
        <div className="control-group">
          <label className="control-label" htmlFor="inputEmail1">Email</label>
          <div className="controls">
            <input
             onChange={this.Handlechange}
              className="span3"
               type="text"
                name="email"
                 placeholder="Email"
                  />
          </div>
        </div>
        <div className="control-group">
          <label className="control-label" htmlFor="password">Password</label>
          <div className="controls">
            <input type="password" className="span3" onChange={this.Handlechange} name="password" placeholder="Password" />
          </div>
        </div>
        <div className="control-group">
          <div className="controls">
            <button type="submit" className="btn">Sign in</button> <a href="forgetpass.html">Forget password?</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
 );
    }
}
 
export default LoginForm;