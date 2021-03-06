import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//acciones de redux
import { crearNuevoProductoAction } from '../actions/productoActions.js'
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions'

const NuevoProducto = ({history}) => {


    //state del componente
    //        state action
    const [nombre, guardarNombre] = useState('')
    const [precio, guardarPrecio] = useState(0)

    const dispach = useDispatch()

    //mandar llamare el action del productoAction
    const agregarProducto = producto => dispach(crearNuevoProductoAction(producto))

    //use selector para acceder al state dentro del componente
    const cargando = useSelector( state => state.productos.loading)
    const error = useSelector( state => state.productos.error)
    const alerta = useSelector( state => state.alerta.alerta)

    //cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault()

        //validar formulario
        if(nombre.trim() === '' || precio <= 0){
            const  alerta = {
              msg: 'Ambos campos son obligatorios',
              class: 'alert alert-danger text-center text-uppercase p3'
            }
            dispach(mostrarAlertaAction(alerta))
            return
        }
        //si no hay errores
        dispach(ocultarAlertaAction())

        //crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        //redireccionar
        history.push('/')
    }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Agregar Nuevo Producto
            </h2>
            { alerta ? <p className={alerta.class}>{alerta.msg}</p> : null}
            <form
                onSubmit={submitNuevoProducto}
            >
              <div className='form-group'>
                <label>Nombre producto</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre producto'
                  name='nombre'
                  value={nombre}
                  onChange={e => guardarNombre(e.target.value)}
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
                  onChange={e => guardarPrecio(Number(e.target.value))}
                />
              </div>
              <button className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                Agregar
              </button>
              { cargando ?  <p>Cargando...</p> : null}
              { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NuevoProducto
