import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <p>Ta dando tudo errado</p>
        <Route component={ Register } path="/register" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
