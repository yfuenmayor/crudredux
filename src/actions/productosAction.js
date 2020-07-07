import clienteAxios from '../config/axios';
import swal from 'sweetalert2';
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    START_DESCARGA_PRODUCTOS,
    DESCARGAR_PRODUCTO_EXITO,
    DESCARGAR_PRODUCTO_ERROR
} from '../types';

// Funcion para crear un producto
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

//Funcion para 
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

// Obtener productos de la api para caragarlos en la tabla
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

const descargaProductosExitosa = productos => ({
    type: DESCARGAR_PRODUCTO_EXITO,
    payload: productos
});

const descargaProductosErronea = () => ({
    type: DESCARGAR_PRODUCTO_ERROR,
    payload: true
});
