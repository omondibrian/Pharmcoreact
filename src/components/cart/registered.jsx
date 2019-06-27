import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Registered extends Component {
    state = {
        username:'',
        password:null
      }
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
                    <tbody><tr><th> I AM ALREADY REGISTERED</th></tr>
                        <tr> 
                        <td>
                        <form className="form-horizontal" onSubmit={this.handleSubmit}>
                            <div className="control-group">
                                    <label className="control-label" htmlFor="username">Username</label>
                                    <div className="controls">
                                    <input type="text" onChange={this.Handlechange} name="username" placeholder="Username" />
                                    </div>
                            </div>
                            <div className="control-group">
                                    <label className="control-label" htmlFor="password">Password</label>
                                    <div className="controls">
                                    <input type="password"onChange={this.Handlechange} name="password" placeholder="Password" />
                                    </div>
                            </div>
                            <div className="control-group">
                                    <div className="controls">
                                    <button type="submit" className="btn">Sign in</button> OR <Link to="/registration" className="btn">Register Now!</Link>
                                    </div>
                            </div>
                            <div className="control-group">
                                    <div className="controls">
                                    <Link to="/forgetpass" style={{textDecoration: 'underline'}}>Forgot password ?</Link>
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
 
export default Registered;