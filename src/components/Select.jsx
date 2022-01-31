import { Field } from "react-final-form";

const Select = ({ }) => {

    const purchases = [{
        "id": 1,
        "type": "tool",
        "name": "Herramientas",
    },
    {
        "id": 2,
        "type": "sports",
        "name": "Deportes"
    },
    {
        "id": 3,
        "type": "fashion",
        "name": "Moda"
    },
    {
        "id": 4,
        "type": "technology",
        "name": "Tecnología"
    }
    ]

    var purchasesList = purchases.map(element => {
        return (
            <div key={element.id} className="itemPurchase">
                <label htmlFor={element.type} className="labelSelect">{element.name}</label>
                <Field
                    name="purchases"
                    id={element.type}
                    component="input"
                    type="checkbox"
                    value={element.type}
                />{' '}
            </div>
        )
    })
    return purchasesList;
}
export default Select;
