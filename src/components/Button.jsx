
const Button = ({text, disabled, className, onClick}) => {
    return (
  <button className={className} type={className} disabled={disabled} onClick={onClick}>{text}  </button>
    )
}

export default Button;
