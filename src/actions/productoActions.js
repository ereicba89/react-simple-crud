import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types'
import clienteAxios from '../config/axios'
import swal from 'sweetalert2'

//crear nuevos productos

export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProducto())

        try {
            //insertar en la api
            await clienteAxios.post('/productsdsfos', producto)
            //si todo sale bien actualizamos el state
            dispatch(agregarProductoExito(producto))

            // Alerta de exito
            swal.fire('Correcto', 'El producto se agrego correctamente', 'success')
        
        } catch (error) {
            //si hay un error cambiar el state
            console.log(error);
            dispatch(agregarProductoError(true))

            swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta nuevamente'
            })
        }
    }
}
 
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

//si el producto se guarda en la base de datos

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

//si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})