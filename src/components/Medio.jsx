import React, { useEffect, useContext } from "react";
import { PruebaContext } from "../contexts/PruebaContext";
import "./styles.css";

const Medio = () => {

    // Se obtiene SOLO un valor definido en 'value' en el Provider
    const { contenido } = useContext(PruebaContext);

    useEffect(() => {
        console.log("MEDIO: PRIMER renderizado");
    }, []);

    useEffect(() => {
        console.log("MEDIO: renderizado NUEVAMENTE");
    });

    return (
        <div className="medio-container">
            <h2>MEDIO</h2>
            <p>Valor de contexto: <span>{ contenido }</span> </p>
        </div>
    )
}

export default Medio;