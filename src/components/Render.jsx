import React from "react";
import Presentacion from "./Presentacion/Presentacion";
import Servicios from "./Servicios/Servicios";
import Footer from "./Footer/Footer";
import Contenido from "./Contenido/Contenido";
import Banner from "./BannerCookies/Banner";
//Página principal:
const Render = () => {
  return (
    <>
      <Banner />
      <Presentacion />
      <Servicios />
      {/* Planes y precios */}
      <Contenido />
      <Footer />
    </>
  );
};

export default Render;
