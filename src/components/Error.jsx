import { useField } from 'react-final-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";


const Error = ({ name, }) => {

    const { meta } = useField(name)

    if (meta.touched && meta.error) {
        return (
            <div className="errType">
                <span className="inputSpan">{meta.error}</span>
            </div>
        )
    }
    if (meta.validating) {
        return (
            <div className="validating">
                <FontAwesomeIcon icon={faClock} /> Validando...
            </div>
        )

    }
    else { return ("") }
}

export default Error;