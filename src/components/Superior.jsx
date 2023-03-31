import React, { useEffect, useContext } from "react";
import { PruebaContext } from "../contexts/PruebaContext";
import "./styles.css";

const Superior = () => {

    const { contenido, setContenido } = useContext(PruebaContext);

    useEffect(() => {
        console.log("SUPERIOR: Primer renderizado");
        setTimeout(() => {
            setContenido("TIMEOUT");
        }, 5000);
    }, []);

    useEffect(() => {
        console.log("SUPERIOR: renderizado");
    });

    return (
        <div className="superior-container">
            <h2>SUPERIOR</h2>
            <p>Valor de contexto: <span>{ contenido }</span> </p>
        </div>
    )
}

export default Superior;