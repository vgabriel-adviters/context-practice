import React, { useState, useContext } from "react";
import Superior from './components/Superior';
import Medio from './components/Medio';
import Inferior from './components/Inferior';
import { PruebaContext } from "./contexts/PruebaContext";
import './App.css';

function App() {

  const [contenido, setContenido] = useState(useContext(PruebaContext));

  return (
    <>
      {/* Superior y Medio accede al valor obtenido del contexto en App y pueden modificarlo gracias al Provider */}
      <PruebaContext.Provider value={{ contenido, setContenido }}>
        <Superior />
        <Medio />
      </PruebaContext.Provider>
      {/* Inferior puede obtener el valor por default del contexto y no se entera si fue modificado */}
      <Inferior />
    </>
  );
}

export default App;
