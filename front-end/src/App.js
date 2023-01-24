import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" exact component={ Register } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
