import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Index from '../src/pages/index';
import Login from './pages/logIn';
import RegistrationForm from './pages/RegForm';
import ProductsPage from './pages/ProductsPage';
import ProductsDetails from './pages/ProductDetails';

function App() {
  return (
  
 <Router>
 <Route exact path='/' component={Index} />
 <Route path='/login' component={Login} />
 <Route path='/registration' component={RegistrationForm} />
 <Route path='/products' component={ProductsPage} />
 <Route path='/productsdetails' component={ProductsDetails} />
</Router>
 
 
  );
}

export default App;
