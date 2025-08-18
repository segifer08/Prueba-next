'use client'

export default function Input(props) {
    console.log("cargo bien")
    function cambio1(){
            console.log("Cambie 1")
        }
    function cambio2(){
            console.log("Cambie 2")
        }
    function cambio2(){
            console.log("Cambie 3")
        }
    return(
        <>
            <input type={props.type} onChange={props.onChange}></input>
        </>
    )
}