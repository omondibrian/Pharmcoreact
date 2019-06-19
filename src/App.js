import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Index from '../src/pages/index';
import Login from './pages/logIn';
import RegistrationForm from './pages/RegForm';
import ProductsPage from './pages/ProductsPage';
import ProductsDetails from './pages/ProductDetails';
import ProductsSummary from './pages/ProductSummary';
import Forgetpass from './pages/ForgetPass';
import SpecialOffer from './pages/specialOffer';
import Compaireproducts from './pages/CompairProducts';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';


function App() {
  return (
 
 <Router>
 <Route exact path='/' component={Index} />
 <Route path='/login' component={Login} />
 <Route path='/registration' component={RegistrationForm} />
 <Route path='/products' component={ProductsPage} />
 <Route path='/productsdetails' component={ProductsDetails} />
 <Route path='/productssummary' component={ProductsSummary} />
 <Route path='/forgetpass' component={Forgetpass} />
 <Route path='/specialoffer' component={SpecialOffer} />
 <Route path='/compaireproducts' component={Compaireproducts} />
 <Route path='/contact' component={Contact} />
 <Route path='/faq' component={FAQ} />
</Router>
  
 
 
  );
}

export default App;
