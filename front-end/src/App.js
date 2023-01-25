import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Redirect from './Pages/Redirect';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Switch>
      <Route path="/register" exact component={ Register } />
      <Route exact path="/" component={ Redirect } />
      <Route path="/login" component={ Login } />
    </Switch>
  );
}

export default App;
