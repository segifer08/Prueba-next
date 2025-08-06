'use client'

export default function Button() {
    function imprimir(){
            console.log("Los politicos se la re comen")
        }
    return(
        <>
            <button onClick={imprimir}>Tocame</button>
        </>
    )
}