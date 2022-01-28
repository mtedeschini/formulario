
const Label = ({ htmlFor, text, value }) => {
    return (
        <label value={value} htmlFor={htmlFor} >
            {text}
        </label>
    )
}

export default Label;
