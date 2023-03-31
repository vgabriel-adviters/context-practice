import React, { useState, useContext } from "react";
import { PruebaContext } from "./contexts/PruebaContext";
import './App.css';
import Inferior from './components/Inferior';
import Medio from './components/Medio';
import Superior from './components/Superior';

function App() {
  const [contenido, setContenido] = useState(useContext(PruebaContext));

  return (
    <>
      <PruebaContext.Provider value={{ contenido, setContenido }}>
        <Superior />
        <Medio />
      </PruebaContext.Provider>
      <Inferior />
    </>
  );
}

export default App;
