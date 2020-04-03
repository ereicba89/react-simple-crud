import React from 'react';
import Header from './components/Header.jsx'
import Productos from './components/Productos.jsx'
import NuevoProducto from './components/NuevoProducto.jsx'
import EditarProducto from './components/EditarProducto.jsx'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//redux

import { Provider } from 'react-redux'
import store from './store'


import './App.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header></Header>
      <div className="container mt-5">
        <Switch>
          <Route exact path='/' component={Productos} ></Route>
          <Route exact path='/productos/nuevo' component={NuevoProducto} ></Route>
          <Route exact path='/productos/editar/:id' component={EditarProducto} ></Route>
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
