import { useField } from 'react-final-form'

const Error = ({ name }) => {
    const {meta} = useField(name)
    return (
            meta.touched && meta.error ? <span className="inputSpan">{meta.error}</span> : null 
    )
}

export default Error;