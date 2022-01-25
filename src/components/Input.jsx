import Label from "./Label";

const Input = ({placeholder, onChange, type, id, name, className, value ,labelText}) => {
    return (
        <div className={className}>
            <input id={id} name={name} onChange={onChange} type={type} value={value} placeholder={placeholder}/>
            <Label htmlFor={id} text={labelText}/>
        </div>
    )
}

export default Input;
