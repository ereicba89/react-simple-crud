import React from 'react';
import Header from './components/Header'
import Productos from './components/Productos.jsx'
import NuevoProducto from './components/NuevoProducto.jsx'
import EditarProducto from './components/EditarProducto.jsx'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="container mt-5">
        <Switch>
          <Route exact path='/' component={Productos} ></Route>
          <Route exact path='/productos/nuevo' component={NuevoProducto} ></Route>
          <Route exact path='/productos/editar/:id' component={EditarProducto} ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
