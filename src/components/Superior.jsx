import React, { useEffect, useContext } from "react";
import { PruebaContext } from "../contexts/PruebaContext";
import "./styles.css";

const Superior = () => {

    // Se obtiene TODO el contenido definido en 'value' en el Provider
    const { contenido, setContenido } = useContext(PruebaContext);

    useEffect(() => {
        console.log("SUPERIOR: PRIMER renderizado");

        // Utilizo la funcion setContenido para cambiar el valor del contexto
        // y forzar que todo App se renderice para mostrar el nuevo valor de contexto
        setTimeout(() => {
            setContenido("NUEVO-VALOR");
        }, 5000);

        setTimeout(() => {
            setContenido("OTRO-VALOR");
        }, 8000);
    }, []);

    useEffect(() => {
        console.log("SUPERIOR: renderizado NUEVAMENTE");
    });

    return (
        <div className="superior-container">
            <h2>SUPERIOR</h2>
            <p>Valor de contexto: <span>{ contenido }</span> </p>
        </div>
    )
}

export default Superior;