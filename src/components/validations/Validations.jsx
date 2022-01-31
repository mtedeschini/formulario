import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { errorStyles, successStyles } from "../styles/Styles";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const validateCode = async (value) => {
    if (String(value).length < 6) {
        return (<div>  <FontAwesomeIcon icon={faTimesCircle} /> Debe contener al menos 6 caracteres </div>)
    }
    if (value) {
        await sleep(1000) //Simula llamar un servicio
        if (value.toUpperCase() === "ABC123") {
            return (
                <div style={successStyles}>  <FontAwesomeIcon icon={faCheckCircle} /> Código válido </div>)
        }
        else {
            return (
                <div style={errorStyles}>  <FontAwesomeIcon icon={faCheckCircle} /> Código inválido </div>
            )
        }
    }
}

const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const validateEmail = (value) => {
    if (String(value).length < 6) {
        return (<div>  <FontAwesomeIcon icon={faTimesCircle} /> Debe contener al menos 6 caracteres </div>)
    }
    if (value) {

        if (String(value)
            .toLowerCase()
            .match(re)) {
            return (
                <div style={successStyles}>  <FontAwesomeIcon icon={faCheckCircle} /> Correo válido </div>)
        }
        else {
            return (
                <div style={errorStyles}>  <FontAwesomeIcon icon={faCheckCircle} /> Correo inválido </div>
            )
        }
    }
}

