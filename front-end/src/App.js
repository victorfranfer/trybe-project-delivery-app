import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Redirect from './Pages/Redirect';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { AppContext } from './Context/provider';

function App() {
  const { name, role } = useContext(AppContext);
  console.log(name, role);
  return (
    <Switch>
      <Route path="/register" exact component={ Register } />
      <Route exact path="/" component={ Redirect } />
      <Route path="/login" component={ Login } />
    </Switch>
  );
}

export default App;
