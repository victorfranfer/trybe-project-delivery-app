import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Redirect from './Pages/Redirect';
import Login from './Pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Redirect } />
      <Route path="/login" component={ Login } />
    </Switch>
  );
}

export default App;
