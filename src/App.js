import React from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';


function App() {
 
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/empresa">
          <Empresa />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
     </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
