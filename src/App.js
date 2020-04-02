import React from 'react';
import Header from './components/Header'
import Productos from './components/Productos'
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditarProducto'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="container mt-5">
        <Switch>
          <Route exact path='/' component={Productos} ></Route>
          <Route exact path='/producto/nuevo' component={NuevoProducto} ></Route>
          <Route exact path='/producto/editar/:id' component={EditarProducto} ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
