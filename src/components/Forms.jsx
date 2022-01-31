import React from "react";
import { text } from "../text/i18next";
import Select from "./Select";
import Button from "./Button";
import Package from "./Package";
import { Form, Field } from 'react-final-form';
import Tooltip from "./Tooltip";
import Input from "./Input";
import { validateCode, validateEmail } from "./validations/Validations";

const Forms = () => {

    const initialValue = {
        "code": "123",
        "name": "asdasd",
        "lastname": "",
        "email": "",
        "purchases": [],
        "terms": ""
    }


    return (
        <Form
            onSubmit={(values) => { alert(JSON.stringify(values, undefined, 2)) }}
            initialValue={initialValue}
            validate={values => {
                const error = {}
                if (!values.name) {
                    error.name = "Requerido"
                }
                if (!values.lastname) {
                    error.lastname = "Requerido"
                }
                if (!values.code) {
                    error.code = "Requerido"
                }
                if (!values.email) {
                    error.email = "Requerido"
                }
                if (!values.purchases) {
                    error.purchases = "Requerido"
                }
                if (!values.terms) {
                    error.terms = "Requerido"
                }
                return error;
            }} a
            render={renderProps => {
                const { handleSubmit, values, dirty, pristine, form } = renderProps;
                return (
                    <form onSubmit={handleSubmit}>
                        <div className="form" >
                            <div className="formHeader">
                                <p>{text.task}</p>
                            </div>
                            <div className="formBody">
                                <Input name="code" placeholder={text.code} validate={validateCode} />
                                <Tooltip tooltipText={text.codeText} />
                                <Input name="name" placeholder={text.name} type="text" />
                                <Field name="name" >{props => <pre>{JSON.stringify(props, undefined, 2)}</pre>}</Field>
                                <Input name="lastname" placeholder={text.lastname} type="text" />
                                <Input name="email" placeholder={text.email} type="text" validate={validateEmail}/>
                                <p>{text.purchaseText}</p>
                                <div className="selectDiv">
                                    <Select />
                                </div>
                            </div>
                            {/* <div className="formAdd">
                                <Package />
                                <Button text="+" />
                            </div> * */}

                            <div className="formFooter">
                                <Input name="terms" type="checkbox" label={text.terms} style={'width: "10"'} />
                                <Button className="reset" text={text.reset} disabled={pristine} onClick={form.reset} />
                                <Button className="submit" text={text.submit} disabled={!dirty} />
                            </div>
                            <pre><code>{JSON.stringify(values, undefined, 2)}</code></pre>
                        </div>
                    </form>
                )
            }}>
        </Form>
    )
}

export default Forms;
