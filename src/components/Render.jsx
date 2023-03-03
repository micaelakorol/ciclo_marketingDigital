import React from "react";
import Presentacion from "./Presentacion/Presentacion";
import Servicios from "./Servicios/Servicios";
import Footer from "./Footer/Footer";
import Contenido from "./Contenido/Contenido";
//Página principal:
const Render = () => {
  return (
    <>
      <Presentacion />
      <Servicios />
      <Contenido />
      <Footer />
    </>
  );
};

export default Render;
