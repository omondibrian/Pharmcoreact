import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import LoginForm from '../components/login';
import Register from '../components/register';
class Login extends Component {
    state = {  }
    render() { 
        return (
<div>
    <Header />
    <div id="mainBody">
        <div class="container">
            <div class="row">
                    <Sidebar />
                    <div className="span9">
                            <ul className="breadcrumb">
                                <li><a href="index.html">Home</a> <span className="divider">/</span></li>
                                <li className="active">Login</li>
                            </ul>
                            <h3> Login</h3>	
                            <hr className="soft" />
                            <div className="row">
                               <Register />
                                <LoginForm />
                            </div>
                    </div>
                   
            </div>
        </div>
    </div>
  	
    <Footer/>
</div> 


          );
    }
}
 
export default Login;