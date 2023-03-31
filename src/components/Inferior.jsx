import React, { useEffect, useContext } from "react";
import { PruebaContext } from "../contexts/PruebaContext";
import "./styles.css";

const Inferior = () => {

    const valorContexto = useContext(PruebaContext);

    useEffect(() => {
        console.log("INFERIOR: Primer renderizado");
    }, []);

    useEffect(() => {
        console.log("INFERIOR: renderizado");
    });

    return (
        <div className="inferior-container">
            <h2>INFERIOR</h2>
            <p>Valor de contexto: <span>{ valorContexto }</span> </p>
        </div>
    )
}

export default Inferior;