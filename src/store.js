// Todos los States de la APP //
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Importamos la combinacion de los reducers
import reducer from './reducers';


//Creamos el store
const store = createStore(
    reducer,
    // El compose se usa solo cuando utilizamos el applyMiddleware
    compose( applyMiddleware(thunk), 
        //Agergamos estas lineas para poder tener funcionalidades necesarias en la consola 
        typeof window === 'object' &&
        window.hasOwnProperty('__REDUX_DEVTOOLS_EXTENSION__') ?
            // typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;