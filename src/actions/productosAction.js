import clienteAxios from '../config/axios';
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

// Funcion para crear un producto
export function crearProductoAction(producto) {
    return (dispatch) => {
        dispatch( agregarProducto() );
        // Try Catch para la carga del producto en la API 
        try {
            //Carga de datos en API
            clienteAxios.post('/productos', producto);
            // Si todo sale bien cargamos en el state
            dispatch( agregarProductoExito(producto) );
        } catch (error) {
            console.log(error);
            dispatch( agregarProductoError(true) );
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

