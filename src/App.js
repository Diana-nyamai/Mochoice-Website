import React from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import CustomNavBar from './Components/Navigators/CustomNavBar';
import Home from './Components/pages/Home/Home';
import CustomFooter from './Components/Navigators/CustomFooter';
import Watches from './Components/pages/ShopPage/Watches';
import OurServices from './Components/theservices/OurServices';
import About from './Components/pages/About/About';
import shoes from './Components/pages/ShopPage/Shoes';
import Bags from './Components/pages/ShopPage/Bags';
import Dress from './Components/pages/Clothes/Dress';
import Skirt from './Components/pages/Clothes/Skirt';
import Trouser from './Components/pages/Clothes/Trouser';
import ProductScreen from './Components/pages/ProductScreen/ProductScreen';
import CartScreen from './Components/pages/ProductScreen/CartScreen';

function App() {
  return (
    <Router>
    <div className="App">
     <CustomNavBar/>
      <Route exact path="/" component={Home}/>
      <Route path ="/About" component={About}/>
      <Route path ="/OurServices" component={OurServices}/>
      {/*shopPage */}
      <Route path="/Watches" component={Watches}/>
      <Route path="/Shoes" component={shoes}/>
      <Route path="/Bags" component={Bags}/>
      {/*clothes page */}
      <Route path="/Dress" component={Dress}/>
      <Route path="/Skirt" component={Skirt}/>
      <Route path="/Trouser" component={Trouser}/>
      {/*product screen */}
      <Route path="/Product/:id" component={ProductScreen}/>
      <Route path="/cart/:id?" component={CartScreen}/>
      
    <CustomFooter/>
</div>
</Router>
  );
}

export default App;
