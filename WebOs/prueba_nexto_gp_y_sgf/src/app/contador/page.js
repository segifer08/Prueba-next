"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Title from "@/components/Title"
import { useEffect, useState } from "react"

export default function Contador(){
    const [cuenta, setCuenta] = useState(0)
    const [tf, setTF] = useState(false)

    useEffect(() => {
        if(cuenta >=  20 || cuenta <= -20){
            setCuenta(0)
        }
    }, [cuenta])

    function MasOMenos(){
        console.log(tf)
        if(tf){
            setCuenta(cuenta + 1)
        } else {
            setCuenta(cuenta - 1)
        }
    }

    function ver(event){
        setTF(event.target.checked)
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