import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Redirect from './Pages/Redirect';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { AppContext } from './Context/provider';
import ClientCheckout from './Pages/ClientCheckout';
import Products from './Pages/Products';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Redirect } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route path="/customer/checkout" component={ ClientCheckout } />
    </Switch>
  );
}

export default App;
