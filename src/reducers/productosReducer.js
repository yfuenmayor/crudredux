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
    EDITA_PRODUCTO_ERROR
} from '../types';

// Cada Reducer tiene su propio State
const initialState = {
    productos: [],
    error: false,
    loading: false,
    eliminarProducto: false,
    editarproducto: null
};

export default function (state = initialState, action) { 
    switch (action.type) {
        case START_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGAR_PRODUCTO_ERROR:
        case ELIMINA_PRODUCTO_ERROR:
        case EDITA_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                error: false,
                productos: action.payload
            }
        case ELIMINA_PRODUCTO_ID:
            return {
                ...state,
                eliminarProducto: action.payload
            }
        case ELIMINA_PRODUCTO_EXITO:
            return {
                ...state,
                productos: state.productos.filter( producto => producto.id !== state.eliminarProducto),
                eliminarProducto: false
            }
        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                editarproducto: action.payload
            }
        case EDITA_PRODUCTO_EXITO:
            return {
                ...state,
                editarproducto: null,
                productos: state.productos.map( producto =>
                    producto.id === action.payload.id ? producto = action.payload : producto
                )
            }
        default:
            return state;
    }
 }
