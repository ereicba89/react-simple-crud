import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types'
import clienteAxios from '../config/axios'
import swal from 'sweetalert2'

//crear nuevos productos

export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProducto())

        try {
            //insertar en la api
            await clienteAxios.post('/productos', producto)
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


//funcion que obtiene los productos de la base de datos

export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch( descargarProductos())

        try {
            setTimeout( async () => {
                const respuesta = await clienteAxios.get('/productos')
                dispatch( descargaProductosExitosa(respuesta.data))
            }, 3000);
        } catch (error) {
            dispatch( descargaProductosError())
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})