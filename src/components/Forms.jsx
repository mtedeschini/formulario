import React from "react";
import { text } from "../text/i18next";
import Select from "./Select";
import Button from "./Button";
import Package from "./Package";
import { useState } from "react";
import { useEffect } from "react";
import { Form, Field } from 'react-final-form';
import Label from "./Label";
import Tooltip from "./Tooltip";
import Error from "./Error";
import Input from "./Input";

const Forms = () => {

    return (
        <Form
            onSubmit={(values) => { alert(JSON.stringify(values, undefined, 2)) }}
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
                return error;
            }}
            render={renderProps => {
                const { handleSubmit, values, submitting, pristine } = renderProps;
                return (
                    <form onSubmit={handleSubmit}>
                        <div className="form" >
                            <div className="formHeader">
                                <p>{text.task}</p>
                            </div>
                            <div className="formBody">
                                <Input name="code" placeholder={text.code} />
                                <Tooltip tooltipText={text.codeText} />
                                <Input name="name" placeholder={text.name} type="text" />
                                <Field name="name" >{props => <pre>{JSON.stringify(props, undefined, 2)}</pre>}</Field>
                                <Input name="lastname" placeholder={text.lastname} type="text" />
                                <Input name="email" placeholder={text.email} type="text" />
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
                                <Input name="terms" type="radio" value="yes" label={text.terms} style={'width: "10"'} />
                                <Button className="reset" text={text.reset} disabled={ pristine} />
                                <Button className="submit" text={text.submit} disabled={submitting} />
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
