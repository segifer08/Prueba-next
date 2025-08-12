"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Title from "@/components/Title"
import { useEffect, useState } from "react"

export default function Contador(){
    const [cuenta, setCuenta] = useState(0)
    const [tf, setTF] = useState(false)

    useEffect(() => {
        if(cuenta == 18){
            setCuenta(0)
        }

    }, [cuenta])

    function ver(event){
        console.log(event)
        setTF(event.target.checked)
    }

    function MasOMenos(){
        if(tf == true){
            setCuenta(cuenta + 1)
        } else {
            setCuenta(cuenta - 1)
        }
    }

    return(
        <>
            <Title text={"contadorEpico"}></Title>

            <h3>Contador: {cuenta}</h3>

            <Button text={"Subir o Bajar"} onClick={MasOMenos()}></Button>
            <Input type={"checkbox"} onChange={ver()}></Input>
        </>
    )
}