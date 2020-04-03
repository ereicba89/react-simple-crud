import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-dark justtify-content-between'>
      <div className='container'>
        <h1>
          <Link to={'/'} className='text-light'>
            CRUD REACT REDUX
          </Link>
        </h1>
      </div>
      <Link className='btn btn-primary' to={'/productos/nuevo'}>
        Agregar Producto &#43;
      </Link>
    </nav>
  )
}

export default Header
