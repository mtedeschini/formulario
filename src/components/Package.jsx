import Input from "./Input";
import { text } from "../text/i18next";


const Package = ({}) => {
    return (
        <>
            <Input
                placeholder={text.product}
                type="text" 
                name="product"
                className="addDiv"/>
            <Input
                placeholder={text.quantity}
                type="number" 
                name="quantity"
                className="addDiv"/>
        </>

    )
}

export default Package;