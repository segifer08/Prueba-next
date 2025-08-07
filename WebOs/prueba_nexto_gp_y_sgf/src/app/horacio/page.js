"use client"

import Form from "@/components/Form"

export default function Voracio() {
    function imprimirHola(){
            console.log("Hola")
        }
    function imprimirChau(){
            console.log("Adios")
        }
    function cambio1(){
            console.log("Cambie 1")
        }
    function cambio2(){
            console.log("Cambie 2")
        }
    function cambio3(){
            console.log("Cambie 3")
        }
    return(
        <>
            <h1>Existo, me llamo Horacio y soy el login</h1>
            <Form
                text={"Buenas"} 
                onClick={imprimirHola} 
                type={"text"} 
                onChange1={cambio1} onChange2={cambio2} onChange3={cambio3}>
            </Form>
            <hr></hr>
            <Form
                text={"Malas"} 
                onClick={imprimirChau} 
                type={"text"} 
                onChange1={cambio3} onChange2={cambio2} onChange3={cambio1}>
            </Form>
        </>
    )
}