import React, { useEffect, useContext } from "react";
import { PruebaContext } from "../contexts/PruebaContext";
import "./styles.css";

const Medio = () => {

    const {contenido} = useContext(PruebaContext);

    useEffect(() => {
        console.log("MEDIO: Primer renderizado");
    }, []);

    useEffect(() => {
        console.log("MEDIO: renderizado");
    });

    return (
        <div className="medio-container">
            <h2>MEDIO</h2>
            <p>Valor de contexto: <span>{ contenido }</span> </p>
        </div>
    )
}

export default Medio;