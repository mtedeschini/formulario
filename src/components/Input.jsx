import Label from "./Label";
import Tooltip from "./Tooltip";
import { Field } from "react-final-form";
import Error from "./Error";

const Input = ({ placeholder, name, type, label, value, style, validate }) => {

    const InputContent = ({ input, meta }) => (
        <div className={meta.active ? "active" : ""}>
            <label htmlFor={name}>{label}</label>
            <input placeholder={placeholder} style={{style}}
                {...input} className={meta.active ? 'active' : ''} />
        </div>
    )

    return (
        <div style={{ height: "70px" }}  >
            <Field
                value={value}
                name={name}
                type={type}
                validate={validate}
            >
                {InputContent}
            </Field>
            <Error name={name} />
        </div>
    )
}

export default Input;

