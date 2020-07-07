import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    START_DESCARGA_PRODUCTOS,
    DESCARGAR_PRODUCTO_EXITO,
    DESCARGAR_PRODUCTO_ERROR
} from '../types';

// Cada Reducer tiene su propio State
const initialState = {
    productos: [],
    error: false,
    loading: false
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
        default:
            return state;
    }
 }
