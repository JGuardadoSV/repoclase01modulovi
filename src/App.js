import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Menu from './Menu';
import Inicio from './Inicio';
import Listado from './Listado';
import Registro from './Registro';
import Editar from './Editar';
function App() {
  return (
   <Router>
    <div>
    <Menu/>
     <Switch>
       <Route path="/" exact component={Inicio} />
       <Route path="/listado" component={Listado} />
       <Route path="/registro" component={Registro} />
       <Route path="/editar/:id" component={Editar} />
     </Switch>
    </div>
   </Router>
  );
}

export default App;
