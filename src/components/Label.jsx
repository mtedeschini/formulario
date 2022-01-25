
const Label = ({htmlFor, text}) => {
    return (
        <label htmlFor={htmlFor} >
            {text}
        </label>
    )
}

export default Label;
