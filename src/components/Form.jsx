import React from "react";
import { text } from "../text/i18next";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import Package from "./Package";
import { useState } from "react";
import { useEffect } from "react";


const Form = () => {

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        console.log(code)
    }, [code])

    return (
        <form >
            <div className="form" >
                <div className="formHeader">
                    <p>{text.task}</p>
                </div>
                <div className="formBody">
                    <Input
                        placeholder={text.code}
                        type="text"
                        name="code"
                        value={code}
                        onChange={e => setCode(e.target.value)} />
                    <Input
                        placeholder={text.name}
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <Input
                        placeholder={text.email}
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <Select />
                </div>
                <div className="formAdd">
                    <Package />
                    <Button text="+" />
                </div>
                <div className="formFooter">
                    <Input
                        placeholder={text.code}
                        type="radio"
                        labelText={text.terms} />
                    <Button text={text.submit} />
                </div>
            </div>
        </form>
    )
}

export default Form;
