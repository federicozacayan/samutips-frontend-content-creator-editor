import { useEffect } from "react"
import { InitEditor } from "./editor/InitEditor"

export const App = () => {
    useEffect(()=>{
        InitEditor("001-Que-es-un-videojuego")
    },[])
    return (
        <>
            <h1>Hola react</h1>
            <div id="container">container</div>
        </>
    )

}