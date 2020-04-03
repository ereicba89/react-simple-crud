import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types'

//Mostrar la alerta
export function mostrarAlertaAction(alerta){
    return (dispach) => {
        dispach(crearAlerta(alerta))
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

export function ocultarAlertaAction(alerta){
    return (dispach) => {
        dispach(ocultarAlerta())
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})