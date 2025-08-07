'use client'

import Button from "./Button"
import Input from "./Input"
import Title from "./Title"

export default function Form(props) {
    return(
        <>
            <Title></Title>
            <h4>Username:</h4>
            <Input type={props.type} onChange={props.onChange1} ></Input>
            <h4>Mail:</h4>
            <Input type={props.type} onChange={props.onChange2}></Input>
            <h4>Password</h4>
            <Input type={props.type} onChange={props.onChange3}></Input>
            <Button text={props.text} onClick={props.onClick}></Button>
        </>
    )
}