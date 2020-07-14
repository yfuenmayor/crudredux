import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

// Muestra una alerta //
export function mostraralerta(alerta){
    return(dispatch) => {
        dispatch( crearAlerta(alerta));
    }
};

//Creando la alerta en el state
const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

// Elimina una alerta //
export function ocultarAlerta(){
    return(dispatch) => {
        dispatch( eliminaAlerta());
    }
};

//Creando la alerta en el state
const eliminaAlerta = () => ({
    type: OCULTAR_ALERTA
});