// Combina todos los reducers //
//Importamos para hacer la combinacion
import { combineReducers } from 'redux';
// Importamos los reducers a combinar
import productosReducer from './productosReducer';
import alertasReducer from './alertasReducer';


//Devolvemos la combinacion de los reducers
export default combineReducers({
    productos: productosReducer,
    alertas: alertasReducer
});