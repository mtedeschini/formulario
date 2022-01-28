
const Button = ({onSubmit, text, disabled, className}) => {
    return (
  <button className={className} type="submit" disabled={disabled}  onSubmit={onSubmit}>{text} </button>
    )
}

export default Button;
