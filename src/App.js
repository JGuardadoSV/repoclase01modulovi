import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Menu from './Menu';
import Inicio from './Inicio';
import Servicios from './Servicios';
function App() {
  return (
   <Router>
    <div>
    <Menu/>
     <Switch>
       <Route path="/" exact component={Inicio} />
       <Route path="/servicios" component={Servicios} />
     </Switch>
    </div>
   </Router>
  );
}

export default App;
