import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Redirect from './Pages/Redirect';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import SellerOrders from './Pages/SellerOrders';
import Admin from './Pages/Admin';
// import { AppContext } from './Context/provider';
import ClientCheckout from './Pages/ClientCheckout';
import { getCart } from './Services/Storage';
import { AppContext } from './Context/provider';

function App() {
  const { setCart } = useContext(AppContext);
  useEffect(() => {
    const effect = () => {
      setCart(getCart())
    }
    effect();
  }, [])
  return (
    <Switch>
      <Route path="/customer/checkout" component={ ClientCheckout } />
      <Route path="/register" exact component={ Register } />
      <Route exact path="/" component={ Redirect } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/seller/orders" component={ SellerOrders } />
      <Route exact path="/admin/manage" component={ Admin } />
      <Route exact path="/customer/orders" component={ Orders } />
    </Switch>
  );
}

export default App;
