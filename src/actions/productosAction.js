import clienteAxios from '../config/axios';
import swal from 'sweetalert2';
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    START_DESCARGA_PRODUCTOS,
    DESCARGAR_PRODUCTO_EXITO,
    DESCARGAR_PRODUCTO_ERROR,
    ELIMINA_PRODUCTO_EXITO,
    ELIMINA_PRODUCTO_ID,
    ELIMINA_PRODUCTO_ERROR,
    EDITA_PRODUCTO_EXITO,
    OBTENER_PRODUCTO_EDITAR,
    EDITA_PRODUCTO_ERROR,
    COMENZAR_EDICION_PRODUCTO
} from '../types';

///////////////////// ALTA DE PRODUCTO /////////////////////

export function crearProductoAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto() );
        // Try Catch para la carga del producto en la API 
        try {
            //Carga de datos en API
            await clienteAxios.post('/productos', producto);
            // Si todo sale bien cargamos en el state
            dispatch( agregarProductoExito(producto) );
            // Configuramos la alerta de carga 
            swal.fire(
                'Correcto',
                'Producto cargado con exito!',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch( agregarProductoError(true) );
            swal.fire({
                icon: 'error',
                title: 'Ops !',
                text: 'Hubo un error, intenta de nuevo !'
            })
        }
    }
}

// Funcion que llama al type para agregar producto
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

//Funcion para guardar el producto creado en el state general local
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

//Funcion para mostrar mensaje de error 
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

///////////////////// EDICION DE PRODUCTOS /////////////////////

export function obtenerProductoEdicion(producto) {
    return(dispatch) => {
        dispatch( obtenerProductoAction(producto) );
    }
}

//Funcion para colocar producto en el form 
const obtenerProductoAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
});

// Funcion para editar el producto en la API y en el state principal
export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch( editarProducto() );

        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            dispatch( editarProductoExito(producto) );   
        } catch (error) {
            console.log(error);
            dispatch( editarProductoError(true) );
        }
    }
}

// Solo para mostrar la accion en el redux de que se esta editando
const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
});

// De ser exitosa la edicion guardamos el producto nuevo en el state
const editarProductoExito = producto => ({
    type: EDITA_PRODUCTO_EXITO,
    payload: producto
});

// Si algo salio mal en la edicion
const editarProductoError = estado => ({
    type: EDITA_PRODUCTO_ERROR,
    payload: estado
});

///////////////////// GET DE PRODUCTOS PARA EL ABM /////////////////////

//Obteniendo los productos de la API
export function obtenerProductosAction() { 
    return async (dispatch) => {
        //Cambiamos el estado a loading
        dispatch( descargarProductos() );

        //Ejecutamos el llamado a la API
        try {
            const respuesta = await clienteAxios.get('/Productos');
            // console.log(respuesta.data);
            dispatch( descargaProductosExitosa(respuesta.data) );
        } catch (error) {
            dispatch( descargaProductosErronea() );  
        }
    }
 }

//Pasar al Reducer 
const descargarProductos = () => ({
    type: START_DESCARGA_PRODUCTOS,
    payload: true
});

//Pasando datos al State Principal
const descargaProductosExitosa = productos => ({
    type: DESCARGAR_PRODUCTO_EXITO,
    payload: productos
});

//Mostrar error si falla el pedido de los productos
const descargaProductosErronea = () => ({
    type: DESCARGAR_PRODUCTO_ERROR,
    payload: true
});

///////////////////// DELETE PRODUCTOS DESDE EL ABM /////////////////////

// funcion proncipal
export function eliminarProductoAction(id) { 
    return async (dispatch) => {
        dispatch( getProductoDelete(id) );
        
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch( eliminarProductoExito() );
            //Mostramos mensaje de eliminacion exitosa
            swal.fire(
                'Eliminado!',
                'El producto se eliminó correctamente.',
                'success'
              )
        } catch (error) {
            console.log(error);
            dispatch( eliminarProductoError() );
        }
        
    }
 }

 //Funcion para obtener el producto 
 const getProductoDelete = id => ({
     type: ELIMINA_PRODUCTO_ID,
     payload: id
 });

 // Eliminamos el producto del State Gral del Reducer
 const eliminarProductoExito = () => ({
     type: ELIMINA_PRODUCTO_EXITO
 });

 // Mostramos si hay un error al eliminar
 const eliminarProductoError = () => ({
     type: ELIMINA_PRODUCTO_ERROR,
     payload: true
 });