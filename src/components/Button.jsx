
const Button = ({onSubmit, text}) => {
    return (
  <button type="submit" onSubmit={onSubmit}>{text}</button>
    )
}

export default Button;
