import React, { useState, useEffect } from 'react'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { editarProductoAction } from '../actions/productoActions.js'
import { useHistory } from 'react-router-dom' 

const EditarProducto = () => {

  const dispach = useDispatch()
  const history = useHistory()

  //nuevo state de producto
  const [producto, guardarProducto] = useState({
    nombre: '',
    precio: ''
  })

  //llenar automaticamente el state 

  //producto a editar

  const productoEditar = useSelector(state => state.productos.productoEditar)

  //llenar automaticamente el state
  useEffect(()=> {
    guardarProducto(productoEditar)
  }, [productoEditar])
 
  //leer los datos del formulario
  const onChangeFormulario = e => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }
  const { nombre, precio} = producto;

  const submitEditarProducto = e => {
    e.preventDefault()
    dispach(editarProductoAction(producto))
    history.push('/')
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Editar Producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className='form-group'>
                <label>Nuevo producto</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre producto'
                  name='nombre'
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>
              <div className='form-group'>
                <label>Precio producto</label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Precio producto'
                  name='precio'
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </div>
              <button className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditarProducto
