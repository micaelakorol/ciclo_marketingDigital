import React from "react";
import Presentacion from "./Presentacion/Presentacion";
import Servicios from "./Servicios/Servicios";
import Footer from "./PiePagina/Footer";
import Contenido from "./Contenido/Contenido";
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
