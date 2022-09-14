import { createContext } from "react";
import { useState, useEffect } from "react";


const ProyectosContext = createContext()

const ProyectoProvider = ({children}) =>{
    const [proyectos, setProyectos] = useState([])
    const [load, setLoad] = useState(false)
    const [nightMode, setNightMode] = useState(false)

    const obtenerProyectos = async () => {
        setLoad(true)
        const url = "https://my-json-server.typicode.com/ignacioM3/api_portafolio/proyectos"
        try {
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setProyectos(resultado)
        } catch (error) {
            console.log(error)
        } finally {
            setLoad(false)
        }
    }

    useEffect(() => {
       obtenerProyectos()
    }, []);


    const handleNight = () =>{
        setNightMode(!nightMode)
    }

    return (
        <ProyectosContext.Provider
            value={{
                proyectos,
                load,
                nightMode,
                handleNight
            }}
        >
            {children}
        </ProyectosContext.Provider>
    )
}

export{
    ProyectoProvider
}

export default ProyectosContext;