import { Field } from "react-final-form";

const Select = ({ }) => {

    const purchases = [{
        "type": "tool",
        "name": "Herramientas",
    },
    {
        "type": "sports",
        "name": "Deportes"
    },
    {
        "type": "fashion",
        "name": "Moda"
    },
    {
        "type": "technology",
        "name": "Tecnología"
    }
    ]

    var purchasesList = purchases.map(element => {
        return (
            <>
                <label htmlFor={element.type} className="labelSelect">{element.name}</label>
                <Field
                    name="purchases"
                    id={element.type}
                    component="input"
                    type="checkbox"
                    value={element.type}
                />{' '}
            </>
        )
    })
    return purchasesList;
}
export default Select;
