'use client'

export default function Button(props) {
    function imprimirHola(){
            console.log("Hola")
        }
    function imprimirChau(){
            console.log("Adios")
        }
    return(
        <>
            <button onClick={props.onClick}>{props.text}</button>
        </>
    )
}