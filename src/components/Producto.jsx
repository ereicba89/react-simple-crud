import React from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

//redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction, obtenerProductoAction } from '../actions/productoActions'

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto

  const dispatch = useDispatch()
  const history = useHistory() // habilitar history para redireccion

  // Confirmar si desea eliminarlo
  const confirmarEliminarProducto = id => {
    //preguntar al usuario
    Swal.fire({
      title: '¿Estas Seguro?',
      text: 'Un producto que se elimina no se puede recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        //pasarlo al action
        dispatch(borrarProductoAction(id))
      }
    })
  }

  // funcion que redirige de forma programada
  const redireccionarEdicion = producto => {
    dispatch(obtenerProductoAction(producto))
    history.push(`/productos/editar/${producto.id}`)
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className='font-weigth-bold'>$ {precio}</span>
      </td>
      <td className='acciones text-right'>
        <button
          type='button'
          className='btn btn-warning mr-2'
          onClick={() => redireccionarEdicion(producto)}>
          Editar
        </button>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => confirmarEliminarProducto(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Producto
